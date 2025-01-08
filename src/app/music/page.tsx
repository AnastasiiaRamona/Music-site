'use client';

import { useEffect } from 'react';
import CoverGallery from '../../components/Cover/Cover';
import { albums } from '../../data/albums';
import { StaticImageData } from 'next/image';

const covers = albums.map((album) => ({
  id: album.albumId,
  url: album.coverSrc as StaticImageData,
  alt: album.title,
  text: album.title,
  unoptimized: true,
}));

export default function Music() {
  useEffect(() => {
    document.body.style.backgroundAttachment = 'fixed';

    return () => {
      document.body.style.backgroundAttachment = 'scroll';
    };
  }, []);

  return (
    <section>
      <CoverGallery covers={covers} />
    </section>
  );
}
