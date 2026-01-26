import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Animation Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  const scrollToOpenings = () => {
    const openingsSection = document.getElementById('open-positions');
    if (openingsSection) {
      openingsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#1a1a1a] z-10" />
        <img
          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=2000&q=80"
          alt="Professional automotive service team"
          className="w-full h-full object-cover animate-slow-zoom"
          style={{ objectPosition: 'center 30%' }}
        />
      </div>

      {/* Content Container */}
      <div 
        ref={contentRef}
        className="relative z-20 container mx-auto px-6 text-center opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      >
        {/* Breadcrumb / Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-[#FF5C39]"></span>
          <span className="text-xs font-medium text-white uppercase tracking-wider">Careers at Shah Automotives</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
          Build Your Future <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5C39] to-[#fff]">
            With Expert Teams
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join Nairobi's most trusted automotive service center. We're seeking skilled technicians, ASE-certified mechanics, and dedicated professionals who share our passion for automotive excellence.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToOpenings}
            className="px-8 py-4 bg-[#FF5C39] hover:bg-[#ff7050] text-white font-bold text-lg rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            View Open Positions
          </button>
          <Link
            to="/about"
            className="px-8 py-4 bg-transparent border-2 border-white/40 text-white font-medium text-lg rounded-full hover:bg-white/10 hover:border-white/60 transition-all backdrop-blur-sm"
          >
            About Our Team
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <button onClick={scrollToOpenings} className="text-white/50 hover:text-[#FF5C39] transition-colors">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </button>
      </div>

      {/* Custom Keyframe for the slow zoom */}
      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;