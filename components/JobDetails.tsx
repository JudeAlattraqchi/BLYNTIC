import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Upload, CheckCircle2, X } from 'lucide-react';
import Markdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import { GeneratedJob } from '../services/gemini';

interface JobPost extends GeneratedJob {
  id: string;
  date: string;
}

interface JobDetailsProps {
  slug: string;
}

const JobDetails: React.FC<JobDetailsProps> = ({ slug }) => {
  const [job, setJob] = useState<JobPost | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    coverLetter: '',
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedJobs = localStorage.getItem('blyntic_jobs');
    if (savedJobs) {
      const jobs: JobPost[] = JSON.parse(savedJobs);
      const foundJob = jobs.find(j => 
        j.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug
      );
      if (foundJob) {
        setJob(foundJob);
      }
    }
  }, [slug]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      
      if (validTypes.includes(file.type) || file.name.endsWith('.pdf') || file.name.endsWith('.doc') || file.name.endsWith('.docx')) {
        setCvFile(file);
      } else {
        alert('Please upload a valid PDF or Word document (.pdf, .doc, .docx)');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cvFile) {
      alert('Please attach your CV');
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsApplying(false);
    }, 1000);
  };

  if (!job) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Job not found</h1>
          <a href="#/careers" className="text-blue-600 hover:underline">Return to Careers</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <a 
          href="#/careers"
          className="flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Careers
        </a>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="relative aspect-video w-full rounded-[32px] overflow-hidden shadow-2xl">
            <img src={job.imageUrl} alt={job.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 md:p-12">
              <div>
                <p className="text-blue-400 font-bold mb-2">{job.date}</p>
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">{job.title}</h1>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-[32px] border border-gray-100 shadow-sm">
            <Markdown remarkPlugins={[remarkBreaks]}>{job.content}</Markdown>
          </div>

          <div className="flex justify-center pt-8">
            {!isApplying && !isSubmitted && (
              <button 
                onClick={() => setIsApplying(true)}
                className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100"
              >
                Apply for this position
              </button>
            )}
          </div>

          <AnimatePresence>
            {isApplying && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="bg-gray-50 p-8 md:p-12 rounded-[32px] border border-gray-100 mt-8">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Submit your application</h2>
                    <button 
                      onClick={() => setIsApplying(false)}
                      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <input 
                          type="text" 
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                          placeholder="Jane"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <input 
                          type="text" 
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter</label>
                      <textarea 
                        value={formData.coverLetter}
                        onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
                        className="w-full h-40 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-y"
                        placeholder="Tell us why you're a great fit for this role..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Resume/CV * (.pdf, .doc, .docx)</label>
                      <div 
                        className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${cvFile ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400 bg-white'}`}
                      >
                        <input 
                          type="file" 
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          className="hidden"
                        />
                        
                        {cvFile ? (
                          <div className="flex flex-col items-center gap-2">
                            <CheckCircle2 className="w-8 h-8 text-blue-500" />
                            <span className="font-medium text-blue-700">{cvFile.name}</span>
                            <button 
                              type="button"
                              onClick={() => setCvFile(null)}
                              className="text-sm text-red-500 hover:underline mt-2"
                            >
                              Remove file
                            </button>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center gap-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                              <Upload className="w-6 h-6 text-gray-500" />
                            </div>
                            <div>
                              <button 
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="text-blue-600 font-medium hover:underline"
                              >
                                Click to upload
                              </button>
                              <span className="text-gray-500"> or drag and drop</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pt-4">
                      <button 
                        type="submit"
                        className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg"
                      >
                        Submit Application
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {isSubmitted && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 rounded-[32px] p-12 text-center mt-8"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
              <p className="text-gray-600 text-lg max-w-md mx-auto">
                Thank you for applying to the {job.title} position. We've received your application and will be in touch soon.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default JobDetails;
