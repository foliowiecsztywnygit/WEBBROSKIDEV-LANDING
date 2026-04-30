import { useState, useEffect } from 'react';
import GooeyButton from './ui/GooeyButton';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : styles.top}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#" className={styles.logo}>
          <img src="/logo.png" alt="WEBBROSKIDEV Logo" className={styles.logoImage} />
        </a>
        <nav className={styles.navLinks}>
          <a href="/#uslugi">Usługi</a>
          <a href="/#proces">Proces</a>
          <a href="/#portfolio">Realizacje</a>
          <div className={styles.navBtnWrapper}>
            <GooeyButton href="/#kontakt" variant="outline">Wycena</GooeyButton>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;