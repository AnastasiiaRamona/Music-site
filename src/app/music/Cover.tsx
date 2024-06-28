import Image, { StaticImageData } from 'next/image';
import styles from './Cover.module.css';

type CoverData = {
  url: StaticImageData;
  alt: string;
  text: string;
}

type CoverGalleryProps = {
  covers: CoverData[];
}

function Cover({ url, alt, text }: CoverData) {
  return (
    <div className={styles['cover-container']}>
      <Image src={url} alt={alt} className={styles['cover-image']} />
      <div className={styles['overlay']}>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default function CoverGallery({ covers }: CoverGalleryProps) {
  return (
    <div className={styles['cover-gallery']}>
      {covers.map((cover, index) => (
        <Cover key={index} url={cover.url} alt={cover.alt} text={cover.text} />
      ))}
    </div>
  );
}