import React, { useEffect, useRef } from 'react';
import { Shield, CreditCard, Settings, Zap, BarChart, Repeat } from 'lucide-react';

const ClientsServices: React.FC = () => {
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

  const clientBenefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Frictionless AI Transactions",
      description: "Enable your AI agents to pay for services without switching to a browser or complex setup"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Complete Control",
      description: "Set budgets, transaction limits, and approval workflows for your AI transactions"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security First",
      description: "Human-in-the-loop oversight for all transactions that matter"
    }
  ];

  const serviceBenefits = [
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "AI-Ready Revenue",
      description: "Expose your services directly to the AI ecosystem with seamless payment processing"
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Expand Your Market",
      description: "Reach users where they are - in AI assistants, copilots, and agent networks"
    },
    {
      icon: <Repeat className="h-6 w-6" />,
      title: "New Business Models",
      description: "Enable micropayments and agent-to-agent transactions with minimal overhead"
    }
  ];

  return (
    <section id="clients" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-deep-blue/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-deep-blue/5 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="text-center mb-16 section-anim">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seamless Payments for the 
            <span className="text-deep-blue"> AI Economy</span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-dark/80">
            Our platform bridges the gap between AI capabilities and payment infrastructure,
            creating new possibilities for both clients and services.
          </p>
        </div>

        {/* For Clients */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-block rounded-full bg-deep-purple/10 px-4 py-1 mb-2">
              <span className="text-sm font-medium text-deep-purple">For Clients</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold">
              Let Your AI Agents Handle Payments
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
            {clientBenefits.map((benefit, index) => (
              <div key={index} className="card-glass">
                <div className="feature-icon inline-block mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{benefit.title}</h4>
                <p className="text-neutral-dark/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* For Services */}
        <div id="services">
          <div className="text-center mb-10">
            <div className="inline-block rounded-full bg-bright-teal/10 px-4 py-1 mb-2">
              <span className="text-sm font-medium text-bright-teal">For Services</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold">
              Tap Into The AI Ecosystem
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
            {serviceBenefits.map((benefit, index) => (
              <div key={index} className="card-glass">
                <div className="feature-icon inline-block mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{benefit.title}</h4>
                <p className="text-neutral-dark/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsServices; 