'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './BackButton.module.css';

interface BackButtonProps {
  href?: string;
  children?: React.ReactNode;
}

export default function BackButton({
  href = '/',
  children = '← Back'
}: BackButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        delay: 2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      style={{ display: 'inline-block', zIndex: 9999 }}
    >
      <Link href={href} className={styles.backButton}>
        {children}
      </Link>
    </motion.div>
  );
}
