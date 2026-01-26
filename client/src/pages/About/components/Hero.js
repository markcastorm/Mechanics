import { useEffect, useRef } from 'react';

const Hero = () => {
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);

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

    if (badgeRef.current) observer.observe(badgeRef.current);
    if (headingRef.current) observer.observe(headingRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>
        {`
          @media (max-width: 1600px) {
            .hero-section {
              padding: 4rem 2rem !important;
            }
            .hero-container {
              max-width: 1200px !important;
              height: auto !important;
              gap: 3rem !important;
            }
            .hero-image-container {
              width: 540px !important;
              height: 567px !important;
            }
          }

          @media (max-width: 1200px) {
            .hero-section {
              padding: 3rem 1.5rem !important;
            }
            .hero-container {
              grid-template-columns: 1fr !important;
              gap: 2.5rem !important;
            }
            .hero-text-content {
              max-width: 100% !important;
            }
            .hero-image-wrapper {
              justify-content: center !important;
            }
            .hero-image-container {
              width: 100% !important;
              max-width: 640px !important;
              height: auto !important;
              aspect-ratio: 640 / 672 !important;
            }
          }

          @media (max-width: 768px) {
            .hero-section {
              padding: 2rem 1rem !important;
            }
            .hero-container {
              gap: 2rem !important;
            }
            .hero-heading {
              font-size: clamp(2rem, 8vw, 2.5rem) !important;
            }
            .hero-paragraph {
              font-size: 1rem !important;
            }
          }
        `}
      </style>
      <section
        className="hero-section"
        style={{
          backgroundColor: '#1a1a1a',
          color: '#f5f5f5',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          padding: '6rem 240.5px',
          position: 'relative'
        }}
      >
        <div
          className="hero-container"
          style={{
            maxWidth: '1424px',
            height: '672px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 640px',
            gap: '4rem',
            alignItems: 'center'
          }}
        >
          {/* Left Side - Text Content */}
          <div className="hero-text-content" style={{ maxWidth: '550px' }}>
            <div
              ref={badgeRef}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1rem 0.6rem',
                backgroundColor: '#fafafa',
                color: '#10b981',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                borderRadius: '9999px',
                marginBottom: '1.5rem',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              About
            </div>
            <h1
              ref={headingRef}
              className="hero-heading opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{
                transitionDelay: '100ms',
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: '600',
                lineHeight: '1.1',
                marginBottom: '1.5rem',
                maxWidth: '20ch'
              }}
            >
              Expert automotive care driven by passion and precision
            </h1>
            <p
              ref={paragraphRef}
              className="hero-paragraph opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{
                transitionDelay: '200ms',
                fontSize: '1.125rem',
                lineHeight: '1.6',
                maxWidth: '50ch',
                color: '#b0b0b0'
              }}
            >
              We're the certified mechanics behind reliable vehicle maintenance and repair in Nairobi. Driven by expertise, integrity and a shared commitment to keeping your car running at its best.
            </p>
          </div>

          {/* Right Side - Image */}
          <div
            ref={imageRef}
            className="hero-image-wrapper opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{
              transitionDelay: '300ms',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div
              className="hero-image-container"
              style={{
                width: '640px',
                height: '672px',
                borderRadius: '16px',
                overflow: 'hidden'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=900&fit=crop"
                alt="Professional mechanics working together in a modern automotive workshop."
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;