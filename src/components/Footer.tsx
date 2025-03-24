import React from 'react';
import { Linkedin, Github, Mail, ExternalLink } from 'lucide-react';
import { FaXTwitter, FaDiscord } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="font-bold text-2xl text-deep-blue mb-4">
              Fewsats
            </div>
            <p className="text-neutral-dark/70 max-w-md mb-6">
              The native payment layer for AI agents. Enabling autonomous agents to pay and get paid. Seamless transactions between AI systems and services without context switching.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/fewsats" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-neutral-light flex items-center justify-center text-neutral-dark hover:bg-deep-blue hover:text-white transition-colors">
                <FaXTwitter size={18} />
              </a>
              <a href="https://discord.gg/2tPYBgWzQm" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-neutral-light flex items-center justify-center text-neutral-dark hover:bg-deep-blue hover:text-white transition-colors">
                <FaDiscord size={18} />
              </a>
              <a href="https://www.linkedin.com/company/fewsats" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-neutral-light flex items-center justify-center text-neutral-dark hover:bg-deep-blue hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/Fewsats" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-neutral-light flex items-center justify-center text-neutral-dark hover:bg-deep-blue hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href="mailto:admin@fewsats.com" className="h-10 w-10 rounded-full bg-neutral-light flex items-center justify-center text-neutral-dark hover:bg-deep-blue hover:text-white transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Product section - commented out
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-dark/70 hover:text-deep-blue transition-colors">Features</a></li>
              <li><a href="#" className="text-neutral-dark/70 hover:text-deep-blue transition-colors">Integrations</a></li>
              <li><a href="#" className="text-neutral-dark/70 hover:text-deep-blue transition-colors">API Reference</a></li>
              <li><a href="#" className="text-neutral-dark/70 hover:text-deep-blue transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-dark/70 hover:text-deep-blue transition-colors">About</a></li>
              <li><a href="#" className="text-neutral-dark/70 hover:text-deep-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-neutral-dark/70 hover:text-deep-blue transition-colors">Careers</a></li>
              <li><a href="#" className="text-neutral-dark/70 hover:text-deep-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          */}
          
          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-4">AI Agent Economy Resources</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <ExternalLink size={14} className="mr-2 text-deep-blue" />
                <a href="https://a16z.com/the-engineering-challenges-of-building-ai-agents/" target="_blank" rel="noopener noreferrer" className="text-neutral-dark/70 hover:text-deep-blue transition-colors">
                  The Engineering Challenges of Building AI Agents (a16z)
                </a>
              </li>
              <li className="flex items-center">
                <ExternalLink size={14} className="mr-2 text-deep-blue" />
                <a href="https://www.anthropic.com/news/claude-3-5-sonnet" target="_blank" rel="noopener noreferrer" className="text-neutral-dark/70 hover:text-deep-blue transition-colors">
                  Claude 3.5 Sonnet Release (Anthropic)
                </a>
              </li>
              <li className="flex items-center">
                <ExternalLink size={14} className="mr-2 text-deep-blue" />
                <a href="https://openai.com/research/gpts-are-gpts" target="_blank" rel="noopener noreferrer" className="text-neutral-dark/70 hover:text-deep-blue transition-colors">
                  GPTs are GPTs: Research on Agentic AI (OpenAI)
                </a>
              </li>
              <li className="flex items-center">
                <ExternalLink size={14} className="mr-2 text-deep-blue" />
                <a href="https://www.googlecloudpresscorner.com/2024-04-09-Google-launches-AI-Agents-on-Google-Cloud" target="_blank" rel="noopener noreferrer" className="text-neutral-dark/70 hover:text-deep-blue transition-colors">
                  Google Cloud AI Agents (Google)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-dark/60 text-sm">
            © {new Date().getFullYear()} Fewsats. All rights reserved.
          </p>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-neutral-dark/60 hover:text-deep-blue text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-neutral-dark/60 hover:text-deep-blue text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-neutral-dark/60 hover:text-deep-blue text-sm transition-colors">Cookies</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
