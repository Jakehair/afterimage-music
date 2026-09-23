// Web Audio API ambient tone & chord generator for showreel preview
// Provides instantaneous musical playback even before custom WAV/MP3 files are uploaded.

class AmbientSoundEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private intervalId: number | null = null;
  private currentGain: GainNode | null = null;
  private onTimeUpdateCallback: ((time: number) => void) | null = null;
  private playbackSeconds = 0;
  private timerId: number | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a soft piano/sine chord note
  private playNote(freq: number, duration: number, timeOffset: number, type: OscillatorType = 'sine', decay: number = 2.0) {
    if (!this.ctx || !this.currentGain) return;
    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + timeOffset);

    // Warm envelope
    const startTime = this.ctx.currentTime + timeOffset;
    noteGain.gain.setValueAtTime(0.001, startTime);
    noteGain.gain.exponentialRampToValueAtTime(0.2, startTime + 0.05);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + Math.min(duration, decay));

    osc.connect(noteGain);
    noteGain.connect(this.currentGain);

    osc.start(startTime);
    osc.stop(startTime + duration);
  }

  playTrack(trackType: string, onTimeUpdate: (time: number) => void) {
    this.stop();
    this.initContext();
    if (!this.ctx) return;

    this.isPlaying = true;
    this.playbackSeconds = 0;
    this.onTimeUpdateCallback = onTimeUpdate;

    const masterGain = this.ctx.createGain();
    masterGain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    masterGain.connect(this.ctx.destination);
    this.currentGain = masterGain;

    // Timer loop for progress bar
    this.timerId = window.setInterval(() => {
      this.playbackSeconds += 0.25;
      if (this.onTimeUpdateCallback) {
        this.onTimeUpdateCallback(this.playbackSeconds);
      }
    }, 250);

    // Musical chord progressions based on track genre
    let chordIndex = 0;

    const chordsByGenre: Record<string, number[][]> = {
      cinematic: [
        [146.83, 220.0, 261.63, 329.63], // Dm9
        [116.54, 174.61, 233.08, 349.23], // Bbmaj7
        [130.81, 196.0, 261.63, 329.63], // C add9
        [110.0, 164.81, 220.0, 293.66],  // Am7
      ],
      game: [
        [130.81, 196.0, 311.13, 392.0],  // Cm (mysterious)
        [116.54, 174.61, 261.63, 349.23], // Fm/Ab
        [98.0, 146.83, 233.08, 293.66],   // Gm
        [123.47, 185.0, 277.18, 369.99], // Bbm
      ],
      piano: [
        [138.59, 207.65, 277.18, 329.63, 415.3], // C#m classical arpeggio
        [110.0, 164.81, 220.0, 277.18, 329.63],  // A major
        [123.47, 185.0, 246.94, 311.13, 369.99], // B major
        [103.83, 155.56, 207.65, 277.18, 329.63], // G#m
      ],
      electronic: [
        [110.0, 220.0, 277.18, 329.63], // A synth bass
        [98.0, 196.0, 246.94, 293.66],   // G synth bass
        [87.31, 174.61, 220.0, 261.63],  // F synth bass
        [123.47, 246.94, 293.66, 369.99] // B synth bass
      ]
    };

    const chords = chordsByGenre[trackType] || chordsByGenre.cinematic;
    const soundType: OscillatorType = trackType === 'piano' ? 'triangle' : trackType === 'electronic' ? 'sawtooth' : 'sine';

    const triggerNextChord = () => {
      if (!this.isPlaying) return;
      const currentChord = chords[chordIndex % chords.length];
      chordIndex++;

      // Arpeggiate chord notes
      currentChord.forEach((freq, idx) => {
        this.playNote(freq, 3.8, idx * 0.18, soundType, trackType === 'piano' ? 2.5 : 4.0);
      });
    };

    // First trigger immediate
    triggerNextChord();
    // Subsequent triggers every 3.5 seconds
    this.intervalId = window.setInterval(triggerNextChord, 3500);
  }

  stop() {
    this.isPlaying = false;
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    if (this.currentGain && this.ctx) {
      this.currentGain.gain.setValueAtTime(0, this.ctx.currentTime);
      this.currentGain = null;
    }
    this.playbackSeconds = 0;
  }

  setVolume(volume: number) {
    if (this.currentGain && this.ctx) {
      this.currentGain.gain.setValueAtTime(Math.max(0, Math.min(1, volume)), this.ctx.currentTime);
    }
  }

  getIsPlaying() {
    return this.isPlaying;
  }
}

export const ambientSound = new AmbientSoundEngine();
