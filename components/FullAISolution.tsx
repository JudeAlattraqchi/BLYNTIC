import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  HeadphonesIcon, 
  Settings, 
  Briefcase, 
  PenTool, 
  BarChart, 
  BookOpen, 
  CheckCircle2, 
  Workflow, 
  FileText, 
  Users, 
  Zap, 
  LineChart, 
  Globe, 
  Mic, 
  MessageSquare,
  Cpu,
  Database,
  ArrowRight
} from 'lucide-react';
import { Reveal } from './ui/Reveal';
import Button from './ui/Button';

const FullAISolution: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
              <Globe className="w-4 h-4" />
              End-to-End Productization
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Your Complete <span className="text-blue-600">AI Transformation</span> Partner
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              This is BLYNTIC's premium, all-in-one offering. We don't just provide single tools—we architect, deploy, and manage a full AI ecosystem across your entire company.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="#/talk-to-sales" className="w-full sm:w-auto text-lg px-8 py-4">
                Transform Your Business
              </Button>
              <Button variant="outline" href="#/contact" className="w-full sm:w-auto text-lg px-8 py-4">
                Request a Demo
              </Button>
            </div>
          </Reveal>
        </div>

        {/* 1. AI-Powered Customer Acquisition */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
                  <Target className="w-4 h-4" />
                  Phase 1: Growth
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  AI-Powered Customer Acquisition
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Supercharge your top-of-funnel with an autonomous system that attracts, engages, and qualifies leads around the clock.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Smart website with dynamic content and SEO engine",
                    "AI chatbot capturing and qualifying leads 24/7",
                    "Voice AI receptionist answering every call",
                    "Automated cold outreach (email + LinkedIn)",
                    "AI-driven ad targeting and optimization",
                    "Lead scoring and pipeline automation"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <Reveal delay={0.2}>
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 p-8">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-indigo-500/5"></div>
                  
                  {/* Mockup: Acquisition Pipeline */}
                  <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[400px] p-6">
                    <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <Target className="w-5 h-5 text-blue-600" /> Acquisition Pipeline
                    </h4>
                    
                    <div className="space-y-4 relative">
                      <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-blue-100"></div>
                      
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center border-4 border-white">
                          <Globe className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex-1">
                          <p className="text-sm font-bold text-gray-900">Smart Website Traffic</p>
                          <p className="text-xs text-gray-500">Dynamic SEO Engine</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center border-4 border-white">
                          <Mic className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex-1">
                          <p className="text-sm font-bold text-gray-900">Voice AI & Chatbot</p>
                          <p className="text-xs text-gray-500">24/7 Lead Qualification</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center border-4 border-white">
                          <Database className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="bg-green-50 p-3 rounded-xl border border-green-100 flex-1">
                          <p className="text-sm font-bold text-green-900">Qualified Lead Scored</p>
                          <p className="text-xs text-green-700">Pushed to CRM Automatically</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* 2. AI Customer Service & Communication */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
                  <HeadphonesIcon className="w-4 h-4" />
                  Phase 2: Support
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  AI Customer Service & Communication
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Provide flawless, unified support across every channel. Our AI resolves issues instantly and escalates only when necessary.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Omnichannel AI handling phone, chat, email, SMS, social",
                    "Intelligent routing and escalation to the right human",
                    "Automated appointment booking, reminders, follow-ups",
                    "Review generation and response automation",
                    "Customer sentiment tracking in real-time"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <Reveal delay={0.2}>
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 p-8">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-indigo-500/5"></div>
                  
                  {/* Mockup: Omnichannel Inbox */}
                  <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[400px]">
                    <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
                      <span className="font-bold">Omnichannel AI Inbox</span>
                      <span className="bg-blue-500 px-2 py-1 rounded text-xs">Live Sentiment</span>
                    </div>
                    <div className="p-4 space-y-3 flex-1 bg-gray-50 overflow-y-auto">
                      <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <MessageSquare className="w-8 h-8 text-blue-500 bg-blue-50 p-1.5 rounded-lg" />
                          <div>
                            <p className="text-sm font-bold text-gray-900">Web Chat: Pricing Inquiry</p>
                            <p className="text-xs text-gray-500">AI resolved in 12s</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Positive</span>
                      </div>
                      
                      <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Mic className="w-8 h-8 text-purple-500 bg-purple-50 p-1.5 rounded-lg" />
                          <div>
                            <p className="text-sm font-bold text-gray-900">Voice AI: Reschedule</p>
                            <p className="text-xs text-gray-500">Appointment moved to Friday</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded">Neutral</span>
                      </div>

                      <div className="bg-white p-3 rounded-xl border border-red-200 shadow-sm flex items-center justify-between relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
                        <div className="flex items-center gap-3">
                          <FileText className="w-8 h-8 text-red-500 bg-red-50 p-1.5 rounded-lg" />
                          <div>
                            <p className="text-sm font-bold text-gray-900">Email: Billing Dispute</p>
                            <p className="text-xs text-red-500 font-medium">Escalated to Human Agent</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded">Frustrated</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* 3. AI Operations & Workflow Automation */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
                  <Settings className="w-4 h-4" />
                  Phase 3: Operations
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  AI Operations & Workflow Automation
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Eliminate manual data entry and disjointed processes. We connect your entire tech stack and automate your back-office operations.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "End-to-end workflow automation via n8n, Zapier, or Make",
                    "Document processing — AI reads invoices, contracts, forms",
                    "Automated data entry and CRM updates",
                    "Task assignment and project tracking triggered by AI",
                    "Internal knowledge base staff can query in natural language"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <Reveal delay={0.2}>
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 p-8">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-indigo-500/5"></div>
                  
                  {/* Mockup: Workflow */}
                  <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[400px] items-center justify-center p-6">
                    <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-3 w-56 text-center relative z-10">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <FileText className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-bold">PDF Invoice Received</span>
                      </div>
                    </div>
                    
                    <div className="w-0.5 h-8 bg-blue-200"></div>
                    
                    <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-3 w-56 text-center relative z-10">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Cpu className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-bold">AI Data Extraction</span>
                      </div>
                      <p className="text-xs text-gray-500">Reads amounts & dates</p>
                    </div>
                    
                    <div className="w-0.5 h-8 bg-blue-200"></div>
                    
                    <div className="flex gap-8 relative">
                      <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-blue-200"></div>
                      <div className="absolute top-0 left-1/4 w-0.5 h-6 bg-blue-200"></div>
                      <div className="absolute top-0 right-1/4 w-0.5 h-6 bg-blue-200"></div>
                      
                      <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-3 w-32 text-center relative z-10 mt-6">
                        <Database className="w-4 h-4 text-green-600 mx-auto mb-1" />
                        <p className="text-xs font-bold">Update CRM</p>
                      </div>
                      
                      <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-3 w-32 text-center relative z-10 mt-6">
                        <Zap className="w-4 h-4 text-orange-600 mx-auto mb-1" />
                        <p className="text-xs font-bold">Alert Finance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* 4-7. Grid for Remaining Pillars */}
        <div className="mb-24">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">Complete Enterprise Intelligence</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Empowering every department with specialized AI capabilities.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 4. AI Sales Enablement */}
            <Reveal delay={0.1}>
              <div className="bg-gray-50 rounded-[32px] p-10 border border-gray-100 h-full hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-8">
                  <Briefcase className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">4. AI Sales Enablement</h3>
                <ul className="space-y-4">
                  {[
                    "AI-generated proposals and quotes",
                    "Automated follow-up sequences based on engagement signals",
                    "Sales call transcription, summarization, and action items",
                    "Pipeline forecasting and deal scoring",
                    "Competitor intelligence monitoring"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* 5. AI Content & Marketing Engine */}
            <Reveal delay={0.2}>
              <div className="bg-gray-50 rounded-[32px] p-10 border border-gray-100 h-full hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-8">
                  <PenTool className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">5. AI Content & Marketing Engine</h3>
                <ul className="space-y-4">
                  {[
                    "Blog, social, and email content generation",
                    "Brand voice consistency across all AI outputs",
                    "Programmatic SEO — location and service page generation at scale",
                    "AI video scripts and voiceovers (your existing content service)",
                    "Automated reporting dashboards"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* 6. AI Analytics & Decision Intelligence */}
            <Reveal delay={0.3}>
              <div className="bg-gray-50 rounded-[32px] p-10 border border-gray-100 h-full hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-8">
                  <LineChart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">6. AI Analytics & Decision Intelligence</h3>
                <ul className="space-y-4">
                  {[
                    "Unified dashboard across all AI touchpoints",
                    "Customer behavior prediction and churn alerts",
                    "Revenue attribution — which AI touchpoints drive conversions",
                    "Automated weekly/monthly performance reports",
                    "AI-driven recommendations for next actions"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* 7. AI Training & Knowledge Management */}
            <Reveal delay={0.4}>
              <div className="bg-gray-50 rounded-[32px] p-10 border border-gray-100 h-full hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-8">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">7. AI Training & Knowledge Management</h3>
                <ul className="space-y-4">
                  {[
                    "Company-specific AI models trained on internal data",
                    "Employee onboarding bots that answer policy and process questions",
                    "Meeting transcription and searchable archives",
                    "AI-assisted SOPs and documentation generation"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

          </div>
        </div>

      </div>
    </div>
  );
};

export default FullAISolution;
