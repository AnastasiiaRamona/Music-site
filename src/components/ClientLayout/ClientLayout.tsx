'use client';

import { useAudioPlayer } from '../../contexts/AudioPlayerContext';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const { isPlayerVisible, currentTrack, shouldAutoPlay, hidePlayer } = useAudioPlayer();

  return (
    <>
      {children}
      <AudioPlayer
        isVisible={isPlayerVisible}
        currentTrack={currentTrack}
        shouldAutoPlay={shouldAutoPlay}
        onClose={hidePlayer}
      />
    </>
  );
}
