import { useEffect, useRef, useState } from 'react';
import SectionSubtitle from './ui/SectionSubtitle';
import styles from './RotatingProcess.module.css';

const steps = [
  { id: '01', title: 'Kontakt', desc: 'Opowiedz mi o <strong>swojej wizji</strong> i celu strony.' },
  { id: '02', title: 'Umowa', desc: 'Podpisujemy umowę przez platformę UseMe, Zbieramy Materiały i <strong>ustalamy szczegóły</strong> działania. ' },
  { id: '03', title: 'Projekt', desc: 'Tworzę dedykowany design i <strong>czysty kod</strong> od zera. Bez kompromisów.' },
  { id: '04', title: 'Wdrożenie', desc: 'Ostatnie szlify, testy optymalizacji, wyświetlania na wszystkich urządzeniach i <strong>start online</strong>.' }
];

const RotatingProcess = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Wygładzanie (Lerp)
  const currentProgressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const calculateTarget = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const distance = rect.height - windowHeight;
      const scrolled = -rect.top;

      let p = scrolled / distance;
      p = Math.max(0, Math.min(1, p));

      // Funkcja "schodkowa" (snap curve) dla efektu magnetycznego
      const segments = steps.length - 1; // 3 segmenty: 0->1, 1->2, 2->3
      let v = p * segments;
      let step = Math.floor(v);
      if (step >= segments) {
        step = segments;
        v = segments;
      }
      let f = v - step;
      
      let smoothedF = 0;
      if (step < segments) {
        // Zwiększamy strefę "przyklejenia" do 25% na każdym końcu segmentu
        if (f < 0.25) smoothedF = 0;
        else if (f > 0.75) smoothedF = 1;
        else {
          // Mapujemy 0.25 - 0.75 na 0 - 1
          let t = (f - 0.25) / 0.5;
          // Płynne przejście ease-in-out
          smoothedF = t * t * (3 - 2 * t);
        }
      }
      
      targetProgressRef.current = (step + smoothedF) / segments;
    };

    const updateLoop = () => {
      // Lerp
      currentProgressRef.current += (targetProgressRef.current - currentProgressRef.current) * 0.05;
      
      if (Math.abs(currentProgressRef.current - targetProgressRef.current) > 0.0001) {
        setProgress(currentProgressRef.current);
      }
      
      rafRef.current = requestAnimationFrame(updateLoop);
    };

    const handleScroll = () => calculateTarget();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });
    
    calculateTarget();
    updateLoop();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Logika 4 kroków. Progress 0-1 dzielimy na 3 segmenty (0-0.33, 0.33-0.66, 0.66-1.0)
  // jeśli chcemy tylko 270 stopni obrotu.
  // Ale załóżmy, że mapujemy scroll na 360 stopni dla pełnego obrotu, z czego używamy 4 etapów (0, 90, 180, 270).
  // Aby zatrzymać się na ostatnim etapie (270 deg) przed odpięciem sekcji, obrót to progress * 270.
  // Dzięki temu progress 0 to krok 1 (0 deg), progress 0.33 to krok 2 (90 deg), itd.
  // W calculation target użyliśmy `segments = steps.length - 1` (czyli 3).
  
  // Przeliczenie indeksu: progress idzie od 0 do 1. Mnożymy przez (steps.length - 1).
  let activeIndex = Math.round(progress * (steps.length - 1));
  if (activeIndex >= steps.length) activeIndex = steps.length - 1;

  // Obrót koła. Przemnożenie przez 270 stopni (3 * 90)
  const rotation = progress * 270; 

  return (
    <section id="proces" className={styles.section} ref={sectionRef}>
      <div className={styles.stickyWrapper}>
        <div className={`container ${styles.container}`}>
          
          <div className={styles.leftContent}>
            <SectionSubtitle>Proces Współpracy</SectionSubtitle>
            <h2 className={`heading-lg ${styles.mainTitle}`}>Jak wygląda<br/>współpraca</h2>
            
            <div className={styles.activeDetails}>
              <span className={styles.activeId}>{steps[activeIndex].id}.</span>
              <h3 className={styles.activeTitle}>{steps[activeIndex].title}</h3>
              <p 
                className={styles.activeDesc} 
                dangerouslySetInnerHTML={{ __html: steps[activeIndex].desc }}
              />
            </div>
          </div>

          <div className={styles.rightContent}>
            <div className={styles.circleWrapper}>
              <div 
                className={styles.circle} 
                style={{ transform: `rotate(${-rotation}deg)` }}
              >
                {/* Ozdobne pierścienie i szprychy dla efektu "koła z outline'ów" */}
                <div className={styles.ring} style={{ width: '80%', height: '80%' }}></div>
                <div className={styles.ring} style={{ width: '60%', height: '60%' }}></div>
                <div className={styles.ring} style={{ width: '40%', height: '40%' }}></div>
                <div className={styles.ring} style={{ width: '20%', height: '20%' }}></div>
                <div className={styles.spoke} style={{ transform: 'rotate(0deg)' }}></div>
                <div className={styles.spoke} style={{ transform: 'rotate(45deg)' }}></div>
                <div className={styles.spoke} style={{ transform: 'rotate(90deg)' }}></div>
                <div className={styles.spoke} style={{ transform: 'rotate(135deg)' }}></div>

                {steps.map((step, index) => {
                  // Pozycjonowanie matematyczne na obwodzie (0, 90, 180, 270)
                  // Przesunięcie o 180deg, by pierwszy element był od razu po lewej (widoczny)
                  const angle = (index * 90) + 180;
                  
                  // Tekst ma być zorientowany wzdłuż promienia (do środka)
                  // Dodajemy obrót o 180deg, aby na lewej krawędzi był czytelny (poziomy)
                  const isActive = index === activeIndex;

                  return (
                    <div
                      key={step.id}
                      style={{ 
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${angle}deg) translate(var(--radius, 400px)) rotate(180deg)`
                      }}
                    >
                      <div 
                        className={`${styles.station} ${isActive ? styles.stationActive : ''}`}
                        style={{ transform: 'translate(-50%, -50%)' }}
                      >
                        <span className={styles.stationTitle}>{step.title}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RotatingProcess;