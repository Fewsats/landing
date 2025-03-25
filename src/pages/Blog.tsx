import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Fewsats Blog | Secure Payments for AI Agents</title>
        <meta name="description" content="Enable your AI agents to securely pay for services with built-in oversight, budget controls, and zero friction. Fewsats provides the payment infrastructure for the agentic economy." />
      </Helmet>
      
      <NavBar />
      
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Articles</h1>
          
          {/* Article */}
          <div className="mb-16">
            <a href="/blog/why-ai-agents-need-access-to-payments" className="group">
              <h2 className="text-2xl md:text-3xl font-bold group-hover:text-deep-blue transition-colors duration-200 mb-2">
                Why AI Tools Need Payment Access
              </h2>
              <p className="text-sm text-neutral-dark mb-3">March 25, 2024</p>
              <p className="text-neutral-dark/80">
                As AI agents become more autonomous, their ability to access and manage financial resources becomes critical for truly useful interactions with the world. Payment infrastructure is the missing piece that will unlock agentic innovation in the market economy.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center text-deep-blue hover:underline">
                  Read article →
                </span>
              </div>
            </a>
          </div>
          
          {/* Podcast Section */}
          <div className="border-t pt-12 mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Podcast</h2>
            
            {/* Podcast Card - Horizontal layout with image on left */}
            <a href="https://agents-at-work.dev" target="_blank" rel="noopener noreferrer" 
              className="block md:flex border border-gray-200 rounded-lg hover:border-deep-blue/50 transition-colors duration-200 overflow-hidden">
              <div className="flex-shrink-0">
                <img 
                  src="https://icons-8e9.pages.dev/agents-at-work-small.jpg" 
                  alt="Agents at Work Podcast" 
                  className="object-cover"
                  style={{ width: '340px', height: '340px' }}
                />
              </div>
              <div className="p-12 w-4/5">
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-deep-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                  <h3 className="text-xl font-bold">Agents at Work</h3>
                </div>
                <p className="text-neutral-dark/80 mb-4">
                  A podcast exploring the frontiers of AI agents and their role in the economy. Each episode features conversations with leading AI researchers, entrepreneurs, and thinkers discussing how autonomous agents are reshaping our world.
                </p>
                <p className="text-neutral-dark/80 mb-6">
                  Hosted by Fewsats, we dive deep into the infrastructure needed for AI economic participation.
                </p>
                <div className="inline-flex items-center text-deep-blue hover:underline">
                  Listen to episodes →
                </div>
              </div>
            </a>
          </div>
          
          {/* Resources Section */}
          <div className="border-t pt-12">
            <h2 className="text-2xl font-bold mb-8">Essential Reading on AI Payments</h2>
            <div className="space-y-3">
              <a href="https://a16z.com/ai-copilot-ai-agent-white-collar-roles" target="_blank" rel="noopener noreferrer" className="flex items-center text-neutral-dark hover:text-deep-blue transition-colors duration-200 border-b border-gray-100 pb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-deep-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>AI Copilots & Agents in White-Collar Roles</span>
                <span className="ml-auto text-sm text-neutral-dark/60">a16z</span>
              </a>
              <a href="https://www.anthropic.com/engineering/building-effective-agents" target="_blank" rel="noopener noreferrer" className="flex items-center text-neutral-dark hover:text-deep-blue transition-colors duration-200 border-b border-gray-100 pb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-deep-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>Building Effective Agents</span>
                <span className="ml-auto text-sm text-neutral-dark/60">Anthropic</span>
              </a>
              <a href="https://www.openai.com/blog/practices-for-governing-agentic-ai-systems" target="_blank" rel="noopener noreferrer" className="flex items-center text-neutral-dark hover:text-deep-blue transition-colors duration-200 border-b border-gray-100 pb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-deep-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>Practices for Governing Agentic AI Systems</span>
                <span className="ml-auto text-sm text-neutral-dark/60">OpenAI</span>
              </a>
              <a href="https://cloud.google.com/blog/products/ai-machine-learning/what-are-ai-agents" target="_blank" rel="noopener noreferrer" className="flex items-center text-neutral-dark hover:text-deep-blue transition-colors duration-200 border-b border-gray-100 pb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-deep-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>What Are AI Agents?</span>
                <span className="ml-auto text-sm text-neutral-dark/60">Google Cloud</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog; 