import React from 'react';
import { Reveal } from './ui/Reveal';
import Button from './ui/Button';
import LottiePlayer from './ui/LottiePlayer';

const SolutionItem = ({ 
  title, 
  subtitle, 
  description, 
  lottieSrc, 
  reverse = false 
}: { 
  title: string; 
  subtitle: string; 
  description: string; 
  lottieSrc: string; 
  reverse?: boolean 
}) => (
  <div className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
    <div className={`${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
      <Reveal>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-2">{title}</h3>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-gray-400 mb-6">{subtitle}</h3>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          {description}
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <Button variant="white" href="#/book">Talk to sales</Button>
      </Reveal>
    </div>
    
    <div className={`bg-gray-50 rounded-3xl p-8 md:p-12 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
       <div className="relative aspect-square w-full">
         <LottiePlayer src={lottieSrc} className="w-full h-full" />
       </div>
    </div>
  </div>
);

const Solutions: React.FC = () => {
  return (
    <section id="Solution" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal width="100%">
             <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">
               AI-Powered Hiring, <br />
               <span className="text-blue-600">Redefined</span>
             </h2>
          </Reveal>
        </div>

        <SolutionItem 
          title="One Workflow,"
          subtitle="Multiple Automations"
          description="Your ultimate AI integration partner, managing everything from lead generation to data processing. Our custom AI agents adapt to your unique business logic and learn your specific operational preferences to scale with you"
          lottieSrc="https://cdn.prod.website-files.com/69059456676850507afd94d2/691cc058a122b81b0b274cad_balls.json"
        />

        <SolutionItem 
          title="AI-Powered Operations, Redefined"
          subtitle="End-to-End AI Workflow Automation"
          description="Revolutionize your business with autonomous lead sourcing, AI-driven data processing, and automated customer engagement. With seamless API integrations across CRMs, project management tools, and custom databases, our solutions expand your operational reach effortlessly."
          lottieSrc="https://cdn.prod.website-files.com/69059456676850507afd94d2/691cc0589306a2b46891e4cb_guys%20picture%201.json"
          reverse={true}
        />

        <SolutionItem 
          title="Intelligent Monitoring"
          subtitle="& AI-Led Interaction"
          description="Our proprietary LLM frameworks go beyond basic automation—they analyze, assess, and adapt to complex workflows. From automated sentiment analysis and multilingual support to high-fidelity voice AI agents and facial recognition security, we build the front-line of your digital workforce"
          lottieSrc="https://cdn.prod.website-files.com/69059456676850507afd94d2/691cc05868bec08b14ffdfa9_ai%20powred.json"
        />

      </div>
    </section>
  );
};

export default Solutions;