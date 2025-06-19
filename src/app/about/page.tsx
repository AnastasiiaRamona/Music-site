import artistSrc from '../../assets/image.webp';
import styles from './page.module.css';
import Image, { StaticImageData } from 'next/image';
import { Vibes } from 'next/font/google';

const vibes = Vibes({ weight: '400', subsets: ['latin'] });

type ImageData = {
  src: StaticImageData;
  alt: string;
  className: string;
  unoptimized: boolean;
};

function ImageComponent({ src, alt, className }: ImageData) {
  return <Image loading="lazy" src={src} alt={alt} className={className} placeholder="blur" />;
}

export default function About() {
  const artistBio =
    'Anastasiia Ramona is an indie pop, dream pop, and synth pop project that was started by just one musician whose mind has been computerized. The musician explores topics of self-discovery, workaholism, burnout, inspiration, and love in her songs.';

  return (
    <section className={styles.about}>
      <h2 className={vibes.className}>MY NAME IS ANASTASIIA RAMONA</h2>
      <div className={styles.hero}>
        <p className={styles.artistBio}>{artistBio}</p>
        <div className={styles.artistImagesWrapper}>
          <div className={styles.artistImageWrapper}>
            <ImageComponent
              src={artistSrc}
              alt="Artist"
              className={styles.artistImage}
              unoptimized={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
