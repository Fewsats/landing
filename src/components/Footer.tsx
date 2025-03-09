
import React from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="font-bold text-2xl bg-gradient-to-r from-deep-blue to-deep-purple text-transparent bg-clip-text mb-4">
              AI PayFlow
            </div>
            <p className="text-neutral-dark/70 max-w-md mb-6">
              The native payment layer for AI agents. Enabling seamless transactions between AI systems and services without context switching.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-neutral-light flex items-center justify-center text-neutral-dark hover:bg-deep-purple hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-neutral-light flex items-center justify-center text-neutral-dark hover:bg-deep-purple hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-neutral-light flex items-center justify-center text-neutral-dark hover:bg-deep-purple hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-neutral-light flex items-center justify-center text-neutral-dark hover:bg-deep-purple hover:text-white transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-dark/70 hover:text-deep-purple transition-colors">Features</a></li>
              <li><a href="#" className="text-neutral-dark/70 hover:text-deep-purple transition-colors">Integrations</a></li>
              <li><a href="#" className="text-neutral-dark/70 hover:text-deep-purple transition-colors">API Reference</a></li>
              <li><a href="#" className="text-neutral-dark/70 hover:text-deep-purple transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-dark/70 hover:text-deep-purple transition-colors">About</a></li>
              <li><a href="#" className="text-neutral-dark/70 hover:text-deep-purple transition-colors">Blog</a></li>
              <li><a href="#" className="text-neutral-dark/70 hover:text-deep-purple transition-colors">Careers</a></li>
              <li><a href="#" className="text-neutral-dark/70 hover:text-deep-purple transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-dark/60 text-sm">
            © {new Date().getFullYear()} AI PayFlow. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-neutral-dark/60 hover:text-deep-purple text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-neutral-dark/60 hover:text-deep-purple text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-neutral-dark/60 hover:text-deep-purple text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
