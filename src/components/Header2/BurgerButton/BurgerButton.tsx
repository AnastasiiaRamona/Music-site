import styles from './BurgerButton.module.css';

type BurgerButtonProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export default function BurgerButton({ isOpen, toggleMenu }: BurgerButtonProps) {
  return (
    <button
      onClick={toggleMenu}
      className={`${styles.burgerButton} ${isOpen ? styles.active : ''}`}
    >
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </button>
  );
}
