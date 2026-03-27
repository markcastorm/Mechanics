import React, { useEffect, useRef } from 'react';

const CTA = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const featuresRef = useRef([]);
  const buttonContainerRef = useRef(null);
  const contactCardsRef = useRef([]);

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
    if (subheadingRef.current) observer.observe(subheadingRef.current);
    if (buttonContainerRef.current) observer.observe(buttonContainerRef.current);

    featuresRef.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    contactCardsRef.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const trustFeatures = [
    'ASE-Certified Mechanics',
    'Genuine OEM Parts',
    'Comprehensive Warranty',
    'Transparent Pricing'
  ];

  const contactInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: 'Call Us',
      value: '+254 768 425820',
      link: 'tel:+254768425820'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      title: 'Email Us',
      value: 'info@shahautomotives.co.ke',
      link: 'mailto:info@shahautomotives.co.ke'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: 'Visit Us',
      value: 'South B, Nairobi',
      link: '/contact'
    }
  ];

  return (
    <section style={{
      backgroundColor: '#f4f3e8',
      color: '#13140e',
      fontFamily: '"NB International Pro", sans-serif',
      padding: '14rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '30rem',
        height: '30rem',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(19, 20, 14, 0.03) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '-10%',
        width: '40rem',
        height: '40rem',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(19, 20, 14, 0.02) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 1.6rem', position: 'relative', zIndex: 1 }}>
        {/* Main Heading */}
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2
            ref={headingRef}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{
              fontSize: 'clamp(4rem, 7vw, 8rem)',
              fontWeight: 400,
              letterSpacing: '-.04em',
              lineHeight: 1,
              marginBottom: '3rem'
            }}
          >
            Ready to Get Started?
          </h2>
          <p
            ref={subheadingRef}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{
              fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
              fontWeight: 300,
              lineHeight: 1.4,
              maxWidth: '80ch',
              margin: '0 auto',
              color: '#5a5b52',
              transitionDelay: '100ms'
            }}
          >
            Schedule your service today and experience the Shah Automotives difference.
            <br />Professional care, transparent pricing, and results you can trust.
          </p>
        </div>

        {/* Trust Features */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          flexWrap: 'wrap',
          marginBottom: '6rem'
        }}>
          {trustFeatures.map((feature, index) => (
            <div
              key={index}
              ref={el => featuresRef.current[index] = el}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transitionDelay: `${200 + index * 50}ms`
              }}
            >
              <div style={{
                width: '0.8rem',
                height: '0.8rem',
                backgroundColor: '#13140e',
                borderRadius: '50%'
              }} />
              <span style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '1.4rem',
                fontWeight: 400,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          ref={buttonContainerRef}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '10rem',
            flexWrap: 'wrap',
            transitionDelay: '400ms'
          }}
        >
          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '6rem',
              padding: '0 4rem',
              backgroundColor: '#13140e',
              color: '#f4f3e8',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '1.6rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: '0.4rem',
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 2rem), calc(100% - 2rem) 100%, 0 100%, 0 0)',
              transition: 'all 0.3s ease',
              letterSpacing: '0.1em',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 10px 30px rgba(19, 20, 14, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Book Service Now
          </a>
          <a
            href="tel:+254768425820"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '6rem',
              padding: '0 4rem',
              backgroundColor: 'transparent',
              color: '#13140e',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '1.6rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: '0.4rem',
              border: '2px solid #13140e',
              transition: 'all 0.3s ease',
              letterSpacing: '0.1em'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#13140e';
              e.target.style.color = '#f4f3e8';
              e.target.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = '#13140e';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Call Us Now
          </a>
        </div>

        {/* Contact Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              ref={el => contactCardsRef.current[index] = el}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{
                transitionDelay: `${500 + index * 100}ms`,
                backgroundColor: '#13140e',
                color: '#f4f3e8',
                padding: '3rem 2.5rem',
                borderRadius: '0.8rem',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '1.5rem',
                transition: 'all 0.3s ease',
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 2rem), calc(100% - 2rem) 100%, 0 100%, 0 0)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(19, 20, 14, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '5rem',
                height: '5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f4f3e8',
                color: '#13140e',
                borderRadius: '50%',
                padding: '1.2rem'
              }}>
                {contact.icon}
              </div>
              <div>
                <div style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '1.2rem',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  marginBottom: '0.8rem',
                  color: '#b8b7ad'
                }}>
                  {contact.title}
                </div>
                <div style={{
                  fontSize: '1.6rem',
                  fontWeight: 400,
                  lineHeight: 1.4
                }}>
                  {contact.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
