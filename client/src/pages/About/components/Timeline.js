import React, { useState, useEffect, useRef } from 'react';

// Data for the timeline events. Easy to update.
const timelineData = [
  {
    year: '2018',
    description: 'Shah Automotives is founded in Nairobi by a team of certified automotive professionals with a shared mission deliver workshop-grade expertise with uncompromising honesty.',
  },
  {
    year: '2019',
    description: 'Grew our specialist team and invested in advanced diagnostic technology, enabling precise multi-brand diagnostics and faster turnaround times for our clients.',
  },
  {
    year: '2020',
    description: 'Navigated industry challenges while maintaining full operations. Introduced contactless vehicle drop-off, remote diagnostics consultations, and flexible service scheduling.',
  },
  {
    year: '2021',
    description: 'Achieved ASE certification across our senior technical team and launched our comprehensive service warranty program raising the bar for quality in Nairobi.',
  },
  {
    year: '2022',
    description: 'Expanded our South B facility to a full-scale service center with dedicated bays for mechanical, electrical, and bodywork all under one roof.',
  },
  {
    year: '2023',
    description: 'Launched eco-responsible workshop practices including certified waste disposal, parts recycling, and energy-efficient equipment upgrades across the facility.',
  },
  {
    year: '2024',
    description: 'Expanded capabilities to cover hybrid and electric vehicle maintenance, positioning Shah Automotives at the forefront of next-generation automotive servicing in Kenya.',
  },
  {
    year: '2025',
    description: 'Introduced online booking, real-time service tracking, and a dedicated customer portal — making professional car care more accessible and transparent than ever.',
  },
];

const Timeline = () => {
  const [progress, setProgress] = useState(0);
  const timelineRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    // Scroll animation observer
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

    itemsRef.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    // Progress bar scroll handler
    const handleScroll = () => {
      if (timelineRef.current) {
        const { top, height } = timelineRef.current.getBoundingClientRect();
        const screenHeight = window.innerHeight;
        
        // Calculate the visible portion of the timeline, adding a small offset so it starts filling sooner
        const start = screenHeight - top - 100; // Start filling 100px before it enters the viewport
        const totalVisible = start > 0 ? (start / (height - 200)) * 100 : 0; // Adjust total height for offset
        
        setProgress(Math.min(100, Math.max(0, totalVisible)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
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
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2
            ref={headingRef}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '600', marginBottom: '1rem', maxWidth: '30ch', margin: '0 auto' }}
          >
            Built by professionals. Driven by precision.
          </h2>
          <p
            ref={descriptionRef}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{ fontSize: '1.125rem', color: '#b0b0b0', maxWidth: '60ch', margin: '1rem auto 0', transitionDelay: '100ms' }}
          >
            From day one, Shah Automotives was built on certified expertise not shortcuts. Here's how seven years of relentless standards have shaped who we are today.
          </p>
        </div>

        {/* --- Timeline --- */}
        <div ref={timelineRef} style={{ position: 'relative' }}>
          {/* --- The Lines --- */}
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '3px', backgroundColor: '#3a3a3a', transform: 'translateX(-50%)' }} />
          <div 
            style={{ 
              position: 'absolute', 
              left: '50%', 
              top: 0, 
              width: '3px', 
              backgroundColor: '#4be0b5', 
              transform: 'translateX(-50%)',
              height: `${progress}%`,
              transition: 'height 0.1s linear'
            }} 
          />
          
          {/* --- Timeline Items --- */}
          <div>
            {timelineData.map((item, index) => (
              <div
                key={index}
                ref={el => itemsRef.current[index] = el}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
                style={{
                transitionDelay: `${200 + index * 100}ms`,
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',
                gap: '2.5rem',
                alignItems: 'start',
                marginBottom: index === timelineData.length - 1 ? '0' : '4rem',
              }}>
                {/* --- Left Content --- */}
                {index % 2 !== 0 ? (
                  <div style={{ textAlign: 'right' }}>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '0.75rem' }}>{item.year}</h3>
                    <p style={{ color: '#b0b0b0', lineHeight: '1.6', fontSize: '1rem' }}>{item.description}</p>
                  </div>
                ) : <div />}

                {/* --- Center Node --- */}
                <div style={{ position: 'relative', top: '0.3rem', zIndex: 1 }}>
                  <div style={{ width: '15px', height: '15px', backgroundColor: '#222', border: '3px solid #4be0b5', borderRadius: '50%' }} />
                </div>
                
                {/* --- Right Content --- */}
                {index % 2 === 0 ? (
                  <div style={{ textAlign: 'left' }}>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '0.75rem' }}>{item.year}</h3>
                    <p style={{ color: '#b0b0b0', lineHeight: '1.6', fontSize: '1rem' }}>{item.description}</p>
                  </div>
                ) : <div />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;