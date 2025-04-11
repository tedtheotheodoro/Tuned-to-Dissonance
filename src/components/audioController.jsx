// src/components/AudioController.jsx
import { useEffect } from 'react';
import { audioManager } from './utils/audioManager';

export default function AudioController({ trackName }) {
  useEffect(() => {
    if (trackName) {
      audioManager.play(trackName);
    }
    return () => audioManager.pause();
  }, [trackName]);

  return null;
}
