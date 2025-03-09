
import React, { useEffect, useRef } from 'react';
import { CreditCard, Landmark, Bitcoin } from 'lucide-react';

const PaymentMethods: React.FC = () => {
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
    <section id="payment-methods" className="py-20 relative bg-neutral-light">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 dot-pattern opacity-30"></div>

      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="section-anim max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Flexible <span className="gradient-text">Payment Methods</span>
          </h2>
          <p className="text-neutral-dark/80 mb-8">
            Supporting both traditional and next-generation payment systems
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 stagger-animation">
            <div className="card-glass">
              <div className="h-16 w-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-deep-blue/10 to-deep-purple/10">
                <Landmark className="h-8 w-8 text-deep-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Bank Transfers / ACH</h3>
              <p className="text-neutral-dark/80">
                Connect directly to your bank account for secure, low-fee transfers
              </p>
            </div>

            <div className="card-glass">
              <div className="h-16 w-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-deep-blue/10 to-deep-purple/10">
                <CreditCard className="h-8 w-8 text-deep-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Credit Cards</h3>
              <p className="text-neutral-dark/80">
                Fast and universal payment methods with built-in consumer protections
              </p>
            </div>

            <div className="card-glass">
              <div className="h-16 w-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-deep-blue/10 to-deep-purple/10">
                <Bitcoin className="h-8 w-8 text-bright-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cryptocurrency</h3>
              <p className="text-neutral-dark/80">
                Support for digital currencies enabling global, borderless transactions
              </p>
            </div>
          </div>

          <div className="mt-16 glass p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">Integration Flexibility</h3>
            <p className="text-neutral-dark/80 mb-6">
              Our infrastructure adapts to your payment preferences, with simple integration and robust security at every step
            </p>
            <button className="btn-secondary">
              Explore Integration Options
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
