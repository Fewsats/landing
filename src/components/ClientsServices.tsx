import React, { useEffect, useRef } from 'react';
import { Shield, CreditCard, Settings, Zap, BarChart, Repeat } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
            Payments for a 
            <span className="text-deep-blue"> safe AI Economy</span>
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-dark/80">
            Our platform gives AI the ability to request payments without direct access to financial credentials or payment method details. Control always stays in your hands.
          </p>
        </div>

        {/* For Clients */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-block rounded-full bg-deep-purple/10 px-4 py-1 mb-2">
              <span className="text-sm font-medium text-deep-purple">For Clients</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold">
              Add Payment Abilities to Your AI Toolkit
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column - Cards */}
            <div className="space-y-6">
              {clientBenefits.map((benefit, index) => (
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
            <div className="bg-neutral-dark rounded-xl p-6 shadow-lg animate-item" style={{ animationDelay: '450ms' }}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-xs text-neutral-light">ai-agent-example.ts</div>
              </div>
              <SyntaxHighlighter 
                language="typescript" 
                style={vscDarkPlus}
                customStyle={{ 
                  background: 'transparent',
                  padding: '0',
                  margin: '0',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem'
                }}
              >
{`import { Fewsats } from 'fewsats';

// Configure the SDK
const client = new Fewsats({
  apiKey: process.env.FEWSATS_API_KEY,
});

// Make HTTP request to external service
const response = await fetch('https://some-api.com/endpoint');

// Handle HTTP 402 payment required error
if (response.status === 402) {
  // The response contains information about available offers
  const data = await response.json();
  const offerId = data.offers[0].id; // Take first offer
  const resp = await client.payOffer(offerId, data);
  // resp.status == 'needs_review'
}`}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>

        {/* For Services */}
        <div>
          <div className="text-center mb-10">
            <div className="inline-block rounded-full bg-bright-teal/10 px-4 py-1 mb-2">
              <span className="text-sm font-medium text-bright-teal">For Services</span>
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
            <div className="bg-neutral-dark rounded-xl p-6 shadow-lg animate-item" style={{ animationDelay: '450ms' }}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-xs text-neutral-light">server-example.ts</div>
              </div>
              <SyntaxHighlighter 
                language="typescript" 
                style={vscDarkPlus}
                customStyle={{ 
                  background: 'transparent',
                  padding: '0',
                  margin: '0',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem'
                }}
              >
{`// Express route handler
app.get('/paywalled-resource', async (req, res) => {
  if (needsToPay(req.userId)) {
    const offers = [
      {
        offerId: 'offer_123',
        amount: 1, // USD Cents
        currency: 'USD',
        description: 'Test payment',
        title: 'One Cent Offer',
      }
    ];
    
    const response = await client.createOffers(offers);
    return res.status(402).json(response);
  }
  // Handle normal response
});`}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsServices; 