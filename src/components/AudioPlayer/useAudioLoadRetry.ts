'use client';

import { useEffect, useRef, RefObject } from 'react';

interface TrackWithAudio {
  albumId: string;
  audioSrc: string;
}

/**
 * Retries loading the audio source once on error (e.g. ERR_HTTP2_PROTOCOL_ERROR on Netlify CDN).
 * Call this hook with the audio element ref and current track.
 */
export function useAudioLoadRetry(
  audioRef: RefObject<HTMLAudioElement | null>,
  currentTrack: TrackWithAudio | null
) {
  const retryTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasRetriedForTrackRef = useRef<string | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;

    hasRetriedForTrackRef.current = null;

    const handleError = () => {
      const trackId = currentTrack.albumId;
      if (hasRetriedForTrackRef.current === trackId) return;

      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
        retryTimeoutRef.current = null;
      }

      hasRetriedForTrackRef.current = trackId;
      retryTimeoutRef.current = setTimeout(() => {
        retryTimeoutRef.current = null;
        audio.src = '';
        audio.src = currentTrack.audioSrc;
      }, 1200);
    };

    audio.addEventListener('error', handleError);
    return () => {
      audio.removeEventListener('error', handleError);
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
        retryTimeoutRef.current = null;
      }
    };
  }, [currentTrack]);
}
