// src/utils/audioManager.js
export class AudioManager {
    constructor() {
      this.audio = new Audio();
      this.volume = 0.3;
      this.currentTrack = null;
    }
  
    async play(trackName) {
      try {
        const trackUrl = `/audio/${trackName}.mp3`;
        if (this.currentTrack === trackUrl) return;
  
        this.audio.src = trackUrl;
        this.audio.volume = this.volume;
        this.audio.loop = true;
        
        await this.audio.play();
        this.currentTrack = trackUrl;
      } catch (error) {
        console.error("Audio error:", error);
      }
    }
  
    pause() {
      this.audio.pause();
    }
  
    setVolume(level) {
      this.volume = Math.min(1, Math.max(0, level));
      this.audio.volume = this.volume;
    }
  }
  
  export const audioManager = new AudioManager();