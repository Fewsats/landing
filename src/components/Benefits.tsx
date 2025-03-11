import React, { useEffect, useRef, useState } from 'react';
import { Shield, CreditCard, Settings, Zap, BarChart, Repeat } from 'lucide-react';
import CodeExample from './CodeExample';

const Benefits: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [consumerCode, setConsumerCode] = useState<string>('');
  const [providerCode, setProviderCode] = useState<string>('');

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

  // Load code examples with a small delay to ensure proper rendering
  useEffect(() => {
    const timer = setTimeout(() => {
      setConsumerCode(`// Initialize the AI payment client
const paymentClient = new FewsatsClient({
  apiKey: process.env.FEWSATS_API_KEY,
  budgetLimit: 50, // USD per day
  approvalPolicy: 'auto' // or 'manual'
});

// AI agent needs to access a premium API
async function accessPremiumService() {
  const response = await paymentClient.pay({
    service: 'premium-data-api',
    amount: 0.05, // USD
    description: 'Access to premium data'
  });
  
  if (response.status === 'success') {
    // Access granted, proceed with API call
    return fetchPremiumData(response.accessToken);
  }
}`);

      setProviderCode(`// Initialize the service provider SDK
const fewsatsService = new FewsatsService({
  serviceId: 'your-premium-api',
  apiKey: process.env.FEWSATS_SERVICE_KEY
});

// Handle incoming API requests
app.get('/premium-data', async (req, res) => {
  // Verify payment token from the request
  const paymentVerification = 
    await fewsatsService.verifyPayment(
      req.headers['x-payment-token']
    );
  
  if (paymentVerification.valid) {
    // Payment is valid, serve the premium content
    res.json({ data: getPremiumData() });
  } else {
    // Payment required
    res.status(402).json({
      error: 'Payment required',
      paymentUrl: paymentVerification.paymentUrl
    });
  }
});`);
    }, 100); // Small delay to ensure component is mounted

    return () => clearTimeout(timer);
  }, []);

  const consumerBenefits = [
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

  const providerBenefits = [
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
    <section id="benefits" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-deep-blue/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-deep-blue/5 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="text-center mb-16 section-anim">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Payments for a 
            <span className="text-deep-blue"> safe AI Economy</span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-dark/80">
            Our platform gives AI the ability to request payments without direct access to financial credentials or payment method details. Control always stays in your hands.
          </p>
        </div>

        {/* For Consumers */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-block rounded-full bg-deep-purple/10 px-4 py-1 mb-2">
              <span className="text-sm font-medium text-deep-purple">For Consumers</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold">
              Add Payment Abilities to Your AI Toolkit
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column - Cards */}
            <div className="space-y-6">
              {consumerBenefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-sm border border-neutral-light/50 hover:shadow-md transition-all duration-300 animate-item"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-deep-purple/10 p-3 rounded-lg">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{benefit.title}</h4>
                      <p className="text-neutral-dark/70">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right column - Code */}
            <CodeExample 
              code={consumerCode}
              language="javascript"
              filename="consumer-example.js"
            />
          </div>
        </div>

        {/* For Providers */}
        <div>
          <div className="text-center mb-10">
            <div className="inline-block rounded-full bg-bright-teal/10 px-4 py-1 mb-2">
              <span className="text-sm font-medium text-bright-teal">For Providers</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold">
              Unlock a New Revenue Channel
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column - Cards */}
            <div className="space-y-6">
              <div 
                className="bg-white rounded-xl p-6 shadow-sm border border-neutral-light/50 hover:shadow-md transition-all duration-300 animate-item"
                style={{ animationDelay: '0ms' }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-bright-teal/10 p-3 rounded-lg">
                    <BarChart className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Expand Your Market</h4>
                    <p className="text-neutral-dark/70">Reach users where they are: AI assistants, copilots, and agent networks</p>
                  </div>
                </div>
              </div>
              
              <div 
                className="bg-white rounded-xl p-6 shadow-sm border border-neutral-light/50 hover:shadow-md transition-all duration-300 animate-item"
                style={{ animationDelay: '150ms' }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-bright-teal/10 p-3 rounded-lg">
                    <Repeat className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">New Business Models</h4>
                    <p className="text-neutral-dark/70">Enable micropayments and agent-to-agent transactions with minimal overhead</p>
                  </div>
                </div>
              </div>
              
              <div 
                className="bg-white rounded-xl p-6 shadow-sm border border-neutral-light/50 hover:shadow-md transition-all duration-300 animate-item"
                style={{ animationDelay: '300ms' }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-bright-teal/10 p-3 rounded-lg">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Frictionless Integration</h4>
                    <p className="text-neutral-dark/70">Simple API implementation with built-in payment processing and user authentication</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Code */}
            <CodeExample 
              code={providerCode}
              language="javascript"
              filename="provider-example.js"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
