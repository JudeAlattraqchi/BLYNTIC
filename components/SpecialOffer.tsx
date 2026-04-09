import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, CheckCircle2, ArrowRight, Clock, BookOpen, BarChart, Mail, HeadphonesIcon } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import Button from './ui/Button';

const SpecialOffer: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    agreeToTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxWi7fD98omDgLLMvXObZ8V6FQYqpLBrHBgd2lgsd9H4Ocha3wwdo6VH0pmYtkTIzTt/exec';

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          companyName: formData.company,
          email: formData.email,
          phone: formData.phone,
          consentGiven: formData.agreeToTerms  // true/false
        })
      });
      
      const result = await response.json();
      console.log(result);
      
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      // Guarantee that the loading state is removed and success is shown
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Zero Implementation Fees <br />
              <span className="text-blue-600">Up to $15K Value</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your business with AI? Sign up before April 15th and we'll waive our standard implementation and setup fees. That's a savings of up to $15,000.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-sm text-gray-500 flex items-center justify-center gap-2 font-medium bg-gray-50 py-2 px-4 rounded-full inline-flex">
              <Clock className="w-4 h-4 text-blue-600" /> Offer ends April 15th, 2026
            </p>
          </Reveal>
        </div>

        {/* Details & Form Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: Offer Details */}
            <Reveal delay={0.2}>
              <div>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Everything You Need to Succeed</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  When you claim this offer, our team of AI engineers will build, train, and deploy your custom AI solution at absolutely no setup cost. Here is what's included:
                </p>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">
                      <BookOpen className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Full AI System Training</h3>
                      <p className="text-gray-600">Complete, hands-on training for your team. We'll teach you exactly how to use the system day-to-day and how to easily update its knowledge base as your business evolves.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">
                      <BarChart className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Deep Analytics & Tracking</h3>
                      <p className="text-gray-600">Collect rich information about your AI's performance. Track how many minutes were used, call volumes, and review detailed transcripts of every client interaction.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Automated Email Summaries</h3>
                      <p className="text-gray-600">Never miss a beat. Receive concise, automated summaries of emails sent to your clients, or get internal briefings sent directly to your inbox after key interactions.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">
                      <HeadphonesIcon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Premium Support</h3>
                      <p className="text-gray-600">When you join Blyntic AI, you're never alone. Enjoy round-the-clock, 24-hour support from our expert team to ensure your systems run flawlessly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            
            {/* Right Column: The Form */}
            <Reveal delay={0.3}>
              <div className="bg-white rounded-[32px] p-8 border border-gray-200 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Claim Your Offer</h3>
                  <p className="text-gray-600">Fill out the form below to secure your waived implementation fee.</p>
                </div>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h4>
                    <p className="text-gray-600">
                      Thank you, {formData.firstName}. We've secured your promo spot. Our team will be in touch shortly to schedule your call.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">First Name</label>
                        <input 
                          type="text" 
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Last Name</label>
                        <input 
                          type="text" 
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700">Company Name</label>
                      <input 
                        type="text" 
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="Acme Corp"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700">Telephone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                      <input 
                        type="checkbox" 
                        id="agreeToTerms"
                        name="agreeToTerms"
                        required
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      />
                      <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                        I agree to receive communications from Blyntic AI regarding this offer and other services.
                      </label>
                    </div>

                    <div className="pt-4">
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 mb-6 flex justify-between items-center">
                        <div>
                          <p className="text-sm font-bold text-gray-900">Standard Setup</p>
                          <p className="text-sm text-gray-400 line-through">Up to $15,000</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-gray-900">Today's Price</p>
                          <p className="text-xl font-bold text-green-600">$0</p>
                        </div>
                      </div>

                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                      >
                        {isSubmitting ? 'Processing...' : 'Submit your request'}
                        {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>

          </div>
        </div>

      </div>
    </div>
  );
};

export default SpecialOffer;
