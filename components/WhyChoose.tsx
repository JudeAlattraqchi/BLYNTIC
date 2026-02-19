import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Reveal } from './ui/Reveal';

const WhyChoose: React.FC = () => {
  const cards = [
    {
      icon: "https://cdn.prod.website-files.com/69059456676850507afd94d2/6921f83b70cc3376da4d5d96_icon-1.svg",
      title: "AI-Powered Precision & Accuracy",
      description: "Backed by proprietary LLM frameworks and deep automation expertise, we ensure every workflow is optimized for your specific business logic."
    },
    {
      icon: "https://cdn.prod.website-files.com/69059456676850507afd94d2/6921f83b09a192cc85e6695c_icon%202.svg",
      title: "Security & Compliance You Can Trust",
      description: "We prioritize enterprise-grade data security with encrypted processing and fully GDPR/CCPA-compliant automation protocols."
    },
    {
      icon: "https://cdn.prod.website-files.com/69059456676850507afd94d2/6921f83b56714ebc2c914055_icon%203.svg",
      title: "Scalability That Grows With You",
      description: "Whether you’re processing 50 leads or 5,000,000 data points, our multi-agent AI systems handle high-volume operations across any geography."
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="WhyChoose" 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 50%, #ffffff 0%, rgba(255,255,255,0) 60%),
          url('https://cdn.prod.website-files.com/69059456676850507afd94d2/6920c719362d234c438dd619_Group%202147229536.png'),
          linear-gradient(to bottom, #ffffff 0%, #f4f7ff 100%)
        `,
        backgroundSize: 'cover, cover, cover',
        backgroundPosition: 'center, center, center',
        backgroundAttachment: 'scroll, fixed, scroll',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-[3rem] font-display font-extrabold mb-6 text-brand-black leading-tight">Why choose Blyntic?</h2>
          </Reveal>
          <Reveal width="100%" delay={0.1}>
            <p className="text-lg text-gray-600 leading-relaxed max-w-[800px] mx-auto">
              We don't just build bots; we build intelligent ecosystems that make your business faster, smarter, and more profitable.
            </p>
          </Reveal>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              className="bg-white p-8 md:p-10 rounded-[24px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-start text-left"
            >
              <img src={card.icon} alt="icon" className="w-12 h-12 mb-5" />
              <h3 className="text-xl font-display font-bold mb-3 text-brand-black">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6 flex-grow">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;