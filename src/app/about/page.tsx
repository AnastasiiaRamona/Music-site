import styles from './page.module.css';
import Image from 'next/image';
import AboutClient from '@/components/AboutClient/AboutClient';
import BackButton from '@/components/BackButton/BackButton';
import { aboutData } from '@/data/aboutData';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.hero}>
        <BackButton />
        <div className={styles.imageContainer}>
          <Image
            src="/assets/musician-1.webp"
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
