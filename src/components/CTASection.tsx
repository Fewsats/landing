
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
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-deep-purple/10 to-deep-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-bright-teal/10 to-deep-purple/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="section-anim max-w-5xl mx-auto bg-gradient-to-r from-deep-blue to-deep-purple rounded-3xl overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to empower your AI with payment capabilities?
              </h2>
              <p className="text-white/80 mb-8 max-w-lg">
                Join our early access program and be the first to integrate the native payment layer for AI agent interactions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-deep-purple font-medium rounded-full px-8 py-3 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                  Get Early Access
                </button>
                <button className="flex items-center justify-center text-white hover:text-white/80 transition-colors gap-2">
                  Schedule a Demo
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
            <div className="lg:col-span-2 bg-white/10 backdrop-blur-sm p-8 md:p-12 flex items-center">
              <div className="w-full">
                <h3 className="text-xl font-semibold text-white mb-4">Early Access Benefits</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-sm">1</span>
                    </div>
                    <span>Priority implementation support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-sm">2</span>
                    </div>
                    <span>Influence product roadmap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-sm">3</span>
                    </div>
                    <span>Discounted pricing for early adopters</span>
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
