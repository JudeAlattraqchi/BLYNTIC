import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f4f7ff] border-t border-gray-200 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-b border-gray-200 pb-20">
          
          {/* Brand */}
          <div className="space-y-6">
             <a href="/" className="flex items-center gap-2">
                <img src="https://cdn.prod.website-files.com/69059456676850507afd94d2/690795a7d8a87712ab44e663_Logo%20Icon.svg" alt="NexAgent Icon" className="w-8 h-8" />
                <span className="text-xl font-bold tracking-tight">NexAgent</span>
             </a>
             <p className="text-gray-500 leading-relaxed">
               The world's first AI talent acquisition platform. Automating the future of hiring.
             </p>
             <div className="flex gap-4">
               {['twitter', 'linkedin', 'instagram', 'facebook'].map(social => (
                 <a key={social} href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-colors">
                    {/* Placeholder for social icons */}
                    <div className="w-4 h-4 bg-current rounded-sm opacity-50" />
                 </a>
               ))}
             </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Enterprise</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-600">
              <li>contact@nexagent.ai</li>
              <li>+1 (555) 123-4567</li>
              <li>123 AI Boulevard<br/>San Francisco, CA 94103</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© 2024 NexAgent Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms of Service</a>
            <a href="#" className="hover:text-black">Cookies Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;