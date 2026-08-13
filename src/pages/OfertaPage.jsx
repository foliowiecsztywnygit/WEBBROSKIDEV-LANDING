import { Helmet } from 'react-helmet-async';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

const OfertaPage = () => {
  return (
    <>
      <Helmet>
        <title>Oferta i cennik stron dla noclegów | WEBBROSKIDEV</title>
        <meta name="description" content="Pakiety abonamentowe i wdrożenia jednorazowe dla pensjonatów i apartamentów. Sprawdź, ile kosztuje stworzenie nowoczesnej strony z systemem rezerwacji." />
        <link rel="canonical" href="https://www.webbroskidev.pl/oferta" />
      </Helmet>
      <TopBar />
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Pricing />
      </main>
      <Footer />
    </>
  );
};

export default OfertaPage;
