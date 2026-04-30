import React from 'react';
import { Reveal } from './ui/Reveal';
import Button from './ui/Button';
import LottiePlayer from './ui/LottiePlayer';
import new2Animation from '../src/assets/lottie/691e040f1eb462228db0afb8_new2.json';

const HowItWorks: React.FC = () => {
  return (
    <section id="HowItWorks" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-brand-black">How it Works</h2>
          </Reveal>
        </div>

        <Reveal width="100%" delay={0.1}>
          <div className="bg-gray-50 rounded-[40px] p-8 md:p-16 mb-12 flex items-center justify-center min-h-[400px]">
            <div className="w-full max-w-5xl">
              <LottiePlayer 
                animationData={new2Animation} 
                className="w-full h-auto"
                loop={true}
              />
            </div>
          </div>
        </Reveal>


      </div>
    </section>
  );
};

export default HowItWorks;