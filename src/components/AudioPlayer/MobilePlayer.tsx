'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './MobilePlayer.module.css';
import TrackInfo from './TrackInfo';
import PlaybackControls from './PlaybackControls';
import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControl';
import SocialLinks from '../SocialLinks/SocialLinks';

interface MobilePlayerProps {
  currentTrack: {
    title: string;
    coverSrc: string;
    audioSrc: string;
    albumId: string;
    lyricsPath?: string;
    isCover?: boolean;
    instrumental?: boolean;
    spotifyLink?: string;
    appleMusicLink?: string;
    youtubeLink?: string;
    amazonLink?: string;
  };
  isPlaying: boolean;
  isShuffled: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isExpanded: boolean;
  onTogglePlay: () => void;
  onToggleShuffle: () => void;
  onPreviousTrack: () => void;
  onNextTrack: () => void;
  onSeekBackward: () => void;
  onSeekForward: () => void;
  onSeek: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onToggleExpanded: (e?: React.MouseEvent) => void;
  onClose: () => void;
  onToggleLyrics?: () => void;
  isLyricsActive?: boolean;
}

export default function MobilePlayer({
  currentTrack,
  isPlaying,
  isShuffled,
  currentTime,
  duration,
  volume,
  isExpanded,
  onTogglePlay,
  onToggleShuffle,
  onPreviousTrack,
  onNextTrack,
  onSeekBackward,
  onSeekForward,
  onSeek,
  onVolumeChange,
  onToggleExpanded,
  onClose,
  onToggleLyrics,
  isLyricsActive = false
}: MobilePlayerProps) {
  const [isSocialLinksExpanded, setIsSocialLinksExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isExpanded]);

  const toggleSocialLinks = () => {
    setIsSocialLinksExpanded(!isSocialLinksExpanded);
  };
  if (!isExpanded) {
    return (
      <div className={styles.mobilePlayerCollapsed}>
        <TrackInfo
          title={currentTrack.title}
          coverSrc={currentTrack.coverSrc}
          isMobile={true}
        />

        <div className={styles.mobileProgressContainer}>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={onSeek}
            className={styles.mobileProgressBar}
            style={{
              '--progress': duration > 0 ? `${(currentTime / duration) * 100}%` : '0%'
            } as React.CSSProperties}
          />
        </div>

        <div className={styles.mobileControls}>
          <button className={styles.mobilePlayBtn} onClick={(e) => { e.stopPropagation(); onTogglePlay(); }}>
            {isPlaying ? (
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
          <button className={styles.mobileExpandBtn} onClick={(e) => onToggleExpanded(e)}>
            <Image
              src="/assets/expand.svg"
              alt="Expand"
              width={16}
              height={16}
              unoptimized={true}
            />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.mobilePlayerExpanded}>
      <div className={styles.mobileExpandedContent}>
        <div className={styles.mobileExpandedHeader}>
          <button className={styles.mobileCloseBtn} onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
          <div className={styles.mobileExpandedHeaderControls}>
            {(currentTrack.spotifyLink || currentTrack.appleMusicLink || currentTrack.youtubeLink || currentTrack.amazonLink) && (
              <div className={styles.mobileExpandedSocialLinksContainer}>
                <button
                  className={styles.mobileExpandedSocialLinksToggle}
                  onClick={toggleSocialLinks}
                  title={isSocialLinksExpanded ? "Hide social links" : "Show social links"}
                >
                  {isSocialLinksExpanded ? (
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  )}
                </button>
                <div className={`${styles.mobileExpandedSocialLinksWrapper} ${isSocialLinksExpanded ? styles.expanded : ''}`}>
                  <SocialLinks
                    spotifyLink={currentTrack.spotifyLink}
                    appleMusicLink={currentTrack.appleMusicLink}
                    youtubeLink={currentTrack.youtubeLink}
                    amazonLink={currentTrack.amazonLink}
                  />
                </div>
              </div>
            )}
            <button className={styles.mobileCollapseBtn} onClick={(e) => onToggleExpanded(e)}>
              <Image
                src="/assets/collapse.svg"
                alt="Collapse"
                width={20}
                height={20}
                unoptimized={true}
              />
            </button>
          </div>
        </div>

        <div className={styles.mobileExpandedCover}>
          {currentTrack.coverSrc && (
            <Image
              src={currentTrack.coverSrc}
              alt={currentTrack.title}
              width={400}
              height={400}
              unoptimized={true}
            />
          )}
        </div>

        <div className={styles.mobileExpandedInfo}>
          <div className={styles.mobileExpandedTitle}>{currentTrack.title}</div>
          <div className={styles.mobileExpandedArtist}>Anastasiia Ramona</div>
        </div>

        <div className={styles.mobileExpandedControls}>
          <div className={styles.mobileExpandedPlaybackControls}>
            <div className={styles.mobileExpandedMainControls}>
              <PlaybackControls
                isPlaying={isPlaying}
                isShuffled={isShuffled}
                onTogglePlay={onTogglePlay}
                onToggleShuffle={onToggleShuffle}
                onPreviousTrack={onPreviousTrack}
                onNextTrack={onNextTrack}
                onSeekBackward={onSeekBackward}
                onSeekForward={onSeekForward}
                onToggleLyrics={onToggleLyrics}
                isLyricsActive={isLyricsActive}
                isInstrumental={currentTrack.instrumental}
                isCover={currentTrack.isCover}
                isMobile={true}
              />
            </div>
          </div>

          <div className={styles.mobileExpandedTimeInfo}>
            <ProgressBar
              currentTime={currentTime}
              duration={duration}
              onSeek={onSeek}
              isMobile={true}
            />
            <VolumeControl
              volume={volume}
              onVolumeChange={onVolumeChange}
              isMobile={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
