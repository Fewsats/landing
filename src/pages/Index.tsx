import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import ClientsServices from '@/components/ClientsServices';
import PaymentMethods from '@/components/PaymentMethods';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import IntersectionObserver from '@/components/IntersectionObserver';

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
