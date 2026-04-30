import { useEffect } from 'react';
import Waves from './ui/waves';
import GooeyButton from './ui/GooeyButton';
import SectionSubtitle from './ui/SectionSubtitle';
import styles from './Hero.module.css';

const Hero = () => {
  useEffect(() => {
    // Prosta animacja on mount dla Hero
    const elements = document.querySelectorAll(`.${styles.heroContent} .fade-in`);
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('is-revealed');
      }, index * 150);
    });
  }, []);

  return (
    <section className={`${styles.hero} bg-grid`}>
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1, pointerEvents: 'auto', opacity: 0.6 }}>
        <Waves 
          lineColor="rgba(255, 255, 255, 0.3)" 
          backgroundColor="transparent" 
          waveSpeedX={0.02} 
          waveSpeedY={0.01} 
          waveAmpX={40} 
          waveAmpY={20} 
          friction={0.5} 
          tension={0.01} 
          maxCursorMove={40} 
          xGap={12} 
          yGap={36} 
        />
      </div>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <div className="fade-in reveal">
            <SectionSubtitle>Profesjonalny Webdesign</SectionSubtitle>
          </div>
          <h1 className={`heading-xl ${styles.title} fade-in reveal delay-100`}>
            ZAMIENIAM <span className={styles.artisticWord}>Pomysły</span> W COŚ CO <strong>WIDAĆ</strong>
          </h1>
          <div className={`${styles.actions} fade-in reveal delay-300`}>
            <GooeyButton href="/#kontakt" variant="outline">Darmowa wycena</GooeyButton>
            <GooeyButton href="/#portfolio" variant="outline">Zobacz realizacje</GooeyButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;