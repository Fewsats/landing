import React, { useEffect, useRef, useState } from 'react';
import { Bot, Server, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animationStep, setAnimationStep] = useState(0);

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

  // Animation sequence for the payment flow
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 6);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Animation classes based on current step
  const getStepClass = (step: number) => {
    if (step === animationStep) return "scale-110 border-2 border-deep-blue shadow-md";
    if (step < animationStep) return "opacity-70";
    return "";
  };

  // Animation classes for arrows
  const getArrowClass = (step: number) => {
    if (step === animationStep) return "text-deep-blue animate-pulse";
    if (step < animationStep) return "text-deep-blue/50";
    return "text-neutral-dark/30";
  };

  // Message content based on current step
  const getMessage = () => {
    const messages = [];
    
    // Step 0: AI agent requests access
    messages.push(
      <span key="0">
        <span className="font-semibold text-purple-600">ai agent</span>: Requesting access to premium API...
      </span>
    );
    
    // Step 1: Service requires payment
    if (animationStep >= 1) {
      messages.push(
        <span key="1">
          <br />
          <span className="font-semibold">service</span>: <span className="text-red-500">Error: Payment required to proceed.</span>
        </span>
      );
    }
    
    // Step 2: AI agent initiates payment
    if (animationStep >= 2) {
      messages.push(
        <span key="2">
          <br />
          <span className="font-semibold text-purple-600">ai agent</span>: Initiating payment via Fewsats...
        </span>
      );
    }
    
    // Step 3: Fewsats runs policy checks
    if (animationStep >= 3) {
      messages.push(
        <span key="3">
          <br />
          <span className="font-semibold text-deep-blue">fewsats</span>: Running policy checks... Budget <span className="text-green-500">✓</span> Approval <span className="text-green-500">✓</span>
        </span>
      );
    }
    
    // Step 4: Fewsats processes payment
    if (animationStep >= 4) {
      messages.push(
        <span key="4">
          <br />
          <span className="font-semibold text-deep-blue">fewsats</span>: <span className="text-green-500">All policies passed!</span> Payment sent to service.
        </span>
      );
    }
    
    // Step 5: Service grants access
    if (animationStep >= 5) {
      messages.push(
        <span key="5">
          <br />
          <span className="font-semibold">service</span>: <span className="text-green-500">Access granted!</span> Returning premium data.
        </span>
      );
    }
    
    return <span>{messages}</span>;
  };

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
            <div className="flex flex-col max-w-lg mx-auto md:mx-0">
              <div className="self-center md:self-start rounded-full bg-white/80 backdrop-blur shadow-sm px-4 py-1 mb-6">
                <span className="text-sm font-medium text-deep-blue">The easiest way to integrate payments in MCP</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-center md:text-left">
                The Payment Infrastructure for 
                <span className="block text-deep-blue">
                  AI Agents
                </span>
              </h1>
              <p className="text-lg text-neutral-dark/80 mb-4 text-center md:text-left">
                Enable AI transactions with human oversight, budget controls, and zero friction.
              </p>
              <p className="text-lg text-neutral-dark/80 mb-8 text-center md:text-left">
                No browser, no context switching, no headaches, it just works.
              </p>
              <div className="self-center md:self-start">
                <a href="https://app.fewsats.com" className="btn-primary" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden sm:block">
            <div className="relative glass rounded-2xl p-8 md:p-10 z-10 animate-fade-in">
              <div className="text-center mb-4">
                <span className="text-sm text-neutral-dark/70">How it works</span>
              </div>
              
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-deep-purple/10 rounded-lg">
                    <Bot className="h-6 w-6 text-deep-purple" />
                  </div>
                  <div>
                    <p className="font-medium">AI Agent</p>
                    <p className="text-sm text-neutral-dark/70">Needs premium data</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-bright-teal/10 rounded-lg">
                    <Server className="h-6 w-6 text-bright-teal" />
                  </div>
                  <div>
                    <p className="font-medium">Service Provider</p>
                    <p className="text-sm text-neutral-dark/70">Premium API</p>
                  </div>
                </div>
              </div>

              {/* Transaction Flow Visualization */}
              <div className="relative mb-6">
                {/* Step 0-1: AI Request to Service */}
                {(animationStep === 0 || animationStep === 1) && (
                  <div className="flex justify-between items-center h-[100px]">
                    {/* AI Agent */}
                    <div className={`transition-all duration-500 p-3 rounded-xl bg-purple-100 shadow-sm w-16 h-16 flex items-center justify-center ${animationStep === 0 ? "scale-110 border-2 border-purple-400 shadow-md" : ""}`}>
                      <Bot className="h-8 w-8 text-purple-600" />
                    </div>
                    
                    {/* Arrow */}
                    <div className={`flex-1 flex justify-center ${animationStep === 0 ? "text-purple-600 animate-pulse" : "text-purple-400"}`}>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    
                    {/* Service */}
                    <div className={`transition-all duration-500 p-3 rounded-xl bg-gray-100 shadow-sm w-16 h-16 flex items-center justify-center ${animationStep === 1 ? "scale-110 border-2 border-gray-400 shadow-md" : ""}`}>
                      <div className="relative">
                        <Server className="h-8 w-8 text-gray-600" />
                        {animationStep === 1 && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                            <span className="text-white text-[10px]">$</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Step 2: AI to Fewsats */}
                {animationStep === 2 && (
                  <div className="flex justify-between items-center h-[100px]">
                    {/* AI Agent */}
                    <div className="transition-all duration-500 p-3 rounded-xl bg-purple-100 shadow-sm w-16 h-16 flex items-center justify-center scale-110 border-2 border-purple-400 shadow-md">
                      <Bot className="h-8 w-8 text-purple-600" />
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex-1 flex justify-center text-purple-600 animate-pulse">
                      <ArrowRight className="h-5 w-5 transform rotate-45" />
                    </div>
                    
                    {/* Fewsats */}
                    <div className="transition-all duration-500 p-2 rounded-xl bg-blue-50 shadow-sm w-14 h-14 flex items-center justify-center">
                      <img src="/favicon.svg" alt="Fewsats" className="h-7 w-7" />
                    </div>
                  </div>
                )}
                
                {/* Step 3: Fewsats Policy Check */}
                {animationStep === 3 && (
                  <div className="flex justify-center items-center h-[100px]">
                    <div className="transition-all duration-500 p-4 rounded-xl bg-blue-50 shadow-sm w-24 h-24 flex items-center justify-center scale-110 border-2 border-deep-blue shadow-md">
                      <div className="relative">
                        <img src="/favicon.svg" alt="Fewsats" className="h-12 w-12" />
                        <div className="absolute -top-2 -right-2 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                          <span className="text-white text-[12px]">✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Step 4: Fewsats Payment */}
                {animationStep === 4 && (
                  <div className="flex justify-between items-center h-[100px]">
                    {/* Fewsats */}
                    <div className="transition-all duration-500 p-3 rounded-xl bg-blue-50 shadow-sm w-16 h-16 flex items-center justify-center scale-110 border-2 border-deep-blue shadow-md">
                      <img src="/favicon.svg" alt="Fewsats" className="h-8 w-8" />
                    </div>
                    
                    {/* Arrow with $ */}
                    <div className="flex-1 flex justify-center items-center">
                      <div className="relative">
                        <ArrowRight className="h-5 w-5 text-deep-blue animate-pulse" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-[8px]">$</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Service */}
                    <div className="transition-all duration-500 p-3 rounded-xl bg-gray-100 shadow-sm w-16 h-16 flex items-center justify-center">
                      <Server className="h-8 w-8 text-gray-600" />
                    </div>
                  </div>
                )}
                
                {/* Step 5: AI to Service with Access */}
                {animationStep === 5 && (
                  <div className="flex justify-between items-center h-[100px]">
                    {/* AI Agent */}
                    <div className="transition-all duration-500 p-3 rounded-xl bg-purple-100 shadow-sm w-16 h-16 flex items-center justify-center">
                      <Bot className="h-8 w-8 text-purple-600" />
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex-1 flex justify-center text-green-500 animate-pulse">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    
                    {/* Service */}
                    <div className="transition-all duration-500 p-3 rounded-xl bg-gray-100 shadow-sm w-16 h-16 flex items-center justify-center scale-110 border-2 border-green-500 shadow-md">
                      <div className="relative">
                        <Server className="h-8 w-8 text-gray-600" />
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-[10px]">✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm h-[180px] overflow-y-auto max-h-[180px] md:h-[180px]">
                <p className="font-mono text-sm">
                  {getMessage()}
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 w-24 h-24 bg-deep-blue/10 rounded-full blur-xl animate-float"></div>
            <div className="absolute bottom-10 -left-8 w-16 h-16 bg-deep-blue/10 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
