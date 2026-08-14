import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionSubtitle from './ui/SectionSubtitle';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    author: 'Anna Kowalska',
    role: 'Właścicielka, Willa pod Rysami',
    content: 'Od kiedy mamy nową stronę, liczba rezerwacji bezpośrednich wzrosła o 40%. Największą różnicę robi przejrzysty proces rezerwacji na telefonie – wcześniej goście rezygnowali i szli na Booking.',
    avatar: 'A'
  },
  {
    id: 2,
    author: 'Tomasz Nowak',
    role: 'Zarządca, Domki Zrąb',
    content: 'Współpraca była świetna. Strona wygląda nowocześnie, działa błyskawicznie, a integracja z systemem rezerwacji przebiegła bez problemów. Przestałem martwić się o prowizje pośredników.',
    avatar: 'T'
  },
  {
    id: 3,
    author: 'Piotr Wiśniewski',
    role: 'Właściciel, Pensjonat u Piotra',
    content: 'Szukałem kogoś, kto nie tylko "zrobi stronę", ale doradzi jak sprzedawać noclegi. Strona jest czytelna, galeria w końcu oddaje standard obiektu, a goście sami chwalą łatwość rezerwacji.',
    avatar: 'P'
  }
];

const Testimonials = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="opinie" className={`section ${styles.testimonials}`} ref={revealRef}>
      <div className={`container ${styles.container}`}>
        
        <div className={`${styles.header} reveal fade-in`}>
          <SectionSubtitle>Co mówią klienci</SectionSubtitle>
          <h2 className={styles.title}>Opinie zadowolonych właścicieli</h2>
          <p className={styles.lead}>
            Zaufali mi właściciele pensjonatów, willi i domków, dla których liczy się budowanie własnej, niezależnej bazy gości i ograniczenie kosztów prowizji.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`${styles.card} reveal fade-in`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              
              <p className={styles.quote}>"{testimonial.content}"</p>
              
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {testimonial.avatar}
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{testimonial.author}</span>
                  <span className={styles.authorRole}>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
