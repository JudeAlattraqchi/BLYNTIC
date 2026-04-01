import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  PhoneCall, 
  MessageSquare, 
  Smartphone, 
  GitMerge, 
  ShieldAlert, 
  Layers, 
  RefreshCcw, 
  BellRing, 
  Star, 
  TrendingUp, 
  BookOpen, 
  CalendarCheck, 
  BarChart3, 
  Activity, 
  Wrench, 
  Stethoscope, 
  Home, 
  Coffee, 
  Scale,
  HeadphonesIcon
} from 'lucide-react';
import { Reveal } from './ui/Reveal';
import Button from './ui/Button';

const AICustomerService: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
              <HeadphonesIcon className="w-4 h-4" />
              AI Customer Service
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Support with <span className="text-blue-600">Intelligent Automation</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Deploy autonomous AI agents that handle calls, chats, and texts 24/7. Deliver flawless omnichannel support, intelligent routing, and proactive service without scaling your headcount.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="#/talk-to-sales" className="w-full sm:w-auto text-lg px-8 py-4">
                Automate Your Support
              </Button>
              <Button variant="outline" href="#/contact" className="w-full sm:w-auto text-lg px-8 py-4">
                Contact Sales
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Industry Framing */}
        <div className="mb-32">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Built for Your Industry</h2>
              <p className="text-lg text-gray-600">Tailored AI solutions that understand your specific business needs.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Wrench className="w-8 h-8 text-blue-600" />,
                  title: "Trades",
                  description: '"Never miss a job inquiry again — AI answers every call and books the quote."'
                },
                {
                  icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
                  title: "Dental & Medical",
                  description: '"Emma handles bookings, reminders, and insurance questions 24/7."'
                },
                {
                  icon: <Home className="w-8 h-8 text-blue-600" />,
                  title: "Real Estate",
                  description: '"Instant property info and viewing bookings for every lead, day or night."'
                },
                {
                  icon: <Coffee className="w-8 h-8 text-blue-600" />,
                  title: "Hospitality",
                  description: '"AI concierge for reservations, FAQs, and guest requests across all channels."'
                },
                {
                  icon: <Scale className="w-8 h-8 text-blue-600" />,
                  title: "Legal",
                  description: '"AI intake screens potential clients, collects case details, and books consultations."'
                }
              ].map((industry, idx) => (
                <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.title}</h3>
                  <p className="text-gray-600 italic">{industry.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Core Features Grid */}
        <div className="mb-24">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">Core AI Customer Service Features</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to productize and scale your customer support operations.</p>
            </div>
          </Reveal>

          <div className="space-y-24">
            
            {/* 1. 24/7 Instant Response */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <Reveal>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
                    <Clock className="w-4 h-4" />
                    24/7 Instant Response
                  </div>
                  <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">Always On, Always Ready</h3>
                  <p className="text-lg text-gray-600 mb-8">Provide immediate answers and support around the clock, ensuring your customers never have to wait on hold again.</p>
                  
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <PhoneCall className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">AI Voice Receptionists</h4>
                        <p className="text-gray-600">Powered by Retell AI builds, answering calls, booking appointments, and routing urgent issues seamlessly.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">Web Chat Agents</h4>
                        <p className="text-gray-600">Handling FAQs, order status, and basic troubleshooting without human involvement.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <Smartphone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">SMS Auto-Responders</h4>
                        <p className="text-gray-600">Instant text replies for after-hours inquiries and quick updates.</p>
                      </div>
                    </li>
                  </ul>
                </Reveal>
              </div>
              <div className="lg:w-1/2 w-full">
                <Reveal delay={0.2}>
                  <div className="bg-gray-50 rounded-[32px] p-8 border border-gray-100 shadow-xl relative overflow-hidden h-[400px] flex flex-col justify-center items-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/10"></div>
                    <div className="relative z-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full max-w-sm">
                      <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <PhoneCall className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900">Incoming Call</h5>
                          <p className="text-sm text-green-600 font-medium">AI Agent Active</p>
                        </div>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                          <span className="font-bold text-blue-600">AI:</span> "Thank you for calling. Are you looking to book a new quote or check on an existing job?"
                        </div>
                        <div className="bg-blue-600 text-white p-3 rounded-lg ml-6">
                          <span className="font-bold text-blue-200">Caller:</span> "I need a quote for a roof repair."
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                          <span className="font-bold text-blue-600">AI:</span> "I can help with that. What day works best for our estimator to stop by?"
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* 2. Intelligent Routing & Escalation */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="lg:w-1/2">
                <Reveal>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
                    <GitMerge className="w-4 h-4" />
                    Intelligent Routing & Escalation
                  </div>
                  <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">Smart Triage & Handoffs</h3>
                  <p className="text-lg text-gray-600 mb-8">Ensure complex issues reach the right human agent instantly, with full context, while AI handles the routine tasks.</p>
                  
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <Layers className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">AI Triage</h4>
                        <p className="text-gray-600">Automatically categorizes incoming queries by urgency, sentiment, and topic.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <RefreshCcw className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">Contextual Routing</h4>
                        <p className="text-gray-600">Routes complex issues to the right human department with full conversation history attached.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <ShieldAlert className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">Escalation Triggers</h4>
                        <p className="text-gray-600">Automatic escalation based on specific keywords, negative tone shifts, or repeat contacts.</p>
                      </div>
                    </li>
                  </ul>
                </Reveal>
              </div>
              <div className="lg:w-1/2 w-full">
                <Reveal delay={0.2}>
                  <div className="bg-gray-50 rounded-[32px] p-8 border border-gray-100 shadow-xl relative overflow-hidden h-[400px] flex flex-col justify-center items-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/10"></div>
                    
                    <div className="relative z-10 w-full max-w-sm space-y-4">
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">FAQ</div>
                          <div>
                            <p className="text-sm font-bold">"What are your hours?"</p>
                            <p className="text-xs text-gray-500">Sentiment: Neutral</p>
                          </div>
                        </div>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">AI Handled</span>
                      </div>
                      
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-red-200 flex items-center justify-between relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600"><ShieldAlert className="w-5 h-5" /></div>
                          <div>
                            <p className="text-sm font-bold">"My pipe burst, urgent!"</p>
                            <p className="text-xs text-red-500">Sentiment: Urgent/Panic</p>
                          </div>
                        </div>
                        <span className="text-xs bg-red-100 px-2 py-1 rounded text-red-700 font-bold">Escalated</span>
                      </div>
                      
                      <div className="bg-white p-4 rounded-xl shadow-sm border border-yellow-200 flex items-center justify-between relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400"></div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600"><RefreshCcw className="w-5 h-5" /></div>
                          <div>
                            <p className="text-sm font-bold">"Billing error on invoice"</p>
                            <p className="text-xs text-yellow-600">Topic: Finance</p>
                          </div>
                        </div>
                        <span className="text-xs bg-yellow-100 px-2 py-1 rounded text-yellow-700 font-bold">Routed to Billing</span>
                      </div>
                    </div>

                  </div>
                </Reveal>
              </div>
            </div>

            {/* 3. Omnichannel & Proactive */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <Reveal>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
                    <BellRing className="w-4 h-4" />
                    Omnichannel & Proactive
                  </div>
                  <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">Unified & Anticipatory Service</h3>
                  <p className="text-lg text-gray-600 mb-8">Maintain a single, consistent conversation across all platforms and reach out to customers before they even know they need help.</p>
                  
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <Layers className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">Omnichannel Consistency</h4>
                        <p className="text-gray-600">Unified AI handling across phone, web chat, email, SMS, and social DMs with a single customer history view.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <CalendarCheck className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">Automated Reminders</h4>
                        <p className="text-gray-600">Proactive appointment reminders, confirmations, and follow-up messages asking for reviews.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">Predictive Outreach</h4>
                        <p className="text-gray-600">AI detects patterns (e.g., missed appointments, billing anomalies) and reaches out automatically to resolve them.</p>
                      </div>
                    </li>
                  </ul>
                </Reveal>
              </div>
              <div className="lg:w-1/2 w-full">
                <Reveal delay={0.2}>
                  <div className="bg-gray-50 rounded-[32px] p-8 border border-gray-100 shadow-xl relative overflow-hidden h-[400px] flex flex-col justify-center items-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/10"></div>
                    
                    <div className="relative z-10 w-full max-w-sm bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                      <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
                        <span className="font-bold">Customer Profile: Sarah J.</span>
                        <span className="text-xs bg-blue-500 px-2 py-1 rounded">Unified View</span>
                      </div>
                      <div className="p-4 space-y-4 text-sm">
                        <div className="flex gap-3 items-start">
                          <MessageSquare className="w-4 h-4 text-gray-400 mt-1" />
                          <div>
                            <p className="text-xs text-gray-500">Yesterday, 2:00 PM (Web Chat)</p>
                            <p className="text-gray-800">Asked about pricing for deep cleaning.</p>
                          </div>
                        </div>
                        <div className="flex gap-3 items-start">
                          <PhoneCall className="w-4 h-4 text-gray-400 mt-1" />
                          <div>
                            <p className="text-xs text-gray-500">Today, 9:15 AM (Voice AI)</p>
                            <p className="text-gray-800">Called to book appointment. AI scheduled for Friday.</p>
                          </div>
                        </div>
                        <div className="flex gap-3 items-start">
                          <Smartphone className="w-4 h-4 text-blue-500 mt-1" />
                          <div className="bg-blue-50 p-2 rounded border border-blue-100 w-full">
                            <p className="text-xs text-blue-600 font-bold mb-1">Proactive SMS Sent (Just Now)</p>
                            <p className="text-gray-800">"Hi Sarah, confirming your deep cleaning for Friday at 10 AM. Reply YES to confirm."</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </Reveal>
              </div>
            </div>

            {/* 4. Self-Service & Analytics */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="lg:w-1/2">
                <Reveal>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
                    <BarChart3 className="w-4 h-4" />
                    Self-Service & Analytics
                  </div>
                  <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">Empower Customers, Measure Success</h3>
                  <p className="text-lg text-gray-600 mb-8">Give customers the tools to help themselves, while you gain deep insights into conversation sentiment and resolution rates.</p>
                  
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">Self-Service Enablement</h4>
                        <p className="text-gray-600">AI-powered knowledge bases, guided troubleshooting flows, and automated booking/rescheduling without staff involvement.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <Activity className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">Sentiment & Issue Tracking</h4>
                        <p className="text-gray-600">Track conversation sentiment across all channels and identify common issues to fix root causes.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <Star className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">Performance Dashboards</h4>
                        <p className="text-gray-600">Real-time metrics on response times, resolution rates, and Customer Satisfaction (CSAT) scores.</p>
                      </div>
                    </li>
                  </ul>
                </Reveal>
              </div>
              <div className="lg:w-1/2 w-full">
                <Reveal delay={0.2}>
                  <div className="bg-gray-50 rounded-[32px] p-8 border border-gray-100 shadow-xl relative overflow-hidden h-[400px] flex flex-col justify-center items-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/10"></div>
                    
                    <div className="relative z-10 w-full max-w-sm bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                      <h4 className="font-bold text-gray-900 mb-4">AI Performance Dashboard</h4>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center">
                          <p className="text-xs text-gray-500 mb-1">Resolution Rate</p>
                          <p className="text-2xl font-bold text-blue-600">87%</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center">
                          <p className="text-xs text-gray-500 mb-1">Avg Response</p>
                          <p className="text-2xl font-bold text-blue-600">&lt; 2s</p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm font-bold text-gray-900 mb-2">Customer Sentiment</p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <span className="w-16 text-gray-500">Positive</span>
                            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500 w-[75%]"></div>
                            </div>
                            <span className="font-medium">75%</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="w-16 text-gray-500">Neutral</span>
                            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div className="h-full bg-yellow-400 w-[20%]"></div>
                            </div>
                            <span className="font-medium">20%</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="w-16 text-gray-500">Negative</span>
                            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div className="h-full bg-red-500 w-[5%]"></div>
                            </div>
                            <span className="font-medium">5%</span>
                          </div>
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

export default AICustomerService;
