import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// Data for 10 mechanic services. Easily customizable.
const servicesData = [
  { title: "Engine Diagnostics", slug: "engine-diagnostics", description: "Using state-of-the-art equipment to pinpoint engine issues with precision, from check engine lights to performance problems.", imageUrl: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80", buttonText: "Learn More" },
  { title: "Brake Service & Repair", slug: "brake-service", description: "Comprehensive brake inspections, repairs, and replacements for pads, rotors, and fluid, ensuring your vehicle's most critical safety system is reliable.", imageUrl: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=800&q=80", buttonText: "Book a Brake Check" },
  { title: "Tire & Suspension", slug: "tire-suspension", description: "From rotation and balancing to alignment and replacement, we ensure optimal road contact for safety, performance, and longevity.", imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", buttonText: "Explore Tire Options" },
  { title: "Oil & Fluid Maintenance", slug: "oil-fluid-maintenance", description: "Regular oil changes are vital. We use premium oils and filters to keep your engine running smoothly and extend its lifespan.", imageUrl: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=800&q=80", buttonText: "Schedule Maintenance" },
  { title: "Transmission Services", slug: "transmission-services", description: "Our experts handle automatic and manual transmission repairs, fluid changes, and full rebuilds for smooth, reliable gear shifting.", imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80", buttonText: "Get a Quote" },
  { title: "Steering & Suspension", slug: "steering-suspension", description: "Restoring your vehicle's handling by servicing shocks, struts, and steering components for a smooth, controlled driving experience.", imageUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80", buttonText: "Learn More" },
  { title: "AC & Heating Repair", slug: "ac-heating-repair", description: "Stay comfortable in any weather. We diagnose and repair automotive climate control systems, from recharges to compressors.", imageUrl: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80", buttonText: "Book an AC Check" },
  { title: "Electrical Systems", slug: "electrical-systems", description: "Our technicians are skilled in diagnosing complex electrical issues, from battery and alternator problems to faulty wiring and sensors.", imageUrl: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80", buttonText: "Get Diagnostics" },
  { title: "Exhaust System Repair", slug: "exhaust-system", description: "Ensuring your vehicle meets emission standards and runs quietly by repairing or replacing mufflers, catalytic converters, and pipes.", imageUrl: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80", buttonText: "Learn More" },
  { title: "Pre-Purchase Inspection", slug: "pre-purchase-inspection", description: "Make a confident used car purchase. Our comprehensive inspection covers the engine, body, and chassis to uncover hidden issues.", imageUrl: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80", buttonText: "Book an Inspection" },
];

// Encoded SVG masks from the design
const masks = [
  "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 776 830'%3E%3Cpath fill='currentcolor' d='M74.205 10c0-5.523 4.477-10 10-10H766c5.523 0 10 4.477 10 10v732.301c0 5.523-4.477 10-10 10H583.928c-1.274 0-2.536.244-3.718.717l-190.42 76.265a10 10 0 0 1-3.718.717H10c-5.523 0-10-4.477-10-10V351.276a10 10 0 0 1 2.862-7.004l68.48-69.787a10 10 0 0 0 2.863-7.004z'/%3E%3C/svg%3E\")",
  "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 776 830'%3E%3Cpath fill='currentcolor' d='M0 76.516c0-5.523 4.477-10 10-10h273.037c1.91 0 3.779-.547 5.387-1.575l99.113-63.366A10 10 0 0 1 392.923 0H766c5.523 0 10 4.477 10 10v606.048a10 10 0 0 1-2.702 6.836L665.93 737.511l-79.949 89.165a10 10 0 0 1-7.446 3.324H10c-5.523 0-10-4.477-10-10z'/%3E%3C/svg%3E\")",
  "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 776 830'%3E%3Cpath fill='currentcolor' d='M701.03 10c0-5.523-4.477-10-10-10H10C4.477 0 0 4.477 0 10v731.46c0 5.523 4.477 10 10 10h176.071c1.274 0 2.537.243 3.72.717l192.418 77.105c1.183.474 2.446.718 3.72.718H766c5.523 0 10-4.477 10-10V346.045a10 10 0 0 0-2.861-7.002l-69.248-70.606a10 10 0 0 1-2.861-7.002z'/%3E%3C/svg%3E\")",
];

const ServiceItem = ({ service, index, itemRef, navigate }) => {
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={itemRef}
      className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        gap: '2rem',
        marginTop: index > 0 ? '11rem' : 0,
      }}
    >
      {/* --- Content Block --- */}
      <div style={{ order: isReversed ? 2 : 1, justifySelf: isReversed ? 'start' : 'end', width: '38rem', paddingLeft: isReversed ? '5rem' : '0' }}>
        <h3 style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '2rem', fontWeight: 300, textTransform: 'uppercase', marginBottom: '2rem' }}>
          {service.title}
        </h3>
        <p style={{ fontFamily: '"NB International Pro", sans-serif', fontSize: '2rem', fontWeight: 400, lineHeight: 1.25, marginBottom: '2.3rem' }}>
          {service.description}
        </p>
        <button
          onClick={() => navigate(`/services/${service.slug}`)}
          style={{
            display: 'inline-flex', alignItems: 'center', height: '4.5rem', padding: '0 2rem',
            backgroundColor: '#13140e', color: '#f4f3e8', fontFamily: '"JetBrains Mono", monospace',
            fontSize: '1.4rem', fontWeight: 300, textTransform: 'uppercase', textDecoration: 'none',
            borderRadius: '0.4rem', clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 1.5rem), calc(100% - 1.5rem) 100%, 0 100%, 0 0)',
            transition: 'all 0.3s ease', border: 'none', cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 4px 12px rgba(19, 20, 14, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          {service.buttonText}
        </button>
      </div>

      {/* --- Image Asset Block --- */}
      <div style={{ order: isReversed ? 1 : 2, width: '100%', position: 'relative', aspectRatio: '776 / 830' }}>
        <div style={{
          width: '100%', height: '100%',
          maskImage: masks[index % masks.length], WebkitMaskImage: masks[index % masks.length],
          maskSize: 'contain', WebkitMaskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskPosition: 'center',
        }}>
          <img src={service.imageUrl} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
        </div>
      </div>
    </div>
  );
};

const ServicesContent = () => {
  const navigate = useNavigate();
  const headingRef = useRef(null);
  const itemsRef = useRef([]);

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

    itemsRef.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ backgroundColor: '#f4f3e8', color: '#13140e', fontFamily: '"NB International Pro", sans-serif', overflowX: 'hidden' }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 1.6rem 14rem' }}>
        <h2
          ref={headingRef}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
          style={{
            fontSize: 'clamp(3rem, 5vw, 6.4rem)', fontWeight: 400, letterSpacing: '-.03em',
            lineHeight: 1.06, padding: '14rem 0 7rem', width: '67rem', maxWidth: '100%'
          }}
        >
          Our Expert Services Meet Your Needs
        </h2>

        <div>
          {servicesData.map((service, index) => (
            <ServiceItem
              key={index}
              service={service}
              index={index}
              itemRef={el => itemsRef.current[index] = el}
              navigate={navigate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesContent;