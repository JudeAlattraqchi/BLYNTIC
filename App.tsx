import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import Solutions from './components/Solutions';
import Features from './components/Features';
import Stats from './components/Stats';
import WhyChoose from './components/WhyChoose';
import HowItWorks from './components/HowItWorks';
import Booking from './components/Booking';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  // Use hash routing for stability in static environments
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // Scroll to top when entering the booking page
    if (currentHash === '#/book') {
      window.scrollTo(0, 0);
    }
  }, [currentHash]);

  // Determine if we are on the booking page
  const isBookingPage = currentHash === '#/book';

  return (
    <main className="font-sans text-brand-black bg-white selection:bg-blue-200 selection:text-black">
      <Navbar isBookingPage={isBookingPage} />
      
      {isBookingPage ? (
        <Booking isStandalone={true} />
      ) : (
        <>
          <Hero />
          <LogoTicker />
          <Solutions />
          <Features />
          <Stats />
          <HowItWorks />
          <WhyChoose />
          <Pricing />
          <Booking />
        </>
      )}
      
      <Footer />
    </main>
  );
}

export default App;