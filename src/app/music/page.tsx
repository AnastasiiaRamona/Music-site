import CoverGallery from './Cover';
import { albums } from '../data/albums';
import { StaticImageData } from 'next/image';

const covers = albums.map(album => ({
  id: album.albumId,
  url: album.coverSrc as StaticImageData,
  alt: album.title,
  text: album.title,
  unoptimized: true,
}));

export default function Music() {
  return <section>
    <CoverGallery covers={covers} />
  </section>
}