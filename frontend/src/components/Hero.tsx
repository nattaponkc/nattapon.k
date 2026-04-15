import styles from '../styles/Hero.module.css';
import { AnimatedBackground } from './AnimatedBackground';

export const Hero = () => {
  return (
    <>
      <AnimatedBackground />
      <section className={styles.hero} id="home">
        <div className={styles.tag}>
          <span className={styles.tagDot} />
          Available for work
        </div>

        <h1 className={styles.title}>
          <span className={styles.titlePart1}>NATTA</span><span className={styles.titlePart2}>PON</span>
          <br />
          <span className={styles.titlePart3}>KONGCOME</span>
        </h1>

        <p className={styles.subtitle}>
          Web Developer.
          Backend Rigor & Frontend Interactivity.
          Seeking graduation opportunities.
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
            Line
          </a>
        </div>

        <div className={styles.scrollLine}>scroll</div>
      </section>
    </>
  );
};
