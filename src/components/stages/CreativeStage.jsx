import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const CreativeStage = ({ stage }) => {
  const [selections, setSelections] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);

  const toggleTag = (profileName, tag) => {
    setSelections((prev) => {
      const currentTags = prev[profileName] || [];
      const newTags = currentTags.includes(tag)
        ? currentTags.filter((t) => t !== tag)
        : [...currentTags, tag];
      return { ...prev, [profileName]: newTags };
    });
  };

  const handleReveal = () => {
    setShowFeedback(true);
  };

  return (
    <div className="space-y-10">
      <h3 className="text-xl font-semibold text-purple-300 mb-2">
        {stage.description}
      </h3>

      {stage.profiles.map((profile) => (
        <div key={profile.name} className="p-6 bg-gray-800 rounded-xl border border-gray-700">
          <h4 className="text-lg font-medium mb-3 text-purple-200">{profile.name}</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {profile.options.map((tag) => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-1 rounded-full text-sm border ${
                  selections[profile.name]?.includes(tag)
                    ? "bg-purple-700 border-purple-400"
                    : "bg-gray-700 border-gray-600"
                }`}
                onClick={() => toggleTag(profile.name, tag)}
              >
                {tag}
              </motion.button>
            ))}
          </div>

          {showFeedback && (
            <div className="mt-2 text-sm italic text-gray-400">
              You’ve composed a speculative identity: <br />
              <span className="text-purple-300">
                {selections[profile.name]?.join(" + ") || "(no selection)"}
              </span>
            </div>
          )}
        </div>
      ))}

      <div className="flex justify-center mt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg font-medium"
          onClick={handleReveal}
        >
          Reveal Feedback
        </motion.button>
      </div>

      {showFeedback && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 p-4 bg-purple-900/30 border border-purple-700 rounded-lg text-center text-purple-200"
        >
          {stage.feedback}
        </motion.div>
      )}
    </div>
  );
};

CreativeStage.propTypes = {
  stage: PropTypes.object.isRequired
};

export default CreativeStage;
