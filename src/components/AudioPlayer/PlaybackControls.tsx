'use client';

import styles from './PlaybackControls.module.css';
import LyricsButton from '../LyricsButton/LyricsButton';
import { PlayIcon, PauseIcon, ShuffleIcon, PreviousIcon, NextIcon, SeekBackwardIcon, SeekForwardIcon } from '../Icons/Icons';

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

  return (
    <div className={`${styles.playbackControls} ${isMobile ? styles.mobile : ''}`}>
      <button
        className={`${styles.controlBtn} ${isShuffled ? styles.active : ''}`}
        onClick={onToggleShuffle}
        title="Shuffle"
      >
        <ShuffleIcon width={isMobile ? 18 : 16} height={isMobile ? 18 : 16} />
      </button>

      <button className={styles.seekBtn} onClick={onPreviousTrack} title="Previous Track">
        <PreviousIcon width={isMobile ? 20 : 20} height={isMobile ? 20 : 20} />
      </button>

      <button className={styles.seekBtn} onClick={onSeekBackward} title="Seek Backward 10s">
        <SeekBackwardIcon width={isMobile ? 20 : 20} height={isMobile ? 20 : 20} />
      </button>

      <button className={styles.playBtn} onClick={onTogglePlay}>
        {isPlaying ? <PauseIcon width={isMobile ? 28 : 28} height={isMobile ? 28 : 28} /> : <PlayIcon width={isMobile ? 28 : 28} height={isMobile ? 28 : 28} />}
      </button>

      <button className={styles.seekBtn} onClick={onSeekForward} title="Seek Forward 10s">
        <SeekForwardIcon width={isMobile ? 20 : 20} height={isMobile ? 20 : 20} />
      </button>

      <button className={styles.seekBtn} onClick={onNextTrack} title="Next Track">
        <NextIcon width={isMobile ? 20 : 20} height={isMobile ? 20 : 20} />
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
