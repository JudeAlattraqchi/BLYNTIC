import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isBookingPage?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isBookingPage = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Company', href: '/#About' },
    { name: 'Solution', href: '/#Solution' },
    { name: 'Features', href: '/#Features' },
    { name: 'Resources', href: '/#Resources' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isBookingPage ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 z-50">
          <img src="https://cdn.prod.website-files.com/69059456676850507afd94d2/690795a7d8a87712ab44e663_Logo%20Icon.svg" alt="NexAgent Icon" className="w-8 h-8" />
          <img src="https://cdn.prod.website-files.com/69059456676850507afd94d2/690795a9225ee4460c01587f_NexAgent.svg" alt="NexAgent Text" className="h-6" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1 bg-white/50 backdrop-blur-sm p-1 rounded-full border border-gray-100 shadow-sm">
           {navLinks.map((link, idx) => (
             <a 
               key={idx} 
               href={link.href}
               className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${idx === 0 && !isBookingPage ? 'bg-white shadow-sm text-black' : 'text-gray-600 hover:text-black hover:bg-gray-100'}`}
             >
               {link.name}
             </a>
           ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
           <Button variant="black" href="#/book">Talk to sales</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden z-50 p-2 rounded-full bg-gray-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full bg-white h-screen flex flex-col items-center justify-center gap-8 lg:hidden pt-20"
            >
              {navLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href}
                  className="text-2xl font-display font-medium text-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="black" href="#/book">Talk to sales</Button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </nav>
  );
};

export default Navbar;