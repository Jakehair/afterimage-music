import React from 'react';
import { Film, Gamepad2, Tv, CheckCircle2, Send } from 'lucide-react';

interface FilmScoringSectionProps {
  onOpenCommissionForm: () => void;
}

export const FilmScoringSection: React.FC<FilmScoringSectionProps> = ({ onOpenCommissionForm }) => {
  const services = [
    {
      icon: Film,
      title: 'Short Films & Indie Features',
      description: 'Thematic character leitmotifs, acoustic and hybrid orchestral scoring tailored specifically to picture locked edits.',
      points: ['Emotional arc mapping', 'Bespoke orchestral textures', 'Director spotting sessions'],
    },
    {
      icon: Gamepad2,
      title: 'Video Games & Interactive Media',
      description: 'Atmospheric immersion, exploration cues, battle themes, and seamless loopable stems ready for FMOD or Wwise integration.',
      points: ['Adaptive multi-layered cues', 'Sci-fi, fantasy, and indie genres', 'Interactive audio design'],
    },
    {
      icon: Tv,
      title: 'Trailers, Animation & Commercials',
      description: 'High-impact rhythmic drives, tension builds, and punchy audio signatures designed to hook viewers in seconds.',
      points: ['Hit points synchronized to cuts', 'Modern sound design & riser elements', 'Fast turnarounds for tight deadlines'],
    },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Spotting & Vision',
      desc: 'We review your rough cut or game concept, discuss tone, reference music, and pinpoint emotional inflection points.',
    },
    {
      step: '02',
      title: 'Mockups & Drafts',
      desc: 'Devan produces initial piano sketches and MIDI mockups so you can audition themes directly against picture.',
    },
    {
      step: '03',
      title: 'Refinement & Polish',
      desc: 'Collaborative feedback cycles to fine-tune transitions, dynamic swells, and sound design layers.',
    },
    {
      step: '04',
      title: 'Master Stems Delivery',
      desc: 'Full 24-bit 48kHz WAV audio files, separated stems (strings, percussion, synths), and cue sheets ready for final dub.',
    },
  ];

  return (
    <section id="scoring" className="py-20 md:py-28 relative overflow-hidden bg-[#090a0f]">
      {/* Background accents */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-3">
            <Film className="w-3.5 h-3.5 text-cyan-400" />
            <span>Film, Game &amp; Media Composition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Original Scores That Resonate Beyond the Screen
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Whether scoring an intimate drama, an exhilarating indie video game, or a sharp commercial, Devan composes music that breathes life into story and characters.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-sm flex flex-col justify-between hover:border-cyan-500/40 transition-colors group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">{item.description}</p>
                </div>

                <div className="pt-6 border-t border-slate-800/80 space-y-2.5">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* The 4-Step Collaborative Workflow */}
        <div className="mt-20 rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-12 relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              The Creative Pipeline
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              How We Bring Your Vision to Life
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              A transparent, director-friendly scoring workflow designed to hit deadlines without compromising creative nuance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((ws, i) => (
              <div key={i} className="relative p-5 rounded-xl bg-slate-900/70 border border-slate-800/80">
                <span className="text-3xl font-black text-cyan-500/40 block font-mono">{ws.step}</span>
                <h4 className="text-base font-bold text-white mt-2 mb-1">{ws.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{ws.desc}</p>
              </div>
            ))}
          </div>

          {/* Commission Callout CTA */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-white">Have a project currently in production?</h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Share your script, mood board, or rough cut for a complimentary spotting consultation and quote.
              </p>
            </div>
            <button
              onClick={onOpenCommissionForm}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2 shrink-0"
            >
              <Send className="w-4 h-4" />
              Request a Scoring Commission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
