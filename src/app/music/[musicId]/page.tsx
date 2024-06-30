import { albums } from '../../data/albums';
import Image, { StaticImageData } from 'next/image';
import appleMusicSrc from '../../../assets/apple-music.svg';
import spotifySrc from '../../../assets/spotify.png';
import amazonSrc from '../../../assets/amazon.png';
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

function MusicId({ album }: AlbumProps) {
  if (!album) {
    return;
  }

  return (
    <div className={styles.musicIdContainer}>
      <div className={styles.videoWrapper}>
        <iframe
          src={album.youtubeLink}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.videoFrame}
          rel="preload"
        ></iframe>
      </div>
      <div className={styles.linksContainer}>
        <a href={album.appleMusicLink} target='_blank' className={styles.link}>
          <Image loading='lazy' src={appleMusicSrc} alt={'apple music'} className={styles.icon} />
        </a>
        <a href={album.spotifyLink} target='_blank' className={styles.link}>
          <Image loading='lazy' src={spotifySrc} alt={'spotify'} className={styles.icon} />
        </a>
        <a href={album.amazonLink} target='_blank' className={styles.link}>
          <Image loading='lazy' src={amazonSrc} alt={'amazon'} className={styles.icon} />
        </a>
      </div>
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