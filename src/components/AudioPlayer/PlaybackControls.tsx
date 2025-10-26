'use client';

import styles from './PlaybackControls.module.css';
import LyricsButton from '../LyricsButton/LyricsButton';

interface PlaybackControlsProps {
  isPlaying: boolean;
  isShuffled: boolean;
  onTogglePlay: () => void;
  onToggleShuffle: () => void;
  onPreviousTrack: () => void;
  onNextTrack: () => void;
  onSeekBackward: () => void;
  onSeekForward: () => void;
  onToggleLyrics?: () => void;
  isLyricsActive?: boolean;
  isInstrumental?: boolean;
  isCover?: boolean;
  isMobile?: boolean;
}

export default function PlaybackControls({
  isPlaying,
  isShuffled,
  onTogglePlay,
  onToggleShuffle,
  onPreviousTrack,
  onNextTrack,
  onSeekBackward,
  onSeekForward,
  onToggleLyrics,
  isLyricsActive = false,
  isInstrumental = false,
  isCover = false,
  isMobile = false
}: PlaybackControlsProps) {
  const PlayIcon = () => (
    <svg width={isMobile ? 28 : 28} height={isMobile ? 28 : 28} viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  );

  const PauseIcon = () => (
    <svg width={isMobile ? 28 : 28} height={isMobile ? 28 : 28} viewBox="0 0 24 24">
      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
    </svg>
  );

  const ShuffleIcon = () => (
    <svg width={isMobile ? 18 : 16} height={isMobile ? 18 : 16} viewBox="0 0 16 16">
      <path d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.949l-1.018 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.744 5.277l-.979.93-2.483-2.481A2.25 2.25 0 00.39 3.5z" />
    </svg>
  );

  const PreviousIcon = () => (
    <svg width={isMobile ? 20 : 20} height={isMobile ? 20 : 20} viewBox="0 0 24 24">
      <path d="M6 6h2v12H6V6zM10 12l8.5 6V6L10 12z" />
    </svg>
  );

  const NextIcon = () => (
    <svg width={isMobile ? 20 : 20} height={isMobile ? 20 : 20} viewBox="0 0 24 24">
      <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
    </svg>
  );

  const SeekBackwardIcon = () => (
    <svg width={isMobile ? 20 : 20} height={isMobile ? 20 : 20} viewBox="0 0 24 24">
      <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" />
    </svg>
  );

  const SeekForwardIcon = () => (
    <svg width={isMobile ? 20 : 20} height={isMobile ? 20 : 20} viewBox="0 0 24 24">
      <path d="M13 6v12l8.5-6L13 6zM4 18l8.5-6L4 6v12z" />
    </svg>
  );

  return (
    <div className={`${styles.playbackControls} ${isMobile ? styles.mobile : ''}`}>
      <button
        className={`${styles.controlBtn} ${isShuffled ? styles.active : ''}`}
        onClick={onToggleShuffle}
        title="Shuffle"
      >
        <ShuffleIcon />
      </button>

      <button className={styles.seekBtn} onClick={onPreviousTrack} title="Previous Track">
        <PreviousIcon />
      </button>

      <button className={styles.seekBtn} onClick={onSeekBackward} title="Seek Backward 10s">
        <SeekBackwardIcon />
      </button>

      <button className={styles.playBtn} onClick={onTogglePlay}>
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>

      <button className={styles.seekBtn} onClick={onSeekForward} title="Seek Forward 10s">
        <SeekForwardIcon />
      </button>

      <button className={styles.seekBtn} onClick={onNextTrack} title="Next Track">
        <NextIcon />
      </button>

      {onToggleLyrics && (
        <LyricsButton
          onClick={onToggleLyrics}
          isActive={isLyricsActive}
          disabled={isInstrumental || isCover}
        />
      )}
    </div>
  );
}
