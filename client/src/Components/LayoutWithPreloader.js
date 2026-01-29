import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Preloader from './Preloader';

const LayoutWithPreloader = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  // Show preloader on every page load/reload until content is ready
  useEffect(() => {
    setIsLoading(true);
    setShowContent(false);

    // Wait for window load event (all resources loaded)
    const handleLoad = () => {
      setContentLoaded(true);
    };

    if (document.readyState === 'complete') {
      // Already loaded
      setContentLoaded(true);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handlePreloaderComplete = () => {
    // Start showing content immediately as preloader fades
    setShowContent(true);
    // Remove preloader after fade completes
    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  };

  // Only allow preloader to complete when content is actually loaded
  const isReadyToComplete = contentLoaded;

  return (
    <div className="relative min-h-screen bg-[#111111]">
      {isLoading && (
        <Preloader
          onComplete={handlePreloaderComplete}
          contentLoaded={isReadyToComplete}
        />
      )}
      <div
        className={`transition-opacity duration-500 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          visibility: showContent ? 'visible' : 'hidden'
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutWithPreloader;
