import React, { useEffect, useRef } from 'react';

// Data for the process steps
const processSteps = [
  {
    number: '01',
    title: 'Book Your Service',
    description: 'Schedule online or call us. Choose your preferred date and time that works for you.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    )
  },
  {
    number: '02',
    title: 'Drop Off Your Vehicle',
    description: 'Bring your car to our shop. Our team will greet you and confirm the service details.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
        <polygon points="12 15 17 21 7 21 12 15"></polygon>
      </svg>
    )
  },
  {
    number: '03',
    title: 'Expert Service',
    description: 'Our certified mechanics perform thorough diagnostics and quality repairs using genuine parts.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    )
  },
  {
    number: '04',
    title: 'Drive Away Happy',
    description: 'Pick up your vehicle running smoothly. We explain all work done and answer your questions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
      </svg>
    )
  }
];

const HowItWorks = () => {
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const stepsRef = useRef([]);

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
    if (descriptionRef.current) observer.observe(descriptionRef.current);

    stepsRef.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section style={{
      backgroundColor: '#13140e',
      color: '#f4f3e8',
      fontFamily: '"NB International Pro", sans-serif',
      padding: '12rem 0'
    }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 1.6rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
          <h2
            ref={headingRef}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{
              fontSize: 'clamp(3rem, 5vw, 6.4rem)',
              fontWeight: 400,
              letterSpacing: '-.03em',
              lineHeight: 1.06,
              marginBottom: '2rem'
            }}
          >
            How It Works
          </h2>
          <p
            ref={descriptionRef}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{
              fontSize: 'clamp(1.6rem, 2vw, 2rem)',
              fontWeight: 400,
              lineHeight: 1.5,
              maxWidth: '70ch',
              margin: '0 auto',
              color: '#b8b7ad',
              transitionDelay: '100ms'
            }}
          >
            Getting your vehicle serviced is simple and straightforward. Here's our proven process.
          </p>
        </div>

        {/* Steps Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem 3rem',
          position: 'relative'
        }}>
          {processSteps.map((step, index) => (
            <div
              key={index}
              ref={el => stepsRef.current[index] = el}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{
                transitionDelay: `${200 + index * 100}ms`,
                position: 'relative'
              }}
            >
              {/* Step Number - Large Background */}
              <div style={{
                fontSize: 'clamp(8rem, 12vw, 12rem)',
                fontFamily: '"JetBrains Mono", monospace',
                fontWeight: 700,
                color: 'rgba(244, 243, 232, 0.05)',
                lineHeight: 1,
                marginBottom: '-6rem',
                userSelect: 'none'
              }}>
                {step.number}
              </div>

              {/* Icon */}
              <div style={{
                width: '6rem',
                height: '6rem',
                backgroundColor: '#f4f3e8',
                color: '#13140e',
                borderRadius: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2.5rem',
                padding: '1.5rem',
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 1.5rem), calc(100% - 1.5rem) 100%, 0 100%, 0 0)'
              }}>
                {step.icon}
              </div>

              {/* Content */}
              <div>
                <h3 style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  marginBottom: '1.5rem',
                  letterSpacing: '0.02em'
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '1.6rem',
                  lineHeight: 1.6,
                  color: '#b8b7ad',
                  fontWeight: 300
                }}>
                  {step.description}
                </p>
              </div>

              {/* Connector Arrow - Only show between steps on larger screens */}
              {index < processSteps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  top: '12rem',
                  right: '-2rem',
                  fontSize: '3rem',
                  color: 'rgba(244, 243, 232, 0.15)',
                  display: 'none',
                  '@media (min-width: 1200px)': {
                    display: 'block'
                  }
                }}>
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: 'center', marginTop: '8rem' }}>
          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              height: '5.5rem',
              padding: '0 3rem',
              backgroundColor: '#f4f3e8',
              color: '#13140e',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '1.6rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: '0.4rem',
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 1.8rem), calc(100% - 1.8rem) 100%, 0 100%, 0 0)',
              transition: 'all 0.3s ease',
              letterSpacing: '0.05em'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 24px rgba(244, 243, 232, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
