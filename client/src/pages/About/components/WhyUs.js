import React, { useEffect, useRef } from 'react';

// --- Placeholder Icon Components for Mechanic Benefits ---
const WrenchIcon = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6.1 6.1 9 1.6 4.5C.5 7-.1 10 2 12c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l3.3-3.3c.4-.4.4-1 0-1.4z"></path></svg>;
const ShieldIcon = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"></path></svg>;
const TagIcon = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"></path></svg>;
const CoffeeIcon = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"></path></svg>;
const CheckIcon = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>;
const ClockIcon = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>;

// Data for the benefits grid
const benefitsData = [
    {
        Icon: WrenchIcon,
        title: 'Expert Technicians',
        description: 'Our ASE-certified mechanics have the expertise to handle any repair, big or small.',
    },
    {
        Icon: CheckIcon,
        title: 'Genuine OEM Parts',
        description: 'We use only high-quality, original equipment manufacturer (OEM) parts for lasting repairs.',
    },
    {
        Icon: TagIcon,
        title: 'Transparent Pricing',
        description: 'Receive a clear, upfront quote before any work begins. No hidden fees, ever.',
    },
    {
        Icon: CoffeeIcon,
        title: 'Comfortable Waiting Lounge',
        description: 'Enjoy complimentary Wi-Fi, coffee, and a clean waiting area while we service your vehicle.',
    },
    {
        Icon: ShieldIcon,
        title: 'Warranty on All Repairs',
        description: 'We stand by our work with a comprehensive warranty on all parts and labor.',
    },
    {
        Icon: ClockIcon,
        title: 'Fast Turnaround Time',
        description: 'We pride ourselves on efficient service to get you back on the road as quickly as possible.',
    },
];

const WhyUs = () => {
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const benefitsRef = useRef([]);

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
    if (buttonRef.current) observer.observe(buttonRef.current);

    benefitsRef.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      style={{ 
        backgroundColor: '#222', 
        color: '#f5f5f5', 
        padding: '8rem 0',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      }}
    >
      <div style={{ maxWidth: '1424px', margin: '0 auto', padding: '0 4rem' }}>
        {/* --- Header --- */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem' }}>
          <div>
            <h2
              ref={headingRef}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '600', marginBottom: '1.5rem', maxWidth: '30ch' }}
            >
              Why Choose Our Shop?
            </h2>
            <p
              ref={descriptionRef}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{ fontSize: '1.125rem', color: '#b0b0b0', maxWidth: '60ch', lineHeight: '1.6', transitionDelay: '100ms' }}
            >
              We're a business where people come first. We invest in top-tier equipment and continuous training to build a workplace you can truly trust.
            </p>
          </div>
          <button
            ref={buttonRef}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{
              transitionDelay: '200ms',
            backgroundColor: '#ffd700',
            color: '#1a1a1a',
            border: 'none',
            borderRadius: '9999px',
            padding: '1rem 2rem',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            flexShrink: 0,
            transition: 'background-color 0.3s'
          }}>
            Get an Estimate
          </button>
        </div>

        {/* --- Benefits Grid --- */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem 2rem'
        }}>
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              ref={el => benefitsRef.current[index] = el}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  backgroundColor: 'rgba(75, 224, 181, 0.1)',
                  color: '#4be0b5',
                  borderRadius: '8px',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <div style={{ width: '20px', height: '20px' }}>
                    <benefit.Icon />
                  </div>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>{benefit.title}</h3>
              </div>
              <p style={{ color: '#b0b0b0', lineHeight: '1.6', fontSize: '1rem' }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;