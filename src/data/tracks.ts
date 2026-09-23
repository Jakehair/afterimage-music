export interface Track {
  id: string;
  title: string;
  genre: 'cinematic' | 'game' | 'piano' | 'electronic';
  category: 'Film & Media' | 'Games & Interactive' | 'Classical Piano' | 'Music Production';
  description: string;
  duration: string;
  durationSec: number;
  tags: string[];
  audioUrl?: string;
}

export const SHOWREEL_TRACKS: Track[] = [
  {
    id: 'film-echoes',
    title: 'Echoes of the Canopy',
    genre: 'cinematic',
    category: 'Film & Media',
    description: 'Dramatic hybrid orchestral score written for short films, featuring soaring cello melodies and brooding brass swells.',
    duration: '2:30',
    durationSec: 150,
    tags: ['Hybrid Orchestral', 'Short Film', 'Emotional', 'Strings'],
  },
  {
    id: 'game-descent',
    title: 'Subterranean Descent',
    genre: 'game',
    category: 'Games & Interactive',
    description: 'Atmospheric sci-fi gaming cue blending modular synthesizer pulses with deep sub-bass and tension drones.',
    duration: '2:15',
    durationSec: 135,
    tags: ['Sci-Fi Game', 'Atmospheric', 'Synth', 'Tension'],
  },
  {
    id: 'piano-nocturne',
    title: 'Nocturne in C-sharp Minor',
    genre: 'piano',
    category: 'Classical Piano',
    description: 'Virtuosic classical piano performance highlighting expressive touch, phrasing, and Romantic era dynamic control.',
    duration: '3:10',
    durationSec: 190,
    tags: ['Solo Piano', 'Classical', 'Romantic', 'Performance'],
  },
  {
    id: 'tech-drift',
    title: 'Analog Convergence',
    genre: 'electronic',
    category: 'Music Production',
    description: 'Modern electronic production exploring polyphonic synthesis, filter modulation, and layered percussion.',
    duration: '2:40',
    durationSec: 160,
    tags: ['Ableton Live', 'Synthesis', 'Sound Design', 'Electronic'],
  },
];
