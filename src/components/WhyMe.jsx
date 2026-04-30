import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionSubtitle from './ui/SectionSubtitle';
import styles from './WhyMe.module.css';
import GooeyButton from './ui/GooeyButton';

const reasons = [
  { 
    id: 1,
    title: 'Bez Pośredników', 
    desc: 'Pracujesz bezpośrednio z inżynierem. Brak agencji i powolnej komunikacji. Jestem pod telefonem dla ciebie.',
    number: '01',
    colorClass: styles.colorBlue
  },
  { 
    id: 2,
    title: 'Brak WordPress Chaosu', 
    desc: 'Czysty React i nowoczesny stack. Zapomnij o wtyczkach i aktualizacjach.',
    number: '02',
    colorClass: styles.colorOrange
  },
  { 
    id: 3,
    title: 'Kompleksowe Rozwiązanie', 
    desc: 'Kod pisany od zera. <strong>Zero szablonów</strong> i spowolnień. Cała technologia jest po mojej stronie a ty zajmujesz się tym co ważne.',
    number: '03',
    colorClass: styles.colorGreen
  },
  { 
    id: 4,
    title: 'Szybkość i SEO', 
    desc: 'Optymalizacja SEO, Google Search Console, Strony ładują się w mgnieniu oka.',
    number: '04',
    colorClass: styles.colorPurple
  }
];

const WhyMe = () => {
  const revealRef = useScrollReveal();

  return (
    <section className={`section ${styles.whyme}`} ref={revealRef}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.headerWrapper} reveal fade-in`}>
          <div className={styles.headerRight}>
            <h2 className={`heading-lg ${styles.title}`}>Dlaczego współpraca<br/>ze mną?</h2>
          </div>
        </div>
        
        <div className={styles.contentWrapper}>
          
          <GooeyButton variant="outline" href="/#kontakt">Kontakt</GooeyButton>
          
          {/* Kolumna prawa - asymetryczny grid kafelków */}
          <div className={styles.rightColumn}>
            <div className={styles.row}>
              <div className={`${styles.cardWrapper} reveal fade-in delay-200`}>
                <div className={`${styles.card} ${reasons[0].colorClass} ${styles.tiltLeft}`}>
                  <span className={styles.cardNumber}>{reasons[0].number}</span>
                  <div className={styles.cardContent}>
                    <p dangerouslySetInnerHTML={{ __html: reasons[0].desc }}></p>
                  </div>
                </div>
              </div>
              <div className={`${styles.cardWrapper} ${styles.pushDown} reveal fade-in delay-300`}>
                <div className={`${styles.card} ${reasons[1].colorClass} ${styles.tiltRight}`}>
                  <span className={styles.cardNumber}>{reasons[1].number}</span>
                  <div className={styles.cardContent}>
                    <p dangerouslySetInnerHTML={{ __html: reasons[1].desc }}></p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.row}>
              <div className={`${styles.cardWrapper} ${styles.pullUp} reveal fade-in delay-400`}>
                <div className={`${styles.card} ${reasons[2].colorClass} ${styles.tiltLeftMore}`}>
                  <span className={styles.cardNumber}>{reasons[2].number}</span>
                  <div className={styles.cardContent}>
                    <p dangerouslySetInnerHTML={{ __html: reasons[2].desc }}></p>
                  </div>
                </div>
              </div>
              <div className={`${styles.cardWrapper} reveal fade-in delay-500`}>
                <div className={`${styles.card} ${reasons[3].colorClass} ${styles.tiltRightMore}`}>
                  <span className={styles.cardNumber}>{reasons[3].number}</span>
                  <div className={styles.cardContent}>
                    <p dangerouslySetInnerHTML={{ __html: reasons[3].desc }}></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.bottom} reveal fade-in delay-400`}>
          <a href="/#proces" className={styles.microCta}>
            Poznaj proces wdrożenia <span className={styles.arrow}>↑</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;