import styles from '../styles/Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <p>&copy; 2025 <span>ณัฐพล ฆ้องคำ</span>. All rights reserved.</p>
      </div>

      <div className={styles.socialLinks}>
        <a
          href="https://github.com/nattaponkc"
          className={styles.socialLink}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a href="mailto:nattapon.kongcoome@gmail.com" className={styles.socialLink}>
          Email
        </a>
        <a href="#" className={styles.socialLink}>
          LinkedIn
        </a>
      </div>
    </footer>
  );
};
