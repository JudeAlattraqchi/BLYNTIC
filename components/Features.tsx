import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import Button from './ui/Button';
import LottiePlayer from './ui/LottiePlayer';

import askAiAnimation from '../src/assets/lottie/691cc058bf4d169511b5e74b_ask_ai.json';
import jackMahirAnimation from '../src/assets/lottie/691cc0587be9e915dbafb081_jack_mahir.json';
import anotherGuysPictureAnimation from '../src/assets/lottie/691cc05849d8aee199c24831_another_guys_picture_2.json';

const featuresData = [
  {
    id: 1,
    label: "Multi-Agent AI",
    title: "The Intelligent AI Behind Smarter Business",
    description: "Our AI ecosystem is a first-of-its-kind solution, combining specialized autonomous agents for data parsing, task prioritization, and behavioral analysis. We ensure faster, error-free operations and highly accurate predictive modeling for your most complex business needs.",
    lottie: askAiAnimation
  },
  {
    id: 2,
    label: "Friendly AI",
    title: "End-to-End AI Workflow Automation",
    description: "Revolutionize your operations with autonomous lead sourcing, AI-powered data enrichment, and intelligent client engagement. With seamless API integration across your entire tech stack, our solutions expand your operational reach effortlessly.",
    lottie: jackMahirAnimation
  },
  {
    id: 3,
    label: "Manager AI",
    title: "AI That Works Like Your Best Operations Manager",
    description: "We combine smart automation with human-like understanding. Our agents analyze complex documentation, predict project success, and suggest top-tier optimizations—helping you make confident, data-backed business decisions in a fraction of the time.",
    lottie: anotherGuysPictureAnimation
  }
];

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section id="Features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              The Intelligent AI <br />
              <span className="text-blue-600">Behind Smarter Business</span>
            </h2>
          </Reveal>
        </div>

        {/* Tabs Header */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-4 mb-12 border-b border-gray-200 max-w-4xl mx-auto">
          {featuresData.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(feature.id)}
              className={`relative px-8 py-6 w-full md:w-auto text-left md:text-center transition-all duration-300 group`}
            >
              <div className="flex items-center gap-3 justify-center">
                 <img src="https://cdn.prod.website-files.com/69059456676850507afd94d2/690ac653f64845574df62c1e_Feature%20Icon.svg" className="w-5 h-5 opacity-50 group-hover:opacity-100" alt="icon" />
                 <span className={`text-lg font-semibold ${activeTab === feature.id ? 'text-black' : 'text-gray-500 group-hover:text-black'}`}>
                   {feature.label}
                 </span>
              </div>
              {/* Active Line */}
              {activeTab === feature.id && (
                <motion.div 
                  layoutId="activeTabLine"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            {featuresData.map((feature) => (
              activeTab === feature.id && (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                >
                  <div className="order-2 lg:order-1">
                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">{feature.title}</h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">{feature.description}</p>
                    <Button variant="white" href="#/talk-to-sales">Talk to sales</Button>
                  </div>
                  <div className="order-1 lg:order-2 bg-white rounded-3xl p-8 shadow-sm">
                    <LottiePlayer animationData={feature.lottie} className="w-full h-auto" />
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Features;