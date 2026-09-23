import React from 'react';
import { GraduationCap, Piano, Cpu, Video, MapPin, CheckCircle, ArrowRight, Clock } from 'lucide-react';

interface LessonsSectionProps {
  onOpenLessonsForm: () => void;
}

export const LessonsSection: React.FC<LessonsSectionProps> = ({ onOpenLessonsForm }) => {
  const tracks = [
    {
      icon: Piano,
      badge: 'Classical Performance',
      title: 'Classical Piano Instruction',
      description: 'Rigorous, patient instruction designed to build expressive technique, artistic interpretation, and lasting musical literacy.',
      curriculum: [
        'Proper hand mechanics, relaxation & tone production',
        'Repertoire from Baroque & Classical to Romantic & 20th Century',
        'Sight-reading fluency & comprehensive music theory',
        'Audition, competition & recital preparation',
      ],
      idealFor: 'Beginners, intermediate students, and advanced pianists looking to refine technique.',
      color: 'from-amber-400 to-orange-500',
    },
    {
      icon: Cpu,
      badge: 'Music Production',
      title: 'Music Technology & DAW Tutoring',
      description: 'One-on-one coaching in modern music production, digital orchestration, sound design, and commercial composition skills.',
      curriculum: [
        'DAW workflows (Logic Pro, Ableton Live, Cubase)',
        'Virtual orchestral mockup & realistic MIDI humanization',
        'Synthesizer sound design (Wavetable, Subtractive, FM)',
        'Mixing foundations: EQ, compression, saturation & reverb',
      ],
      idealFor: 'Aspiring film composers, beatmakers, producers, and songwriters wanting professional polish.',
      color: 'from-cyan-400 to-indigo-500',
    },
  ];

  return (
    <section id="lessons" className="py-20 md:py-28 relative bg-[#06070a] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-xs font-semibold text-indigo-300 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
            <span>Private Lessons &amp; Production Mentorship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Learn Classical Piano &amp; Technological Music Skills
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Learn directly from an active composer and classically trained pianist. Tailored instruction designed around your goals, whether mastering Chopin or finishing your first electronic score.
          </p>
        </div>

        {/* The Two Learning Paths */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((track, idx) => {
            const Icon = track.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 sm:p-10 backdrop-blur-sm flex flex-col justify-between hover:border-indigo-500/40 transition-all shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-950/70 border border-indigo-500/30 flex items-center justify-center text-indigo-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {track.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-3">{track.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">{track.description}</p>

                  <div className="space-y-3 pt-4 border-t border-slate-800/80 mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                      Core Curriculum Highlights:
                    </span>
                    {track.curriculum.map((item, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-slate-400">
                    <span className="font-semibold text-slate-200 block">Who this is for:</span>
                    {track.idealFor}
                  </div>
                  <button
                    onClick={onOpenLessonsForm}
                    className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shrink-0"
                  >
                    Enroll Now <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Formats & Flexibility Box */}
        <div className="mt-16 rounded-2xl bg-slate-900/40 border border-slate-800 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-950/80 text-cyan-400 border border-cyan-500/20 shrink-0">
              <Video className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Online HD Lessons</h4>
              <p className="text-xs text-slate-300 mt-1">
                Multi-angle camera (overhead piano view + face) and direct pristine digital audio stream.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="p-3 rounded-xl bg-purple-950/80 text-purple-400 border border-purple-500/20 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">In-Studio Instruction</h4>
              <p className="text-xs text-slate-300 mt-1">
                Train on acoustic touch and professional studio equipment in a focused creative space.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-950/80 text-amber-400 border border-amber-500/20 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Flexible Scheduling</h4>
              <p className="text-xs text-slate-300 mt-1">
                Weekly 30, 45, or 60-minute sessions, with tailored practice blueprints between lessons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
