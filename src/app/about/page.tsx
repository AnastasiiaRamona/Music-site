import styles from './page.module.css';
import Image from 'next/image';
import AboutClient from '@/components/AboutClient/AboutClient';
import { aboutData } from '@/data/aboutData';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.hero}>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/musician.webp"
            alt="Anastasiia Ramona"
            fill
            className={styles.mainImage}
            priority
            unoptimized
          />
        </div>
        <AboutClient
          artistBio={aboutData.artistBio}
          quotes={aboutData.quotes}
        />
      </div>
    </section>
  );
}
