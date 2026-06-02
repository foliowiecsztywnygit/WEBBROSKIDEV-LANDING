import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brand}>
          <h2 className={styles.authorName}>Krzysztof Żebrowski</h2>
          <p className={styles.seoFooterText}>
            WEBBROSKIDEV — Nowoczesne strony www dla hoteli i firm. Działam lokalnie: Kraków, Zakopane, Podhale oraz zdalnie w całej Polsce.
          </p>
          <div className={styles.legalInfo}>
            <span>&copy; {new Date().getFullYear()} WEBBROSKIDEV</span>
            <span className={styles.separator}>|</span>
            <Link to="/regulamin">Regulamin</Link>
            <span className={styles.separator}>|</span>
            <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;