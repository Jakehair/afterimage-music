import { useEffect, useState, type FormEvent } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, Pause, Play, X } from 'lucide-react';
import { ambientSound } from './utils/audioSynthesizer';
import { SHOWREEL_TRACKS } from './data/tracks';
import './App.css';

type InquiryMode = 'scoring' | 'lessons';
const base = import.meta.env.BASE_URL;

const services = [
  { number: '01', title: 'Film & moving image', text: 'Original themes, textures, and cues shaped around the emotional rhythm of a scene.', detail: 'Short film · Animation · Documentary' },
  { number: '02', title: 'Games & interactive', text: 'Music designed to support a world, with adaptable layers and room for the player to explore.', detail: 'Games · Immersive media · Sound worlds' },
  { number: '03', title: 'Sound & production', text: 'A considered mix of acoustic instruments, synthesis, and modern production for projects that need their own voice.', detail: 'Sound design · Production · Arrangement' },
];

function formatTime(seconds: number) {
  return Math.floor(seconds / 60) + ':' + String(Math.floor(seconds % 60)).padStart(2, '0');
}

function SoundStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const active = SHOWREEL_TRACKS[activeIndex];

  useEffect(() => () => ambientSound.stop(), []);

  const play = (index: number) => {
    if (playing && activeIndex === index) {
      ambientSound.stop();
      setPlaying(false);
      return;
    }
    ambientSound.stop();
    setActiveIndex(index);
    setElapsed(0);
    const track = SHOWREEL_TRACKS[index];
    ambientSound.playTrack(track.genre, (time) => {
      if (time >= track.durationSec) {
        ambientSound.stop();
        setPlaying(false);
        setElapsed(0);
      } else setElapsed(time);
    });
    setPlaying(true);
  };

  return <section className="section sound-section" id="work" aria-labelledby="work-heading">
    <div className="container">
      <div className="section-topline"><span>01 / Listen</span><span>Sound studies</span></div>
      <div className="section-heading-grid"><h2 id="work-heading">A feeling, <em>held in sound.</em></h2><p>From intimate piano lines to atmospheric electronic textures, explore a few musical directions.</p></div>
      <div className="reel-layout">
        <div className="reel-feature">
          <div className="reel-feature-top"><span>AFTERIMAGE / AUDIO</span><span>0{activeIndex + 1} — 04</span></div>
          <div className="record-art" aria-hidden="true"><div className="record-ring"><div className="record-center">A<span>·</span>S</div></div></div>
          <div className="reel-feature-bottom"><div><span className="eyebrow light">Now selected / {active.category}</span><h3>{active.title}</h3></div><button className="play-button" onClick={() => play(activeIndex)} aria-label={(playing ? 'Pause ' : 'Play ') + active.title}>{playing ? <Pause size={21} fill="currentColor" /> : <Play size={21} fill="currentColor" />}</button></div>
          <div className="progress-line" role="progressbar" aria-label="Audio progress" aria-valuenow={Math.floor(elapsed)} aria-valuemin={0} aria-valuemax={active.durationSec}><span style={{ width: (elapsed / active.durationSec) * 100 + '%' }} /></div>
          <div className="time-row"><span>{formatTime(elapsed)}</span><span>{active.duration}</span></div>
        </div>
        <div className="reel-list"><div className="reel-list-header"><span>Select a study</span><span>04 tracks</span></div>
          {SHOWREEL_TRACKS.map((track, index) => <button key={track.id} className={'track-row ' + (activeIndex === index ? 'is-active' : '')} onClick={() => play(index)} aria-label={(playing && activeIndex === index ? 'Pause ' : 'Play ') + track.title}><span className="track-number">0{index + 1}</span><span className="track-meta"><strong>{track.title}</strong><small>{track.category}</small></span><span className="track-action">{playing && activeIndex === index ? <Pause size={17} /> : <Play size={17} />}</span></button>)}
          <p className="reel-note">These are browser-generated sound sketches for exploring mood. Portfolio recordings can be added when available.</p>
        </div>
      </div>
    </div>
  </section>;
}

function Contact({ mode, setMode }: { mode: InquiryMode; setMode: (mode: InquiryMode) => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const sendInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const topic = mode === 'scoring' ? 'Scoring project' : 'Lessons';
    const body = ['Name: ' + name, 'Email: ' + email, 'Interest: ' + topic, 'Project / focus: ' + subject, '', message].join('\n');
    window.location.href = 'mailto:dmhwizardcrazy101@gmail.com?subject=' + encodeURIComponent('Afterimage Sound — ' + topic + ' inquiry') + '&body=' + encodeURIComponent(body);
  };
  return <section className="section contact-section" id="contact" aria-labelledby="contact-heading"><div className="container">
    <div className="section-topline"><span>05 / Get in touch</span><span>Start a conversation</span></div>
    <div className="contact-grid"><div className="contact-intro"><h2 id="contact-heading">Let’s make<br /><em>something resonate.</em></h2><p>Have a project in mind, or looking for a teacher? Share a little about what you’re working on.</p><a className="email-link" href="mailto:dmhwizardcrazy101@gmail.com"><span>dmhwizardcrazy101@gmail.com</span> <ArrowUpRight size={17} /></a></div>
      <div className="contact-form-wrap"><div className="mode-switch" role="group" aria-label="Inquiry type"><button type="button" className={mode === 'scoring' ? 'selected' : ''} onClick={() => setMode('scoring')} aria-pressed={mode === 'scoring'}>Scoring project</button><button type="button" className={mode === 'lessons' ? 'selected' : ''} onClick={() => setMode('lessons')} aria-pressed={mode === 'lessons'}>Lessons</button></div>
        <form onSubmit={sendInquiry}><div className="form-pair"><label>Your name<input value={name} onChange={e => setName(e.target.value)} name="name" autoComplete="name" required placeholder="Name" /></label><label>Email address<input value={email} onChange={e => setEmail(e.target.value)} name="email" autoComplete="email" type="email" required placeholder="you@example.com" /></label></div>
          <label>{mode === 'scoring' ? 'What are you making?' : 'What would you like to learn?'}<input value={subject} onChange={e => setSubject(e.target.value)} name="subject" required placeholder={mode === 'scoring' ? 'A short film, game, animation…' : 'Piano, production, composition…'} /></label>
          <label>Tell me a little more<textarea value={message} onChange={e => setMessage(e.target.value)} name="message" rows={4} required placeholder="A few details, your timeline, or any questions you have." /></label>
          <button className="button button-dark submit-button" type="submit">Open email draft <ArrowUpRight size={18} /></button><p className="form-note">This opens your email app with your message ready to send.</p>
        </form>
      </div>
    </div>
  </div></section>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState<InquiryMode>('scoring');
  const goToContact = (selected: InquiryMode) => {
    setMode(selected);
    setMenuOpen(false);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('contact')?.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth' });
  };
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="container header-inner"><a className="brand" href="#top" aria-label="Afterimage Sound, back to top"><span className="brand-mark">A<span>·</span>S</span><span className="brand-name">AFTERIMAGE<br />SOUND</span></a>
      <nav className={menuOpen ? 'primary-nav open' : 'primary-nav'} aria-label="Main navigation"><a href="#work" onClick={() => setMenuOpen(false)}>Listen</a><a href="#scoring" onClick={() => setMenuOpen(false)}>Scoring</a><a href="#lessons" onClick={() => setMenuOpen(false)}>Lessons</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><button className="nav-contact" onClick={() => goToContact('scoring')}>Get in touch <ArrowUpRight size={16} /></button></nav>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
    </div></header>
    <main id="main">
      <section className="hero-section" id="top" aria-labelledby="hero-heading"><img className="hero-image" src={base + 'assets/images/piano-editorial.jpg'} alt="Grand piano keyboard in a warmly lit studio" fetchPriority="high" /><div className="hero-shade" /><div className="container hero-inner"><div className="hero-copy"><p className="eyebrow light">Afterimage Sound / The work of Devan</p><h1 id="hero-heading">Music that stays <em>with the story.</em></h1><p className="hero-description">Original music for film, games, and visual worlds. Thoughtful piano and music production lessons for people finding their own sound.</p><div className="hero-actions"><button className="button button-light" onClick={() => goToContact('scoring')}>Discuss a project <ArrowUpRight size={18} /></button><a className="text-link light-link" href="#work">Listen to the sound <ArrowRight size={18} /></a></div></div><div className="hero-footer"><span>COMPOSITION / PIANO / PRODUCTION</span><a href="#work">SCROLL TO EXPLORE <ArrowDown size={16} /></a></div></div></section>
      <SoundStudies />
      <section className="section scoring-section" id="scoring" aria-labelledby="scoring-heading"><div className="container"><div className="section-topline"><span>02 / Composition</span><span>For stories in motion</span></div><div className="section-heading-grid"><h2 id="scoring-heading">Every story has<br /><em>its own frequency.</em></h2><p>Music can bring a scene into focus, make a world feel lived in, or say what dialogue leaves unsaid. The score should feel inseparable from the work.</p></div><div className="service-list">{services.map(service => <div className="service-row" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><div><p>{service.text}</p><span>{service.detail}</span></div><ArrowUpRight className="service-arrow" size={24} /></div>)}</div><button className="inline-cta" onClick={() => goToContact('scoring')}>Tell me about your project <ArrowUpRight size={20} /></button></div></section>
      <section className="lessons-section" id="lessons" aria-labelledby="lessons-heading"><div className="container lessons-layout"><div className="lessons-intro"><p className="eyebrow">03 / Instruction</p><h2 id="lessons-heading">Learn the craft.<br /><em>Find your voice.</em></h2><p>Private, goal-led instruction that connects musical foundations with the tools of today.</p><button className="button button-dark" onClick={() => goToContact('lessons')}>Ask about lessons <ArrowUpRight size={18} /></button></div><div className="lesson-paths"><div className="lesson-path"><span>01 / AT THE KEYS</span><h3>Piano</h3><p>Technique, repertoire, reading, and expression. Build a musical foundation that lasts well beyond the lesson.</p><ul><li>Individual pace and goals</li><li>Classical foundations</li><li>Musical confidence</li></ul></div><div className="lesson-path"><span>02 / IN THE STUDIO</span><h3>Music technology</h3><p>Production, arrangement, synthesis, and composition. Turn an idea into a finished piece with guidance along the way.</p><ul><li>DAW workflow</li><li>Sound design</li><li>Composition and production</li></ul></div></div></div></section>
      <section className="about-section" id="about" aria-labelledby="about-heading"><div className="container"><div className="section-topline dark-line"><span>04 / About</span><span>The person behind the sound</span></div><div className="about-grid"><div><p className="eyebrow light">Composer / Pianist / Educator</p><h2 id="about-heading">An ear for the details that <em>linger.</em></h2></div><div className="about-copy"><p>Afterimage Sound brings together Devan’s background in piano and his interest in contemporary music making. The work moves between acoustic expression and digital texture, always in service of the feeling a piece needs to leave behind.</p><p>The same curiosity shapes his teaching: attentive, practical, and centered on each student’s own musical direction.</p><a href="#contact" className="text-link light-link">Start a conversation <ArrowUpRight size={18} /></a></div></div></div></section>
      <Contact mode={mode} setMode={setMode} />
    </main>
    <footer className="site-footer"><div className="container footer-top"><div><span className="footer-wordmark">AFTERIMAGE<br />SOUND<span className="footer-dot">.</span></span><p>Music for what stays with us.</p></div><div className="footer-links"><a href="#work">Listen</a><a href="#scoring">Scoring</a><a href="#lessons">Lessons</a><a href="#about">About</a><a href="mailto:dmhwizardcrazy101@gmail.com">Email</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Afterimage Sound</span><span>Composition · Piano · Production</span><a href="#top">Back to top ↑</a></div></footer>
  </>;
}
