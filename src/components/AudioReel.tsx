import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipForward, SkipBack, Sparkles, Disc, Radio } from 'lucide-react';
import { SHOWREEL_TRACKS, type Track } from '../data/tracks';
import { ambientSound } from '../utils/audioSynthesizer';

interface AudioReelProps {
  onCommissionClick: () => void;
}

export const AudioReel: React.FC<AudioReelProps> = ({ onCommissionClick }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTimeSec, setCurrentTimeSec] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);

  const activeTrack: Track = SHOWREEL_TRACKS[currentTrackIndex];

  // Stop sound if component unmounts
  useEffect(() => {
    return () => {
      ambientSound.stop();
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      ambientSound.stop();
      setIsPlaying(false);
    } else {
      ambientSound.playTrack(activeTrack.genre, (time) => {
        setCurrentTimeSec(Math.min(time, activeTrack.durationSec));
        if (time >= activeTrack.durationSec) {
          handleNextTrack();
        }
      });
      ambientSound.setVolume(isMuted ? 0 : volume);
      setIsPlaying(true);
    }
  };

  const handleSelectTrack = (index: number) => {
    if (index === currentTrackIndex && isPlaying) {
      togglePlay();
      return;
    }
    ambientSound.stop();
    setCurrentTrackIndex(index);
    setCurrentTimeSec(0);
    const selected = SHOWREEL_TRACKS[index];
    ambientSound.playTrack(selected.genre, (time) => {
      setCurrentTimeSec(Math.min(time, selected.durationSec));
      if (time >= selected.durationSec) {
        handleNextTrack();
      }
    });
    ambientSound.setVolume(isMuted ? 0 : volume);
    setIsPlaying(true);
  };

  const handleNextTrack = () => {
    const next = (currentTrackIndex + 1) % SHOWREEL_TRACKS.length;
    handleSelectTrack(next);
  };

  const handlePrevTrack = () => {
    const prev = (currentTrackIndex - 1 + SHOWREEL_TRACKS.length) % SHOWREEL_TRACKS.length;
    handleSelectTrack(prev);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (isMuted && val > 0) setIsMuted(false);
    ambientSound.setVolume(val);
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      ambientSound.setVolume(volume);
    } else {
      setIsMuted(true);
      ambientSound.setVolume(0);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progressPercent = Math.min(100, (currentTimeSec / activeTrack.durationSec) * 100);

  return (
    <section id="reel" className="py-20 md:py-28 relative bg-[#06070a] border-y border-slate-800/80">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span>Interactive Showreel &amp; Audio Preview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Selected Scores &amp; Performances
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Click play to audition sample motifs across film scoring, video games, solo classical piano, and electronic sound design.
          </p>
        </div>

        {/* Master Player Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Visualizer & Controller Box */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            {/* Active Track Header */}
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs uppercase tracking-widest font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full">
                {activeTrack.category}
              </span>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Disc className={`w-4 h-4 text-cyan-400 ${isPlaying ? 'animate-spin' : ''}`} />
                <span>{isPlaying ? 'Now Playing' : 'Ready'}</span>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeTrack.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {activeTrack.description}
              </p>
            </div>

            {/* Dynamic Animated Visualizer Bars */}
            <div className="my-8 h-20 bg-slate-950/90 rounded-xl border border-slate-800/80 px-4 py-3 flex items-center justify-between gap-1 sm:gap-1.5 overflow-hidden">
              {Array.from({ length: 32 }).map((_, i) => {
                const activeHeight = isPlaying
                  ? `${Math.max(15, Math.sin((i + currentTimeSec * 4) * 0.7) * 45 + 50)}%`
                  : '14%';
                return (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-cyan-500 via-indigo-500 to-purple-400 rounded-t-sm transition-all duration-150"
                    style={{
                      height: activeHeight,
                      opacity: isPlaying ? 0.85 : 0.25,
                    }}
                  />
                );
              })}
            </div>

            {/* Progress / Scrub Bar */}
            <div className="space-y-1.5">
              <div className="relative w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-200"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-xs font-mono text-slate-400">
                <span>{formatTime(currentTimeSec)}</span>
                <span>{activeTrack.duration}</span>
              </div>
            </div>

            {/* Controls Bar */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrevTrack}
                  className="p-2.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Previous Track"
                >
                  <SkipBack className="w-5 h-5" />
                </button>

                <button
                  onClick={togglePlay}
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:scale-105 transition-all"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-6 h-6 fill-slate-950" /> : <Play className="w-6 h-6 fill-slate-950 ml-1" />}
                </button>

                <button
                  onClick={handleNextTrack}
                  className="p-2.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Next Track"
                >
                  <SkipForward className="w-5 h-5" />
                </button>
              </div>

              {/* Volume Slider */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-20 sm:w-28 accent-cyan-400 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
                  aria-label="Volume Slider"
                />
              </div>

              {/* Commission CTA button */}
              <button
                onClick={onCommissionClick}
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900/50 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Inquire About Custom Music
              </button>
            </div>
          </div>

          {/* Playlist Track List */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-2 px-1">
              Select Audition Cue ({SHOWREEL_TRACKS.length})
            </h4>

            {SHOWREEL_TRACKS.map((track, idx) => {
              const isSelected = idx === currentTrackIndex;
              return (
                <div
                  key={track.id}
                  onClick={() => handleSelectTrack(idx)}
                  className={`cursor-pointer rounded-xl p-4 transition-all border ${
                    isSelected
                      ? 'bg-slate-800/90 border-cyan-500/60 shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-850 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs ${
                          isSelected
                            ? 'bg-cyan-500 text-slate-950'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {isSelected && isPlaying ? (
                          <div className="flex items-end gap-0.5 h-3.5">
                            <span className="w-1 bg-slate-950 h-full animate-bounce" />
                            <span className="w-1 bg-slate-950 h-2/3 animate-bounce [animation-delay:0.15s]" />
                            <span className="w-1 bg-slate-950 h-4/5 animate-bounce [animation-delay:0.3s]" />
                          </div>
                        ) : (
                          `0${idx + 1}`
                        )}
                      </div>
                      <div>
                        <h5 className={`text-sm font-bold ${isSelected ? 'text-cyan-300' : 'text-white'}`}>
                          {track.title}
                        </h5>
                        <span className="text-xs text-slate-400">{track.category}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400">{track.duration}</span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {track.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] rounded-md bg-slate-950/70 border border-slate-800 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-950/40 to-slate-900/60 border border-indigo-900/30 text-xs text-slate-300 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <span>
                <strong>Composer Note:</strong> Every score is bespoke. Audio samples above demonstrate stylistic range from live concert grand dynamics to synthesized hybrid cinematic cues.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
