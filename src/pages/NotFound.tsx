import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Helmet } from 'react-helmet';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-light">
      <Helmet>
        <title>Page Not Found | Fewsats</title>
        <meta name="description" content="The requested page cannot be found. Return to Fewsats to learn about secure payments for AI agents." />
        
        {/* Facebook Meta Tags */}
        <meta property="og:url" content={`https://www.fewsats.com${location.pathname}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Page Not Found | Fewsats" />
        <meta property="og:description" content="The requested page cannot be found. Return to Fewsats to learn about secure payments for AI agents." />
        <meta property="og:image" content="https://www.fewsats.com/og-image.png" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="fewsats.com" />
        <meta property="twitter:url" content={`https://www.fewsats.com${location.pathname}`} />
        <meta name="twitter:title" content="Page Not Found | Fewsats" />
        <meta name="twitter:description" content="The requested page cannot be found. Return to Fewsats to learn about secure payments for AI agents." />
        <meta name="twitter:image" content="https://www.fewsats.com/og-image.png" />
      </Helmet>
      
      <div className="text-center card-glass max-w-lg">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-deep-purple/10 mb-6">
          <span className="text-4xl font-bold text-deep-purple">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-neutral-dark/80 mb-8">
          We couldn't find the page you're looking for. The page may have been moved, deleted, or never existed.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center gap-2 btn-primary"
        >
          <ArrowLeft size={18} />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
