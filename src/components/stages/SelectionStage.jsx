import React from 'react';
import PropTypes from 'prop-types';

const SelectionStage = ({ stage, selectedItems, handleSelection }) => {
  return (
    <div className="selection-stage">
      <h3 className="text-xl font-semibold text-purple-300 mb-4">
        Select {stage.selectionType === 'single' ? 'one' : 'multiple'} correct answer(s):
      </h3>
      
      <div className="options-grid grid grid-cols-1 md:grid-cols-2 gap-3">
        {stage.artists.map(artist => (
          <button
            key={`option-${artist}`}
            onClick={() => handleSelection(artist)}
            className={`option-item p-4 rounded-lg border transition ${
              selectedItems.includes(artist)
                ? 'bg-purple-700 border-purple-400'
                : 'bg-gray-700 border-gray-600 hover:bg-gray-600'
            }`}
          >
            {artist}
          </button>
        ))}
      </div>
    </div>
  );
};

SelectionStage.propTypes = {
  stage: PropTypes.object.isRequired,
  selectedItems: PropTypes.array.isRequired,
  handleSelection: PropTypes.func.isRequired
};

export default SelectionStage;