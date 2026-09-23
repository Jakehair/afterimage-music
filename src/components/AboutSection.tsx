import React from 'react';
import { Music, Heart, CheckCircle2 } from 'lucide-react';
import { DevanPhotoCard } from './DevanPhotoCard';

export const AboutSection: React.FC = () => {
  const tools = [
    'Logic Pro & Ableton Live',
    '88-Key Weighted Hammer Action',
    'Spitfire Audio & Orchestral Tools',
    'Analog & Wavetable Synthesizers',
    'Universal Audio (UAD) & FabFilter DSP',
    'Custom Studio Monitoring & Acoustic Treatment',
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#090a0f] border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: The Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-cyan-300">
              <Music className="w-3.5 h-3.5 text-cyan-400" />
              <span>About Devan &amp; The Studio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              An Afterimage of Sound That Lingers
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                In optics, an <span className="text-cyan-300 font-semibold">afterimage</span> is a visual impression that continues to appear in one's vision even after exposure to the original stimulus has ceased.
              </p>
              <p>
                <strong>Afterimage Sound</strong> was founded on that same musical principle: creating thematic scores and melodic ideas so poignant that they linger in the listener’s memory long after the credits roll or the piano lid closes.
              </p>
              <p>
                Devan began his musical journey through classical piano, cultivating touch sensitivity, strict harmonic discipline, and a deep appreciation for acoustic expression. As digital music technology revolutionized film and media scoring, he merged his classical roots with modern audio production — mastering DAWs, synthesizer architecture, and hybrid orchestration.
              </p>
              <p>
                Today, Devan splits his creative energy between scoring visual projects (short films, games, animations) and empowering the next generation through private piano lessons and music technology mentorship.
              </p>
            </div>

            {/* Studio Tools & Technologies */}
            <div className="pt-4 border-t border-slate-800">
              <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-3">
                Studio Gear &amp; Production Stack
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {tools.map((tool, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Twin Visual Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <DevanPhotoCard
                type="piano"
                title="Acoustic Roots"
                subtitle="Classical Discipline"
                badge="Piano Instruction"
                description="Devan at the piano — teaching classical repertoire, phrasing, and the art of touch."
              />

              <DevanPhotoCard
                type="studio"
                title="Digital Frontiers"
                subtitle="Media Production"
                badge="Film Scoring & Tech"
                description="Devan at his studio workstation — scoring films, engineering sounds, and producing modern cues."
              />
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950/40 border border-slate-800 p-5 text-xs text-slate-300 flex items-center gap-3">
              <Heart className="w-5 h-5 text-rose-400 shrink-0" />
              <span>
                <strong>Brother Note:</strong> This site is built to showcase both sides of Devan's talents. Images above have dedicated slots ready for Devan's high-res studio photos!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
