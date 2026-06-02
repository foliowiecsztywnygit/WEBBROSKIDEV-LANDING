import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionSubtitle from './ui/SectionSubtitle';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: 'Jak zintegrować Hotres ze stroną internetową?',
    answer: 'Integracja systemu Hotres pozwala na uruchomienie bezpośrednich rezerwacji noclegów bez prowizji dla pośredników. Wdrażam ją bezpośrednio w kodzie strony React, zapewniając pełną responsywność i wysoki współczynnik konwersji. Dzięki temu zyskujesz niezależność od portali typu Booking.com.'
  },
  {
    question: 'Co powinna zawierać skuteczna strona dla pensjonatu lub hotelu?',
    answer: 'Skuteczna strona www dla branży hotelarskiej musi posiadać intuicyjny system rezerwacji online (np. Hotres), szybki czas ładowania (kluczowe dla Core Web Vitals), mobilny design (RWD), integrację z mapami Google oraz silne akcenty Social Proof (opinie gości i przejrzysta galeria pokoi).'
  },
  {
    question: 'Ile trwa stworzenie dedykowanej strony internetowej?',
    answer: 'Czas realizacji zależy od stopnia skomplikowania projektu. Proste wizytówki online typu Landing Page tworzę zazwyczaj w 3-7 dni od przesłania materiałów. W przypadku integracji z własnym systemem rezerwacji zajmuje mi to trochę więcej czasu.'
  },
  {
    question: 'Czy moje strony będą widoczne w Google (SEO)?',
    answer: 'Tak! Każdy projekt, który tworzę, przechodzi optymalizację techniczną SEO i On-Page. Osobiście dbam o poprawne tagi HTML (H1-H6, Meta Title, Meta Description), szybki hosting, mapy witryny XML oraz dane strukturalne JSON-LD. Stanowi to świetną bazę pod dalsze pozycjonowanie lokalne i ogólnopolskie.'
  }
];

const FAQ = () => {
  const revealRef = useScrollReveal();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className={`section ${styles.faqSection}`} ref={revealRef}>
      <div className="container">
        <div className={styles.header}>
          <SectionSubtitle>Pytania i Odpowiedzi</SectionSubtitle>
          <h2 className={`heading-lg ${styles.title}`}>Najczęściej zadawane pytania (FAQ)</h2>
        </div>
        
        <div className={styles.accordionContainer}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.accordionItem} ${openIndex === index ? styles.active : ''}`}
            >
              <button 
                className={styles.accordionHeader} 
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className={styles.question}>{faq.question}</h3>
                <span className={styles.icon}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <div 
                className={styles.accordionBody}
                style={{ maxHeight: openIndex === index ? '500px' : '0' }}
              >
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;