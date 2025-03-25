import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import ClientsServices from '@/components/ClientsServices';
import PaymentMethods from '@/components/PaymentMethods';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import IntersectionObserver from '@/components/IntersectionObserver';
import { Helmet } from 'react-helmet';

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Fewsats | Secure Payments for AI Agents</title>
        <meta name="description" content="Enable your AI agents to securely pay for services with built-in oversight, budget controls, and zero friction. Fewsats provides the payment infrastructure for the agentic economy." />
        
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://www.fewsats.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Fewsats - Payments for AI Agents" />
        <meta property="og:description" content="Enable your AI agents to securely pay for services with built-in oversight, budget controls, and zero friction. Fewsats provides the payment infrastructure for the agentic economy." />
        <meta property="og:image" content="https://www.fewsats.com/og-image.png" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="fewsats.com" />
        <meta property="twitter:url" content="https://www.fewsats.com" />
        <meta name="twitter:title" content="Fewsats - Payments for AI Agents" />
        <meta name="twitter:description" content="Enable your AI agents to securely pay for services with built-in oversight, budget controls, and zero friction. Fewsats provides the payment infrastructure for the agentic economy." />
        <meta name="twitter:image" content="https://www.fewsats.com/og-image.png" />
      </Helmet>
      <NavBar />
      <Hero />
      <ClientsServices />
      <PaymentMethods />
      <CTASection />
      <Footer />
      <IntersectionObserver />
    </div>
  );
};

export default Index;
