import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function FeedbackModal({ show, message, isCorrect, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/80 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={`p-8 rounded-lg text-center shadow-xl ${isCorrect ? "bg-green-700" : "bg-red-700"}`}>
            <p className="text-white text-lg mb-4">{message}</p>
            <button
              onClick={onClose}
              className="mt-2 px-4 py-2 bg-white text-gray-800 font-semibold rounded hover:bg-gray-200"
            >
              {isCorrect ? "Proceed to next station" : "Try again"}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FeedbackModal;
