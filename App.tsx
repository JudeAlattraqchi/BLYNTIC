import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoTicker from './components/LogoTicker';
import Solutions from './components/Solutions';
import Features from './components/Features';
import Stats from './components/Stats';
import WhyChoose from './components/WhyChoose';
import HowItWorks from './components/HowItWorks';
import TalkToSales from './components/TalkToSales';
import Blog from './components/Blog';
import BlogDetails from './components/BlogDetails';
import AICustomerService from './components/AICustomerService';
import AIChatbots from './components/AIChatbots';
import SmartWebsite from './components/SmartWebsite';
import FullAISolution from './components/FullAISolution';
import AIMarketing from './components/AIMarketing';
import Contact from './components/ui/travel-connect-signin-1';
import SpecialOffer from './components/SpecialOffer';
import Footer from './components/Footer';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (currentHash === '#/talk-to-sales' || currentHash === '#/ai-customer-service' || currentHash === '#/ai-chatbots' || currentHash === '#/smart-website' || currentHash === '#/full-ai-solution' || currentHash === '#/ai-marketing' || currentHash === '#/contact' || currentHash === '#/special-offer') {
      window.scrollTo(0, 0);
    }
  }, [currentHash]);

  const isTalkToSalesPage = currentHash === '#/talk-to-sales';
  const isBlogPage = currentHash === '#/blog';
  const isBlogDetailPage = currentHash.startsWith('#/blog/');
  const isAICustomerServicePage = currentHash === '#/ai-customer-service';
  const isAIChatbotsPage = currentHash === '#/ai-chatbots';
  const isSmartWebsitePage = currentHash === '#/smart-website';
  const isFullAISolutionPage = currentHash === '#/full-ai-solution';
  const isAIMarketingPage = currentHash === '#/ai-marketing';
  const isContactPage = currentHash === '#/contact';
  const isSpecialOfferPage = currentHash === '#/special-offer';

  return (
    <main className="font-sans text-brand-black bg-white selection:bg-blue-200 selection:text-black">
      <Navbar isTalkToSalesPage={isTalkToSalesPage || isAICustomerServicePage || isAIChatbotsPage || isSmartWebsitePage || isFullAISolutionPage || isAIMarketingPage || isContactPage || isSpecialOfferPage} />
      
      {isTalkToSalesPage ? (
        <TalkToSales />
      ) : isAICustomerServicePage ? (
        <AICustomerService />
      ) : isAIChatbotsPage ? (
        <AIChatbots />
      ) : isSmartWebsitePage ? (
        <SmartWebsite />
      ) : isFullAISolutionPage ? (
        <FullAISolution />
      ) : isAIMarketingPage ? (
        <AIMarketing />
      ) : isContactPage ? (
        <Contact />
      ) : isSpecialOfferPage ? (
        <SpecialOffer />
      ) : isBlogPage ? (
        <Blog />
      ) : isBlogDetailPage ? (
        <BlogDetails />
      ) : (
        <>
          <Hero />
          <LogoTicker />
          <Solutions />
          <Features />
          <Stats />
          <HowItWorks />
          <WhyChoose />
        </>
      )}
      
      <Footer />
    </main>
  );
}

export default App;