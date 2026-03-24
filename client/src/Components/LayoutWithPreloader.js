import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const LayoutWithPreloader = () => {
  const location = useLocation();
  
  // State Management
  const [hasSeenPreloader] = useState(() => !!localStorage.getItem('preloaderShown'));
  const [showPreloader, setShowPreloader] = useState(!hasSeenPreloader);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [progress, setProgress] = useState(0);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Premium Fake Progress & Loader Logic
  useEffect(() => {
    if (!showPreloader || isAnimatingOut) return;

    // Smoothly animate the progress bar
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Dynamic speed: starts fast, slows down at the end for suspense
        const increment = prev < 60 ? 3 : prev < 90 ? 1 : 0.5;
        const next = prev + increment;
        
        if (next >= 100) {
          clearInterval(interval);
          // Trigger the majestic exit animation
          setTimeout(() => setIsAnimatingOut(true), 400);
          return 100;
        }
        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [showPreloader, isAnimatingOut]);

  // Clean up and unmount preloader after animation finishes
  useEffect(() => {
    if (isAnimatingOut) {
      // 1200ms matches the CSS transition duration below
      const timer = setTimeout(() => {
        setShowPreloader(false);
        localStorage.setItem('preloaderShown', 'true');
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [isAnimatingOut]);

  return (
    <div className="relative min-h-screen bg-[#111111] overflow-hidden">
      
      {/* --- CINEMATIC PRELOADER --- */}
      {showPreloader && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
          
          {/* Top "Garage Door" Panel */}
          <div 
            className="absolute top-0 left-0 w-full h-1/2 bg-[#0a0a0a] transition-transform duration-[1200ms]"
            style={{ 
              transform: isAnimatingOut ? 'translateY(-100%)' : 'translateY(0)',
              transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)' 
            }}
          />
          
          {/* Bottom "Garage Door" Panel */}
          <div 
            className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0a0a0a] transition-transform duration-[1200ms]"
            style={{ 
              transform: isAnimatingOut ? 'translateY(100%)' : 'translateY(0)',
              transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)'
            }}
          />

          {/* Center Brand & Progress */}
          <div 
            className="relative z-10 flex flex-col items-center justify-center transition-all duration-700"
            style={{ 
              opacity: isAnimatingOut ? 0 : 1,
              transform: isAnimatingOut ? 'scale(1.1)' : 'scale(1)',
              transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)'
            }}
          >
            {/* The Brand Name (Letters track inward slowly as it loads) */}
            <h1 
              className="text-white font-bold uppercase tracking-widest text-2xl md:text-4xl mb-8 overflow-hidden"
            >
              <span 
                className="block transition-all duration-[3000ms] ease-out"
                style={{ letterSpacing: progress < 100 ? '0.5em' : '0.2em' }}
              >
                Shah Automotives
              </span>
            </h1>

            {/* Premium Gold Progress Line */}
            <div className="relative w-64 md:w-96 h-[2px] bg-white/10 overflow-hidden rounded-full">
              <div 
                className="absolute top-0 left-0 h-full bg-[#ffd700] transition-all duration-75 ease-out shadow-[0_0_15px_rgba(255,215,0,0.8)]"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            {/* Loading Percentage Number */}
            <div className="absolute -bottom-8 text-[#ffd700] text-xs font-mono font-medium tracking-widest opacity-60">
              {Math.floor(progress)}%
            </div>
          </div>
        </div>
      )}

      {/* --- THE MAIN WEBSITE CONTENT --- */}
      {/* We apply a "depth" effect here. It starts pushed back and blurry, and snaps into place. */}
      <div
        className="transition-all duration-[1200ms] origin-center"
        style={{
          opacity: (showPreloader && !isAnimatingOut) ? 0 : 1,
          transform: (showPreloader && !isAnimatingOut) ? 'scale(0.92)' : showPreloader ? 'scale(1)' : 'none',
          filter: (showPreloader && !isAnimatingOut) ? 'blur(10px)' : showPreloader ? 'blur(0px)' : 'none',
          transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)'
        }}
      >
        <Outlet />
      </div>

    </div>
  );
};

export default LayoutWithPreloader;