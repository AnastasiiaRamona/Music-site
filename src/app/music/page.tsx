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

// Filter songs that have audioSrc
const songs = albums
  .filter((album) => album.audioSrc)
  .map((album) => ({
    id: album.albumId,
    title: album.title,
    coverSrc: album.coverSrc,
    audioSrc: album.audioSrc,
  }));

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
          <SongList songs={songs} />
        )}
      </section>
    </>
  );
}
