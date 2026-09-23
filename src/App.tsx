import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AudioReel } from './components/AudioReel';
import { FilmScoringSection } from './components/FilmScoringSection';
import { LessonsSection } from './components/LessonsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [contactMode, setContactMode] = useState<'scoring' | 'lessons'>('scoring');

  const handleOpenContact = (mode: 'scoring' | 'lessons' = 'scoring') => {
    setContactMode(mode);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero with Duality Showcase */}
        <Hero onOpenContact={handleOpenContact} />

        {/* Interactive Audio Reel */}
        <AudioReel onCommissionClick={() => handleOpenContact('scoring')} />

        {/* Film, Game & Media Composition */}
        <FilmScoringSection onOpenCommissionForm={() => handleOpenContact('scoring')} />

        {/* Piano & Music Technology Tutoring */}
        <LessonsSection onOpenLessonsForm={() => handleOpenContact('lessons')} />

        {/* The Story Behind Afterimage Sound */}
        <AboutSection />

        {/* Unified Contact / Booking Request Form */}
        <ContactSection initialMode={contactMode} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
