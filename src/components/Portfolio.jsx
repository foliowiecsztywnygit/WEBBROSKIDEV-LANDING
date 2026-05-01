import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GooeyButton from './ui/GooeyButton';
import SectionSubtitle from './ui/SectionSubtitle';
import styles from './Portfolio.module.css';

const projects = [
  { 
    id: 1,
    title: 'Meble Maku',
    description: 'Lekka Wizytówka Firmowa dla pracowni stolarskiej Meble Maku, Nacisk na obszerną galerię oraz czytelność na wszystkich urządzeniach.',
    categories: ['Wizytówka Firmowa', 'Strona Wizerunkowa'],
    image: '/meblemakupl.png',
    link: 'https://meblemaku.pl'
  },
  { 
    id: 2,
    title: 'Willa Rysy',
    description: 'Elegancka i profesjonalna strona dla Willi Rysy z góralskimi akcentami.',
    categories: ['Strona Internetowa', 'Branża Hotelarska'],
    image: '/willarysy.png',
    link: 'https://willa-rysy.pl'
  },
  { 
    id: 3,
    title: 'Willa 14',
    description: 'Prosta strona dla Willa 14, nastawiona na minimalny układ i proste CTA. Glassmorphizm i efekt śniegu / lodu na przyciskach i elementach.',
    categories: ['Willa Górska', 'Wizytówka'],
    image: '/willa-14.png',
    link: 'https://willa-14.pl'
  }
];

const Portfolio = () => {
  const revealRef = useScrollReveal();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="portfolio" className={`section ${styles.portfolio}`} ref={revealRef}>
      <div className={`container ${styles.container}`}>
        
        <div className={`${styles.header} reveal fade-in`}>
          <div className={styles.headerLeft}>
            <SectionSubtitle>Wybrane Prace</SectionSubtitle>
            <h2 className={`heading-lg ${styles.title}`}>Ostatnie Projekty</h2>
          </div>
          
          <div className={styles.navigation}>
            <button className={styles.navButton} onClick={prevProject} aria-label="Poprzedni projekt">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <button className={styles.navButton} onClick={nextProject} aria-label="Następny projekt">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
        
        {/* Kontener karuzeli przeładowujący się animacją na podstawie ID projektu */}
        <div className={`${styles.carousel} reveal fade-in delay-100`} key={currentProject.id}>
          <div className={styles.imageColumn}>
            {currentProject.image ? (
              <img src={currentProject.image} alt={currentProject.title} className={styles.image} />
            ) : (
              <div className={styles.placeholder}>Brak zdjęcia mockupu</div>
            )}
          </div>
          
          <div className={styles.contentColumn}>
            <div className={styles.categories}>
              {currentProject.categories.map((cat, i) => (
                <span key={i} className={styles.categoryTag}>{cat}</span>
              ))}
            </div>
            
            <p className={styles.projectDescription}>{currentProject.description}</p>
            <h3 className={styles.projectTitle}>{currentProject.title}</h3>
            
            <div className={styles.actions}>
              <GooeyButton variant="outline" href={currentProject.link}>Zobacz stronę</GooeyButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
