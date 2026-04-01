import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, Target, MessageCircle, BrainCircuit, 
  Link as LinkIcon, UserPlus, BarChart2, 
  Calendar, CreditCard, Database, 
  Mail, Smartphone, Zap, ShieldCheck, 
  TrendingUp, Globe, FileText, CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Reveal } from './ui/Reveal';
import Button from './ui/Button';

const AIChatbots: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
              <Bot className="w-4 h-4" />
              Intelligent AI Chatbots
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Capture, Qualify, and Convert with <span className="text-blue-600">AI Chatbots</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Deploy smart, context-aware chatbots that act as your best sales rep and support agent—working 24/7 to book meetings, answer questions, and integrate seamlessly with your tools.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="#/talk-to-sales" className="w-full sm:w-auto text-lg px-8 py-4">
                Build Your Chatbot
              </Button>
              <Button variant="outline" href="#/contact" className="w-full sm:w-auto text-lg px-8 py-4">
                Contact Sales
              </Button>
            </div>
          </Reveal>
        </div>

        {/* 1. Lead Capture & Qualification */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
                  <Target className="w-4 h-4" />
                  Lead Capture & Qualification
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Turn Visitors into Qualified Meetings
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Stop letting website traffic bounce. Our AI greets visitors, asks the right qualifying questions, and books appointments directly into your calendar without human intervention.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <UserPlus className="w-6 h-6 text-blue-500" />,
                      title: "Smart Data Collection",
                      description: "Greets visitors, asks qualifying questions, and collects contact details naturally."
                    },
                    {
                      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
                      title: "Real-Time Lead Scoring",
                      description: "Scores leads instantly based on their responses and intent."
                    },
                    {
                      icon: <Calendar className="w-6 h-6 text-blue-500" />,
                      title: "Automated Booking",
                      description: "Books appointments and calls directly, pushing qualified leads into your CRM or Google Sheets."
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
                  
                  {/* Mock Chat Interface */}
                  <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[450px]">
                    <div className="bg-blue-600 p-4 text-white flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <Bot className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold">Sales Assistant</h4>
                          <p className="text-xs text-blue-100">Online</p>
                        </div>
                      </div>
                      <div className="bg-green-400 text-green-900 text-xs font-bold px-2 py-1 rounded">Lead Score: High</div>
                    </div>
                    
                    <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-sm text-gray-700 max-w-[80%]">
                          Hi! Are you looking to automate your customer support or marketing?
                        </div>
                      </div>
                      
                      <div className="flex gap-3 flex-row-reverse">
                        <div className="bg-blue-600 p-3 rounded-2xl rounded-tr-none shadow-sm text-sm text-white max-w-[80%]">
                          Marketing automation mostly. We have about 50k monthly visitors.
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-sm text-gray-700 max-w-[80%]">
                          Perfect. With 50k visitors, our AI can help you capture 3x more leads. What's the best email to send our case studies to?
                        </div>
                      </div>

                      <div className="flex gap-3 flex-row-reverse">
                        <div className="bg-blue-600 p-3 rounded-2xl rounded-tr-none shadow-sm text-sm text-white max-w-[80%]">
                          david@example.com
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-sm text-gray-700 max-w-[80%]">
                          Thanks David! I've added you to our CRM. Would you like to book a quick 15-min demo for tomorrow?
                          <div className="mt-3 flex gap-2">
                            <button className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg border border-blue-100 text-xs font-bold">Yes, book demo</button>
                            <button className="bg-gray-50 text-gray-600 px-3 py-1 rounded-lg border border-gray-200 text-xs font-bold">Maybe later</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* 2. Smart Conversations & Knowledge */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
                  <BrainCircuit className="w-4 h-4" />
                  Smart Conversations & Knowledge
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Human-Like Understanding
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our chatbots don't rely on rigid decision trees. They use advanced Natural Language Understanding to handle typos, slang, and context, all while pulling accurate answers from your specific business data.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <MessageCircle className="w-6 h-6 text-blue-500" />,
                      title: "Natural Language & Context",
                      description: "Handles varied phrasing and maintains context within the same conversation for a fluid experience."
                    },
                    {
                      icon: <Globe className="w-6 h-6 text-blue-500" />,
                      title: "Multilingual & Brand-Matched",
                      description: "Supports diverse customer bases in multiple languages, with a personality tuned to your brand voice."
                    },
                    {
                      icon: <Database className="w-6 h-6 text-blue-500" />,
                      title: "Custom Knowledge Training",
                      description: "Trained on your FAQs, websites, and documents. Learns from past chats to improve over time."
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
                  
                  {/* Mock Knowledge Interface */}
                  <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[450px] p-6">
                    <h4 className="font-bold text-gray-900 mb-4">Knowledge Base Training</h4>
                    
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-3 rounded-xl border border-gray-200 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Globe className="w-5 h-5 text-blue-500" />
                          <div>
                            <p className="text-sm font-bold text-gray-900">Website Scrape</p>
                            <p className="text-xs text-gray-500">https://yourwebsite.com/*</p>
                          </div>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-xl border border-gray-200 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-blue-500" />
                          <div>
                            <p className="text-sm font-bold text-gray-900">Pricing_Policy_2026.pdf</p>
                            <p className="text-xs text-gray-500">Uploaded 2 days ago</p>
                          </div>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 flex-1">
                      <p className="text-xs font-bold text-blue-800 uppercase mb-2">Live Test (Handles Typos)</p>
                      <div className="space-y-3">
                        <div className="bg-white p-2 rounded shadow-sm text-sm text-gray-700">
                          <span className="font-bold text-gray-900">User:</span> "how much does the pro plan cost? i lost the link"
                        </div>
                        <div className="bg-blue-600 p-2 rounded shadow-sm text-sm text-white">
                          <span className="font-bold text-blue-200">AI:</span> "The Pro Plan is $99/month. It includes advanced analytics and priority support. You can view the full details here: [Link]"
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* 3. Integrations & Workflows */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
                  <LinkIcon className="w-4 h-4" />
                  Integrations & Workflows
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Connects to Your Entire Stack
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Your chatbot shouldn't live in a silo. We integrate directly with your CRM, calendar, and payment processors to automate end-to-end workflows.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <Database className="w-6 h-6 text-blue-500" />,
                      title: "CRM Sync",
                      description: "Push leads and chat transcripts directly to HubSpot, GoHighLevel, or Google Sheets."
                    },
                    {
                      icon: <Calendar className="w-6 h-6 text-blue-500" />,
                      title: "Calendar Booking",
                      description: "Native integrations with Calendly, Cal.com, and Google Calendar for seamless scheduling."
                    },
                    {
                      icon: <CreditCard className="w-6 h-6 text-blue-500" />,
                      title: "Payment Collection",
                      description: "Generate and send Stripe payment links directly within the chat interface."
                    },
                    {
                      icon: <Zap className="w-6 h-6 text-blue-500" />,
                      title: "Workflow Automation",
                      description: "Trigger complex n8n or Zapier workflows based on specific customer actions or intents."
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
                  
                  {/* Mock Integrations Interface */}
                  <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[450px] items-center justify-center p-8">
                    
                    <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg z-10 relative">
                      <Bot className="w-10 h-10 text-white" />
                      
                      {/* Connecting Lines */}
                      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 -z-10" viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="80" fill="none" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4" className="animate-[spin_20s_linear_infinite]" />
                        <line x1="100" y1="100" x2="100" y2="20" stroke="#93C5FD" strokeWidth="2" />
                        <line x1="100" y1="100" x2="180" y2="100" stroke="#93C5FD" strokeWidth="2" />
                        <line x1="100" y1="100" x2="100" y2="180" stroke="#93C5FD" strokeWidth="2" />
                        <line x1="100" y1="100" x2="20" y2="100" stroke="#93C5FD" strokeWidth="2" />
                      </svg>

                      {/* Integration Nodes */}
                      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center">
                        <Database className="w-6 h-6 text-orange-500" /> {/* HubSpot/CRM */}
                      </div>
                      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-blue-500" /> {/* Calendly */}
                      </div>
                      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-indigo-500" /> {/* Stripe */}
                      </div>
                      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center">
                        <Zap className="w-6 h-6 text-yellow-500" /> {/* Zapier */}
                      </div>
                    </div>

                    <div className="mt-24 text-center">
                      <p className="text-sm font-bold text-gray-900">Seamless Data Flow</p>
                      <p className="text-xs text-gray-500">Chatbot → CRM → Calendar → Payment</p>
                    </div>

                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* 4. Handoff & Escalation & Analytics */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Handoff & Escalation */}
            <Reveal delay={0.1}>
              <div className="bg-gray-50 rounded-[32px] p-10 border border-gray-100 h-full hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-8">
                  <ShieldCheck className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Handoff & Escalation</h3>
                <p className="text-gray-600 mb-6">
                  When AI isn't enough, seamlessly transfer the conversation to a live human agent with the full chat history intact.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <ArrowRight className="w-4 h-4 text-blue-500" /> Seamless transfer to live human
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <ArrowRight className="w-4 h-4 text-blue-500" /> Escalation rules (sentiment, keywords)
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <ArrowRight className="w-4 h-4 text-blue-500" /> Alerts via Email, SMS, or Slack
                  </li>
                </ul>

                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded">Frustration Detected</span>
                    <span className="text-xs text-gray-500">Routing to Support...</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 p-2 rounded">
                    <Smartphone className="w-4 h-4 text-blue-500" />
                    <span>SMS Alert sent to Manager</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Analytics */}
            <Reveal delay={0.2}>
              <div className="bg-gray-50 rounded-[32px] p-10 border border-gray-100 h-full hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-8">
                  <BarChart2 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Deep Analytics</h3>
                <p className="text-gray-600 mb-6">
                  Understand your customers better. Track conversation volume, identify drop-off points, and reveal content gaps.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <ArrowRight className="w-4 h-4 text-blue-500" /> Volume & conversion rates
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <ArrowRight className="w-4 h-4 text-blue-500" /> Most asked questions tracking
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-700">
                    <ArrowRight className="w-4 h-4 text-blue-500" /> Response satisfaction (CSAT)
                  </li>
                </ul>

                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-xs font-bold text-gray-500 mb-3 uppercase">Top Unanswered Questions</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-700">"Do you offer enterprise discounts?"</span>
                      <span className="text-blue-600 font-bold">42</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-700">"Is there a white-label option?"</span>
                      <span className="text-blue-600 font-bold">28</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AIChatbots;
