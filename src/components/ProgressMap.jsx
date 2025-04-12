import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ProgressMap = ({ acts, currentAct, progressData, onSelectStage }) => {
  return (
    <div className="w-full flex flex-col gap-8 items-center mt-6">
      {acts.map((act, actIndex) => (
        <div key={act.id} className="w-full max-w-5xl">
          <div className="mb-2 text-sm tracking-widest uppercase text-purple-400 text-center">
            Act {act.id}
          </div>

          <div className="relative flex items-center justify-between px-4">
            {/* Linha da "linha de metrô" */}
            <div className="absolute top-1/2 left-4 right-4 h-1 bg-gray-600 z-0" />

            {act.stages.map((stage, stageIndex) => {
              const unlocked = progressData[act.id]?.includes(stageIndex);
              const isCurrent = act.id === currentAct && stageIndex === 0;
              return (
                <motion.div
                  key={stageIndex}
                  whileHover={{ scale: unlocked ? 1.1 : 1 }}
                  className="relative z-10 cursor-pointer"
                  onClick={() => unlocked && onSelectStage(act.id, stageIndex)}
                >
                  <div
                    className={`w-6 h-6 rounded-full border-2 transition-all duration-300
                      ${unlocked ? 'bg-purple-500 border-purple-300 hover:bg-purple-400' : 'bg-gray-800 border-gray-500 opacity-50'}
                    `}
                  />
                  <div className="text-xs text-center mt-2 text-gray-400 w-20 truncate">
                    {stage.title}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

ProgressMap.propTypes = {
  acts: PropTypes.array.isRequired,
  currentAct: PropTypes.number.isRequired,
  progressData: PropTypes.object.isRequired,
  onSelectStage: PropTypes.func.isRequired
};

export default ProgressMap;
