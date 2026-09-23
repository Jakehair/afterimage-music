import React from 'react';
import { Play, Clapperboard, GraduationCap, Sparkles, ArrowRight, Music2, Headphones } from 'lucide-react';
import { DevanPhotoCard } from './DevanPhotoCard';

interface HeroProps {
  onOpenContact: (mode?: 'scoring' | 'lessons') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Cinematic Gradients and Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-600/20 via-indigo-600/15 to-purple-600/10 rounded-full blur-[140px]" />
        <div className="absolute -top-10 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow / Badges */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs font-semibold text-cyan-300 shadow-inner backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Afterimage Sound • The Studio of Devan</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
            Where Cinematic Scoring Meets{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Classical Mastery
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Original music composition for films, video games, and visual media — backed by a deep foundation in classical piano performance and modern music technology instruction.
          </p>

          {/* Quick Hero CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#reel"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center gap-2 group"
            >
              <Play className="w-4 h-4 fill-slate-950 group-hover:scale-110 transition-transform" />
              Listen to Audio Showreel
            </a>
            <button
              onClick={() => onOpenContact('scoring')}
              className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-all flex items-center gap-2"
            >
              <Clapperboard className="w-4 h-4 text-cyan-400" />
              Commission a Score
            </button>
            <button
              onClick={() => onOpenContact('lessons')}
              className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-all flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              Book Lessons
            </button>
          </div>
        </div>

        {/* The Duality Showcase (Devan at the Piano & Devan at the Studio Desk) */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              The Dual Spectrum
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Two Worlds. One Musical Vision.
            </h2>
            <p className="text-sm text-slate-400 max-w-xl mx-auto mt-2">
              From the delicate resonance of a concert grand to the pulse of analog synthesizers and multi-track film cues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* World 1: Film Composing & Music Tech */}
            <div className="flex flex-col space-y-4">
              <DevanPhotoCard
                type="studio"
                title="Devan at the Studio Desk"
                subtitle="Composition & Tech"
                badge="Film Scoring & Sound Design"
                description="Crafting bespoke cinematic themes, video game soundscapes, and digital orchestrations. Utilizing industry DAWs, modular synthesis, and virtual symphonies."
              />
              <div className="rounded-xl bg-slate-900/50 border border-slate-800 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Film &amp; Game Scoring</h4>
                    <p className="text-xs text-slate-400">Short films, indie games, animations &amp; videos</p>
                  </div>
                </div>
                <button
                  onClick={() => onOpenContact('scoring')}
                  className="px-3 py-1.5 text-xs font-semibold text-cyan-300 hover:text-white flex items-center gap-1 group"
                >
                  Inquire <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* World 2: Classical Piano Mastery & Lessons */}
            <div className="flex flex-col space-y-4">
              <DevanPhotoCard
                type="piano"
                title="Devan at the Piano"
                subtitle="Classical Mastery"
                badge="Piano & Tech Tutoring"
                description="Grounded in classical discipline, finger mechanics, and dynamic interpretation. Offering personalized piano lessons and technology skills tutoring for students of all levels."
              />
              <div className="rounded-xl bg-slate-900/50 border border-slate-800 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Music2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Piano &amp; Tech Lessons</h4>
                    <p className="text-xs text-slate-400">Classical repertoire, DAWs &amp; commercial skills</p>
                  </div>
                </div>
                <button
                  onClick={() => onOpenContact('lessons')}
                  className="px-3 py-1.5 text-xs font-semibold text-indigo-300 hover:text-white flex items-center gap-1 group"
                >
                  Book <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility / Highlights Strip */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-black text-white">Bespoke</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Custom Scores &amp; Cues</div>
          </div>
          <div>
            <div className="text-2xl font-black text-white">Hybrid</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Orchestral + Modular Synth</div>
          </div>
          <div>
            <div className="text-2xl font-black text-white">All Levels</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Beginners to Advanced</div>
          </div>
          <div>
            <div className="text-2xl font-black text-white">Studio &amp; Online</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Flexible Mentorship</div>
          </div>
        </div>
      </div>
    </section>
  );
};
