import React from 'react';
import { Reveal } from './ui/Reveal';
import Button from './ui/Button';
import LottiePlayer from './ui/LottiePlayer';

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
                src="https://cdn.prod.website-files.com/69059456676850507afd94d2/691e040f1eb462228db0afb8_new2.json" 
                className="w-full h-auto"
                loop={true}
              />
            </div>
          </div>
        </Reveal>

        <div className="text-center">
          <Reveal delay={0.2}>
            <Button variant="blue" href="#/book" className="!px-10 !py-4">Choose the Future of Hiring</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;