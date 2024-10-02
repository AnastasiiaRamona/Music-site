import Image, { StaticImageData } from 'next/image';
import styles from './SocialMediaButton.module.css';

type SocialMediaButtonProps = {
  url: StaticImageData;
  alt: string;
  href: string;
}

export default function SocialMediaButton({ url, alt, href }: SocialMediaButtonProps) {
  return (
    <a href={href} target="_blank" className={styles['social-media-button']}>
      <Image loading='lazy' unoptimized={true} src={url} alt={alt} className={styles['social-media-button__image']}/>
    </a>
  );
}