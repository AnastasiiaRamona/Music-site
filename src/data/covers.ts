const coversSrc = '/assets/covers/Covers.webp';

export interface CoverData {
  id: string;
  title: string;
  audioSrc: string;
  coverSrc: string;
  instrumental?: boolean;
}

export const covers: CoverData[] = [
  {
    id: 'always-wanna-die',
    title: 'I Always Wanna Die (Sometimes) (The 1975 Cover)',
    audioSrc: '/audios/covers/always-wanna-die.opus',
    coverSrc: coversSrc,
  },
  {
    id: 'everyone-else-is-just-noise',
    title: 'Everyone Else Is Just Noise (Dashboard Confessional Cover)',
    audioSrc: '/audios/covers/everyone-else-is-just-noise.opus',
    coverSrc: coversSrc,
  },
  {
    id: 'lost',
    title: 'Lost (Bring Me The Horizon Cover)',
    audioSrc: '/audios/covers/lost.opus',
    coverSrc: coversSrc,
  },
  {
    id: 'paris',
    title: 'Paris (The 1975 Cover)',
    audioSrc: '/audios/covers/paris.opus',
    coverSrc: coversSrc,
  },
];
