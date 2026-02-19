import React from 'react';
import { Check } from 'lucide-react';
import { Reveal } from './ui/Reveal';

interface BookingProps {
  isStandalone?: boolean;
}

const Booking: React.FC<BookingProps> = ({ isStandalone = false }) => {
  // Using the handle provided: jude-alattraqchi-ofyahv/quick-catch-up
  // Appending ?embed=1&theme=light per standard Cal.com embed practices
  const calUrl = "https://cal.com/jude-alattraqchi-ofyahv/quick-catch-up?embed=1&theme=light";

  return (
    <section 
      id="contact" 
      className={`bg-white border-t border-gray-100 ${isStandalone ? 'pt-32 pb-24 min-h-screen' : 'py-24'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Value Prop */}
          <div className="pt-8">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-black mb-6 leading-tight">
                Ready to Automate <br />
                <span className="text-blue-600">Your Workflow?</span>
              </h2>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
                Book a 15-minute discovery call. We'll audit your current processes and identify where AI agents can save you 20+ hours a week.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-xl font-bold font-display text-brand-black">What to Expect:</h3>
                <ul className="space-y-5">
                  {[
                    "No-pressure consultation",
                    "Live demo of our AI agents",
                    "Custom ROI estimation"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 group">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center transition-colors group-hover:bg-blue-600 group-hover:border-blue-600">
                        <Check className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-lg text-gray-700 font-medium group-hover:text-brand-black transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Calendar Embed */}
          <div className="w-full relative">
            <Reveal delay={0.3} width="100%">
              {/* Card Container */}
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-1 md:p-2 overflow-hidden relative">
                 <iframe 
                   src={calUrl}
                   style={{ width: '100%', height: '100%', minHeight: '650px', border: 'none' }}
                   title="Book a Discovery Call"
                   className="rounded-xl bg-white"
                   loading="lazy"
                 ></iframe>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Booking;