import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Button from './ui/Button';

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="Pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
           <span className="inline-block px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-semibold mb-6">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Individual Plans</h2>
          <p className="text-gray-600">Receive unlimited credits when you pay yearly.</p>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8 bg-white p-1 rounded-full w-fit mx-auto border border-gray-200">
             <button 
               onClick={() => setIsYearly(true)}
               className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${isYearly ? 'bg-black text-white' : 'text-gray-500 hover:text-black'}`}
             >
               Yearly
             </button>
             <button 
               onClick={() => setIsYearly(false)}
               className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${!isYearly ? 'bg-black text-white' : 'text-gray-500 hover:text-black'}`}
             >
               Monthly
             </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Plan 1 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
             <img src="https://cdn.prod.website-files.com/69059456676850507afd94d2/690c2afac2f3b635f5e49726_Plans_Icon_01.webp" alt="Basic" className="w-12 h-12 mb-6" />
             <h3 className="text-xl font-bold mb-2">Basic</h3>
             <p className="text-gray-500 text-sm mb-6 min-h-[40px]">For individuals just getting started.</p>
             <div className="mb-6">
               <span className="text-4xl font-bold">$0</span>
               <span className="text-gray-400">/mo</span>
             </div>
             <Button variant="white" href="#/book" className="w-full mb-8">Try for free</Button>
             <ul className="space-y-4">
               {["500 AI credits/mo", "Unlimited bases", "Up to 5 editors", "100 automation runs"].map((item, i) => (
                 <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                   <div className="bg-green-100 p-1 rounded-full"><Check className="w-3 h-3 text-green-600" /></div>
                   {item}
                 </li>
               ))}
             </ul>
          </div>

          {/* Plan 2 - Popular */}
          <div className="bg-black text-white rounded-3xl p-8 border border-gray-800 hover:scale-105 transition-transform relative shadow-2xl">
             <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">Most Popular</div>
             <img src="https://cdn.prod.website-files.com/69059456676850507afd94d2/690c6417b3a6a200c214c4ee_Plans_Icon_02.png" alt="Pro" className="w-12 h-12 mb-6" />
             <h3 className="text-xl font-bold mb-2">Pro</h3>
             <p className="text-gray-400 text-sm mb-6 min-h-[40px]">For growing teams needing advanced features.</p>
             <div className="mb-6">
               <span className="text-4xl font-bold">${isYearly ? '49' : '59'}</span>
               <span className="text-gray-500">/mo</span>
             </div>
             <Button variant="blue" href="#/book" className="w-full mb-8">Get Started</Button>
             <ul className="space-y-4">
               {["1000 AI credits/mo", "Standard integrations", "Gantt view", "Admin panel", "Analytics dashboard"].map((item, i) => (
                 <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                   <div className="bg-blue-900 p-1 rounded-full"><Check className="w-3 h-3 text-blue-400" /></div>
                   {item}
                 </li>
               ))}
             </ul>
          </div>

          {/* Plan 3 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
             <img src="https://cdn.prod.website-files.com/69059456676850507afd94d2/690c2afac2f3b635f5e49726_Plans_Icon_01.webp" alt="Enterprise" className="w-12 h-12 mb-6 grayscale" />
             <h3 className="text-xl font-bold mb-2">Enterprise</h3>
             <p className="text-gray-500 text-sm mb-6 min-h-[40px]">For organizations with unique needs.</p>
             <div className="mb-6">
               <span className="text-4xl font-bold">Custom</span>
             </div>
             <Button variant="white" href="#/book" className="w-full mb-8">Talk to Sales</Button>
             <ul className="space-y-4">
               {["25,000 AI credits/user", "1,000 GB attachments", "Enterprise Hub", "Enterprise API", "AI Admin controls"].map((item, i) => (
                 <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                   <div className="bg-gray-100 p-1 rounded-full"><Check className="w-3 h-3 text-gray-600" /></div>
                   {item}
                 </li>
               ))}
             </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;