import { useEffect, useRef } from 'react';

const Hero = () => {
  const headingRef = useRef(null);
  const captionLeftRef = useRef(null);
  const captionRightRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up-in');
        } else {
          entry.target.classList.remove('animate-slide-up-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    if (captionLeftRef.current) observer.observe(captionLeftRef.current);
    if (captionRightRef.current) observer.observe(captionRightRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#0a0a0b'
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&h=1080&fit=crop&q=80"
          alt="Auto repair workshop"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.4)'
          }}
        />
      </div>

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(10, 10, 11, 0.4) 0%, rgba(10, 10, 11, 0.7) 100%)',
          zIndex: 1
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '2rem',
          maxWidth: '1200px',
          width: '100%'
        }}
      >
        {/* Main Heading */}
        <div style={{ marginBottom: '3rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
              marginBottom: '1rem'
            }}
          >
            {/* Left Caption */}
            <div
              ref={captionLeftRef}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{
                fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                fontWeight: '500',
                color: '#b0b0b0',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                transitionDelay: '0ms'
              }}
            >
              Expert Care
            </div>

            <h1
              ref={headingRef}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                fontWeight: '400',
                color: '#f5f5f5',
                lineHeight: '1',
                margin: 0,
                fontFamily: 'Georgia, serif',
                letterSpacing: '0.02em',
                transitionDelay: '100ms'
              }}
            >
              our services,
            </h1>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              gap: '2rem',
              flexWrap: 'wrap'
            }}
          >
            <h1
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                fontWeight: '400',
                color: '#f5f5f5',
                lineHeight: '1',
                margin: 0,
                fontFamily: 'Georgia, serif',
                letterSpacing: '0.02em',
                transitionDelay: '200ms'
              }}
            >
              your vehicle
            </h1>

            {/* Right Caption */}
            <div
              ref={captionRightRef}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{
                fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                fontWeight: '500',
                color: '#b0b0b0',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginTop: '0.5rem',
                transitionDelay: '300ms'
              }}
            >
              Every Time
            </div>
          </div>
        </div>

        {/* Description */}
        <p
          ref={descriptionRef}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
            lineHeight: '1.7',
            color: '#d1d1d1',
            maxWidth: '65ch',
            margin: '0 auto 3rem',
            fontWeight: '300',
            transitionDelay: '400ms'
          }}
        >
          From routine maintenance to major repairs, our certified mechanics provide expert service
          with genuine parts and transparent pricing. Your vehicle deserves the best care.
        </p>

        {/* CTA Button */}
        <a
          ref={buttonRef}
          href="/contact"
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
          style={{
            display: 'inline-block',
            padding: '1rem 2.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            color: '#f5f5f5',
            fontSize: '1rem',
            fontWeight: '500',
            textDecoration: 'none',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '2px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            transition: 'all 0.4s ease',
            transitionDelay: '500ms'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Book Service
        </a>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          animation: 'bounce 2s infinite'
        }}
      >
        <style>
          {`
            @keyframes bounce {
              0%, 100% { transform: translateX(-50%) translateY(0); }
              50% { transform: translateX(-50%) translateY(-10px); }
            }
          `}
        </style>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255, 255, 255, 0.5)"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
