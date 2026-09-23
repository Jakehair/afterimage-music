import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Film, GraduationCap, Mail } from 'lucide-react';

interface ContactSectionProps {
  initialMode?: 'scoring' | 'lessons';
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialMode = 'scoring' }) => {
  const [activeTab, setActiveTab] = useState<'scoring' | 'lessons'>(initialMode);
  const [submitted, setSubmitted] = useState(false);

  // Scoring Form State
  const [scoringData, setScoringData] = useState({
    name: '',
    email: '',
    projectType: 'Short Film',
    timeline: '',
    budget: '$500 - $1,500',
    referenceTrack: '',
    message: '',
  });

  // Lessons Form State
  const [lessonsData, setLessonsData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Both Piano & Music Tech',
    level: 'Beginner',
    format: 'Online HD Video',
    goals: '',
  });

  useEffect(() => {
    if (initialMode) {
      setActiveTab(initialMode);
    }
  }, [initialMode]);

  const handleScoringSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleLessonsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#06070a] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-3">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Inquiries &amp; Bookings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Connect With Devan
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Choose whether you're inquiring about an original score for your visual project or scheduling private piano &amp; music tech lessons.
          </p>

          {/* Mode Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
            <button
              onClick={() => {
                setActiveTab('scoring');
                setSubmitted(false);
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'scoring'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Film className="w-4 h-4" />
              Score a Film / Game
            </button>
            <button
              onClick={() => {
                setActiveTab('lessons');
                setSubmitted(false);
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'lessons'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              Book Piano &amp; Tech Lessons
            </button>
          </div>
        </div>

        {/* Form Container */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you for reaching out to <strong>Afterimage Sound</strong>. Devan will review your request and reply to your email within 24–48 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold uppercase tracking-wider text-slate-200 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : activeTab === 'scoring' ? (
            /* Film / Game Scoring Commission Form */
            <form onSubmit={handleScoringSubmit} className="space-y-6">
              <div className="border-b border-slate-800 pb-4 mb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Film className="w-5 h-5 text-cyan-400" />
                  Film, Video &amp; Game Scoring Commission
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Tell us about your project, target aesthetic, and schedule.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Your Name / Production Studio *
                  </label>
                  <input
                    type="text"
                    required
                    value={scoringData.name}
                    onChange={(e) => setScoringData({ ...scoringData, name: e.target.value })}
                    placeholder="e.g. Maya Lin (Solstice Pictures)"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={scoringData.email}
                    onChange={(e) => setScoringData({ ...scoringData, email: e.target.value })}
                    placeholder="director@studio.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Project Type
                  </label>
                  <select
                    value={scoringData.projectType}
                    onChange={(e) => setScoringData({ ...scoringData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none"
                  >
                    <option>Short Film</option>
                    <option>Feature Film</option>
                    <option>Video Game</option>
                    <option>Commercial / Trailer</option>
                    <option>Animation / Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Target Delivery Date
                  </label>
                  <input
                    type="text"
                    value={scoringData.timeline}
                    onChange={(e) => setScoringData({ ...scoringData, timeline: e.target.value })}
                    placeholder="e.g. Next Month / Q4"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Estimated Music Budget
                  </label>
                  <select
                    value={scoringData.budget}
                    onChange={(e) => setScoringData({ ...scoringData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none"
                  >
                    <option>&lt; $500 (Indie / Student)</option>
                    <option>$500 - $1,500</option>
                    <option>$1,500 - $5,000</option>
                    <option>$5,000+ (Full Feature / Production)</option>
                    <option>Flexible / To Discuss</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Musical References or Links (Optional)
                </label>
                <input
                  type="text"
                  value={scoringData.referenceTrack}
                  onChange={(e) => setScoringData({ ...scoringData, referenceTrack: e.target.value })}
                  placeholder="e.g. Trent Reznor, Hans Zimmer, or Vimeo/YouTube private link"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Project Synopsis &amp; Musical Needs *
                </label>
                <textarea
                  required
                  rows={4}
                  value={scoringData.message}
                  onChange={(e) => setScoringData({ ...scoringData, message: e.target.value })}
                  placeholder="Describe your story, emotional tone, approximate minutes of score required..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Submit Scoring Commission Request
              </button>
            </form>
          ) : (
            /* Piano & Music Tech Lessons Form */
            <form onSubmit={handleLessonsSubmit} className="space-y-6">
              <div className="border-b border-slate-800 pb-4 mb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-indigo-400" />
                  Piano Lessons &amp; Music Technology Mentorship
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Private instruction for piano technique, DAW production, and commercial skills.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Student or Parent Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={lessonsData.name}
                    onChange={(e) => setLessonsData({ ...lessonsData, name: e.target.value })}
                    placeholder="e.g. Jordan Scott"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-indigo-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={lessonsData.email}
                    onChange={(e) => setLessonsData({ ...lessonsData, email: e.target.value })}
                    placeholder="jordan@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-indigo-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Subject Focus
                  </label>
                  <select
                    value={lessonsData.interest}
                    onChange={(e) => setLessonsData({ ...lessonsData, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-indigo-400 focus:outline-none"
                  >
                    <option>Classical Piano Only</option>
                    <option>Music Tech / DAW Only</option>
                    <option>Both Piano &amp; Music Tech</option>
                    <option>Film Scoring Tutoring</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Current Experience Level
                  </label>
                  <select
                    value={lessonsData.level}
                    onChange={(e) => setLessonsData({ ...lessonsData, level: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-indigo-400 focus:outline-none"
                  >
                    <option>Complete Beginner (No prior experience)</option>
                    <option>Early Intermediate (Some reading/scales)</option>
                    <option>Late Intermediate / Advanced</option>
                    <option>Professional / College Prep</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Preferred Format
                  </label>
                  <select
                    value={lessonsData.format}
                    onChange={(e) => setLessonsData({ ...lessonsData, format: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-indigo-400 focus:outline-none"
                  >
                    <option>Online HD Video (Multi-cam)</option>
                    <option>In-Studio Private</option>
                    <option>Either / Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  Student Musical Goals &amp; Questions *
                </label>
                <textarea
                  required
                  rows={4}
                  value={lessonsData.goals}
                  onChange={(e) => setLessonsData({ ...lessonsData, goals: e.target.value })}
                  placeholder="Tell Devan what you'd love to learn or accomplish (e.g. learning Beethoven Sonatas, getting started in Logic Pro, or producing your own tracks)..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-indigo-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Submit Lesson Booking Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
