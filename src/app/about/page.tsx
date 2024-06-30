import artistSrc from '../../assets/image.webp';
import styles from './page.module.css';
import Image from 'next/image';
import { Vibes } from "next/font/google";

const vibes = Vibes({ weight: '400', subsets: ['latin'] });

export default function About() {
  return (
    <section className={styles.about}>
      <h2 className={`${vibes.className}`}>__MY NAME IS ANASTASIIA RAMONA__</h2>
      <div className={styles.hero}>
        <p className={styles.artistBio}>Anastasiia Ramona is an indie pop, dream pop, and synth pop project that was started by just one musician whose mind has been computerized. The musician explores topics of self-discovery, workaholism, burnout, inspiration, and love in her songs.</p>
        <div className={styles.artistImagesWrapper}>
          <div className={styles.artistImageWrapper}>
            <Image loading='lazy' src={artistSrc} alt="Artist" className={styles.artistImage} />
          </div>
        </div>
      </div>
    </section>
  );
}