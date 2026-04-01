import React, { useState, useEffect } from 'react';
import JobDetails from './JobDetails';
import BlogDetails from './BlogDetails';

interface DynamicPageProps {
  slug: string;
}

const DynamicPage: React.FC<DynamicPageProps> = ({ slug }) => {
  const [type, setType] = useState<'job' | 'blog' | 'not-found' | null>(null);

  useEffect(() => {
    const savedJobs = localStorage.getItem('blyntic_jobs');
    if (savedJobs) {
      const jobs = JSON.parse(savedJobs);
      const foundJob = jobs.find((j: any) => 
        j.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug
      );
      if (foundJob) {
        setType('job');
        return;
      }
    }

    const savedBlogs = localStorage.getItem('blyntic_blogs');
    if (savedBlogs) {
      const blogs = JSON.parse(savedBlogs);
      const foundBlog = blogs.find((b: any) => 
        b.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug
      );
      if (foundBlog) {
        setType('blog');
        return;
      }
    }

    setType('not-found');
  }, [slug]);

  if (type === 'job') return <JobDetails slug={slug} />;
  if (type === 'blog') return <BlogDetails slug={slug} />;
  
  if (type === 'not-found') {
    return (
      <div className="min-h-screen bg-white pt-32 pb-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
          <p className="text-gray-500 mb-8">The page you are looking for does not exist.</p>
          <a href="/" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all">
            Return Home
          </a>
        </div>
      </div>
    );
  }

  return <div className="min-h-screen bg-white flex items-center justify-center"><div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>;
};

export default DynamicPage;
