import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

function FeedbackModal({ visible, isCorrect, feedback, onClose }) {
  useEffect(() => {
    if (visible && isCorrect) {
      const timer = setTimeout(onClose, 1500);
      return () => clearTimeout(timer);
    }
  }, [visible, isCorrect, onClose]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className={`p-6 rounded-xl shadow-2xl max-w-md text-center ${
              isCorrect ? 'bg-green-700' : 'bg-red-700'
            }`}
          >
            <p className="text-white text-lg font-medium mb-4">{feedback}</p>
            {!isCorrect && (
              <button
                onClick={onClose}
                className="px-5 py-2 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition"
              >
                Try Again
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

FeedbackModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  feedback: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FeedbackModal;