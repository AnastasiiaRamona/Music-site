import { getCriticalAssets, getCriticalAlbumCovers, getVideoAssets } from '../data/preloadConfig';

function guessAs(src: string): 'image' | 'font' | 'video' | 'audio' {
  if (src.endsWith('.otf') || src.endsWith('.woff') || src.endsWith('.woff2') || src.endsWith('.ttf')) return 'font';
  if (src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg')) return 'video';
  if (src.endsWith('.mp3') || src.endsWith('.opus') || src.endsWith('.wav')) return 'audio';
  return 'image';
}

export default function Head() {
  return (
    <>
      {getCriticalAssets().map((src) => {
        const as = guessAs(src);
        return (
          <link
            key={src}
            rel="preload"
            href={src}
            as={as}
            fetchPriority="high"
            {...(as === 'font' && { crossOrigin: 'anonymous' })}
          />
        );
      })}

      <link
        rel="preload"
        href="/assets/musician-1.webp"
        as="image"
        fetchPriority="high"
      />

      {getCriticalAlbumCovers().map((src) => (
        <link
          key={src}
          rel="preload"
          href={src}
          as="image"
          fetchPriority="high"
        />
      ))}

      {getVideoAssets().map((src) => (
        <link
          key={src}
          rel="preload"
          href={src}
          as="video"
          fetchPriority="high"
        />
      ))}
    </>
  );
}

