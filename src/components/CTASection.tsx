import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
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
    <section className="py-20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-deep-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-deep-blue/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="section-anim max-w-5xl mx-auto bg-deep-blue rounded-3xl overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to empower your AI with payment capabilities?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://app.fewsats.com" className="bg-white text-deep-blue font-medium rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
                {/* <button className="flex items-center justify-center text-white hover:text-white/80 transition-colors gap-2">
                  Schedule a Demo
                  <ArrowRight size={18} />
                </button> */}
              </div>
            </div>
            <div className="lg:col-span-2 bg-white/10 backdrop-blur-sm p-8 md:p-12 flex items-center">
              <div className="w-full">
                <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-sm">1</span>
                    </div>
                    <span>Support for MCP payments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-sm">2</span>
                    </div>
                    <span>Policy engine for custom rules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-sm">3</span>
                    </div>
                    <span>Support for micropayments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
