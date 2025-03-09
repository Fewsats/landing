
import React, { useEffect } from 'react';

const IntersectionObserverComponent: React.FC = () => {
  useEffect(() => {
    // Make sure IntersectionObserver is available in the browser environment
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const sections = document.querySelectorAll('.section-anim');
      
      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate');
            }
          });
        },
        { threshold: 0.1 }
      );
      
      sections.forEach(section => {
        observer.observe(section);
      });
      
      return () => {
        sections.forEach(section => {
          observer.unobserve(section);
        });
      };
    }
  }, []);
  
  return null;
};

export default IntersectionObserverComponent;
