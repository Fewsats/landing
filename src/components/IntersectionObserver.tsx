
import React, { useEffect } from 'react';

const IntersectionObserver: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section-anim');
    
    const observer = new IntersectionObserver(
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
  }, []);
  
  return null;
};

export default IntersectionObserver;
