'use client';

import { useEffect, useState } from 'react';
import CoverGallery from '../../components/Cover/Cover';
import ViewToggle from '../../components/ViewToggle/ViewToggle';
import SongList from '../../components/SongList/SongList';
import { albums } from '../../data/albums';
import Header from '@/components/Header/Header';

const covers = albums.map((album) => ({
  id: album.albumId,
  url: album.coverSrc,
  alt: album.title,
  text: album.title,
  unoptimized: true,
}));

// Filter songs that have audioSrc or are albums with tracks
const songs: Array<{
  id: string;
  title: string;
  coverSrc: string;
  audioSrc: string;
  order: number;
  spotifyLink?: string;
  appleMusicLink?: string;
  youtubeLink?: string;
  amazonLink?: string;
}> = [];

const addedTrackIds = new Set<string>();

// First pass: add all single tracks in their order
albums.forEach((album, albumIndex) => {
  if (album.audioSrc && !album.isAlbum) {
    songs.push({
      id: album.albumId,
      title: album.title,
      coverSrc: album.coverSrc,
      audioSrc: album.audioSrc,
      order: albumIndex * 1000,
      spotifyLink: album.spotifyLink,
      appleMusicLink: album.appleMusicLink,
      youtubeLink: album.youtubeLink,
      amazonLink: album.amazonLink,
    });
    addedTrackIds.add(album.albumId);
  }
});

// Second pass: add album tracks in their order (only if not already added as singles)
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

// Sort by order to maintain the sequence from data
songs.sort((a, b) => a.order - b.order);

export default function Music() {
  const [currentView, setCurrentView] = useState<'gallery' | 'list'>('gallery');

  useEffect(() => {
    document.body.style.backgroundAttachment = 'fixed';

    return () => {
      document.body.style.backgroundAttachment = 'scroll';
    };
  }, []);

  return (
    <>
      <Header></Header>
      <section>
        <ViewToggle currentView={currentView} onViewChange={setCurrentView} />
        {currentView === 'gallery' ? (
          <CoverGallery covers={covers} />
        ) : (
          <SongList songs={songs.map(({ order, ...song }) => song)} />
        )}
      </section>
    </>
  );
}
