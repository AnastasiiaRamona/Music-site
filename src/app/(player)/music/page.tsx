import { albums } from '../../../data/albums';
import HeroSection from '@/components/HeroSection/HeroSection';
import MusicPageClient from '@/components/MusicPageClient/MusicPageClient';

function processAlbumsData() {
  const covers = albums.map((album) => ({
    id: album.albumId,
    url: album.coverSrc,
    alt: album.title,
    text: album.title,
    unoptimized: true,
  }));

  const songs: Array<{
    id: string;
    title: string;
    coverSrc: string;
    audioSrc: string;
    order: number;
    parentAlbumId?: string;
    instrumental?: boolean;
    spotifyLink?: string;
    appleMusicLink?: string;
    youtubeLink?: string;
    amazonLink?: string;
  }> = [];

  const addedTrackIds = new Set<string>();

  albums.forEach((album, albumIndex) => {
    if (album.audioSrc && !album.isAlbum) {
      songs.push({
        id: album.albumId,
        title: album.title,
        coverSrc: album.coverSrc,
        audioSrc: album.audioSrc,
        order: albumIndex * 1000,
        instrumental: album.instrumental,
        spotifyLink: album.spotifyLink,
        appleMusicLink: album.appleMusicLink,
        youtubeLink: album.youtubeLink,
        amazonLink: album.amazonLink,
      });
      addedTrackIds.add(album.albumId);
    }
  });

  albums.forEach((album, albumIndex) => {
    if (album.isAlbum && album.tracks) {
      album.tracks.forEach((track, trackIndex) => {
        if (!addedTrackIds.has(track.trackId)) {
          songs.push({
            id: track.trackId,
            title: track.title,
            coverSrc: track.coverSrc || album.coverSrc,
            audioSrc: track.audioSrc,
            order: albumIndex * 1000 + trackIndex,
            parentAlbumId: album.albumId,
            instrumental: track.instrumental,
            spotifyLink: album.spotifyLink,
            appleMusicLink: album.appleMusicLink,
            youtubeLink: album.youtubeLink,
            amazonLink: album.amazonLink,
          });
          addedTrackIds.add(track.trackId);
        }
      });
    }
  });

  songs.sort((a, b) => a.order - b.order);

  return { covers, songs };
}

export const dynamic = 'force-static';

export default function Music() {
  const { covers, songs } = processAlbumsData();

  return (
    <>
      <HeroSection />
      <MusicPageClient covers={covers} songs={songs} />
    </>
  );
}

