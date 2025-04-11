import { useEffect, useRef } from "react";

export default function AmbientSound({ src = "/audio/act1_ambient_loop.mp3", volume = 0.2 }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    audio.play().catch(err => {
      console.warn("Autoplay blocked or error:", err);
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [src, volume]);

  return null;
}
