import React from "react";
import { motion } from "framer-motion";

const StartScreen = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Glitch effect background layer */}
      <div className="absolute inset-0 bg-[url('/noise.gif')] bg-cover opacity-10 pointer-events-none" />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-widest text-purple-500 z-10 text-center"
      >
        TUNED TO DISSONANCE
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-4 max-w-xl text-center text-sm sm:text-base text-gray-400 italic z-10"
      >
        "You didn’t just listen — you tuned yourself to the dissonance."
      </motion.p>

      {/* Start Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={onStart}
        className="mt-10 px-6 py-3 bg-purple-700 hover:bg-purple-600 transition rounded-lg text-white text-sm font-medium z-10"
      >
        Start Experience
      </motion.button>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-4 text-xs text-gray-600 tracking-wide z-10"
      >
        A post-punk timeline through aesthetics and emotion
      </motion.div>
    </div>
  );
};

export default StartScreen;
