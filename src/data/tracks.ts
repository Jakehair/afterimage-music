export interface Track {
  id: string;
  title: string;
  genre: 'cinematic' | 'game' | 'piano' | 'electronic';
  category: string;
  duration: string;
  durationSec: number;
}

export const SHOWREEL_TRACKS: Track[] = [
  { id: 'cinematic', title: 'A wider horizon', genre: 'cinematic', category: 'Cinematic texture', duration: '0:30', durationSec: 30 },
  { id: 'interactive', title: 'Below the surface', genre: 'game', category: 'Interactive atmosphere', duration: '0:30', durationSec: 30 },
  { id: 'piano', title: 'A quiet interval', genre: 'piano', category: 'Piano study', duration: '0:30', durationSec: 30 },
  { id: 'electronic', title: 'Night signal', genre: 'electronic', category: 'Electronic texture', duration: '0:30', durationSec: 30 },
];
