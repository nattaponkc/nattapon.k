import styles from '../styles/Header.module.css';

export const Header = () => {
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <span className={styles.logoDot} />
          ณัฐพล ฆ้องคำ
        </div>
        <ul className={styles.navList}>
          <li><a href="#home" onClick={smoothScroll}>Home</a></li>
          <li><a href="#about" onClick={smoothScroll}>About</a></li>
          <li><a href="#portfolio" onClick={smoothScroll}>Projects</a></li>
          <li><a href="#certification" onClick={smoothScroll}>Certifications</a></li>
          <li><a href="#contact" onClick={smoothScroll} className={styles.contactBtn}>Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
};
