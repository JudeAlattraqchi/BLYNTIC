import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/Reveal';

const About: React.FC = () => {
  return (
    <section id="About" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* Label */}
        <Reveal width="100%">
           <p className="text-[#0061ff] font-semibold text-base md:text-lg mb-4">About</p>
        </Reveal>

        {/* Headline */}
        <Reveal width="100%" delay={0.1}>
          <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.2] max-w-[900px] mx-auto text-brand-black mb-12">
            BLYNTIC.ai simplifies complex data into actionable insights, helping teams track progress and forecast growth more efficiently.
          </h2>
        </Reveal>
        
        {/* Visuals */}
        <Reveal width="100%" delay={0.2}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12">
             {/* User Card */}
             <motion.div 
               whileHover={{ rotate: -5, scale: 1.05 }}
               transition={{ type: "spring", stiffness: 300 }}
               className="bg-white p-6 rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.05)] -rotate-[10deg] border border-gray-50 flex flex-col items-center min-w-[160px]"
             >
                <img 
                  src="https://cdn.prod.website-files.com/69059456676850507afd94d2/691cdc2f3d0fa3c97790f0ee_happy%20User.svg" 
                  alt="Happy User" 
                  className="w-[100px] h-auto mb-3" 
                  loading="lazy"
                />
                <div className="text-center">
                  <p className="text-2xl font-bold text-black leading-tight">128M+</p>
                  <p className="text-sm text-gray-500 leading-tight">Happy users</p>
                </div>
             </motion.div>
             
             {/* Main Image */}
             <motion.img 
               whileHover={{ scale: 1.02 }}
               transition={{ type: "spring", stiffness: 300 }}
               src="https://cdn.prod.website-files.com/69059456676850507afd94d2/690ef78a25c665792d5b01ac_1.webp" 
               alt="AI Dashboard" 
               className="w-full max-w-[300px] h-auto rounded-xl shadow-sm" 
               loading="lazy"
             />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;