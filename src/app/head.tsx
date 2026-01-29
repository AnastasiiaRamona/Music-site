import { getCriticalAssets, getCriticalAlbumCovers, getVideoAssets } from '../data/preloadConfig';

function guessAs(src: string): 'image' | 'font' | 'video' | 'audio' {
  if (src.endsWith('.otf') || src.endsWith('.woff') || src.endsWith('.woff2') || src.endsWith('.ttf')) return 'font';
  if (src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg')) return 'video';
  if (src.endsWith('.mp3') || src.endsWith('.opus') || src.endsWith('.wav')) return 'audio';
  return 'image';
}

function getFontType(src: string): string | undefined {
  if (src.endsWith('.otf')) return 'font/otf';
  if (src.endsWith('.woff2')) return 'font/woff2';
  if (src.endsWith('.woff')) return 'font/woff';
  if (src.endsWith('.ttf')) return 'font/ttf';
  return undefined;
}

export default function Head() {
  return (
    <>
      {getCriticalAssets().map((src) => {
        const as = guessAs(src);
        const fontType = as === 'font' ? getFontType(src) : undefined;
        return (
          <link
            key={src}
            rel="preload"
            href={src}
            as={as}
            fetchPriority="high"
            {...(as === 'font' && { crossOrigin: 'anonymous' })}
            {...(fontType && { type: fontType })}
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

