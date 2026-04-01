import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Mail, Linkedin, MessageSquare, 
  PenTool, Search, Layout, Globe, 
  Mic, MessageCircle, Star, Send, 
  TrendingUp, Columns, Users, Activity, 
  Database, Zap, LineChart, Network,
  Megaphone
} from 'lucide-react';
import { Reveal } from './ui/Reveal';
import Button from './ui/Button';

const AIMarketing: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
              <Megaphone className="w-4 h-4" />
              Blyntic AI Marketing
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Scale Your Growth with <span className="text-blue-600">AI-Driven Marketing</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              From personalized cold outreach to programmatic SEO and voice AI receptionists, Blyntic AI automates your entire marketing funnel to capture, qualify, and convert leads 24/7.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="#/talk-to-sales" className="w-full sm:w-auto text-lg px-8 py-4">
                Automate Your Marketing
              </Button>
              <Button variant="outline" href="#/contact" className="w-full sm:w-auto text-lg px-8 py-4">
                Contact Sales
              </Button>
            </div>
          </Reveal>
        </div>

        {/* 1. Lead Generation & Outreach */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
                  <Target className="w-4 h-4" />
                  Lead Generation & Outreach
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Hyper-Personalized Outreach at Scale
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Stop manually prospecting. Our AI models automatically score, qualify, and engage leads across multiple channels with dynamic personalization that drives responses.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <Activity className="w-6 h-6 text-blue-500" />,
                      title: "Automated Lead Scoring",
                      description: "Qualify leads instantly using advanced AI models based on engagement and firmographics."
                    },
                    {
                      icon: <Mail className="w-6 h-6 text-blue-500" />,
                      title: "Cold Email Sequences",
                      description: "Personalized cold email sequences at scale, seamlessly integrated with tools like Instantly."
                    },
                    {
                      icon: <Linkedin className="w-6 h-6 text-blue-500" />,
                      title: "AI LinkedIn Outreach",
                      description: "Dynamic personalization for LinkedIn connection requests and follow-ups."
                    },
                    {
                      icon: <MessageSquare className="w-6 h-6 text-blue-500" />,
                      title: "24/7 Lead Capture Chatbots",
                      description: "Intelligent chatbots that capture and qualify website visitors around the clock."
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
                  
                  {/* Mock Email Interface */}
                  <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[450px]">
                    <div className="bg-gray-50 p-4 border-b border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <span className="text-xs font-medium text-gray-500">Instantly AI Sequence</span>
                    </div>
                    <div className="p-6 flex-1 bg-white">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <p className="text-sm text-gray-500">To: <span className="text-gray-900 font-medium">sarah@techcorp.com</span></p>
                          <p className="text-sm text-gray-500">Subject: <span className="text-gray-900 font-medium">Scaling TechCorp's outbound</span></p>
                        </div>
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                          Lead Score: 94/100
                        </div>
                      </div>
                      <div className="space-y-4 text-sm text-gray-700">
                        <p>Hi Sarah,</p>
                        <p className="bg-blue-50 p-1 rounded border border-blue-100 text-blue-800">
                          [AI Personalized: Noticed TechCorp just raised Series B and you're expanding the sales team in Austin.]
                        </p>
                        <p>With that kind of growth, manual prospecting usually becomes a bottleneck. We help companies like yours automate cold email sequences at scale using AI.</p>
                        <p>Would you be open to a quick chat next Tuesday to see how we integrate with your current stack?</p>
                        <p>Best,<br/>Alex</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* 2. Content & SEO */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
                  <Search className="w-4 h-4" />
                  Content & SEO
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Programmatic SEO & Dynamic Content
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Dominate search rankings without lifting a finger. Our AI generates high-quality, keyword-optimized content and hundreds of programmatic location/service pages automatically.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <PenTool className="w-6 h-6 text-blue-500" />,
                      title: "AI-Generated Copy",
                      description: "Automatically generate blog posts, social media captions, and high-converting ad copy."
                    },
                    {
                      icon: <Search className="w-6 h-6 text-blue-500" />,
                      title: "Automated Keyword Research",
                      description: "AI discovers untapped keywords and automatically builds comprehensive content briefs."
                    },
                    {
                      icon: <Layout className="w-6 h-6 text-blue-500" />,
                      title: "Dynamic Personalization",
                      description: "Change website content dynamically based on user behavior and traffic source."
                    },
                    {
                      icon: <Globe className="w-6 h-6 text-blue-500" />,
                      title: "Programmatic SEO",
                      description: "Generate hundreds of highly-targeted location and service pages to capture long-tail search traffic."
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
                  
                  {/* Mock SEO Interface */}
                  <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[450px]">
                    <div className="bg-blue-600 p-4 text-white flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Globe className="w-5 h-5" />
                        <span className="font-bold">Programmatic SEO Engine</span>
                      </div>
                      <span className="bg-blue-500 px-2 py-1 rounded text-xs">Generating...</span>
                    </div>
                    <div className="p-6 flex-1 bg-gray-50 overflow-y-auto">
                      <div className="space-y-3">
                        {[
                          { loc: "New York", service: "AI Consulting", status: "Published", traffic: "+12%" },
                          { loc: "Austin", service: "Marketing Automation", status: "Published", traffic: "+8%" },
                          { loc: "London", service: "Voice AI Receptionist", status: "Published", traffic: "+15%" },
                          { loc: "Toronto", service: "Lead Generation", status: "Generating", traffic: "-" },
                          { loc: "Sydney", service: "Programmatic SEO", status: "Queued", traffic: "-" },
                        ].map((page, i) => (
                          <div key={i} className="bg-white p-3 rounded-xl border border-gray-100 flex items-center justify-between shadow-sm">
                            <div>
                              <p className="text-sm font-bold text-gray-900">{page.service} in {page.loc}</p>
                              <p className="text-xs text-gray-500">/services/{page.service.toLowerCase().replace(' ', '-')}-{page.loc.toLowerCase()}</p>
                            </div>
                            <div className="text-right">
                              <span className={`text-xs px-2 py-1 rounded-full ${page.status === 'Published' ? 'bg-green-100 text-green-700' : page.status === 'Generating' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600'}`}>
                                {page.status}
                              </span>
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

        {/* 3. Customer Communication */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
                  <Mic className="w-4 h-4" />
                  Customer Communication
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Voice AI & Automated Workflows
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Never miss a call or a message. From our specialized Voice AI receptionists (like our "Emma" build for dental clinics) to automated review requests, we handle customer communication flawlessly.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <Mic className="w-6 h-6 text-blue-500" />,
                      title: 'Voice AI Receptionists ("Emma")',
                      description: "Custom-built voice AI agents that answer calls, handle FAQs, and book appointments directly into your calendar."
                    },
                    {
                      icon: <MessageCircle className="w-6 h-6 text-blue-500" />,
                      title: "AI Web Chat & Routing",
                      description: "Intelligent web chat that resolves FAQs instantly and routes complex queries to the right human agent."
                    },
                    {
                      icon: <Star className="w-6 h-6 text-blue-500" />,
                      title: "Review Request Workflows",
                      description: "Automatically send review requests after successful interactions and use AI to draft responses."
                    },
                    {
                      icon: <Send className="w-6 h-6 text-blue-500" />,
                      title: "Triggered Drip Campaigns",
                      description: "Launch SMS and email drip campaigns automatically based on specific customer actions or inactions."
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
                  
                  {/* Mock Voice Interface */}
                  <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[450px] items-center justify-center p-8 text-center">
                    <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-6 relative">
                      <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20"></div>
                      <Mic className="w-10 h-10 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">"Emma" - Dental Receptionist</h3>
                    <p className="text-gray-500 mb-8">Active Call • 02:14</p>
                    
                    <div className="w-full max-w-sm bg-gray-50 rounded-xl p-4 border border-gray-100 text-left space-y-3">
                      <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm text-sm text-gray-700">
                        <span className="font-bold text-blue-600">Emma:</span> "Hi, thanks for calling Bright Smile Dental. How can I help you today?"
                      </div>
                      <div className="bg-blue-600 p-3 rounded-lg shadow-sm text-sm text-white ml-8">
                        <span className="font-bold text-blue-200">Patient:</span> "I need to schedule a cleaning for next week."
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm text-sm text-gray-700">
                        <span className="font-bold text-blue-600">Emma:</span> "I can help with that! Dr. Smith has an opening on Tuesday at 2 PM or Thursday at 10 AM. Which works better for you?"
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* 4. Ad & Campaign Optimization */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
                  <TrendingUp className="w-4 h-4" />
                  Ad & Campaign Optimization
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Maximize ROI with Predictive AI
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Stop guessing with your ad spend. Our AI continuously analyzes performance, reallocates budgets, and tests creatives to ensure you get the highest possible return on ad spend (ROAS).
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <LineChart className="w-6 h-6 text-blue-500" />,
                      title: "AI-Driven Bid Management",
                      description: "Automatically adjust bids and allocate budget to the highest-performing campaigns in real-time."
                    },
                    {
                      icon: <Columns className="w-6 h-6 text-blue-500" />,
                      title: "Automated A/B Testing",
                      description: "Continuously test ad creatives, copy, and landing pages to find the winning combinations."
                    },
                    {
                      icon: <Users className="w-6 h-6 text-blue-500" />,
                      title: "Predictive Audience Targeting",
                      description: "Use machine learning to identify and target users most likely to convert based on historical data."
                    },
                    {
                      icon: <Activity className="w-6 h-6 text-blue-500" />,
                      title: "Real-Time Anomaly Alerts",
                      description: "Get instant notifications via dashboard or Slack if campaign performance drops unexpectedly."
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
                  
                  {/* Mock Dashboard */}
                  <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[450px] p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="font-bold text-gray-900">Campaign Performance</h4>
                      <div className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-md">ROAS: 4.2x</div>
                    </div>
                    
                    {/* Chart Mock */}
                    <div className="h-40 flex items-end gap-2 mb-6 border-b border-gray-100 pb-2">
                      {[30, 45, 40, 60, 55, 80, 75, 95, 110].map((height, i) => (
                        <div key={i} className="flex-1 bg-blue-100 rounded-t-md relative group">
                          <div 
                            className="absolute bottom-0 left-0 w-full bg-blue-600 rounded-t-md transition-all duration-500"
                            style={{ height: `${height}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-red-50 border border-red-100 p-3 rounded-xl flex items-start gap-3">
                        <Activity className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-bold text-red-800">Anomaly Detected: CPA Spike</p>
                          <p className="text-xs text-red-600">Campaign "Retargeting_Q3" CPA increased by 45%. AI has paused underperforming ad sets.</p>
                        </div>
                      </div>
                      <div className="bg-green-50 border border-green-100 p-3 rounded-xl flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-bold text-green-800">Budget Reallocated</p>
                          <p className="text-xs text-green-600">Shifted $500/day to "Lookalike_US" due to high conversion probability.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* 5. CRM & Workflow Automation */}
        <div>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6 border border-blue-100">
                  <Network className="w-4 h-4" />
                  CRM & Workflow Automation
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Eliminate Manual Handoffs
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Connect your entire tech stack. We use powerful automation tools like n8n, Zapier, and Make to ensure data flows seamlessly between your CRM, marketing tools, and sales team.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <Database className="w-6 h-6 text-blue-500" />,
                      title: "Auto-Enriching Contacts",
                      description: "Automatically scrape and enrich contact records in your CRM using web data and LinkedIn profiles."
                    },
                    {
                      icon: <Zap className="w-6 h-6 text-blue-500" />,
                      title: "AI-Triggered Follow-ups",
                      description: "Trigger specific follow-up sequences based on deep engagement signals (e.g., pricing page visits)."
                    },
                    {
                      icon: <LineChart className="w-6 h-6 text-blue-500" />,
                      title: "Pipeline Forecasting",
                      description: "Predict revenue and identify potential churn risks using AI analysis of your CRM data."
                    },
                    {
                      icon: <Network className="w-6 h-6 text-blue-500" />,
                      title: "Seamless Integrations",
                      description: "Connect tools via n8n, Zapier, or Make to eliminate manual data entry and handoffs."
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
                  
                  {/* Mock Workflow Interface */}
                  <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[450px] p-6 items-center justify-center">
                    
                    {/* Node 1 */}
                    <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-3 w-48 text-center relative z-10">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Globe className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-bold">Website Lead</span>
                      </div>
                      <p className="text-xs text-gray-500">Form Submitted</p>
                    </div>
                    
                    <div className="w-0.5 h-8 bg-blue-200"></div>
                    
                    {/* Node 2 */}
                    <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-3 w-48 text-center relative z-10">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Database className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-bold">Data Enrichment</span>
                      </div>
                      <p className="text-xs text-gray-500">Clearbit / LinkedIn</p>
                    </div>
                    
                    <div className="w-0.5 h-8 bg-blue-200"></div>
                    
                    {/* Split */}
                    <div className="flex gap-16 relative">
                      <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-blue-200"></div>
                      <div className="absolute top-0 left-1/4 w-0.5 h-8 bg-blue-200"></div>
                      <div className="absolute top-0 right-1/4 w-0.5 h-8 bg-blue-200"></div>
                      
                      {/* Node 3a */}
                      <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-3 w-40 text-center relative z-10 mt-8">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <Target className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-bold">CRM Update</span>
                        </div>
                        <p className="text-xs text-gray-500">Add to Salesforce</p>
                      </div>
                      
                      {/* Node 3b */}
                      <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-3 w-40 text-center relative z-10 mt-8">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <Mail className="w-4 h-4 text-orange-600" />
                          <span className="text-sm font-bold">AI Email</span>
                        </div>
                        <p className="text-xs text-gray-500">Trigger Instantly</p>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 right-4 bg-gray-900 text-white text-xs px-3 py-1 rounded-full flex items-center gap-2">
                      <Zap className="w-3 h-3 text-yellow-400" /> Powered by n8n
                    </div>

                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AIMarketing;
