'use client';

import { useEffect, useState } from 'react';
import CoverGallery from '../Cover/Cover';
import ViewToggle from '../ViewToggle/ViewToggle';
import SongList from '../SongList/SongList';

type CoverData = {
  id: string;
  url: string;
  alt: string;
  text: string;
  unoptimized: boolean;
};

type SongData = {
  id: string;
  title: string;
  coverSrc: string;
  audioSrc: string;
  order: number;
  parentAlbumId?: string;
  spotifyLink?: string;
  appleMusicLink?: string;
  youtubeLink?: string;
  amazonLink?: string;
};

interface MusicPageClientProps {
  covers: CoverData[];
  songs: SongData[];
}

export default function MusicPageClient({ covers, songs }: MusicPageClientProps) {
  const [currentView, setCurrentView] = useState<'gallery' | 'list'>('gallery');

  useEffect(() => {
    document.body.style.backgroundAttachment = 'fixed';

    return () => {
      document.body.style.backgroundAttachment = 'scroll';
    };
  }, []);

  return (
    <section>
      <ViewToggle currentView={currentView} onViewChange={setCurrentView} />
      {currentView === 'gallery' ? (
        <CoverGallery covers={covers} />
      ) : (
        <SongList songs={songs.map(({ order, ...song }) => song)} />
      )}
    </section>
  );
}
