import { useEffect, useRef, useState } from 'react';
import SectionSubtitle from './ui/SectionSubtitle';
import styles from './RotatingProcess.module.css';

const steps = [
  { id: '01', title: 'Rozmowa', desc: 'Najczęściej zaczynamy od zera: bez gotowej strony, bez planu i bez technicznego chaosu. Pokazuję Ci, co będzie potrzebne, porządkuję materiały i ustawiam prostą drogę do <strong>większej liczby zapytań</strong>.' },
  { id: '02', title: 'Strategia', desc: 'Układam stronę tak, żeby gość od razu rozumiał ofertę, widział pokoje lub apartamenty i wiedział, co zrobić dalej. Dzięki temu projekt od początku pracuje pod <strong>kontakt albo rezerwację</strong>, a nie tylko pod wygląd.' },
  { id: '03', title: 'Projekt', desc: 'Tworzę czytelny projekt z mocnym pierwszym ekranem, sensowną kolejnością sekcji i prostą ścieżką decyzji. Wszystko po to, żeby Twoja oferta wyglądała wiarygodnie i <strong>łatwiej zamieniała wejścia na konkret</strong>.' },
  { id: '04', title: 'Wdrożenie', desc: 'Po dostarczeniu materiałów i sprawnej współpracy strona najczęściej jest gotowa w około tydzień. Na końcu testuję wersję mobilną, dopinam formularze lub rezerwację i oddaję Ci stronę, z którą możesz normalnie ruszyć do sprzedaży.' }
];

const RotatingProcess = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableDistance = Math.max(rect.height - window.innerHeight, 1);
      const scrolled = Math.min(Math.max(-rect.top, 0), scrollableDistance);
      const rawProgress = scrolled / scrollableDistance;
      const fillCompleteAt = 0.82;
      const nextProgress = Math.min(rawProgress / fillCompleteAt, 1);
      setProgress(nextProgress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const activeIndex = Math.min(
    steps.length - 1,
    Math.floor(progress * steps.length)
  );
  const activeStep = steps[activeIndex];
  const progressWidth = `${progress * 100}%`;

  return (
    <section id="proces" className={styles.section} ref={sectionRef}>
      <div className={styles.stickyWrapper}>
        <div className={`container ${styles.container}`}>
          <div className={styles.header}>
            <SectionSubtitle>Jak wygląda wdrożenie</SectionSubtitle>
            <h2 className={`heading-lg ${styles.mainTitle}`}>Od startu bez strony do gotowego wdrożenia, które pomaga zbierać więcej zapytań</h2>
            <p className={styles.lead}>
              Najczęściej pracuję z klientami, którzy dopiero ruszają z nową stroną albo chcą w końcu mieć stronę, która prowadzi gościa do kontaktu. Tutaj widzisz cały proces krok po kroku, bez zgadywania co będzie dalej.
            </p>
          </div>

          <div className={styles.progressSection}>
            <div className={styles.track}>
              <div className={styles.fill} style={{ width: progressWidth }} />
              {steps.map((step, index) => {
                const position = (index / (steps.length - 1)) * 100;
                const isActive = index <= activeIndex;
                const isCurrent = index === activeIndex;

                return (
                  <div
                    key={step.id}
                    className={`${styles.stop} ${isActive ? styles.stopActive : ''} ${isCurrent ? styles.stopCurrent : ''}`}
                    style={{ left: `${position}%` }}
                  >
                    <span className={styles.stopDot}></span>
                    <span className={styles.stopLabel}>{step.title}</span>
                  </div>
                );
              })}
            </div>

            <article className={styles.activeCard}>
              <span className={styles.activeId}>{activeStep.id}.</span>
              <h3 className={styles.activeTitle}>{activeStep.title}</h3>
              <p
                className={styles.activeDesc}
                dangerouslySetInnerHTML={{ __html: activeStep.desc }}
              />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RotatingProcess;
