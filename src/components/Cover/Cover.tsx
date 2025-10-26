import Image from 'next/image';
import styles from './Cover.module.css';
import { useAudioPlayer } from '../../contexts/AudioPlayerContext';
import { albums } from '../../data/albums';
import { useState, useEffect } from 'react';

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

function Cover({ id, url, alt }: CoverData) {
  const { showPlayerAndPlay, currentTrack, isPlaying, togglePlayPause } = useAudioPlayer();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isCurrentTrack = currentTrack?.albumId === id;

  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isCurrentTrack) {
      togglePlayPause();
      return;
    }

    const album = albums.find(album => album.albumId === id);
    if (album) {
      if (album.isAlbum && album.tracks) {
        const firstTrack = album.tracks[0];
        showPlayerAndPlay({
          title: firstTrack.title,
          coverSrc: firstTrack.coverSrc || album.coverSrc,
          audioSrc: firstTrack.audioSrc,
          albumId: firstTrack.trackId,
          parentAlbumId: album.albumId,
          instrumental: firstTrack.instrumental,
          spotifyLink: album.spotifyLink,
          appleMusicLink: album.appleMusicLink,
          youtubeLink: album.youtubeLink,
          amazonLink: album.amazonLink,
        });
      } else if (album.audioSrc) {
        showPlayerAndPlay({
          title: album.title,
          coverSrc: album.coverSrc,
          audioSrc: album.audioSrc,
          albumId: album.albumId,
          instrumental: album.instrumental,
          spotifyLink: album.spotifyLink,
          appleMusicLink: album.appleMusicLink,
          youtubeLink: album.youtubeLink,
          amazonLink: album.amazonLink,
        });
      }
    }
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget || (e.target as HTMLElement).closest('.play-icon')) {
      return;
    }

    if (window.innerWidth > 1024) {
      return;
    }

    handlePlayClick(e);
  };

  return (
    <div
      className={styles['cover-container']}
      onClick={handleContainerClick}
    >
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
          src={isCurrentTrack && isPlaying ? "/assets/pause.png" : "/assets/play.png"}
          alt={isCurrentTrack && isPlaying ? "Pause" : "Play"}
          width={20}
          height={20}
          unoptimized={true}
        />
      </div>
    </div>
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
