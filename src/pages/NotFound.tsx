
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

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
