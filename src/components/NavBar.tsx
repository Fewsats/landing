import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Star } from 'lucide-react';
import { FaXTwitter, FaDiscord, FaGithub, FaCode } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [starCount, setStarCount] = useState<string>('');
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const showAcquisitionBanner = isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Fetch star count from GitHub
    const fetchStars = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/l402-protocol/l402');
        const data = await response.json();
        if (data.stargazers_count) {
          // Format the number with commas
          setStarCount(data.stargazers_count.toLocaleString());
        }
      } catch (error) {
        console.error('Error fetching GitHub stars:', error);
      }
    };

    fetchStars();
  }, []);

  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-300"
    >
      {showAcquisitionBanner && (
        <a
          href="https://sapiom.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="block border-b border-[#a7edc0]/30 bg-[#010c0b] text-white transition-colors hover:bg-[#012724]"
        >
          <div className="container mx-auto flex flex-col items-center justify-center gap-2 px-4 py-2 text-center text-xs sm:flex-row sm:text-sm md:px-8 md:py-3 md:text-base">
            <span className="rounded-full border border-[#a7edc0]/40 bg-[#012724] px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-[#a7edc0] md:px-3 md:py-1 md:text-xs">
              Announcement
            </span>
            <span className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
              <span>Fewsats has joined</span>
              <img src="/sapiom-logo.svg" alt="Sapiom" width={102} height={21} className="h-4 w-auto md:h-5" />
              <span>to continue building better payment experiences for AI.</span>
            </span>
            <span className="font-medium text-[#a7edc0]">Learn more</span>
          </div>
        </a>
      )}

      <div
        className={cn(
          'transition-all duration-300 px-4 py-4 md:px-8',
          isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
        )}
      >
        <div className="container mx-auto flex items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 mr-8">
          <a href="/" className="flex items-center gap-2">
            <img src="/favicon.svg" alt="Fewsats Logo" width={32} height={32} className="text-deep-blue" />
            <span className="font-bold text-2xl text-neutral-dark">
              Fewsats
            </span>
          </a>
        </div>

        {/* Social Media Links */}
        <div className="hidden md:flex items-center space-x-4 ml-auto mr-8">
          <a 
            href="https://github.com/Fewsats/fewsats-python" 
            className="text-neutral-dark hover:text-deep-blue transition-colors"
            aria-label="Fewsats Documentation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCode size={18} />
          </a>
          <a 
            href="https://discord.com/invite/2tPYBgWzQm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-dark hover:text-deep-blue transition-colors"
            aria-label="Fewsats Discord"
          >
            <FaDiscord size={18} />
          </a>
          <a 
            href="https://twitter.com/fewsats" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-dark hover:text-deep-blue transition-colors"
            aria-label="Fewsats Twitter"
          >
            <FaXTwitter size={18} />
          </a>
          <a 
            href="https://github.com/l402-protocol/l402" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2 py-1 rounded-md border border-transparent hover:border-neutral-200 hover:bg-neutral-50 text-neutral-dark hover:text-deep-blue transition-all"
            aria-label="L402 Protocol GitHub"
          >
            <FaGithub size={18} />
            <span className="font-medium">{starCount}</span>
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
          </a>
        </div>

        {/* Main Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {isHomePage && (
            <>
              <a href="#clients" className="text-neutral-dark hover:text-deep-blue transition-colors">
                For Clients
              </a>
              <a href="#services" className="text-neutral-dark hover:text-deep-blue transition-colors">
                For Services
              </a>
              <a href="#payment-methods" className="text-neutral-dark hover:text-deep-blue transition-colors">
                Payment Methods
              </a>
            </>
          )}
          <a href="/blog" className="text-neutral-dark hover:text-deep-blue transition-colors">
            Blog
          </a>
          <a href="https://app.fewsats.com" className="bg-deep-blue text-white font-medium rounded-full px-6 py-2 hover:shadow-lg transition-all duration-300" target="_blank" rel="noopener noreferrer">
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden ml-auto text-neutral-dark" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4 animate-fade-in">
          {/* Social Media for Mobile */}
          <div className="flex items-center space-x-4 py-2">
            <a 
              href="https://github.com/Fewsats/fewsats-python" 
              className="text-neutral-dark hover:text-deep-blue transition-colors"
              aria-label="Fewsats Documentation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCode size={18} />
            </a>
            <a 
              href="https://discord.com/invite/2tPYBgWzQm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-dark hover:text-deep-blue transition-colors"
              aria-label="Fewsats Discord"
            >
              <FaDiscord size={18} />
            </a>
            <a 
              href="https://twitter.com/fewsats" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-dark hover:text-deep-blue transition-colors"
              aria-label="Fewsats Twitter"
            >
              <FaXTwitter size={18} />
            </a>
            <a 
              href="https://github.com/l402-protocol/l402" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 rounded-md border border-transparent hover:border-neutral-200 hover:bg-neutral-50 text-neutral-dark hover:text-deep-blue transition-all"
              aria-label="L402 Protocol GitHub"
            >
              <FaGithub size={18} />
              <span className="font-medium">{starCount}</span>
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
            </a>
          </div>
          
          {isHomePage && (
            <>
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
            </>
          )}
          <a 
            href="/blog" 
            className="text-neutral-dark hover:text-deep-blue transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
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
