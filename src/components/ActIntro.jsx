import React from 'react';
import PropTypes from 'prop-types';

function ActIntro({ actNumber, stageNumber, setting, onContinue }) {
  return (
    <div className="fixed inset-0 bg-black/90 text-purple-200 flex flex-col items-center justify-center z-50 p-8">
      <h1 className="text-4xl font-bold text-purple-500 mb-4">
        ACT {actNumber} – STAGE {stageNumber}
      </h1>
      <p className="italic text-center max-w-xl mb-8">"{setting}"</p>
      <button
        onClick={onContinue}
        className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg text-white font-medium"
      >
        Enter Station
      </button>
    </div>
  );
}

ActIntro.propTypes = {
  actNumber: PropTypes.number.isRequired,
  stageNumber: PropTypes.number.isRequired,
  setting: PropTypes.string.isRequired,
  onContinue: PropTypes.func.isRequired
};

export default ActIntro;
