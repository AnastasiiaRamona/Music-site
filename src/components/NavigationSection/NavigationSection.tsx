import Link from 'next/link'
import styles from './NavigationSection.module.css'

export default function NavigationSection() {
  return <section className={styles['navigation-section']}>
    <nav className={styles['site-navigation']}>
      <ul>
        <li><Link href="/music" rel="preload">
          Music</Link></li>
        <li><Link href="/covers" rel="preload">
          Covers</Link></li>
        <li><Link href="/about" rel="preload">
          About</Link></li>
        <li><Link href="/contact" rel="preload">
          Contact</Link></li>
      </ul>
    </nav>
  </section>
}