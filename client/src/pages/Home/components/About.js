import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const featureRefs = useRef([]);

  // --- NEW: Refs and State for the Marquee ---
  const scrollContainerRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef(null);

  // 1. Existing Intersection Observer (Animate text on scroll)
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
    featureRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // 2. NEW: The Infinite Scroll & Drag Logic
  useEffect(() => {
    const scroller = scrollContainerRef.current;
    
    const animate = () => {
      // Only auto-scroll if not hovering and not dragging
      if (scroller && !isPaused && !isDown) {
        scroller.scrollLeft += 0.8; // Speed control
        
        // Infinite Loop Logic
        if (scroller.scrollLeft >= scroller.scrollWidth / 2) {
          scroller.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, [isPaused, isDown]);

  // Mouse Events for Dragging
  const handleMouseDown = (e) => {
    setIsDown(true);
    setIsPaused(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    setIsPaused(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
    setIsPaused(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // * 2 makes dragging faster/smoother
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Navigate to service page
  const handleCardClick = (slug) => {
    if (!isDown) {
      navigate(`/services/${slug}`);
    }
  };

  // Service showcase data
  const services = [
    {
      title: 'Oil Change',
      subtitle: 'Full Synthetic',
      description: 'Premium synthetic oil keeps your engine running smoothly and extends its lifespan.',
      image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&h=800&fit=crop',
      slug: 'oil-fluid-maintenance'
    },
    {
      title: 'Brake Service',
      subtitle: 'Complete System',
      description: 'Expert brake inspection, pad replacement, and rotor resurfacing for optimal safety.',
      image: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=600&h=800&fit=crop',
      slug: 'brake-service'
    },
    {
      title: 'Engine Diagnostics',
      subtitle: 'Computer Analysis',
      description: 'Advanced diagnostic tools identify issues before they become major problems.',
      image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=600&h=800&fit=crop',
      slug: 'engine-diagnostics'
    },
    {
      title: 'Tire Service',
      subtitle: 'Balance & Alignment',
      description: 'Proper tire care ensures better fuel economy and safer handling on the road.',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&h=800&fit=crop',
      slug: 'tire-suspension'
    },
    {
      title: 'AC Repair',
      subtitle: 'Climate Control',
      description: 'Stay comfortable year-round with professional AC service and refrigerant recharge.',
      image: 'https://images.unsplash.com/photo-1621961223833-5f80f6de2001?w=600&h=800&fit=crop',
      slug: 'ac-heating-repair'
    },
    {
      title: 'Transmission',
      subtitle: 'Fluid & Repair',
      description: 'Expert transmission service to keep your vehicle shifting smoothly and reliably.',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=800&fit=crop',
      slug: 'transmission-services'
    },
    {
      title: 'Battery Service',
      subtitle: 'Test & Replace',
      description: 'Professional battery testing and replacement to ensure reliable starts every time.',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=800&fit=crop',
      slug: 'electrical-systems'
    },
    {
      title: 'Suspension',
      subtitle: 'Shocks & Struts',
      description: 'Complete suspension inspection and repair for a smooth, comfortable ride.',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=800&fit=crop',
      slug: 'steering-suspension'
    },
  ];

  // Why choose us features
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Fast & Reliable Service',
      description: 'Most repairs completed same day — no unnecessary delays, just expert work done right.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Certified Technicians',
      description: 'ASE-certified mechanics with years of experience on all makes and models.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Honest Pricing',
      description: 'Transparent quotes with no hidden fees — you only pay for what you need.'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Warranty Guaranteed',
      description: 'All work backed by our comprehensive warranty for your peace of mind.'
    }
  ];

  return (
    <section className="relative bg-[#f1f1f1] text-[#1f1f1f] overflow-hidden">
      {/* Top Section - Header */}
      <div className="max-w-[1856px] mx-auto px-6" style={{ paddingTop: '52px', paddingBottom: '52px' }}>
        <div className="flex items-start gap-6 mb-12">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-[#FF5C39] flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <div className="text-sm uppercase tracking-wider text-gray-600 mb-4">
              Why Choose Us
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="max-w-6xl mb-8">
          <h2 ref={headingRef} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight opacity-0 translate-y-8 transition-all duration-700 ease-out">
            Expert Auto Care — For Every Vehicle, Every Time.
          </h2>
        </div>

        {/* Read More Button */}
        <a
          href="/about"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF5C39] hover:bg-[#ff7050] text-white font-medium text-base rounded-full transition-all duration-300 group mb-16"
        >
          <span>Read More</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            className="group-hover:translate-x-1 transition-transform duration-300"
          >
            <path
              d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 8L0 9H16V8V7L0 7L0 8Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>

      {/* Middle Section - Scrolling Service Cards (Interactive) */}
      <div className="relative mb-20 w-full">
        {/* Container for the scroll area */}
        <div 
          ref={scrollContainerRef}
          className={`flex overflow-x-auto gap-4 no-scrollbar ${isDown ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            userSelect: 'none' // Prevent text selection while dragging
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsPaused(true)}
        >
          {/* First set of cards */}
          {services.map((service, index) => (
            <div
              key={`service-1-${index}`}
              onClick={() => handleCardClick(service.slug)}
              onDragStart={(e) => e.preventDefault()}
              className="flex-shrink-0 rounded-lg overflow-hidden relative cursor-pointer"
              style={{ width: '614.4px', height: '806.4px' }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="absolute inset-0 bg-black/20 z-[5]" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Overlay */}
              <div className="relative z-[15] flex flex-col justify-start items-stretch w-full h-full p-5 pb-6 pointer-events-none">
                {/* Top Section with Border */}
                <div className="flex justify-start border-b border-white/[0.55]">
                  {/* Left: Number & Unit */}
                  <div className="flex gap-1.5 text-white pt-4 pb-1.5 pr-4">
                    <div className="text-[4.5em] font-medium leading-none tracking-[-0.03em]">
                      {index + 1}
                    </div>
                    <div className="text-[1.05em]">service</div>
                  </div>

                  {/* Right: Title & Subtitle */}
                  <div className="flex justify-between items-start w-full pt-4 pl-4 border-l border-white/[0.55]">
                    <div>
                      <div className="text-white text-xl font-medium mb-1">{service.title}</div>
                      <div className="text-white/80 text-sm">{service.subtitle}</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Description */}
                <div className="text-white mt-auto w-[43ch] text-[0.95em]">
                  <div className="text-[1.05em] leading-[1.3] tracking-[0.02em] whitespace-normal">
                    {service.description}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {services.map((service, index) => (
            <div
              key={`service-2-${index}`}
              onClick={() => handleCardClick(service.slug)}
              onDragStart={(e) => e.preventDefault()}
              className="flex-shrink-0 rounded-lg overflow-hidden relative cursor-pointer"
              style={{ width: '614.4px', height: '806.4px' }}
            >
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="absolute inset-0 bg-black/20 z-[5]" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-[15] flex flex-col justify-start items-stretch w-full h-full p-5 pb-6 pointer-events-none">
                <div className="flex justify-start border-b border-white/[0.55]">
                  <div className="flex gap-1.5 text-white pt-4 pb-1.5 pr-4">
                    <div className="text-[4.5em] font-medium leading-none tracking-[-0.03em]">
                      {index + 1}
                    </div>
                    <div className="text-[1.05em]">service</div>
                  </div>

                  <div className="flex justify-between items-start w-full pt-4 pl-4 border-l border-white/[0.55]">
                    <div>
                      <div className="text-white text-xl font-medium mb-1">{service.title}</div>
                      <div className="text-white/80 text-sm">{service.subtitle}</div>
                    </div>
                  </div>
                </div>

                <div className="text-white mt-auto w-[43ch] text-[0.95em]">
                  <div className="text-[1.05em] leading-[1.3] tracking-[0.02em] whitespace-normal">
                    {service.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section - Subheading + Features Grid */}
      <div className="px-8" style={{ paddingTop: '52px', paddingBottom: '52px' }}>
        {/* Subheading */}
        <div className="mb-16">
          <h3 ref={subheadingRef} className="text-[4em] font-medium leading-tight tracking-[-0.03em] opacity-0 translate-y-8 transition-all duration-700 ease-out">
            Every Vehicle. Every Service.<br />
            Expert Care, Trusted Results.
          </h3>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-4 gap-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-stretch h-auto border-t border-r border-dashed border-[#1f1f1f33] p-6"
              style={{ paddingTop: '24px', paddingBottom: '24px', paddingLeft: '32px', paddingRight: '32px' }}
            >
              {/* Icon */}
              <div className="w-[62px] h-[62px] flex items-center justify-center text-[#1f1f1f]">
                {feature.icon}
              </div>

              {/* Content */}
              <div
                ref={el => featureRefs.current[index] = el}
                className="flex flex-col gap-2 mt-[8em] mb-auto opacity-0 translate-y-8 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h4 className="text-[1.4em] font-medium">{feature.title}</h4>
                <p className="text-[0.95em] font-medium leading-[1.35] tracking-[0.01em] mb-0">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;