import styles from './page.module.css';
import LatestRelease from '@/components/LatestRelease/LatestRelease';
import AnimatedText from '@/components/AnimatedText/AnimatedText';
import ContactController from './ContactController.client';
import ScrollVar from './ScrollVar.client';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata = {
  alternates: {
    canonical: 'https://anastasiia-ramona.netlify.app/home',
  },
};

export default function Home() {
  const description = "Indie Dream Crafter";
  const latestReleaseText = "Grab the Latest Release";

  return <>
    <ScrollVar />
    <section>
      <div className={styles['layers']}>
        <h1 data-text="Anastasiia Ramona">Anastasiia Ramona</h1>
        <h2>
          <AnimatedText text={description} />
        </h2>
        <div className={`${styles.layer} ${styles['layer-base']}`}></div>
        <div className={`${styles.layer} ${styles['layer-table']}`}></div>
        <div className={`${styles.layer} ${styles['layer-bottom']}`}></div>
      </div>
    </section>

    <ContactController />

    <section className={styles['new-release-section']}>
      <div className={styles['layers']}>
        <h3><Link href="/music"><AnimatedText text={latestReleaseText} /></Link></h3>
        <div className={`${styles.layer} ${styles['layer-top']}`}></div>
        <div className={`${styles.layer} ${styles['layer-waves']}`}></div>
        <LatestRelease />
        <article className={styles['new-release-additional-text']}>
          <p>Close your eyes, you&apos;re already here <br />
            Nothing here is real, but it all feels familiar </p>
        </article>
      </div>
    </section>
  </>
}