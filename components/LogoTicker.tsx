import React from 'react';
import { motion } from 'framer-motion';

const LogoTicker: React.FC = () => {
  const partners = [
    "OpenAI",
    "Anthropic",
    "Google Gemini",
    "Make.com",
    "Zapier",
    "Pinecone",
    "Twilio",
    "VAPI",
    "Retell",
    "ElevenLabs",
    "Web ChatBot",
    "AI Social Media Reply",
    "AI Receptionist"
  ];

  return (
    <section className="py-12 border-b border-gray-100 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
          POWERED BY INDUSTRY-LEADING AI ARCHITECTURE
        </p>
      </div>
      
      <div className="flex overflow-hidden relative">
        <motion.div 
          className="flex gap-16 min-w-max items-center"
          animate={{ x: "-50%" }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {/* Render twice for seamless loop */}
          {[...partners, ...partners].map((partner, idx) => (
            <div key={idx} className="flex items-center justify-center px-4">
               <span className="text-2xl md:text-3xl font-display font-bold text-gray-300 hover:text-gray-900 transition-colors duration-500 whitespace-nowrap cursor-default">
                 {partner}
               </span>
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default LogoTicker;