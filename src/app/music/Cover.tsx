import Image, { StaticImageData } from 'next/image';
import styles from './Cover.module.css';
import Link from 'next/link';
import { memo, useMemo } from 'react';

type CoverData = {
  id: string;
  url: StaticImageData;
  alt: string;
  text: string;
}

type CoverGalleryProps = {
  covers: CoverData[];
}

const Cover = memo(({ id, url, alt, text }: CoverData) => {
  return (
    <Link legacyBehavior href={`/music/${id}`}>
      <div className={styles['cover-container']}>
        <Image src={url} alt={alt} loading="lazy" className={styles['cover-image']} />
        <div className={styles['overlay']}>
          <p>{text}</p>
        </div>
      </div>
    </Link>
  );
});

Cover.displayName = 'Cover';

export default function CoverGallery({ covers }: CoverGalleryProps) {
  const memoizedCovers = useMemo(() => covers, [covers]);

  return (
    <div className={styles['cover-gallery']}>
      {memoizedCovers.map((cover, index) => (
        <Cover key={index} id={cover.id} url={cover.url} alt={cover.alt} text={cover.text} />
      ))}
    </div>
  );
}