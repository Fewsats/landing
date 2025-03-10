import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 px-4 py-4 md:px-8',
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/favicon.svg" alt="Fewsats Logo" width={32} height={32} className="text-deep-blue" />
          <span className="font-bold text-2xl text-neutral-dark">
            Fewsats
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#clients" className="text-neutral-dark hover:text-deep-blue transition-colors">
            For Clients
          </a>
          <a href="#services" className="text-neutral-dark hover:text-deep-blue transition-colors">
            For Services
          </a>
          <a href="#payment-methods" className="text-neutral-dark hover:text-deep-blue transition-colors">
            Payment Methods
          </a>
          <a href="https://app.fewsats.com" className="bg-deep-blue text-white font-medium rounded-full px-6 py-2 hover:shadow-lg transition-all duration-300" target="_blank" rel="noopener noreferrer">
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neutral-dark" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4 animate-fade-in">
          <a 
            href="#clients" 
            className="text-neutral-dark hover:text-deep-blue transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            For Clients
          </a>
          <a 
            href="#services" 
            className="text-neutral-dark hover:text-deep-blue transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            For Services
          </a>
          <a 
            href="#payment-methods" 
            className="text-neutral-dark hover:text-deep-blue transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Payment Methods
          </a>
          <a href="https://app.fewsats.com" className="bg-deep-blue text-white font-medium rounded-full px-6 py-2 w-full" target="_blank" rel="noopener noreferrer">
            Get Started
          </a>
        </div>
      )}
    </header>
  );
};

export default NavBar;
