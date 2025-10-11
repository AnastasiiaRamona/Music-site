import Image from 'next/image';
import styles from './SocialLinks.module.css';

interface SocialLinksProps {
  spotifyLink?: string;
  appleMusicLink?: string;
  youtubeLink?: string;
  amazonLink?: string;
}

export default function SocialLinks({
  spotifyLink,
  appleMusicLink,
  youtubeLink,
  amazonLink
}: SocialLinksProps) {
  return (
    <div className={styles.socialLinks}>
      {spotifyLink && (
        <a href={spotifyLink} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <Image src="/assets/spotify.webp" alt="Spotify" width={24} height={24} unoptimized={true} />
        </a>
      )}
      {appleMusicLink && (
        <a href={appleMusicLink} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <Image src="/assets/apple-music.webp" alt="Apple Music" width={24} height={24} unoptimized={true} />
        </a>
      )}
      {youtubeLink && (
        <a href={youtubeLink} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <Image src="/assets/youtube-icon.webp" alt="YouTube" width={38} height={38} unoptimized={true} />
        </a>
      )}
      {amazonLink && (
        <a href={amazonLink} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <Image src="/assets/amazon.webp" alt="Amazon Music" width={24} height={24} unoptimized={true} />
        </a>
      )}
    </div>
  );
}
