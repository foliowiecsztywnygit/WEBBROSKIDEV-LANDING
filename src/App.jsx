import { Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import RotatingProcess from './components/RotatingProcess';
import Portfolio from './components/Portfolio';
import Partners from './components/Partners';
import WhyMe from './components/WhyMe';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import CookieBanner from './components/CookieBanner';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

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

const Home = () => (
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
      <FAQ />
      <CTA />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <>
      <CookieBanner />
      <GooeyFilter />
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/polityka-prywatnosci" element={<Privacy />} />
        <Route path="/regulamin" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;