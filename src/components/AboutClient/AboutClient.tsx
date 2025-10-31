'use client';

import AnimatedText from '@/components/AnimatedText/AnimatedText';
import styles from './AboutClient.module.css';

interface Quote {
  text: string;
  magazine: string;
}

interface AboutClientProps {
  artistBio: string;
  quotes: Quote[];
}

export default function AboutClient({ artistBio, quotes }: AboutClientProps) {
  return (
    <div className={styles.content}>
      <h2 className={styles.clawmarkFont}>
        About me
      </h2>
      <p className={styles.artistBio}>{artistBio}</p>
      <div className={styles.quotesSection}>
        {quotes.map((quote, index) => (
          <div key={index} className={styles.quoteBlock}>
            <blockquote className={styles.quoteText}>
              &ldquo;{quote.text}&rdquo;
            </blockquote>
            <cite className={styles.magazineName}>
              — {quote.magazine}
            </cite>
          </div>
        ))}
      </div>
    </div>
  );
}
