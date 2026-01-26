import React, { useEffect, useRef, useState } from 'react';

const Hero = ({ serviceData }) => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    statsRef.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  if (!serviceData) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#13140e',
        color: '#f4f3e8'
      }}>
        <p style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '2rem' }}>
          Service not found
        </p>
      </div>
    );
  }

  return (
    <section style={{
      backgroundColor: '#13140e',
      color: '#f4f3e8',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '40rem',
        height: '40rem',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(244, 243, 232, 0.03) 0%, transparent 70%)',
        pointerEvents: 'none'
      }}/>
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '-10%',
        width: '50rem',
        height: '50rem',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(244, 243, 232, 0.02) 0%, transparent 70%)',
        pointerEvents: 'none'
      }}/>

      <div style={{
        maxWidth: '1600px',
        margin: '0 auto',
        padding: isMobile ? '10rem 2rem 6rem' : isTablet ? '11rem 3rem 7rem' : '12rem 1.6rem 8rem',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '4rem' : isTablet ? '4rem' : '6rem',
          alignItems: 'center'
        }}>
          {/* Left Content */}
          <div
            ref={contentRef}
            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            {/* Service category badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              padding: isMobile ? '0.6rem 1.2rem' : '0.8rem 1.6rem',
              backgroundColor: 'rgba(244, 243, 232, 0.05)',
              border: '1px solid rgba(244, 243, 232, 0.1)',
              borderRadius: '10rem',
              marginBottom: isMobile ? '1.6rem' : '2.4rem'
            }}>
              <div style={{
                width: '0.8rem',
                height: '0.8rem',
                borderRadius: '50%',
                backgroundColor: '#f4f3e8'
              }}/>
              <span style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: isMobile ? '1rem' : '1.2rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Professional Service
              </span>
            </div>

            {/* Main heading */}
            <h1 style={{
              fontFamily: '"NB International Pro", sans-serif',
              fontSize: isMobile ? 'clamp(3rem, 8vw, 4.5rem)' : 'clamp(3.6rem, 6vw, 6.4rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: isMobile ? '1.2rem' : '1.6rem'
            }}>
              {serviceData.title}
            </h1>

            {/* Tagline */}
            <p style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: isMobile ? '1.4rem' : isTablet ? '1.6rem' : '1.8rem',
              fontWeight: 300,
              color: 'rgba(244, 243, 232, 0.7)',
              marginBottom: isMobile ? '1.6rem' : '2.4rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {serviceData.tagline}
            </p>

            {/* Description */}
            <p style={{
              fontFamily: '"NB International Pro", sans-serif',
              fontSize: isMobile ? '1.6rem' : isTablet ? '1.8rem' : '2rem',
              fontWeight: 400,
              lineHeight: 1.5,
              color: 'rgba(244, 243, 232, 0.85)',
              marginBottom: isMobile ? '2.4rem' : '3.2rem',
              maxWidth: '54rem'
            }}>
              {serviceData.heroDescription}
            </p>

            {/* Features list */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: isMobile ? '1rem' : '1.2rem',
              marginBottom: isMobile ? '3rem' : '4rem'
            }}>
              {serviceData.features.map((feature, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  {/* Checkmark icon */}
                  <div style={{
                    width: isMobile ? '1.8rem' : '2rem',
                    height: isMobile ? '1.8rem' : '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(244, 243, 232, 0.1)',
                    borderRadius: '0.4rem',
                    flexShrink: 0
                  }}>
                    <svg width={isMobile ? "10" : "12"} height={isMobile ? "8" : "10"} viewBox="0 0 12 10" fill="none">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="#f4f3e8" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span style={{
                    fontFamily: '"NB International Pro", sans-serif',
                    fontSize: isMobile ? '1.4rem' : '1.5rem',
                    color: 'rgba(244, 243, 232, 0.9)'
                  }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: isMobile ? '1.2rem' : '1.6rem',
              flexWrap: 'wrap'
            }}>
              <a
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: isMobile ? '5rem' : '5.6rem',
                  padding: isMobile ? '0 2.4rem' : '0 3.2rem',
                  backgroundColor: '#f4f3e8',
                  color: '#13140e',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: isMobile ? '1.2rem' : '1.4rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  borderRadius: '0.4rem',
                  clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 1.6rem), calc(100% - 1.6rem) 100%, 0 100%, 0 0)',
                  transition: 'all 0.3s ease',
                  flex: isMobile ? '1 1 100%' : '0 0 auto'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 8px 24px rgba(244, 243, 232, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Book This Service
              </a>

              <button
                onClick={() => {
                  const detailsSection = document.getElementById('service-details');
                  if (detailsSection) {
                    detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: isMobile ? '5rem' : '5.6rem',
                  padding: isMobile ? '0 2.4rem' : '0 3.2rem',
                  backgroundColor: 'transparent',
                  color: '#f4f3e8',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: isMobile ? '1.2rem' : '1.4rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  border: '1px solid rgba(244, 243, 232, 0.2)',
                  borderRadius: '0.4rem',
                  transition: 'all 0.3s ease',
                  flex: isMobile ? '1 1 100%' : '0 0 auto',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'rgba(244, 243, 232, 0.4)';
                  e.target.style.backgroundColor = 'rgba(244, 243, 232, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgba(244, 243, 232, 0.2)';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image with stats overlay */}
          <div
            ref={imageRef}
            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            style={{
              position: 'relative',
              transitionDelay: '200ms'
            }}
          >
            {/* Main image container */}
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4 / 5',
              borderRadius: '1.2rem',
              overflow: 'hidden',
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 4rem), calc(100% - 4rem) 100%, 0 100%, 0 0)'
            }}>
              <img
                src={serviceData.heroImage}
                alt={serviceData.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(19, 20, 14, 0.6) 0%, transparent 50%)'
              }}/>
            </div>

            {/* Quick stats overlay */}
            <div style={{
              position: 'absolute',
              bottom: isMobile ? '2rem' : '3rem',
              left: isMobile ? '2rem' : '3rem',
              right: isMobile ? '2rem' : '3rem',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? '1rem' : '1.6rem',
              justifyContent: 'space-between'
            }}>
              {Object.entries(serviceData.quickStats).map(([key, value], index) => (
                <div
                  key={key}
                  ref={el => statsRef.current[index] = el}
                  className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
                  style={{
                    flex: 1,
                    padding: isMobile ? '1.2rem' : '1.6rem',
                    backgroundColor: 'rgba(244, 243, 232, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '0.8rem',
                    transitionDelay: `${400 + index * 100}ms`
                  }}
                >
                  <div style={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: isMobile ? '0.85rem' : '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#13140e',
                    opacity: 0.6,
                    marginBottom: '0.4rem'
                  }}>
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  <div style={{
                    fontFamily: '"NB International Pro", sans-serif',
                    fontSize: isMobile ? '1.2rem' : '1.4rem',
                    fontWeight: 600,
                    color: '#13140e'
                  }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
