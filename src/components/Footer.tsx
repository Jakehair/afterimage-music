import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-slate-900 py-16 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80 items-start">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-slate-950 font-black text-lg">
                A
              </div>
              <span className="text-xl font-black tracking-wider text-white uppercase">
                Afterimage Sound
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
              Bespoke original music for films, video games, and media — paired with dedicated instruction in classical piano and cutting-edge music technology.
            </p>
            <div className="flex items-center gap-2 text-xs text-cyan-400">
              <Mail className="w-3.5 h-3.5" />
              <span>Direct inquiries: devan@afterimagesound.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Explore</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#reel" className="hover:text-cyan-400 transition-colors">
                  Audio Showreel
                </a>
              </li>
              <li>
                <a href="#scoring" className="hover:text-cyan-400 transition-colors">
                  Film &amp; Game Scoring
                </a>
              </li>
              <li>
                <a href="#lessons" className="hover:text-cyan-400 transition-colors">
                  Piano &amp; Tech Lessons
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  About Devan
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Inquire &amp; Book
                </a>
              </li>
            </ul>
          </div>

          {/* Back to top & Info */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Studio Location</h4>
            <p className="text-xs text-slate-400">
              Private Studio Sessions &amp; Worldwide Remote Collaboration.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-800 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Afterimage Sound. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Built with care for Devan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
