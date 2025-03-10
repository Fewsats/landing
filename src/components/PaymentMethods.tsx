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
          One Integration, <span className="text-deep-blue">All Payment Methods</span>
          </h2>
          <p className="text-neutral-dark/80 mb-8">
            Support traditional and next-gen payment networks out of the box
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 stagger-animation">
            <div className="card-glass">
              <div className="h-16 w-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-deep-blue/10">
                <Landmark className="h-8 w-8 text-deep-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Bank Transfers</h3>
              <p className="text-neutral-dark/80">
                Low-fee ACH and Wire transfers
              </p>
            </div>

            <div className="card-glass">
              <div className="h-16 w-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-deep-blue/10">
                <CreditCard className="h-8 w-8 text-deep-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Credit Cards</h3>
              <p className="text-neutral-dark/80">
                Fast and universal payment methods with built-in consumer protections
              </p>
            </div>

            <div className="card-glass">
              <div className="h-16 w-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-deep-blue/10">
                <Bitcoin className="h-8 w-8 text-deep-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cryptocurrency</h3>
              <p className="text-neutral-dark/80">
                Support for stablecoins enabling global, borderless transactions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
