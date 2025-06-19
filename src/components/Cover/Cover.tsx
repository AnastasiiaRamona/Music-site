import Image, { StaticImageData } from 'next/image';
import styles from './Cover.module.css';
import Link from 'next/link';

type CoverData = {
  id: string;
  url: StaticImageData;
  alt: string;
  text: string;
  unoptimized: boolean;
};

type CoverGalleryProps = {
  covers: CoverData[];
};

function Cover({ id, url, alt, text }: CoverData) {
  return (
    <Link legacyBehavior href={`/music/${id}`}>
      <div className={styles['cover-container']}>
        <Image
          src={url}
          alt={alt}
          loading="lazy"
          className={styles['cover-image']}
          unoptimized={true}
          placeholder="blur"
        />
        <div className={styles['overlay']}>
          <p>{text}</p>
        </div>
      </div>
    </Link>
  );
}

export default function CoverGallery({ covers }: CoverGalleryProps) {
  return (
    <div className={styles['cover-gallery']}>
      {covers.map((cover, index) => (
        <Cover
          key={index}
          id={cover.id}
          url={cover.url}
          alt={cover.alt}
          text={cover.text}
          unoptimized={true}
        />
      ))}
    </div>
  );
}
