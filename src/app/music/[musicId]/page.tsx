import { albums } from '../../../data/albums';
import Image from 'next/image';
const appleMusicSrc = '/assets/apple-music.webp';
const spotifySrc = '/assets/spotify.webp';
const amazonSrc = '/assets/amazon.webp';
import styles from './page.module.css';

type AlbumProps = {
  album?: {
    albumId: string;
    coverSrc: string;
    title: string;
    appleMusicLink: string;
    spotifyLink: string;
    youtubeLink: string;
    amazonLink: string;
  };
};

function IframeComponent({ src, className }: { src: string; className: string }) {
  return (
    <iframe
      src={src}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className={className}
      rel="preload"
    ></iframe>
  );
}

function ImageComponent({ src, alt, className }: { src: string; alt: string; className: string }) {
  return <Image loading="lazy" src={src} alt={alt} className={className} unoptimized={true} width={50} height={50} />;
}

function MusicId({ album }: AlbumProps) {
  const appleMusicLink = album?.appleMusicLink || '';
  const spotifyLink = album?.spotifyLink || '';
  const amazonLink = album?.amazonLink || '';

  return (
    <div className={styles.musicIdContainer}>
      {album && (
        <>
          <div className={styles.videoWrapper}>
            <IframeComponent src={album.youtubeLink} className={styles.videoFrame} />
          </div>
          <div className={styles.linksContainer}>
            <a href={appleMusicLink} target="_blank" className={styles.link}>
              <ImageComponent src={appleMusicSrc} alt="apple music" className={styles.icon} />
            </a>
            <a href={spotifyLink} target="_blank" className={styles.link}>
              <ImageComponent src={spotifySrc} alt="spotify" className={styles.icon} />
            </a>
            <a href={amazonLink} target="_blank" className={styles.link}>
              <ImageComponent src={amazonSrc} alt="amazon" className={styles.icon} />
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