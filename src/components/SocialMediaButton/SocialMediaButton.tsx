import Image from 'next/image';
import styles from './SocialMediaButton.module.css';

type SocialMediaButtonProps = {
  url: string;
  alt: string;
  href: string;
  tooltip: string;
};

export default function SocialMediaButton({ url, alt, href, tooltip }: SocialMediaButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      className={styles['social-media-button']}
      title={tooltip}
    >
      <Image
        loading="lazy"
        unoptimized={true}
        src={url}
        alt={alt}
        className={styles['social-media-button__image']}
        width={30}
        height={30}
      />
    </a>
  );
}
