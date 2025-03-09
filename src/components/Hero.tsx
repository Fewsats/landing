
import React, { useEffect, useRef } from 'react';
import { Bot, Cpu, Server, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 dot-pattern opacity-50"></div>
      <div className="absolute top-1/3 -right-16 w-96 h-96 bg-deep-purple/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-bright-teal/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div ref={sectionRef} className="section-anim">
            <div className="inline-block rounded-full bg-white/80 backdrop-blur shadow-sm px-4 py-1 mb-6">
              <span className="text-sm font-medium text-deep-purple">Native Payment Infrastructure</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Payment Infrastructure for 
              <span className="block bg-gradient-to-r from-deep-blue to-deep-purple text-transparent bg-clip-text">
                AI Agents
              </span>
            </h1>
            <p className="text-lg text-neutral-dark/80 mb-8 max-w-lg">
              Let AI pay for services directly while keeping humans in control. No browser, no context switching, it just works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Get Early Access
              </button>
              <button className="flex items-center justify-center text-neutral-dark hover:text-deep-purple transition-colors gap-2">
                How it works
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="relative glass rounded-2xl p-8 md:p-10 z-10 animate-fade-in">
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-deep-purple/10 rounded-lg">
                    <Bot className="h-6 w-6 text-deep-purple" />
                  </div>
                  <div>
                    <p className="font-medium">AI Agent</p>
                    <p className="text-sm text-neutral-dark/70">Requesting service</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-bright-teal/10 rounded-lg">
                    <Server className="h-6 w-6 text-bright-teal" />
                  </div>
                  <div>
                    <p className="font-medium">Service Provider</p>
                    <p className="text-sm text-neutral-dark/70">API endpoint</p>
                  </div>
                </div>
              </div>

              {/* Transaction Flow Visualization */}
              <div className="relative">
                <div className="h-1 bg-gradient-to-r from-deep-purple to-bright-teal rounded-full mb-8 relative overflow-hidden">
                  <div className="absolute h-full w-10 bg-white opacity-70 animate-flow-right"></div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="p-3 rounded-xl bg-white shadow-sm mx-auto mb-2 w-16 h-16 flex items-center justify-center">
                      <Bot className="h-8 w-8 text-deep-purple" />
                    </div>
                    <p className="text-sm font-medium">Request</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="p-3 rounded-xl bg-white shadow-sm mx-auto mb-2 w-16 h-16 flex items-center justify-center">
                      <Cpu className="h-8 w-8 text-deep-blue animate-pulse-subtle" />
                    </div>
                    <p className="text-sm font-medium">Process</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="p-3 rounded-xl bg-white shadow-sm mx-auto mb-2 w-16 h-16 flex items-center justify-center">
                      <Server className="h-8 w-8 text-bright-teal" />
                    </div>
                    <p className="text-sm font-medium">Complete</p>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm">
                  <p className="font-mono text-sm">
                    <span className="text-deep-purple font-semibold">ai_agent</span>: Processing payment <span className="loading-dots"></span>
                    <br />
                    <span className="text-bright-teal font-semibold">service</span>: Payment received. Providing data...
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-deep-purple/20 to-deep-blue/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-10 -left-8 w-16 h-16 bg-bright-teal/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
