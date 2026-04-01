import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogIn, Plus, Save, Trash2, Loader2, ArrowLeft, BookOpen, Edit3, ChevronDown, ChevronUp } from 'lucide-react';
import Markdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import { Reveal } from './ui/Reveal';
import Button from './ui/Button';
import { generateBlogContent, GeneratedBlog } from '../services/gemini';

interface BlogPost extends GeneratedBlog {
  id: string;
  date: string;
}

const Blog: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentDraft, setCurrentDraft] = useState<GeneratedBlog | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does AI automation improve business efficiency?",
      answer: "AI automation streamlines repetitive tasks, reduces human error, and allows your team to focus on high-value strategic work. By implementing intelligent workflows, businesses can process data faster and make more informed decisions."
    },
    {
      question: "Is AI talent acquisition better than traditional methods?",
      answer: "AI-driven recruitment can analyze thousands of resumes in seconds, identifying the best candidates based on skills and cultural fit without bias. This significantly reduces time-to-hire and improves the quality of talent joining your organization."
    },
    {
      question: "What industries can benefit from Blyntic's AI solutions?",
      answer: "Blyntic's solutions are designed to be versatile. We work across finance, healthcare, retail, technology, and manufacturing sectors, tailoring our AI models to meet specific industry challenges and regulatory requirements."
    },
    {
      question: "How secure is my data when using AI automation?",
      answer: "Security is our top priority. We use enterprise-grade encryption and follow strict data privacy protocols (GDPR, SOC2) to ensure your business information remains confidential and protected at all times."
    }
  ];

  // Load blogs from localStorage
  useEffect(() => {
    const savedBlogs = localStorage.getItem('blyntic_blogs');
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs));
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
    if (!topic.trim()) return;
    setIsGenerating(true);
    try {
      const fullTopic = keywords.trim() ? `${topic} (Keywords: ${keywords})` : topic;
      const result = await generateBlogContent(fullTopic);
      setCurrentDraft(result);
    } catch (err) {
      console.error(err);
      alert('Failed to generate blog. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleEdit = (blog: BlogPost) => {
    setEditingId(blog.id);
    setCurrentDraft({
      title: blog.title,
      content: blog.content,
      imageUrl: blog.imageUrl
    });
    setIsEditing(true);
    setIsCreating(true);
    setTopic(blog.title);
    window.scrollTo(0, 0);
  };

  const handleSave = () => {
    if (!currentDraft) return;
    
    let safeImageUrl = currentDraft.imageUrl;

    try {
      if (isEditing && editingId) {
        const updatedBlogs = blogs.map(b => 
          b.id === editingId 
            ? { ...b, title: currentDraft.title, content: currentDraft.content, imageUrl: safeImageUrl } 
            : b
        );
        localStorage.setItem('blyntic_blogs', JSON.stringify(updatedBlogs));
        setBlogs(updatedBlogs);
        setIsEditing(false);
        setEditingId(null);
      } else {
        const newBlog: BlogPost = {
          ...currentDraft,
          imageUrl: safeImageUrl,
          id: Date.now().toString(),
          date: new Date().toLocaleDateString(),
        };
        
        const updatedBlogs = [newBlog, ...blogs];
        localStorage.setItem('blyntic_blogs', JSON.stringify(updatedBlogs));
        setBlogs(updatedBlogs);
      }
      
      setIsCreating(false);
      setCurrentDraft(null);
      setTopic('');
      setKeywords('');
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("Failed to save blog. The content might be too large for local storage. Try deleting some older blogs first.");
    }
  };

  const handleDelete = (id: string) => {
    const updatedBlogs = blogs.filter(b => b.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem('blyntic_blogs', JSON.stringify(updatedBlogs));
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
                Blyntic <span className="text-blue-600">Blog</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-gray-500 mt-2">Unlock Efficiency. Embrace AI Automation Solutions.</p>
            </Reveal>
          </div>
          
          <div className="flex items-center gap-4">
            {isLoggedIn && !isCreating && (
              <button 
                onClick={() => setIsCreating(true)}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
              >
                <Plus className="w-5 h-5" />
                Create Blog
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
                onClick={() => { setIsCreating(false); setCurrentDraft(null); }}
                className="flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to list
              </button>

              <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100 mb-12">
                <h2 className="text-2xl font-bold mb-6">{isEditing ? 'Edit Blog' : 'Generate New Blog'}</h2>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-grow space-y-4">
                      <input 
                        type="text" 
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="Enter blog title or main topic..."
                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                      <input 
                        type="text" 
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        placeholder="Related words (comma separated)..."
                        className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <button 
                      onClick={handleGenerate}
                      disabled={isGenerating || !topic.trim()}
                      className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[180px] h-fit md:h-auto"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        isEditing ? 'Re-generate AI Content' : 'Generate with AI'
                      )}
                    </button>
                  </div>
                  
                  {topic.trim() && (
                    <div className="px-2 text-sm text-gray-500 flex items-center gap-2">
                      <span className="font-medium text-gray-700">URL Preview:</span>
                      <span className="bg-gray-200/50 px-3 py-1 rounded-md font-mono text-blue-600">
                        blyntic.dev/blog/{topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {currentDraft && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Title</label>
                      <input 
                        type="text" 
                        value={currentDraft.title}
                        onChange={(e) => setCurrentDraft({...currentDraft, title: e.target.value})}
                        className="w-full text-3xl font-bold border-none focus:ring-0 p-0 outline-none"
                      />
                    </div>
                    
                    <div className="relative aspect-video w-full rounded-[24px] overflow-hidden shadow-lg">
                      <img src={currentDraft.imageUrl} alt="Blog Cover" className="w-full h-full object-cover" />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Content (Markdown)</label>
                      <textarea 
                        value={currentDraft.content}
                        onChange={(e) => setCurrentDraft({...currentDraft, content: e.target.value})}
                        className="w-full h-[400px] p-6 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-blue-500 outline-none font-mono text-sm leading-relaxed"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-4">
                    <button 
                      onClick={() => setCurrentDraft(null)}
                      className="px-8 py-4 rounded-full border border-gray-200 font-bold hover:bg-gray-50 transition-colors"
                    >
                      Discard
                    </button>
                    <button 
                      onClick={handleSave}
                      className="flex items-center gap-2 bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100"
                    >
                      <Save className="w-5 h-5" />
                      Save Blog
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
              {blogs.length === 0 ? (
                <div className="col-span-full py-20 text-center bg-gray-50 rounded-[32px] border border-dashed border-gray-300">
                  <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No blogs yet. Start by creating one!</p>
                </div>
              ) : (
                blogs.map((blog) => (
                  <motion.div 
                    key={blog.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="group bg-white rounded-[24px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-4 right-4 flex gap-2">
                        {isLoggedIn && (
                          <>
                            <button 
                              onClick={() => handleEdit(blog)}
                              className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => handleDelete(blog.id)}
                              className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{blog.date}</p>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{blog.title}</h3>
                      <div className="text-gray-500 text-sm line-clamp-3 mb-4">
                        {blog.content.substring(0, 150) + '...'}
                      </div>
                      <a href={`#/blog/${blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`} className="text-black font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                        Read more <Plus className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* FAQ Section */}
        <div className="mt-32 max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">Frequently Asked Questions</h2>
          </Reveal>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-gray-900">{faq.question}</span>
                    {openFaq === idx ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-8 pb-6 text-gray-600 leading-relaxed"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
