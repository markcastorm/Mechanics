import React, { useState, useRef, useEffect } from 'react';
// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

// Data for the gallery slides with mechanic-themed images
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop',
    alt: 'Mechanic working under a car on a lift',
  },
  {
    src: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop',
    alt: 'Professional mechanic inspecting vehicle with diagnostic tools',
  },
  {
    src: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&h=600&fit=crop',
    alt: 'Team of mechanics collaborating in a workshop',
  },
  {
    src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
    alt: 'Detailed shot of an engine being serviced',
  },
  {
    src: 'https://images.unsplash.com/photo-1632823471565-1ecdf1c14f0e?w=800&h=600&fit=crop',
    alt: 'Mechanic performing a tire change',
  },
  {
    src: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&h=600&fit=crop',
    alt: 'Clean and modern workshop interior',
  },
];

const ArrowIcon = ({ direction = 'left' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ transform: direction === 'right' ? 'rotate(180deg)' : 'none' }}
  >
    <path d="M20.4691 12.0001C20.4691 12.1873 20.3947 12.3669 20.2623 12.4993C20.1299 12.6316 19.9504 12.706 19.7632 12.706H5.93761L11.0861 17.8537C11.1517 17.9192 11.2037 17.9971 11.2392 18.0828C11.2747 18.1685 11.293 18.2603 11.293 18.3531C11.293 18.4458 11.2747 18.5377 11.2392 18.6234C11.2037 18.709 11.1517 18.7869 11.0861 18.8525C11.0206 18.9181 10.9427 18.9701 10.857 19.0056C10.7713 19.0411 10.6795 19.0594 10.5867 19.0594C10.494 19.0594 10.4021 19.0411 10.3164 19.0056C10.2308 18.9701 10.1529 18.9181 10.0873 18.8525L3.73437 12.4995C3.66874 12.434 3.61667 12.3561 3.58115 12.2704C3.54563 12.1848 3.52734 12.0929 3.52734 12.0001C3.52734 11.9074 3.54563 11.8155 3.58115 11.7298C3.61667 11.6441 3.66874 11.5663 3.73437 11.5007L10.0873 5.14778C10.2198 5.01533 10.3994 4.94092 10.5867 4.94092C10.774 4.94092 10.9537 5.01533 11.0861 5.14778C11.2186 5.28023 11.293 5.45988 11.293 5.64719C11.293 5.83451 11.2186 6.01415 11.0861 6.1466L5.93761 11.2943H19.7632C19.9504 11.2943 20.1299 11.3686 20.2623 11.501C20.3947 11.6334 20.4691 11.8129 20.4691 12.0001Z" />
  </svg>
);

const Gallery = () => {
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef(null);
  const headingRef = useRef(null);
  const swiperContainerRef = useRef(null);
  const controlsRef = useRef(null);

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
    if (swiperContainerRef.current) observer.observe(swiperContainerRef.current);
    if (controlsRef.current) observer.observe(controlsRef.current);

    return () => observer.disconnect();
  }, []);

  const handleSlideChange = (swiper) => {
    // Total slides is the number of images minus the number of slides you can see at once, plus one.
    const slidesPerView = swiper.params.slidesPerView;
    const totalSlides = swiper.slides.length - slidesPerView + 1;
    const currentProgress = swiper.realIndex / (totalSlides - 1);
    setProgress(Math.max(0, Math.min(1, currentProgress)));
  };

  return (
    <section 
      style={{ 
        backgroundColor: '#1a1a1a', 
        color: '#f5f5f5', 
        padding: '8rem 0',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
      }}
    >
      <div style={{ maxWidth: '1424px', margin: '0 auto', padding: '0 2rem' }}>
        {/* --- Header --- */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2
            ref={headingRef}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '600' }}
          >
            Life at the Shop
          </h2>
        </div>

        {/* --- Swiper Component --- */}
        <div
          ref={swiperContainerRef}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
          style={{ transitionDelay: '100ms' }}
        >
        <Swiper
          ref={swiperRef}
          spaceBetween={40}
          slidesPerView={2}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 1.5, spaceBetween: 30 },
            1024: { slidesPerView: 2, spaceBetween: 40 },
          }}
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div style={{
                position: 'relative',
                width: '100%',
                height: 0,
                paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#2a2a2a' /* Placeholder color */
              }}>
                <img src={image.src} alt={image.alt} style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>

        {/* --- Custom Controls --- */}
        <div
          ref={controlsRef}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
          style={{ display: 'flex', alignItems: 'center', marginTop: '3rem', gap: '2rem', transitionDelay: '200ms' }}
        >
          {/* Progress Bar */}
          <div style={{ flexGrow: 1, height: '3px', backgroundColor: 'rgba(207, 207, 207, 0.5)', borderRadius: '99px', position: 'relative' }}>
            <div style={{
              position: 'absolute',
              height: '100%',
              backgroundColor: '#ffd700',
              width: `${progress * 100}%`,
              borderRadius: '99px',
              transition: 'width 0.3s ease'
            }}/>
          </div>
          {/* Buttons */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#ffd700',
                color: '#1a1a1a',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px',
              }}
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#ffd700',
                color: '#1a1a1a',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px',
              }}
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;