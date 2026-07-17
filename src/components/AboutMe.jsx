import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionSubtitle from './ui/SectionSubtitle';
import GooeyButton from './ui/GooeyButton';
import styles from './AboutMe.module.css';

const segments = [
  {
    title: 'Dla pensjonatów i willi całorocznych',
    description: 'Strony, które porządkują ofertę pokoi, pokazują standard obiektu i prowadzą gościa prosto do kontaktu lub rezerwacji.'
  },
  {
    title: 'Dla niezależnych apartamentów i domków',
    description: 'Układy pod obiekty sezonowe z naciskiem na telefon, galerię, mapę i szybkie sprawdzenie terminu.'
  },
  {
    title: 'Wdrożenia booking engine',
    description: 'Integracje systemów rezerwacji, które skracają drogę od wejścia na stronę do sprawdzenia terminu i finalizacji pobytu.'
  },
  {
    title: 'Obiekty z regionów turystycznych',
    description: 'Oferta dopasowana do Podhala, Zakopanego, Szczyrku i polskiego morza, gdzie liczy się telefon, zdjęcia, lokalizacja i szybki kontakt z gościem.'
  }
];

const AboutMe = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="dla-kogo" className={`section ${styles.aboutMe}`} ref={revealRef}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.left} reveal fade-in`}>
          <SectionSubtitle>Dla kogo pracuję</SectionSubtitle>
          <h2 className={`heading-lg ${styles.title}`}>Buduję strony, które mają sprzedawać pobyt, a nie tylko dobrze wyglądać.</h2>
        </div>
        
        <div className={`${styles.right} reveal fade-in delay-100`}>
          <div className={styles.textContent}>
            <p>
              Pracuję przede wszystkim z właścicielami <strong>pensjonatów, willi, apartamentów i domków</strong>, którzy chcą, żeby własna strona realnie pomagała zdobywać zapytania i rezerwacje.
            </p>
            <p>
              Moje projekty są nastawione na trzy rzeczy: <strong>czytelną ofertę</strong>, <strong>prostą drogę do kontaktu</strong> i <strong>lepszą widoczność dla osób szukających noclegu w okolicy</strong>. Dzięki temu strona staje się realnym kanałem pozyskiwania gości, a nie tylko internetową wizytówką.
            </p>
          </div>

          <div className={styles.segmentGrid}>
            {segments.map((segment) => (
              <article key={segment.title} className={styles.segmentCard}>
                <h3>{segment.title}</h3>
                <p>{segment.description}</p>
              </article>
            ))}
          </div>
          
          <div className={styles.actions}>
            <GooeyButton href="/#uslugi" variant="primary">Sprawdź rozwiązania</GooeyButton>
            <GooeyButton href="/#kontakt" variant="outline">Porozmawiajmy o Twoim obiekcie</GooeyButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
