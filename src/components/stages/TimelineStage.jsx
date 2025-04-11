import React from 'react';
import PropTypes from 'prop-types';

const TimelineStage = ({ stage, userAnswers, handleTimelineDrop }) => {
  return (
    <div className="timeline-stage space-y-4">
      <h3 className="text-xl font-semibold text-purple-300">Arrange in chronological order:</h3>
      <div className="timeline-container bg-gray-800 p-4 rounded-lg">
        {userAnswers.length > 0 ? (
          <div className="timeline-items flex flex-wrap gap-2">
            {userAnswers.map((artist, index) => (
              <div 
                key={`timeline-${artist}-${index}`}
                className="timeline-item px-4 py-2 bg-purple-700 rounded-full"
              >
                {artist}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 italic">Drop artists here</p>
        )}
      </div>

      <div className="available-artists mt-6">
        <h4 className="text-lg font-medium text-gray-300 mb-3">Available Artists:</h4>
        <div className="flex flex-wrap gap-2">
          {stage.artists
            .filter(artist => !userAnswers.includes(artist))
            .map(artist => (
              <button
                key={`available-${artist}`}
                onClick={() => handleTimelineDrop(artist)}
                className="artist-item px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-full transition"
              >
                {artist}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

TimelineStage.propTypes = {
  stage: PropTypes.object.isRequired,
  userAnswers: PropTypes.array.isRequired,
  handleTimelineDrop: PropTypes.func.isRequired
};

export default TimelineStage;