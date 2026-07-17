import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

const OfertaPage = () => {
  return (
    <>
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
