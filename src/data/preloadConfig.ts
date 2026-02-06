import { albumCoverSrcs, albums } from './albums';
import { covers } from './covers';

export const preloadConfig = {
  criticalImages: [
    '/assets/musician-1.webp',
    '/assets/room-base.webp',
    '/assets/room-table.webp',
    '/assets/room-bottom.webp',
    '/assets/bright-background-top.png',
    '/assets/bright-background.webp',
    '/assets/play.png',
  ],

  socialIcons: [
    '/assets/instagram-icon.webp',
    '/assets/youtube-icon.webp',
    '/assets/email-icon.png',
    '/assets/apple-music.webp',
    '/assets/spotify.webp',
    '/assets/amazon.webp',
    '/assets/soundcloud.png',
    '/assets/yandex-music.png',
    '/assets/deezer-icon.png',
    '/assets/telegram-icon.webp',
  ],

  fonts: [
    '/fonts/Clawmark-OVo1p.otf',
  ],

  albumCovers: albumCoverSrcs,
};

export const getCriticalAssets = () => [
  '/assets/musician-1.webp',
  '/assets/room-base.webp',
  '/assets/room-table.webp',
  '/assets/room-bottom.webp',
  '/assets/bright-background-top.png',
  '/assets/bright-background.webp',
  '/fonts/Clawmark-OVo1p.otf',
  '/assets/vinyl.webp',
];

export const getCriticalAlbumCovers = () => {
  const latestRelease = albums[0];
  const latestCover = latestRelease?.coverSrc;
  const priorityCovers = getPriorityAlbumAssets();

  const critical = new Set<string>();
  if (latestCover) critical.add(latestCover);
  priorityCovers.forEach(cover => critical.add(cover));

  return Array.from(critical);
};

const PRIORITY_ALBUM_COVERS_COUNT = 8;

export const getPriorityAlbumAssets = () => albumCoverSrcs.slice(0, PRIORITY_ALBUM_COVERS_COUNT);

export const getAllAlbumAssets = () => preloadConfig.albumCovers;

export const getNonCriticalAlbumAssets = () => {
  const critical = new Set(getCriticalAlbumCovers());
  return preloadConfig.albumCovers.filter(cover => !critical.has(cover));
};

export const getAllAudioAssets = () => {
  const all = new Set<string>();

  for (const album of albums) {
    if (album.isAlbum && album.tracks) {
      for (const t of album.tracks) {
        if (t.audioSrc) all.add(t.audioSrc);
      }
    } else if (album.audioSrc) {
      all.add(album.audioSrc);
    }
  }

  for (const c of covers) {
    if (c.audioSrc) all.add(c.audioSrc);
  }

  return Array.from(all);
};

export const getVideoAssets = () => [
  '/videos/video.mp4',
  '/videos/music.mp4',
];
