import { memo, useMemo } from 'react';
import { albums } from '../../data/albums';
import Image, { StaticImageData } from 'next/image';
import appleMusicSrc from '../../../assets/apple-music.webp';
import spotifySrc from '../../../assets/spotify.webp';
import amazonSrc from '../../../assets/amazon.webp';
import styles from './page.module.css';

type AlbumProps = {
  album?: {
    albumId: string;
    coverSrc: StaticImageData;
    title: string;
    appleMusicLink: string;
    spotifyLink: string;
    youtubeLink: string;
    amazonLink: string;
  };
};

const MemoizedIframe = memo(({ src, className }: { src: string; className: string }) => {
  return (
    <iframe
      src={src}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className={className}
      rel="preload"
    ></iframe>
  );
});

MemoizedIframe.displayName = 'MemoizedIframe';

const MemoizedImage = memo(({ src, alt, className }: { src: StaticImageData; alt: string; className: string }) => {
  return <Image loading="lazy" src={src} alt={alt} className={className} unoptimized={true} />;
});

MemoizedImage.displayName = 'MemoizedImage';

function MusicId({ album }: AlbumProps) {
  const appleMusicLink = useMemo(() => album?.appleMusicLink || '', [album?.appleMusicLink]);
  const spotifyLink = useMemo(() => album?.spotifyLink || '', [album?.spotifyLink]);
  const amazonLink = useMemo(() => album?.amazonLink || '', [album?.amazonLink]);

  return (
    <div className={styles.musicIdContainer}>
      {album && (
        <>
          <div className={styles.videoWrapper}>
            <MemoizedIframe src={album.youtubeLink} className={styles.videoFrame} />
          </div>
          <div className={styles.linksContainer}>
            <a href={appleMusicLink} target="_blank" className={styles.link}>
              <MemoizedImage src={appleMusicSrc} alt="apple music" className={styles.icon} />
            </a>
            <a href={spotifyLink} target="_blank" className={styles.link}>
              <MemoizedImage src={spotifySrc} alt="spotify" className={styles.icon} />
            </a>
            <a href={amazonLink} target="_blank" className={styles.link}>
              <MemoizedImage src={amazonSrc} alt="amazon" className={styles.icon} />
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  const paths = albums.map((album) => ({
    musicId: album.albumId,
  }));

  return paths;
}

export default async function MusicIdWrapper({ params }: { params: { musicId: string } }) {
  const { musicId } = params;
  const album = albums.find((a) => a.albumId === musicId);

  return <MusicId album={album} />;
}
