'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './SongList.module.css';
import { useAudioPlayer } from '../../contexts/AudioPlayerContext';
import { albums } from '../../data/albums';

interface SongListProps {
  songs: Array<{
    id: string;
    title: string;
    coverSrc: string;
    audioSrc: string;
  }>;
}

function SongItem({ song, index }: { song: any; index: number }) {
  const { showPlayerAndPlay, currentTrack } = useAudioPlayer();
  const [isHovered, setIsHovered] = useState(false);

  const handlePlayClick = () => {
    showPlayerAndPlay({
      title: song.title,
      coverSrc: song.coverSrc,
      audioSrc: song.audioSrc,
      albumId: song.id,
    });
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
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

      <div className={styles.songDuration}>
        {/* Duration would go here if available */}
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
