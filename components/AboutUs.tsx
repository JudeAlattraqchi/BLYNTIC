import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, Mic, Zap, Mail, Users, Globe2, Sparkles } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24 overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/4"></div>

        <div className="max-w-4xl mx-auto text-center mb-24">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6">
              <Globe2 className="w-4 h-4" />
              Based in New Zealand
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-8 leading-tight">
              We make AI automation <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">effortless.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We are a specialized team of AI engineers and automation experts based in New Zealand. 
              We transform complex business challenges into seamless, automated experiences.
            </p>
          </Reveal>
        </div>

        {/* Core Expertise */}
        <div className="mb-32">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Expertise</h2>
              <p className="text-gray-500">Deep technical knowledge applied to real business problems.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mic className="w-8 h-8 text-blue-500" />,
                title: "Voice Agents",
                desc: "Human-like conversational AI that handles calls, schedules appointments, and qualifies leads 24/7."
              },
              {
                icon: <MessageSquare className="w-8 h-8 text-indigo-500" />,
                title: "Web Chatbots",
                desc: "Intelligent website assistants that guide visitors, answer complex queries, and drive conversions."
              },
              {
                icon: <Bot className="w-8 h-8 text-purple-500" />,
                title: "AI Automation",
                desc: "End-to-end workflow automation that eliminates manual tasks and scales your operations."
              }
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-gray-50 rounded-[32px] p-8 border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Growth Engine */}
        <div className="bg-black rounded-[40px] p-8 md:p-16 text-white relative overflow-hidden mb-32">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">The Growth Engine</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Generating leads, crafting compelling content, and executing high-converting email marketing campaigns—all of that is easy to create when you have the right AI systems in place. And that's exactly what we do.
                </p>
              </Reveal>
              
              <div className="space-y-6">
                {[
                  { icon: <Users />, text: "Automated Lead Generation" },
                  { icon: <Sparkles />, text: "AI-Powered Content Creation" },
                  { icon: <Mail />, text: "Smart Email Marketing" }
                ].map((item, idx) => (
                  <Reveal key={idx} delay={0.2 + (idx * 0.1)}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-blue-400">
                        {item.icon}
                      </div>
                      <span className="text-xl font-medium">{item.text}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Reveal delay={0.3}>
                <div className="aspect-square rounded-[32px] overflow-hidden border border-white/10 relative">
                  <img 
                    src="https://picsum.photos/seed/ai-agency/800/800" 
                    alt="AI Technology" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-transparent mix-blend-overlay"></div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to automate your business?</h2>
            <p className="text-xl text-gray-500 mb-10">Let's build systems that work for you 24/7.</p>
            <a 
              href="#/talk-to-sales" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 hover:shadow-2xl hover:shadow-blue-200 hover:-translate-y-1"
            >
              <Zap className="w-5 h-5" />
              Start Your AI Journey
            </a>
          </Reveal>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
