import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Users, Search, MousePointerClick, 
  Bot, Mic, ClipboardList, Zap, 
  Activity, BarChart, Layout, FileText,
  ArrowRight, CheckCircle2, PhoneCall,
  Settings, LineChart, Sparkles
} from 'lucide-react';
import { Reveal } from './ui/Reveal';
import Button from './ui/Button';

const SmartWebsite: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
              <Globe className="w-4 h-4" />
              AI Smart Website
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
              The Website That <span className="text-blue-600">Adapts, Converts, and Automates</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Transform your static site into a dynamic conversion engine. Featuring programmatic SEO, progressive smart forms, built-in voice AI, and predictive analytics that turn traffic into revenue.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="#/talk-to-sales" className="w-full sm:w-auto text-lg px-8 py-4">
                Upgrade Your Website
              </Button>
              <Button variant="outline" href="#/contact" className="w-full sm:w-auto text-lg px-8 py-4">
                See a Demo
              </Button>
            </div>
          </Reveal>
        </div>

        {/* 1. Personalized UX & Conversion Optimization */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
                  <Users className="w-4 h-4" />
                  Personalization & Conversion
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Dynamic Experiences for Every Visitor
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Stop showing the same generic page to everyone. Our AI adapts your website's messaging, layouts, and CTAs in real-time based on visitor behavior, industry, and traffic source.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <Layout className="w-6 h-6 text-blue-500" />,
                      title: "Dynamic Content Adaptation",
                      description: "Industry/role-based landing pages that auto-adjust messaging and recommend relevant products."
                    },
                    {
                      icon: <Sparkles className="w-6 h-6 text-blue-500" />,
                      title: "Returning Visitor Recognition",
                      description: "Shows highly relevant content and skips introductory steps based on past interactions."
                    },
                    {
                      icon: <MousePointerClick className="w-6 h-6 text-blue-500" />,
                      title: "AI-Powered A/B Testing",
                      description: "Automatically tests and selects winning headlines, CTAs, and layouts to maximize conversions."
                    },
                    {
                      icon: <Activity className="w-6 h-6 text-blue-500" />,
                      title: "Smart Pop-ups & Heatmaps",
                      description: "Trigger pop-ups based on exit intent or scroll depth, backed by deep session analysis."
                    }
                  ].map((feature, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <Reveal delay={0.2}>
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 p-8">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-indigo-500/5"></div>
                  
                  {/* Mock Browser Interface */}
                  <div className="relative bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-[450px]">
                    {/* Browser Chrome */}
                    <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <div className="ml-4 bg-white text-xs text-gray-500 px-3 py-1 rounded-md flex-1 flex items-center gap-2">
                        <Globe className="w-3 h-3" /> yoursite.com
                      </div>
                    </div>
                    
                    {/* Dynamic Content Mock */}
                    <div className="p-6 flex-1 relative">
                      <div className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded flex items-center gap-1 animate-pulse">
                        <Sparkles className="w-3 h-3" /> AI Adapted: Healthcare
                      </div>
                      
                      <div className="mt-8 space-y-4">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                          <Activity className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Welcome back, Dr. Smith</h3>
                        <p className="text-gray-600 text-sm max-w-xs">
                          Since your last visit, we've updated our medical compliance tools. Ready to resume your onboarding?
                        </p>
                        <div className="pt-4 flex gap-3">
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">Resume Onboarding</button>
                        </div>
                      </div>
                      
                      {/* Heatmap Overlay Mock */}
                      <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-500/20 rounded-full blur-2xl"></div>
                      <div className="absolute bottom-16 right-16 w-16 h-16 bg-red-500/40 rounded-full blur-xl"></div>
                      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-xs text-gray-600 px-2 py-1 rounded border border-gray-200 shadow-sm">
                        🔥 High Click Intent
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* 2. AI Content & SEO */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
                  <Search className="w-4 h-4" />
                  AI Content & SEO
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Dominate Search at Scale
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Generate hundreds of highly-targeted, SEO-optimized pages automatically. Our AI handles the heavy lifting of content creation, meta tags, and schema markup.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <Globe className="w-6 h-6 text-blue-500" />,
                      title: "Programmatic SEO Pages",
                      description: "Generate hundreds of location or service-specific pages at scale to capture long-tail traffic."
                    },
                    {
                      icon: <FileText className="w-6 h-6 text-blue-500" />,
                      title: "Auto-Generated Blog Posts",
                      description: "High-quality, relevant articles optimized for your target keywords and search intent."
                    },
                    {
                      icon: <Settings className="w-6 h-6 text-blue-500" />,
                      title: "Dynamic Meta & Schema",
                      description: "Auto-applied schema markup for rich search results and dynamic meta titles/descriptions."
                    }
                  ].map((feature, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <Reveal delay={0.2}>
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 p-8">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-indigo-500/5"></div>
                  
                  {/* Mock SEO Dashboard */}
                  <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[450px]">
                    <div className="bg-gray-900 p-4 text-white flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Search className="w-5 h-5 text-blue-400" />
                        <span className="font-bold">Programmatic SEO Engine</span>
                      </div>
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs border border-green-500/30">Active</span>
                    </div>
                    <div className="p-6 flex-1 bg-gray-50 overflow-y-auto">
                      <div className="mb-4 flex justify-between items-end">
                        <p className="text-sm font-bold text-gray-700">Generated Pages (Location x Service)</p>
                        <p className="text-xs text-blue-600 font-bold">482 Pages Live</p>
                      </div>
                      <div className="space-y-3">
                        {[
                          { title: "Emergency Plumber in Austin, TX", keyword: "emergency plumber austin", status: "Indexed" },
                          { title: "Commercial HVAC Repair in Dallas", keyword: "commercial hvac dallas", status: "Indexed" },
                          { title: "24/7 Electrician in Houston, TX", keyword: "24/7 electrician houston", status: "Crawling" },
                          { title: "Water Damage Restoration San Antonio", keyword: "water damage san antonio", status: "Generating" },
                        ].map((page, i) => (
                          <div key={i} className="bg-white p-3 rounded-xl border border-gray-200 flex flex-col gap-2 shadow-sm">
                            <div className="flex justify-between items-start">
                              <p className="text-sm font-bold text-blue-600 hover:underline cursor-pointer">{page.title}</p>
                              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                                page.status === 'Indexed' ? 'bg-green-100 text-green-700' : 
                                page.status === 'Crawling' ? 'bg-blue-100 text-blue-700' : 
                                'bg-yellow-100 text-yellow-700'
                              }`}>
                                {page.status}
                              </span>
                            </div>
                            <div className="flex gap-2 text-xs text-gray-500">
                              <span className="bg-gray-100 px-1.5 py-0.5 rounded">KW: {page.keyword}</span>
                              <span className="bg-gray-100 px-1.5 py-0.5 rounded flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500"/> Schema</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* 3. Chatbot & Voice AI */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
                  <Mic className="w-4 h-4" />
                  Built-In AI Chatbot & Voice
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Conversational Interfaces
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Embed our powerful AI chatbots natively into your site. Trigger proactive conversations based on user behavior, or let visitors click-to-call an AI voice agent instantly.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <Bot className="w-6 h-6 text-blue-500" />,
                      title: "Native AI Chatbot",
                      description: "Proactive chat triggers based on page visited or time spent. Captures leads directly into your CRM."
                    },
                    {
                      icon: <PhoneCall className="w-6 h-6 text-blue-500" />,
                      title: "Click-to-Call Voice AI",
                      description: "Instead of ringing a busy phone line, visitors instantly connect with a human-like AI voice agent."
                    },
                    {
                      icon: <Mic className="w-6 h-6 text-blue-500" />,
                      title: "Voice-Enabled Navigation",
                      description: "Accessibility-first voice search allows users to navigate and find answers by speaking."
                    }
                  ].map((feature, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <Reveal delay={0.2}>
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 p-8 h-[450px] flex items-end justify-end">
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-10"></div>
                  
                  {/* Floating Widget Mock */}
                  <div className="relative z-10 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col">
                    <div className="bg-blue-600 p-4 text-white">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative">
                          <div className="absolute top-0 right-0 w-3 h-3 bg-green-400 border-2 border-blue-600 rounded-full"></div>
                          <Bot className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">Blyntic Assistant</h4>
                          <p className="text-xs text-blue-200">Usually replies instantly</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 space-y-3 h-48 overflow-y-auto">
                      <div className="text-xs text-center text-gray-400 my-2">Proactive Trigger: Pricing Page</div>
                      <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-sm text-gray-700">
                        Hi there! 👋 I see you're looking at our enterprise plans. Would you like to chat with me, or call our AI voice agent for a quicker answer?
                      </div>
                    </div>
                    
                    <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
                      <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                        <MessageCircle className="w-4 h-4" /> Chat
                      </button>
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-colors shadow-sm">
                        <PhoneCall className="w-4 h-4" /> Call AI
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* 4. Smart Forms & Automation */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
                  <ClipboardList className="w-4 h-4" />
                  Smart Forms & Automation
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Frictionless Lead Capture
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Replace static forms with intelligent, progressive profiling. Our forms adapt to user answers, auto-fill data, and instantly trigger complex backend workflows.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <ClipboardList className="w-6 h-6 text-blue-500" />,
                      title: "Progressive Profiling",
                      description: "Asks different questions on repeat visits to build a complete profile without overwhelming the user."
                    },
                    {
                      icon: <Sparkles className="w-6 h-6 text-blue-500" />,
                      title: "AI Auto-Fill & Logic",
                      description: "AI suggests auto-fills to reduce friction, while conditional logic adapts fields based on previous answers."
                    },
                    {
                      icon: <Zap className="w-6 h-6 text-blue-500" />,
                      title: "Automation Layer",
                      description: "Form submissions instantly trigger email sequences, CRM entries, and webhook connections to n8n, Zapier, or Make."
                    }
                  ].map((feature, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <Reveal delay={0.2}>
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 p-8">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-indigo-500/5"></div>
                  
                  {/* Mock Form & Automation Interface */}
                  <div className="relative z-10 flex flex-col gap-6">
                    
                    {/* Form Mock */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 w-full max-w-sm mx-auto">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-bold text-gray-900">Get Your Free Audit</h4>
                        <button className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded flex items-center gap-1 font-medium">
                          <Sparkles className="w-3 h-3" /> AI Auto-fill
                        </button>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <label className="text-xs text-gray-500 font-medium block mb-1">Company Website</label>
                          <div className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 text-sm text-gray-800">techcorp.io</div>
                        </div>
                        {/* Conditional Field */}
                        <div className="relative">
                          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-400 rounded-r"></div>
                          <label className="text-xs text-blue-600 font-bold block mb-1">Detected Industry: SaaS (Auto-adapted)</label>
                          <div className="w-full bg-blue-50 border border-blue-200 rounded-lg p-2 text-sm text-gray-800 flex justify-between items-center">
                            <span>What is your MRR?</span>
                            <ArrowRight className="w-4 h-4 text-blue-400" />
                          </div>
                        </div>
                        <button className="w-full bg-gray-900 text-white rounded-lg py-2 text-sm font-bold mt-2">Submit & Automate</button>
                      </div>
                    </div>

                    {/* Webhook Connection Line */}
                    <div className="flex justify-center -my-2 relative z-0">
                      <div className="w-0.5 h-10 bg-blue-200"></div>
                    </div>

                    {/* Automation Node Mock */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 w-48 mx-auto flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Zap className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900">Zapier Webhook</p>
                        <p className="text-[10px] text-gray-500">Triggered instantly</p>
                      </div>
                    </div>

                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* 5. Performance & Analytics */}
        <div className="mb-24">
          <div className="bg-gray-900 rounded-[40px] p-8 md:p-16 overflow-hidden relative text-white">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <Reveal>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-blue-300 font-medium text-sm mb-6 border border-white/20 backdrop-blur-sm">
                    <LineChart className="w-4 h-4" />
                    Performance & Analytics
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                    Predictive Insights & Speed
                  </h2>
                  <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                    A fast website is a converting website. We combine AI-driven site speed optimization with predictive analytics to identify exactly which visitors are ready to buy.
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" /> AI-driven site speed optimization
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" /> Real-time visitor intent tracking
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" /> Predictive likelihood-to-convert scoring
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" /> Automated traffic & content reports
                    </li>
                  </ul>
                </Reveal>
              </div>
              
              <div className="lg:w-1/2 w-full">
                <Reveal delay={0.2}>
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-2xl">
                    <h4 className="font-bold text-white mb-6 flex items-center gap-2">
                      <Activity className="w-5 h-5 text-blue-400" /> Live Visitor Analysis
                    </h4>
                    
                    <div className="space-y-4">
                      <div className="bg-black/40 rounded-xl p-4 border border-white/10">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-300">Visitor #8492 (Dallas, TX)</span>
                          <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded border border-green-500/30">Active Now</span>
                        </div>
                        <div className="flex items-end gap-4 mt-4">
                          <div className="flex-1">
                            <p className="text-xs text-gray-400 mb-1">Conversion Probability</p>
                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-blue-500 to-green-400 w-[89%]"></div>
                            </div>
                          </div>
                          <div className="text-2xl font-bold text-white">89%</div>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-300">Viewed Pricing (2x)</span>
                          <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-gray-300">Read Case Study</span>
                        </div>
                      </div>
                      
                      <div className="bg-black/20 rounded-xl p-4 border border-white/5 opacity-70">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-400">Visitor #8491 (London, UK)</span>
                          <span className="text-xs bg-gray-500/20 text-gray-400 px-2 py-1 rounded border border-gray-500/30">Idle</span>
                        </div>
                        <div className="flex items-end gap-4 mt-4">
                          <div className="flex-1">
                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                              <div className="h-full bg-yellow-500 w-[34%]"></div>
                            </div>
                          </div>
                          <div className="text-lg font-bold text-gray-400">34%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SmartWebsite;
