import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import LottiePlayer from './ui/LottiePlayer';
import { ArrowDownRight, ArrowRight, Sparkles } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import earthAnimation from '../src/assets/lottie/earth.json';

const Hero: React.FC = () => {
  return (
    <section id="Home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      
      {/* Promotional Banner Ad */}
      <div className="absolute top-24 left-0 right-0 z-20 flex justify-center px-4 w-full">
        <motion.a 
          href="#/special-offer"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] animate-gradient text-white px-6 py-3 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all hover:-translate-y-0.5 overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <Sparkles className="w-4 h-4 text-blue-200" />
          <span className="font-medium text-sm md:text-base">
            <strong className="font-bold text-white">Special offer:</strong> no implementation fees up to $15,000, Offer ends May 15th
          </span>
          <span className="flex items-center gap-1 text-sm font-bold text-blue-200 group-hover:text-white transition-colors ml-2">
            Claim Offer <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.a>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-8">
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
                  Less Work,
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
                  className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight"
                >
                  <span className="text-blue-600">More Growth</span> With AI
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
                  animationData={earthAnimation} 
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