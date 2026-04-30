import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import RotatingProcess from './components/RotatingProcess';
import Portfolio from './components/Portfolio';
import Partners from './components/Partners';
import WhyMe from './components/WhyMe';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import CookieBanner from './components/CookieBanner';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

const GooeyFilter = () => (
  <svg style={{ visibility: 'hidden', position: 'absolute' }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
      <filter id="buttonFilter">
        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
        <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
      </filter>
    </defs>
  </svg>
);

function App() {
  const path = window.location.pathname;

  const renderContent = () => {
    if (path === '/polityka-prywatnosci') {
      return <Privacy />;
    }
    if (path === '/regulamin') {
      return <Terms />;
    }
    return (
      <>
        <TopBar />
        <Navbar />
        <main>
          <Hero />
          <AboutMe />
          <Services />
          <Portfolio />
          <RotatingProcess />
          <Partners />
          <WhyMe />
          <CTA />
        </main>
        <Footer />
      </>
    );
  };

  return (
    <>
      <CookieBanner />
      <GooeyFilter />
      <CustomCursor />
      {renderContent()}
    </>
  );
}

export default App;