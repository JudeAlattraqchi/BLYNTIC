import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import Markdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import { Reveal } from './ui/Reveal';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  date: string;
}

const BlogDetails: React.FC = () => {
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const slug = window.location.hash.split('/').pop();
    const savedBlogs = localStorage.getItem('blyntic_blogs');
    
    if (savedBlogs && slug) {
      const blogs: BlogPost[] = JSON.parse(savedBlogs);
      const foundBlog = blogs.find(b => 
        b.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug
      );
      setBlog(foundBlog || null);
    }
    setLoading(false);
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
        <p className="text-gray-500 mb-8">The article you're looking for doesn't exist or has been moved.</p>
        <a href="#/blog" className="flex items-center gap-2 text-blue-600 font-bold hover:underline">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <a href="#/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition-colors font-medium">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-4 mb-6 text-sm font-bold text-blue-600 uppercase tracking-widest">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {blog.date}
              </span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                5 min read
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-10 leading-tight">
              {blog.title}
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="relative aspect-video w-full rounded-[40px] overflow-hidden shadow-2xl mb-16">
              <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover" />
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-blue-600">
              <Markdown remarkPlugins={[remarkBreaks]}>{blog.content}</Markdown>
            </div>
          </Reveal>

          <hr className="my-16 border-gray-100" />

          <Reveal delay={0.5}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-50 p-8 md:p-12 rounded-[40px]">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                  B
                </div>
                <div>
                  <p className="font-bold text-gray-900">Blyntic Team</p>
                  <p className="text-gray-500 text-sm">AI Automation Experts</p>
                </div>
              </div>
              <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full font-bold border border-gray-200 hover:bg-gray-100 transition-all shadow-sm">
                <Share2 className="w-4 h-4" />
                Share Article
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
