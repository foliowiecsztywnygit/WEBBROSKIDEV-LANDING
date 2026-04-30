import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brand}>
          <h2 className={styles.authorName}>Krzysztof Żebrowski</h2>
          <div className={styles.legalInfo}>
            <span>&copy; {new Date().getFullYear()} WEBBROSKIDEV</span>
            <span className={styles.separator}>|</span>
            <a href="/regulamin">Regulamin</a>
            <span className={styles.separator}>|</span>
            <a href="/polityka-prywatnosci">Polityka prywatności</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;