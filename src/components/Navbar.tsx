import React, { useState, useEffect } from 'react';
import { Menu, X, Play, Music, Clapperboard, GraduationCap, Send } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (mode?: 'scoring' | 'lessons') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Audio Reel', href: '#reel', icon: Play },
    { name: 'Film & Games', href: '#scoring', icon: Clapperboard },
    { name: 'Piano & Tech', href: '#lessons', icon: GraduationCap },
    { name: 'About Devan', href: '#about', icon: Music },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090a0f]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
              <div className="w-full h-full bg-[#090a0f] rounded-xl flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-black text-xl tracking-tighter">
                  A
                </span>
              </div>
            </div>
            <div>
              <span className="block text-lg font-extrabold tracking-wider text-white uppercase group-hover:text-cyan-400 transition-colors">
                Afterimage Sound
              </span>
              <span className="block text-[11px] font-medium tracking-widest text-slate-400 uppercase">
                Devan • Film Scoring &amp; Mentorship
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Direct Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenContact('scoring')}
              className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 border border-cyan-500/40 hover:bg-cyan-950/40 rounded-lg transition-all flex items-center gap-1.5"
            >
              <Clapperboard className="w-3.5 h-3.5" />
              Score a Project
            </button>
            <button
              onClick={() => onOpenContact('lessons')}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 hover:from-cyan-300 hover:to-indigo-200 rounded-lg shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all flex items-center gap-1.5"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              Request Lessons
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0e17]/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800/80 hover:text-cyan-400 transition-colors"
                >
                  <Icon className="w-5 h-5 text-slate-400" />
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact('scoring');
              }}
              className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 border border-cyan-500/40 bg-cyan-950/20 rounded-lg text-center"
            >
              Film Scoring
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact('lessons');
              }}
              className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg text-center flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              Book Lessons
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
