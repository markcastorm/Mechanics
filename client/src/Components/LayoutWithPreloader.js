import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Preloader from './Preloader';

const LayoutWithPreloader = () => {
  const location = useLocation();
  const [hasSeenPreloader] = useState(() => !!localStorage.getItem('preloaderShown'));
  const [isLoading, setIsLoading] = useState(!hasSeenPreloader);
  const [showContent, setShowContent] = useState(hasSeenPreloader);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    if (hasSeenPreloader) return;

    // Wait for window load event (all resources loaded)
    const handleLoad = () => {
      setContentLoaded(true);
    };

    if (document.readyState === 'complete') {
      setContentLoaded(true);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [hasSeenPreloader]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handlePreloaderComplete = () => {
    localStorage.setItem('preloaderShown', 'true');
    setShowContent(true);
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
