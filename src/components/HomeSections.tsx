import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface HomeSectionLinkProps {
  section: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const HomeSectionLink: React.FC<HomeSectionLinkProps> = ({ 
  section, 
  children, 
  className = '',
  onClick 
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (onClick) {
      onClick();
    }
    
    if (isHomePage) {
      // Already on homepage, just scroll to the section
      const element = document.querySelector(`#${section}`);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
      }
    } else {
      // Navigate to homepage with section hash
      navigate(`/#${section}`);
    }
  };
  
  return (
    <a 
      href={`/#${section}`}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default HomeSectionLink; 