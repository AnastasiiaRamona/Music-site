import Image from 'next/image';
import styles from './Cover.module.css';
import Link from 'next/link';
import { useAudioPlayer } from '../../contexts/AudioPlayerContext';
import { albums } from '../../data/albums';

type CoverData = {
  id: string;
  url: string;
  alt: string;
  text: string;
  unoptimized: boolean;
};

type CoverGalleryProps = {
  covers: CoverData[];
};

function Cover({ id, url, alt, text }: CoverData) {
  const { showPlayerAndPlay } = useAudioPlayer();

  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Find the album data
    const album = albums.find(album => album.albumId === id);
    if (album && album.audioSrc) {
      showPlayerAndPlay({
        title: album.title,
        coverSrc: album.coverSrc,
        audioSrc: album.audioSrc,
        albumId: album.albumId,
      });
    }
  };

  return (
    <Link legacyBehavior href={`/music/${id}`}>
      <div className={styles['cover-container']}>
        <Image
          src={url}
          alt={alt}
          loading="lazy"
          className={styles['cover-image']}
          unoptimized={true}
          width={300}
          height={300}
        />
        <div
          className={styles['play-icon']}
          onClick={handlePlayClick}
        >
          <Image
            src="/assets/play.png"
            alt="Play"
            width={20}
            height={20}
            unoptimized={true}
          />
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
