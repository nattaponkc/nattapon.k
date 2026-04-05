import styles from '../styles/Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.tag}>
        <span className={styles.tagDot} />
        Available for work
      </div>

      <h1 className={styles.title}>
        Full-stack<br />
        <span className={styles.titleAccent}>Developer</span>
      </h1>

      <p className={styles.subtitle}>
        นักพัฒนาเว็บไซต์ด้วย TypeScript, React และ Next.js
        พร้อมประสบการณ์ IT Support และ Web Development
      </p>

      <div className={styles.buttonGroup}>
        <a href="#portfolio" className={styles.btnPrimary}>
          Projects &rarr;
        </a>
        <a href="#contact" className={styles.btnSecondary}>
          Contact Me
        </a>
      </div>

      <div className={styles.socialRow}>
        <a href="https://github.com/nattaponkc" className={styles.socialLink} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="mailto:nattapon.kongcoome@gmail.com" className={styles.socialLink}>
          Email
        </a>
        <a href="#contact" className={styles.socialLink}>
          Discord
        </a>
      </div>

      <div className={styles.scrollLine}>scroll</div>
    </section>
  );
};
