'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './MobilePlayer.module.css';
import TrackInfo from './TrackInfo';
import PlaybackControls from './PlaybackControls';
import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControl';
import SocialLinks from '../SocialLinks/SocialLinks';
import { PlayIcon, PauseIcon, CloseIcon, MinusIcon, PlusIcon, ExpandIcon, CollapseIcon } from '../Icons/Icons';

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
  onToggleMute?: (currentVolume?: number, reason?: 'button' | 'slider') => void;
  onUnmuteWithMaxVolume?: () => void;
  isMuted?: boolean;
  muteReason?: 'button' | 'slider' | null;
  onVolumeZero?: () => void;
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
  onToggleMute,
  onUnmuteWithMaxVolume,
  isMuted = false,
  muteReason,
  onVolumeZero,
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


        <div className={styles.mobileControls}>
          <button className={styles.mobilePlayBtn} onClick={(e) => { e.stopPropagation(); onTogglePlay(); }}>
            {isPlaying ? (
              <PauseIcon width={20} height={20} />
            ) : (
              <PlayIcon width={20} height={20} />
            )}
          </button>
          <button className={styles.mobileExpandBtn} onClick={(e) => onToggleExpanded(e)}>
            <Image
              src={ExpandIcon}
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
            <CloseIcon width={16} height={16} />
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
                    <MinusIcon width={16} height={16} />
                  ) : (
                    <PlusIcon width={16} height={16} />
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
                src={CollapseIcon}
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
              onToggleMute={onToggleMute}
              onUnmuteWithMaxVolume={onUnmuteWithMaxVolume}
              isMuted={isMuted}
              isMobile={true}
              muteReason={muteReason}
              onVolumeZero={onVolumeZero}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
