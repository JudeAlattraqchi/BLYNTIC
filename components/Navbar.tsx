import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, LogOut, ChevronDown } from 'lucide-react';
import Button from './ui/Button';
import LoginModal from './LoginModal';
import ProfileModal from './ProfileModal';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../src/firebase';

interface NavbarProps {
  isTalkToSalesPage?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isTalkToSalesPage = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState<{name: string, photo: string} | null>(null);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    
    let unsubscribeSnapshot: () => void;

    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
      if (user) {
        unsubscribeSnapshot = onSnapshot(doc(db, 'users', user.uid), (docSnap) => {
          if (docSnap.exists()) {
            const data = docSnap.data();
            setUserProfile({
              name: data.name || '',
              photo: data.photo || ''
            });
          }
        });
      } else {
        setUserProfile(null);
        if (unsubscribeSnapshot) unsubscribeSnapshot();
      }
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribeAuth();
      if (unsubscribeSnapshot) unsubscribeSnapshot();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Company', href: '/#About' },
    { name: 'Features', href: '/#Features' },
    { name: 'Resources', href: '/#Resources' },
  ];

  const solutionLinks = [
    { name: 'AI customer service', href: '#/ai-customer-service' },
    { name: 'AI chatbots', href: '#/ai-chatbots' },
    { name: 'Smart website', href: '#/smart-website' },
    { name: 'Full AI solution for companies', href: '#/full-ai-solution' },
    { name: 'AI Marketing', href: '#/ai-marketing' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isTalkToSalesPage ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 z-50">
          <img src="https://cdn.prod.website-files.com/69059456676850507afd94d2/690795a7d8a87712ab44e663_Logo%20Icon.svg" alt="BLYNTIC Icon" className="w-8 h-8" />
          <span className="text-xl font-bold tracking-tight">BLYNTIC</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1 bg-white/50 backdrop-blur-sm p-1 rounded-full border border-gray-100 shadow-sm relative">
           <a 
             href="/"
             className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${!isTalkToSalesPage ? 'bg-white shadow-sm text-black' : 'text-gray-600 hover:text-black hover:bg-gray-100'}`}
           >
             Home
           </a>
           <a 
             href="/#About"
             className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-gray-600 hover:text-black hover:bg-gray-100"
           >
             Company
           </a>
           
           {/* Solutions Dropdown */}
           <div 
             className="relative"
             onMouseEnter={() => setIsSolutionsOpen(true)}
             onMouseLeave={() => setIsSolutionsOpen(false)}
           >
             <button 
               className="flex items-center gap-1 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-gray-600 hover:text-black hover:bg-gray-100"
             >
               Solution <ChevronDown className="w-4 h-4" />
             </button>
             
             <AnimatePresence>
               {isSolutionsOpen && (
                 <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: 10 }}
                   transition={{ duration: 0.2 }}
                   className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden"
                 >
                   {solutionLinks.map((link, idx) => (
                     <a 
                       key={idx} 
                       href={link.href}
                       className="block px-4 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                     >
                       {link.name}
                     </a>
                   ))}
                 </motion.div>
               )}
             </AnimatePresence>
           </div>

           <a 
             href="/#Features"
             className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-gray-600 hover:text-black hover:bg-gray-100"
           >
             Features
           </a>
           <a 
             href="/#Resources"
             className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-gray-600 hover:text-black hover:bg-gray-100"
           >
             Resources
           </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
           <Button variant="black" href="#/talk-to-sales">Talk to sales</Button>
           
           {isLoggedIn ? (
             <div className="flex items-center gap-3">
               <button 
                 onClick={handleLogout}
                 className="p-2.5 rounded-full bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all"
                 title="Logout"
               >
                 <LogOut className="w-5 h-5" />
               </button>
               <button 
                 onClick={() => setIsProfileModalOpen(true)}
                 className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-md hover:ring-2 hover:ring-blue-300 transition-all overflow-hidden"
                 title="Profile"
               >
                 {userProfile?.photo ? (
                   <img src={userProfile.photo} alt="Profile" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                 ) : userProfile?.name ? (
                   userProfile.name.charAt(0).toUpperCase()
                 ) : (
                   <User className="w-5 h-5" />
                 )}
               </button>
             </div>
           ) : (
             <button 
               onClick={() => setIsLoginModalOpen(true)}
               className="p-2.5 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
               title="Admin Login"
             >
               <User className="w-5 h-5" />
             </button>
           )}
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
              className="absolute top-0 left-0 w-full bg-white h-screen flex flex-col items-center justify-center gap-6 lg:hidden pt-20 overflow-y-auto pb-10"
            >
              <a 
                href="/"
                className="text-2xl font-display font-medium text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="/#About"
                className="text-2xl font-display font-medium text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Company
              </a>
              
              <div className="flex flex-col items-center gap-4 w-full px-8">
                <span className="text-2xl font-display font-medium text-black flex items-center gap-2">
                  Solution <ChevronDown className="w-5 h-5" />
                </span>
                <div className="flex flex-col items-center gap-3 bg-gray-50 w-full py-4 rounded-2xl">
                  {solutionLinks.map((link, idx) => (
                    <a 
                      key={idx} 
                      href={link.href}
                      className="text-lg text-gray-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <a 
                href="/#Features"
                className="text-2xl font-display font-medium text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="/#Resources"
                className="text-2xl font-display font-medium text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </a>
              
              <div className="mt-4">
                <Button variant="black" href="#/talk-to-sales">Talk to sales</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
      
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
    </nav>
  );
};

export default Navbar;