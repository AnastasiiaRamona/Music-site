'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './SongList.module.css';
import { useAudioPlayer } from '../../contexts/AudioPlayerContext';

interface SongListProps {
  songs: Array<{
    id: string;
    title: string;
    coverSrc: string;
    audioSrc: string;
    spotifyLink?: string;
    appleMusicLink?: string;
    youtubeLink?: string;
    amazonLink?: string;
  }>;
}

function SongItem({ song, index }: { song: any; index: number }) {
  const { showPlayerAndPlay, currentTrack, isPlaying, togglePlayPause } = useAudioPlayer();
  const [isHovered, setIsHovered] = useState(false);

  const handlePlayClick = () => {
    if (isCurrentTrack) {
      // If this is the current track, toggle play/pause
      togglePlayPause();
    } else {
      // Otherwise, play this track
      showPlayerAndPlay({
        title: song.title,
        coverSrc: song.coverSrc,
        audioSrc: song.audioSrc,
        albumId: song.id,
        parentAlbumId: song.parentAlbumId, // Add parent album ID
        spotifyLink: song.spotifyLink,
        appleMusicLink: song.appleMusicLink,
        youtubeLink: song.youtubeLink,
        amazonLink: song.amazonLink,
      });
    }
  };

  const isCurrentTrack = currentTrack?.albumId === song.id;

  return (
    <div
      className={`${styles.songItem} ${isCurrentTrack ? styles.currentTrack : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.songIndex}>
        {isHovered || isCurrentTrack ? (
          <button className={styles.playButton} onClick={handlePlayClick}>
            {isCurrentTrack && isPlaying ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        ) : (
          <span className={styles.indexNumber}>{index + 1}</span>
        )}
      </div>

      <div className={styles.songCover}>
        <Image
          src={song.coverSrc}
          alt={song.title}
          width={40}
          height={40}
          unoptimized={true}
        />
      </div>

      <div className={styles.songInfo}>
        <div className={`${styles.songTitle} ${isCurrentTrack ? styles.currentTrackTitle : ''}`}>
          {song.title}
        </div>
        <div className={styles.songArtist}>Anastasiia Ramona</div>
      </div>
    </div>
  );
}

export default function SongList({ songs }: SongListProps) {
  return (
    <div className={styles.songListContainer}>
      <div className={styles.songListHeader}>
        <div className={styles.headerIndex}>#</div>
        <div className={styles.headerTitle}>Title</div>
        <div className={styles.headerDuration}></div>
      </div>

      <div className={styles.songList}>
        {songs.map((song, index) => (
          <SongItem key={song.id} song={song} index={index} />
        ))}
      </div>
    </div>
  );
}
