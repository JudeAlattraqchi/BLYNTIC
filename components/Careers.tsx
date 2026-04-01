import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Save, Trash2, Loader2, ArrowLeft, Briefcase, Edit2 } from 'lucide-react';
import Markdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import { Reveal } from './ui/Reveal';
import { generateJobDescription, GeneratedJob } from '../services/gemini';

interface JobPost extends GeneratedJob {
  id: string;
  date: string;
}

const Careers: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const [jobs, setJobs] = useState<JobPost[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [keywords, setKeywords] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentDraft, setCurrentDraft] = useState<GeneratedJob | null>(null);
  const [isEditingDraft, setIsEditingDraft] = useState(false);

  // Load jobs from localStorage
  useEffect(() => {
    const savedJobs = localStorage.getItem('blyntic_jobs');
    if (savedJobs) {
      setJobs(JSON.parse(savedJobs));
    }
    
    const checkAuth = () => {
      setIsLoggedIn(localStorage.getItem('blyntic_session') === 'true');
    };
    checkAuth();
    window.addEventListener('auth-change', checkAuth);
    
    return () => {
      window.removeEventListener('auth-change', checkAuth);
    };
  }, []);

  const handleGenerate = async () => {
    if (!jobTitle.trim()) return;
    setIsGenerating(true);
    try {
      const result = await generateJobDescription(jobTitle, keywords);
      setCurrentDraft(result);
      setIsEditingDraft(false);
    } catch (err) {
      console.error(err);
      alert('Failed to generate job description. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSave = () => {
    if (!currentDraft) return;
    
    let safeImageUrl = currentDraft.imageUrl;

    const newJob: JobPost = {
      ...currentDraft,
      imageUrl: safeImageUrl,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
    };
    
    try {
      const updatedJobs = [newJob, ...jobs];
      localStorage.setItem('blyntic_jobs', JSON.stringify(updatedJobs));
      setJobs(updatedJobs);
      setIsCreating(false);
      setCurrentDraft(null);
      setIsEditingDraft(false);
      setJobTitle('');
      setKeywords('');
    } catch (error) {
      console.error("Error saving job:", error);
      alert("Failed to save job. The content might be too large for local storage.");
    }
  };

  const handleDelete = (id: string) => {
    const updatedJobs = jobs.filter(j => j.id !== id);
    setJobs(updatedJobs);
    localStorage.setItem('blyntic_jobs', JSON.stringify(updatedJobs));
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
                Blyntic <span className="text-blue-600">Careers</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-gray-500 mt-2">Join our team and build the future of AI automation.</p>
            </Reveal>
          </div>
          
          <div className="flex items-center gap-4">
            {isLoggedIn && !isCreating && (
              <button 
                onClick={() => setIsCreating(true)}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
              >
                <Plus className="w-5 h-5" />
                Post a Job
              </button>
            )}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isCreating ? (
            <motion.div 
              key="create"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-4xl mx-auto"
            >
              <button 
                onClick={() => { setIsCreating(false); setCurrentDraft(null); setIsEditingDraft(false); }}
                className="flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to list
              </button>

              <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100 mb-12">
                <h2 className="text-2xl font-bold mb-6">Generate New Job Description</h2>
                <div className="flex flex-col gap-4 mb-4">
                  <input 
                    type="text" 
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="Job Title (e.g. Senior AI Engineer)"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <div className="flex flex-col md:flex-row gap-4">
                    <input 
                      type="text" 
                      value={keywords}
                      onChange={(e) => setKeywords(e.target.value)}
                      placeholder="Related keywords (e.g. Python, TensorFlow, Remote)"
                      className="flex-grow px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <button 
                      onClick={handleGenerate}
                      disabled={isGenerating || !jobTitle.trim()}
                      className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[180px]"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        'Generate with AI'
                      )}
                    </button>
                  </div>
                </div>
                {jobTitle.trim() && (
                  <div className="px-2 text-sm text-gray-500 flex items-center gap-2">
                    <span className="font-medium text-gray-700">URL Preview:</span>
                    <span className="bg-gray-200/50 px-3 py-1 rounded-md font-mono text-blue-600">
                      blintic.dev/{jobTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}
                    </span>
                  </div>
                )}
              </div>

              {currentDraft && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div className="relative aspect-video w-full rounded-[32px] overflow-hidden shadow-2xl">
                    <img src={currentDraft.imageUrl} alt="Job Cover" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 md:p-12">
                      {isEditingDraft ? (
                        <input 
                          type="text" 
                          value={currentDraft.title}
                          onChange={(e) => setCurrentDraft({ ...currentDraft, title: e.target.value })}
                          className="w-full text-3xl md:text-5xl font-bold text-white bg-transparent border-b border-white/30 focus:border-white outline-none pb-2"
                        />
                      ) : (
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">{currentDraft.title}</h2>
                      )}
                    </div>
                  </div>

                  <div className="bg-white p-8 md:p-12 rounded-[32px] border border-gray-100 shadow-sm">
                    {isEditingDraft ? (
                      <textarea 
                        value={currentDraft.content}
                        onChange={(e) => setCurrentDraft({ ...currentDraft, content: e.target.value })}
                        className="w-full h-[500px] p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none font-mono text-sm resize-y"
                      />
                    ) : (
                      <div className="prose prose-lg max-w-none">
                        <Markdown remarkPlugins={[remarkBreaks]}>{currentDraft.content}</Markdown>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end gap-4">
                    <button 
                      onClick={() => setIsEditingDraft(!isEditingDraft)}
                      className="px-8 py-4 rounded-full border border-gray-200 font-bold hover:bg-gray-50 transition-colors flex items-center gap-2"
                    >
                      <Edit2 className="w-4 h-4" />
                      {isEditingDraft ? 'Preview' : 'Edit'}
                    </button>
                    <button 
                      onClick={() => { setCurrentDraft(null); setIsEditingDraft(false); }}
                      className="px-8 py-4 rounded-full border border-gray-200 font-bold hover:bg-gray-50 transition-colors"
                    >
                      Discard
                    </button>
                    <button 
                      onClick={handleSave}
                      className="flex items-center gap-2 bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100"
                    >
                      <Save className="w-5 h-5" />
                      Save Job
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div 
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {jobs.length === 0 ? (
                <div className="col-span-full py-20 text-center bg-gray-50 rounded-[32px] border border-dashed border-gray-300">
                  <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No open positions right now. Check back later!</p>
                </div>
              ) : (
                jobs.map((job) => (
                  <motion.div 
                    key={job.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="group bg-white rounded-[24px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={job.imageUrl} alt={job.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-4 right-4">
                        {isLoggedIn && (
                          <button 
                            onClick={() => handleDelete(job.id)}
                            className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{job.date}</p>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{job.title}</h3>
                      <div className="text-gray-500 text-sm line-clamp-3 mb-4">
                        <Markdown remarkPlugins={[remarkBreaks]}>{job.content.substring(0, 150) + '...'}</Markdown>
                      </div>
                      <a href={`#/${job.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`} className="text-black font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                        View Details <Plus className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Careers;
