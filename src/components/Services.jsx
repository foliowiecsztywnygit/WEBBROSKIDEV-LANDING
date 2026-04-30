import { useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GooeyButton from './ui/GooeyButton';
import SectionSubtitle from './ui/SectionSubtitle';
import styles from './Services.module.css';

const services = [
  {
    title: 'Strony Wizytówki',
    description: 'Proste, ale wyraziste wizytówki online. <strong>Pokaż się</strong> z najlepszej strony i buduj wiarygodność.',
    number: '01.',
    categories: ['Landing Page', 'Portfolio', 'Strona z kursami']
  },
  {
    title: 'Strony Firmowe',
    description: 'Wszelkiego rodzaju wizytówki dla biznesu. Pokaż się z najlepszej strony i <strong>buduj trwałe zaufanie</strong> klientów.',
    number: '02.',
    categories: ['Serwisy korporacyjne', 'Katalogi produktów', 'Blogi firmowe', 'Wizytówka firmy']
  },
  {
    title: 'Strony dla Pensjonatów',
    description: 'Prestiżowy design dla branży noclegowej. Wyróżnij swój obiekt i <strong>zwiększ liczbę rezerwacji</strong>.',
    number: '03.',
    categories: ['Hotele', 'Apartamenty', 'Agroturystyka', 'Ośrodki wypoczynkowe']
  },
  {
    title: 'Integracje Hotres',
    description: 'Oszczędzaj na rezerwacjach online. Wdrażam systemy rezerwacji działające <strong>bez żadnych przerw</strong>.',
    number: '04.',
    categories: ['Booking Engine', 'Channel Manager', 'Płatności online', 'Automatyzacja rezerwacji', 'Rezerwacje bezpośrednie']
  }
];

const Services = () => {
  const revealRef = useScrollReveal();
  const containerRef = useRef(null);
  const titlesRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const windowHeight = window.innerHeight;
      
      titlesRef.current.forEach((titleEl, index) => {
        if (!titleEl) return;
        
        // Zdobądź pozycję karty powiązanej z danym tytułem
        const card = titleEl.closest(`.${styles.card}`);
        if (!card) return;
        
        const rect = card.getBoundingClientRect();
        
        // Animacja wypełniania zaczyna się, gdy karta wejdzie do viewportu,
        // a kończy, gdy dojdzie do samej góry (rect.top = 0)
        // Kiedy rect.top == windowHeight -> progress = 0
        // Kiedy rect.top == 0 -> progress = 1
        let progress = 1 - (rect.top / windowHeight);
        
        // Zabezpieczenie wartości między 0 a 1
        progress = Math.max(0, Math.min(1, progress));
        
        // Przekładamy postęp na pozycję background-position (0 do 100%)
        const bgPosition = progress * 100;
        
        // Zmienione na oś X: '0 0' (początek) do '100% 0' (koniec), ale by fill szedł od lewej do prawej
        // background size to 200% 100%, więc aby tekst wypełniał się od lewej, background position musi iść od 100% do 0%
        titleEl.style.backgroundPosition = `${100 - bgPosition}% 0`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Inicjalne wywołanie
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="uslugi" className={`section ${styles.services}`} ref={revealRef}>
      <div className={styles.headerWrapper}>
        <div className={`${styles.header} reveal fade-in`}>
          <SectionSubtitle>Moje usługi</SectionSubtitle>
          <h2 className={`heading-lg ${styles.title}`}>Co mogę dla Ciebie zrobić?</h2>
          <p className="text-lg">Specjalizacje dopasowane do <strong>Twoich potrzeb</strong>.</p>
        </div>
      </div>
        
      <div className={styles.cardsContainer} ref={containerRef}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={styles.card}
              style={{ zIndex: index + 1, top: `${index * 30}px` }}
            >
              <div className={styles.cardInner}>
                <div className={styles.number}>{service.number}</div>
                <div className={styles.cardContent}>
                  <h3 
                    className={styles.cardTitle}
                    ref={el => titlesRef.current[index] = el}
                  >
                    {service.title}
                  </h3>
                  <p className={styles.cardDescription} dangerouslySetInnerHTML={{ __html: service.description }}></p>
                  
                  <div className={styles.buttonWrapper}>
                    <GooeyButton href="#kontakt" variant="outline">Sprawdź</GooeyButton>
                  </div>
                  
                  <div className={styles.categories}>
                    {service.categories.map((cat, i) => (
                      <span key={i} className={styles.categoryTag}>{cat}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Services;