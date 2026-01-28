'use client';

import { useEffect } from 'react';
import { getCriticalAssets, getCriticalAlbumCovers, getVideoAssets } from '../../data/preloadConfig';

function guessAs(src: string): 'image' | 'font' | 'video' | 'audio' {
  if (src.endsWith('.otf') || src.endsWith('.woff') || src.endsWith('.woff2') || src.endsWith('.ttf')) return 'font';
  if (src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg')) return 'video';
  if (src.endsWith('.mp3') || src.endsWith('.opus') || src.endsWith('.wav')) return 'audio';
  return 'image';
}

export default function PreloadLinks() {
  useEffect(() => {
    getCriticalAssets().forEach((src) => {
      const as = guessAs(src);
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = as;
      link.setAttribute('fetchpriority', 'high');
      if (as === 'font') {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });

    getCriticalAlbumCovers().forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
    });

    getVideoAssets().forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'video';
      link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
    });
  }, []);

  return null;
}
