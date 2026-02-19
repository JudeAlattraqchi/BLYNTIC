import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import LottiePlayer from './ui/LottiePlayer';
import { ArrowDownRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const Hero: React.FC = () => {
  return (
    <section id="Home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl relative z-10">
            
            <div className="mb-8 mt-4">
              <div className="overflow-hidden">
                <motion.h1 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight text-brand-black"
                >
                  Unlock Efficiency.
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                  className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight"
                >
                  <span className="text-blue-600">Embrace AI</span> Automation Solutions
                </motion.h1>
              </div>
            </div>

            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                Our premier partner for comprehensive AI automation services. We deliver tailored, end-to-end AI workflow optimization, intelligent process automation integration, and data-driven solutions across all business verticals to scale your operations.
              </p>
            </Reveal>

          </div>

          {/* Right Content - Earth Lottie */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full flex items-center justify-center">
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.4 }}
               className="w-full h-full"
             >
                <LottiePlayer 
                  src="https://cdn.prod.website-files.com/69059456676850507afd94d2/6923df90546801955958001a_earth%20lottie%20fixed.json" 
                  className="w-full h-full"
                />
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;