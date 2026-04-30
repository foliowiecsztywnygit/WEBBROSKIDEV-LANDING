import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionSubtitle from './ui/SectionSubtitle';
import GooeyButton from './ui/GooeyButton';
import styles from './AboutMe.module.css';

const AboutMe = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="o-mnie" className={`section ${styles.aboutMe}`} ref={revealRef}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.left} reveal fade-in`}>
          <SectionSubtitle>Kim jestem?</SectionSubtitle>
        </div>
        
        <div className={`${styles.right} reveal fade-in delay-100`}>
          <div className={styles.textContent}>
            <p>
              Cześć, nazywam się <strong>Krzysztof Żebrowski</strong>. Od najmłodszych lat jestem związany z komputerami, a dziś jako <strong>freelancer i projektant</strong> łączę <strong>nowoczesny design</strong>, branding i topowe technologie, takie jak <strong>React czy Node</strong>. Tworzę <strong>ultraszybkie i dopracowane</strong> strony oraz aplikacje webowe, które bez zbędnych kompromisów pomagają wyróżnić Twój biznes w sieci.
            </p>
            <p>
              Poza pracą nieustannie szukam wyzwań — <strong>trenuję siłowo</strong>, wspinam się na boulderach i w górach, a adrenalinę odnajduję jeżdżąc na elektrycznych crossach. Tę <strong>samą energię i konsekwencję</strong> przenoszę do projektów, w których przekuwam odważne pomysły w <strong>unikalne, wydajne i zyskowne doświadczenia online</strong>.
            </p>
          </div>
          
          <div className={styles.actions}>
            <GooeyButton href="/#kontakt" variant="primary">Umów Bezpłatną Konsultację</GooeyButton>
            <GooeyButton href="/#portfolio" variant="outline">Poznaj Moje Prace</GooeyButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
