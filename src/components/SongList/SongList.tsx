'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './SongList.module.css';
import { useAudioPlayer } from '../../contexts/AudioPlayerContext';
import { PlayIcon, PauseIcon } from '../Icons/Icons';

interface SongItemData {
  id: string;
  title: string;
  coverSrc: string;
  audioSrc: string;
  parentAlbumId?: string;
  instrumental?: boolean;
  spotifyLink?: string;
  appleMusicLink?: string;
  youtubeLink?: string;
  amazonLink?: string;
}

interface SongListProps {
  songs: Array<SongItemData>;
}

function SongItem({ song, index, hasCover }: { song: SongItemData; index: number; hasCover: boolean }) {
  const { showPlayerAndPlay, currentTrack, isPlaying, togglePlayPause } = useAudioPlayer();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePlayClick = () => {
    if (isCurrentTrack) {
      togglePlayPause();
    } else {
      showPlayerAndPlay({
        title: song.title,
        coverSrc: song.coverSrc,
        audioSrc: song.audioSrc,
        albumId: song.id,
        parentAlbumId: song.parentAlbumId,
        instrumental: song.instrumental,
        spotifyLink: song.spotifyLink,
        appleMusicLink: song.appleMusicLink,
        youtubeLink: song.youtubeLink,
        amazonLink: song.amazonLink,
      });
    }
  };

  const handleTrackClick = (e: React.MouseEvent) => {
    if (window.innerWidth < 1024) {
      e.stopPropagation();
      handlePlayClick();
    }
  };

  const isCurrentTrack = currentTrack?.albumId === song.id;

  return (
    <div
      className={`${styles.songItem} ${!hasCover ? styles.noCover : ''} ${isCurrentTrack ? styles.currentTrack : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleTrackClick}
      title={song.title}
    >
      <div className={styles.songIndex}>
        {((isMobile && isCurrentTrack) || (!isMobile && (isHovered || isCurrentTrack))) ? (
          <button className={styles.playButton} onClick={handlePlayClick}>
            {isCurrentTrack && isPlaying ? (
              <PauseIcon width={16} height={16} />
            ) : (
              <PlayIcon width={16} height={16} />
            )}
          </button>
        ) : (
          <span className={styles.indexNumber}>{index + 1}</span>
        )}
      </div>

      {song.coverSrc && (
        <div className={styles.songCover}>
          <Image
            src={song.coverSrc}
            alt={song.title}
            width={40}
            height={40}
            sizes="(max-width: 480px) 50px, (max-width: 768px) 60px, 84px"
          />
        </div>
      )}

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
        <div className={styles.headerCover}></div>
        <div className={styles.headerTitle}>Title</div>
        <div className={styles.headerDuration}></div>
      </div>

      <div className={styles.songList}>
        {songs.map((song, index) => (
          <SongItem key={song.id} song={song} index={index} hasCover={true} />
        ))}
      </div>
    </div>
  );
}
