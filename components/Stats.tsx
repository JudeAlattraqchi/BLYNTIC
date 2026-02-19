import React from 'react';
import { motion, useInView } from 'framer-motion';

const StatItem = ({ value, label, subtext, suffix = "" }: { value: number; label: string; subtext: string; suffix?: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Simplified counter animation
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      const duration = 2000; // ms
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-baseline mb-2">
         <h3 className="text-5xl font-display font-bold text-black">{count}{suffix}</h3>
         {label === "Faster revenue" && <span className="text-3xl font-bold ml-1">x</span>}
      </div>
      <h4 className="text-xl font-bold mb-4">{label}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{subtext}</p>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section id="Resources" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Efficiency Metrics</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">At Blyntic, we harness the power of Autonomous AI to redefine business scalability.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem value={3} label="Faster revenue" subtext="Reduce project turnaround time with end-to-end automation." />
          <StatItem value={75} suffix="%" label="Cost Reduction" subtext="Eliminate the overhead of manual repetitive tasks and human error." />
          <StatItem value={99} suffix="%" label="Data Accuracy" subtext="AI-powered processing ensures precision across every data point." />
          <StatItem value={100} suffix="%" label="Enterprise Secure" subtext="Advanced encryption and private LLM deployments ensure total data sovereignty." />
        </div>
      </div>
    </section>
  );
};

export default Stats;