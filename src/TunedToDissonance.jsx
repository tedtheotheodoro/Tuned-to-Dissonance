import React, { useState, useEffect, useReducer } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AudioController from './components/audioController.jsx';
import act1Stages from './components/data/act1Stages.js';
import act2Stages from './components/data/act2Stages.js';
import act3Stages from './components/data/act3Stages.js';
import act4Stages from './components/data/act4Stages.js';
import act5Stages from './components/data/act5Stages.js';
import TimelineStage from './components/stages/TimelineStage';
import SelectionStage from './components/stages/SelectionStage';
import PairsStage from './components/stages/PairsStage';
import CategorizationStage from './components/stages/CategorizationStage';
import CreativeStage from './components/stages/CreativeStage';
import StartScreen from './components/StartScreen';
import ProgressMap from './components/ProgressMap';
import ActIntro from './components/ActIntro';
import FeedbackModal from './components/FeedbackModal';
import { getProgress, updateProgress } from './components/services/progressService';
import { auth } from './components/firebase';
import { stageReducer, initialState } from './stageReducer';

const StageTypes = {
  timeline: TimelineStage,
  selection: SelectionStage,
  pairs: PairsStage,
  categorization: CategorizationStage,
  'creative-composition': CreativeStage
};

const allActs = {
  1: act1Stages,
  2: act2Stages,
  3: act3Stages,
  4: act4Stages,
  5: act5Stages
};

function TunedToDissonance() {
  const [currentAct, setCurrentAct] = useState(1);
  const [currentStage, setCurrentStage] = useState(0);
  const [screen, setScreen] = useState('start');
  const [isMuted, setIsMuted] = useState(false);
  const [uid, setUid] = useState(null);

  const [state, dispatch] = useReducer(stageReducer, {
    ...initialState,
    progressData: {
      1: [0],
      2: [],
      3: [],
      4: [],
      5: []
    }
  });

  const stages = allActs[currentAct];
  const stage = stages[currentStage];
  const isLastStage = currentStage === stages.length - 1;
  const progress = ((currentStage + 1) / stages.length) * 100;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUid(user.uid);
        const userProgress = await getProgress(user.uid);
        dispatch({ type: 'SET_PROGRESS', payload: userProgress });
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (stage && stage.artists) {
      dispatch({ type: 'RESET_STAGE', artists: stage.artists });
    }
  }, [currentStage, currentAct, stage]);

  const handleStageSelect = (actId, stageIndex) => {
    const isFirstStage = stageIndex === 0;
    const prevStageCompleted = state.progressData[actId]?.includes(stageIndex - 1);
    const isUnlocked = isFirstStage || prevStageCompleted;
    
    if (isUnlocked) {
      setCurrentAct(actId);
      setCurrentStage(stageIndex);
      setScreen('intro');
    } else {
      dispatch({ 
        type: 'SET_FEEDBACK', 
        payload: { 
          isCorrect: false, 
          feedback: 'Complete the previous stage first!', 
          showFeedback: true 
        } 
      });
    }
  };

  const checkAnswers = () => {
    if (!stage || !state.userAnswers) return;
    let correct = false;

    switch (stage.type) {
      case 'timeline':
        correct = arraysEqual(
          Array.isArray(state.userAnswers) ? state.userAnswers : [],
          Array.isArray(stage.correctOrder) ? stage.correctOrder : []
        );
        break;
      case 'selection':
        correct = (
          Array.isArray(state.selectedItems) &&
          Array.isArray(stage.correctAnswers) &&
          state.selectedItems.length === stage.correctAnswers.length &&
          stage.correctAnswers.every((item) => state.selectedItems.includes(item))
        );
        break;
      case 'pairs':
        const userPairs = Array.isArray(state.userAnswers) ? state.userAnswers.map(pair => Array.isArray(pair) ? pair.sort().join(',') : '') : [];
        const correctPairs = Array.isArray(stage.correctPairs) ? stage.correctPairs.map(pair => Array.isArray(pair) ? pair.sort().join(',') : '') : [];
        correct = (
          userPairs.length === correctPairs.length &&
          correctPairs.every(pair => userPairs.includes(pair))
        );
        break;
      case 'categorization':
        correct = Object.keys(stage.categories || {}).every((category) =>
          (stage.categories[category] || []).every((artist) => 
            state.userAnswers[artist] === category)
        );
        break;
      default:
        correct = false;
    }

    const feedback = correct ? (stage.feedback || 'Correct!') : 'Not quite. Listen closer to the dissonance.';
    dispatch({ type: 'SET_FEEDBACK', payload: { isCorrect: correct, feedback, showFeedback: true } });

    if (correct) {
      if (uid) updateProgress(uid, currentAct, currentStage + 1);

      setTimeout(() => {
        dispatch({ type: 'CLEAR_FEEDBACK' });

        if (!isLastStage) {
          setTimeout(() => {
            setCurrentStage(prev => prev + 1);
            setScreen('intro');
          }, 500);
        } else if (currentAct < 5) {
          const nextAct = currentAct + 1;
          if (!state.progressData[nextAct]?.includes(0)) {
            const updated = { ...state.progressData, [nextAct]: [0] };
            dispatch({ type: 'SET_PROGRESS', payload: updated });
            if (uid) updateProgress(uid, nextAct, 0);
          }
          setTimeout(() => {
            setScreen('map');
          }, 500);
        }
      }, 1500);
    }
  };

  const renderStageContent = () => {
    if (!stage) return <div>Loading stage...</div>;
    
    const StageComponent = StageTypes[stage.type] || (() => <div>Unknown stage type</div>);
    const commonProps = {
      stage,
      userAnswers: state.userAnswers,
      selectedItems: state.selectedItems,
      availableArtists: state.availableArtists
    };

    switch (stage.type) {
      case 'timeline':
        return <StageComponent {...commonProps} handleTimelineDrop={(artist) => 
          dispatch({ type: 'ADD_TO_TIMELINE', artist })} />;
      case 'selection':
        return <StageComponent {...commonProps} handleSelection={(artist) => 
          dispatch({ type: 'TOGGLE_SELECTION', item: artist })} />;
      case 'pairs':
        return <StageComponent {...commonProps} handlePairSelection={(artist) => {
          if (state.selectedItems.length === 0) {
            dispatch({ type: 'TOGGLE_SELECTION', item: artist });
          } else if (state.selectedItems.length === 1) {
            const newPair = [...state.selectedItems, artist].sort();
            dispatch({ type: 'ADD_PAIR', pair: newPair });
          }
        }} />;
      case 'categorization':
        return <StageComponent {...commonProps} onDragEnd={(result) => {
          if (!result.destination) return;
          dispatch({ 
            type: 'UPDATE_CATEGORIZATION', 
            artist: result.draggableId, 
            category: result.destination.droppableId 
          });
        }} />;
      default:
        return <StageComponent {...commonProps} />;
    }
  };

  useEffect(() => {
    return () => {
      const audioElements = document.querySelectorAll('audio');
      audioElements.forEach(audio => audio.pause());
    };
  }, [screen]);

  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col items-center p-8">
      {screen === 'start' && <StartScreen onStart={() => setScreen('map')} />}

      {screen === 'map' && (
        <>
          <p className="text-purple-300 text-lg mb-4">Click on the first stage to start your journey.</p>
          <ProgressMap
            acts={[
              { id: 1, stages: act1Stages },
              { id: 2, stages: act2Stages },
              { id: 3, stages: act3Stages },
              { id: 4, stages: act4Stages },
              { id: 5, stages: act5Stages }
            ]}
            currentAct={currentAct}
            progressData={state.progressData}
            onSelectStage={handleStageSelect}
          />
        </>
      )}

      {screen === 'intro' && (
        <ActIntro
          actNumber={currentAct}
          stageNumber={currentStage + 1}
          setting={stage.setting}
          onContinue={() => setScreen('stage')}
        />
      )}

      {screen === 'stage' && stage && (
        <>
          <AudioController trackName={stage.audioTrack} isMuted={isMuted} />

          <div className="w-full max-w-6xl bg-gray-800 rounded-t-xl p-1 mt-6">
            <div
              className="bg-purple-500 h-1 rounded-full"
              style={{ width: `${progress}%` }}
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentAct}-${currentStage}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-6xl bg-gray-800 rounded-b-xl p-8 shadow-2xl"
            >
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-purple-400 mb-2">
                  ACT {currentAct} – {stage.title.toUpperCase()}
                </h1>
                <p className="text-purple-200 italic mb-4">"{stage.setting}"</p>
                <p className="text-gray-300">{stage.description}</p>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-6 mb-8">
                {renderStageContent()}
              </div>

              <div className="flex justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gray-600 hover:bg-gray-500 rounded-lg font-medium"
                  onClick={() => dispatch({ type: 'RESET_STAGE', artists: stage.artists })}
                >
                  Reset Stage
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg font-medium"
                  onClick={checkAnswers}
                >
                  {isLastStage ? 'Complete Act' : 'Check Connection'}
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          <FeedbackModal
            visible={state.showFeedback}
            isCorrect={state.isCorrect}
            feedback={state.feedback}
            onClose={() => dispatch({ type: 'CLEAR_FEEDBACK' })}
          />
        </>
      )}
    </div>
  );
}

function arraysEqual(a, b) {
  return Array.isArray(a) && Array.isArray(b) && 
         a.length === b.length && 
         a.every((val, i) => val === b[i]);
}

export default TunedToDissonance;