import styles from './page.module.css';
import Image from 'next/image';
import AboutClient from '@/components/AboutClient/AboutClient';
import BackButton from '@/components/BackButton/BackButton';
import { aboutData } from '@/data/aboutData';

export const dynamic = 'force-static';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.hero}>
        <div style={{ position: 'absolute', top: '2rem', left: '2rem', zIndex: 100 }}>
          <BackButton />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/musician-1.webp"
            alt="Anastasiia Ramona"
            fill
            className={styles.mainImage}
            priority
            sizes="(max-width: 564px) 100vw, (max-width: 840px) 100vw, (max-width: 896px) 50vw, 960px"
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
