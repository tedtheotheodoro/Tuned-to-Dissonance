import React from 'react';
import PropTypes from 'prop-types';

const PairsStage = ({ stage, userAnswers, selectedItems, handlePairSelection }) => {
  const isPaired = (artist) => {
    return userAnswers.some(pair => pair.includes(artist));
  };

  return (
    <div className="pairs-stage">
      <h3 className="text-xl font-semibold text-purple-300 mb-6">
        Create pairs by selecting two related items:
      </h3>

      <div className="pairs-container">
        <div className="available-items flex flex-wrap gap-3 mb-8">
          {stage.artists.map(artist => (
            <button
              key={`pair-option-${artist}`}
              onClick={() => !isPaired(artist) && handlePairSelection(artist)}
              disabled={isPaired(artist)}
              className={`px-5 py-3 rounded-lg border-2 transition ${
                selectedItems.includes(artist)
                  ? 'bg-purple-800 border-purple-400'
                  : isPaired(artist)
                    ? 'bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-700 border-gray-600 hover:bg-gray-600'
              }`}
            >
              {artist}
            </button>
          ))}
        </div>

        {userAnswers.length > 0 && (
          <div className="created-pairs mt-8">
            <h4 className="text-lg font-medium text-gray-300 mb-3">Created Pairs:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {userAnswers.map((pair, index) => (
                <div 
                  key={`pair-${index}`} 
                  className="pair-item bg-gray-800 p-4 rounded-lg border border-gray-700"
                >
                  <div className="flex justify-between">
                    <span>{pair[0]}</span>
                    <span className="text-purple-300 mx-2">↔</span>
                    <span>{pair[1]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

PairsStage.propTypes = {
  stage: PropTypes.object.isRequired,
  userAnswers: PropTypes.array.isRequired,
  selectedItems: PropTypes.array.isRequired,
  handlePairSelection: PropTypes.func.isRequired
};

export default PairsStage;