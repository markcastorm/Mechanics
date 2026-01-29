import { useEffect, useState } from 'react';

const Preloader = ({ onComplete, contentLoaded = false }) => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // 1. The Counter Logic
    const duration = 2000; // Total time for counter (2 seconds)
    const steps = 100;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    // 2. Trigger Text Reveal when counter hits 100
    const textTimeout = setTimeout(() => {
      setShowText(true);
    }, duration + 200); // Small buffer after count finishes

    // 3. Mark animation as complete (but don't finish yet if content not loaded)
    const animationTimeout = setTimeout(() => {
      setAnimationComplete(true);
    }, duration + 2200); // Animation completes after ~4.2 seconds

    return () => {
      clearInterval(timer);
      clearTimeout(textTimeout);
      clearTimeout(animationTimeout);
    };
  }, []);

  // Wait for both animation AND content to be loaded before completing
  useEffect(() => {
    if (animationComplete && contentLoaded) {
      // Start fade out
      setTimeout(() => {
        setIsFinished(true);
      }, 300);

      // Signal completion
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 800);
    }
  }, [animationComplete, contentLoaded, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-700 ${
        isFinished ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        backgroundColor: '#2e2e2e',
        color: '#ffffff',
        pointerEvents: isFinished ? 'none' : 'auto'
      }}
    >
      <div className="relative flex flex-col items-center justify-center w-full overflow-hidden">

        {/* COUNTER SECTION */}
        <div
          className={`transition-all duration-700 ease-in-out flex flex-col items-center ${
            showText ? 'opacity-0 scale-90 blur-sm absolute pointer-events-none' : 'opacity-100 scale-100'
          }`}
        >
          <span
            style={{
              fontSize: '15vw',
              fontFamily: '"Playfair Display", serif',
              fontStyle: 'italic',
              lineHeight: '1',
              fontWeight: 400
            }}
          >
            {count}
          </span>

          {/* Circular Progress Bar - Positioned Below */}
          <div className="mt-12 relative w-8 h-8">
            <svg
              className="transform -rotate-90 w-full h-full"
              viewBox="0 0 36 36"
            >
              {/* Background circle */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="2"
              />
              {/* Progress circle */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#FF5C39"
                strokeWidth="2"
                strokeDasharray="100"
                strokeDashoffset={100 - count}
                strokeLinecap="round"
                style={{
                  transition: 'stroke-dashoffset 0.02s linear'
                }}
              />
            </svg>
          </div>
        </div>

        {/* COMPANY NAME REVEAL - Split Animation */}
        <div
          className={`relative ${
            showText ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1
            className="text-center overflow-hidden"
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2rem, 6vw, 5rem)',
              lineHeight: '1.2',
              color: '#f0f0f0'
            }}
          >
            {/* "Shah" - Slides from Top */}
            <div className="overflow-hidden">
              <span
                className={`block font-bold italic tracking-tight transition-all duration-1000 ease-out ${
                  showText ? 'translate-y-0' : '-translate-y-full'
                }`}
              >
                Shah
              </span>
            </div>

            {/* "Automotives" - Slides from Bottom */}
            <div className="overflow-hidden">
              <span
                className={`block font-bold italic tracking-tight transition-all duration-1000 ease-out ${
                  showText ? 'translate-y-0' : 'translate-y-full'
                }`}
              >
                Automotives
              </span>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Preloader;