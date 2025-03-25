import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CanonicalLink: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Find existing canonical link or create a new one
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    
    // Set the canonical URL to the current path
    link.href = `https://www.fewsats.com${location.pathname}`;
  }, [location.pathname]);
  
  return null; // This component doesn't render anything
};

export default CanonicalLink; 