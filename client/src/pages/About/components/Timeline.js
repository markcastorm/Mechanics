import React, { useState, useEffect, useRef } from 'react';

// Data for the timeline events. Easy to update.
const timelineData = [
  {
    year: '1995',
    description: 'Shah Automotives opens its doors in Nairobi, starting as a small family-run garage with a vision to provide honest and reliable automotive service.',
  },
  {
    year: '2005',
    description: 'Expanded our facility and team, adding advanced diagnostic equipment and specialized training programs for our growing team of mechanics.',
  },
  {
    year: '2012',
    description: 'Achieved ASE certification for all senior mechanics and introduced our comprehensive warranty program, setting new standards for quality in the region.',
  },
  {
    year: '2018',
    description: 'Opened our state-of-the-art service center with 12 bays, modern equipment, and a comfortable customer lounge. Introduced online booking system.',
  },
  {
    year: '2021',
    description: 'Launched our eco-friendly initiatives including proper waste disposal, parts recycling program, and investment in energy-efficient workshop equipment.',
  },
  {
    year: '2024',
    description: 'Expanded services to include electric vehicle maintenance and diagnostics, staying ahead with the latest automotive technology trends.',
  },
  {
    year: '2025+',
    description: 'Continuing our commitment to excellence with ongoing training, community partnerships, and plans to open a second location to serve more customers across Nairobi.',
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
            Three decades of automotive excellence
          </h2>
          <p
            ref={descriptionRef}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{ fontSize: '1.125rem', color: '#b0b0b0', maxWidth: '60ch', margin: '1rem auto 0', transitionDelay: '100ms' }}
          >
            From a small family garage to Nairobi's trusted automotive service center, we've grown with dedication and expertise.
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