'use client';

import { useAudioPlayer } from '../../contexts/AudioPlayerContext';
import { useLyrics } from '../../contexts/LyricsContext';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import LyricsPanel from '../LyricsPanel/LyricsPanel';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const { isPlayerVisible, currentTrack, shouldAutoPlay, hidePlayer } = useAudioPlayer();
  const { isOpen, currentSongId, currentSongTitle, currentLyricsPath, closeLyrics } = useLyrics();

  return (
    <>
      {children}
      <AudioPlayer
        isVisible={isPlayerVisible}
        currentTrack={currentTrack}
        shouldAutoPlay={shouldAutoPlay}
        onClose={hidePlayer}
      />

      {isOpen && currentSongId && currentSongTitle && (
        <LyricsPanel
          isOpen={isOpen}
          onClose={closeLyrics}
          songId={currentSongId}
          songTitle={currentSongTitle}
          lyricsPath={currentLyricsPath || undefined}
        />
      )}
    </>
  );
}
