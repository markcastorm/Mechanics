import { useEffect, useRef } from 'react';

const Hero = () => {
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const cardsRef = useRef([]);
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

    cardsRef.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>
        {`
          @media (max-width: 1600px) {
            .contact-hero-section {
              padding: 8rem 2rem 4rem !important;
            }
            .contact-hero-container {
              max-width: 1200px !important;
              height: auto !important;
              gap: 3rem !important;
            }
            .contact-hero-image-container {
              width: 540px !important;
              height: 567px !important;
            }
          }

          @media (max-width: 1200px) {
            .contact-hero-section {
              padding: 7rem 1.5rem 3rem !important;
            }
            .contact-hero-container {
              grid-template-columns: 1fr !important;
              gap: 2.5rem !important;
            }
            .contact-hero-text-content {
              max-width: 100% !important;
            }
            .contact-hero-image-wrapper {
              justify-content: center !important;
            }
            .contact-hero-image-container {
              width: 100% !important;
              max-width: 640px !important;
              height: auto !important;
              aspect-ratio: 640 / 672 !important;
            }
          }

          @media (max-width: 768px) {
            .contact-hero-section {
              padding: 6rem 1rem 2rem !important;
            }
            .contact-hero-container {
              gap: 2rem !important;
            }
            .contact-hero-heading {
              font-size: clamp(2rem, 8vw, 2.5rem) !important;
            }
            .contact-hero-paragraph {
              font-size: 1rem !important;
            }
            .contact-info-grid {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }
          }
        `}
      </style>
      <section
        className="contact-hero-section"
        style={{
          backgroundColor: '#1a1a1a',
          color: '#f5f5f5',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          padding: '10rem 240.5px 6rem',
          position: 'relative'
        }}
      >
        <div
          className="contact-hero-container"
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
          <div className="contact-hero-text-content" style={{ maxWidth: '600px' }}>
            <div
              ref={badgeRef}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1rem 0.6rem',
                backgroundColor: '#fafafa',
                color: '#FF5C39',
                border: '1px solid rgba(255, 92, 57, 0.2)',
                borderRadius: '9999px',
                marginBottom: '1.5rem',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              Contact Us
            </div>
            <h1
              ref={headingRef}
              className="contact-hero-heading opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{
                transitionDelay: '100ms',
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: '600',
                lineHeight: '1.1',
                marginBottom: '1.5rem',
                maxWidth: '20ch'
              }}
            >
              Get in touch with our expert team
            </h1>
            <p
              ref={paragraphRef}
              className="contact-hero-paragraph opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{
                transitionDelay: '200ms',
                fontSize: '1.125rem',
                lineHeight: '1.6',
                maxWidth: '50ch',
                color: '#b0b0b0',
                marginBottom: '2.5rem'
              }}
            >
              Whether you need a routine service, emergency repair, or just have questions about your vehicle, we're here to help. Reach out today for honest advice and quality service.
            </p>

            {/* Contact Info Cards */}
            <div
              className="contact-info-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.5rem',
                marginTop: '2rem'
              }}
            >
              {/* Phone Card */}
              <div
                ref={el => cardsRef.current[0] = el}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
                style={{
                  transitionDelay: '300ms',
                  backgroundColor: '#2a2a2a',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid #3a3a3a'
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'rgba(255, 92, 57, 0.1)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
                      fill="#FF5C39"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    color: '#f5f5f5'
                  }}
                >
                  Call Us
                </h3>
                <a
                  href="tel:+254712345678"
                  style={{
                    fontSize: '1rem',
                    color: '#b0b0b0',
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#FF5C39'}
                  onMouseLeave={(e) => e.target.style.color = '#b0b0b0'}
                >
                  +254 712 345 678
                </a>
              </div>

              {/* Email Card */}
              <div
                ref={el => cardsRef.current[1] = el}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
                style={{
                  transitionDelay: '400ms',
                  backgroundColor: '#2a2a2a',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid #3a3a3a'
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'rgba(255, 92, 57, 0.1)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                      fill="#FF5C39"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    color: '#f5f5f5'
                  }}
                >
                  Email Us
                </h3>
                <a
                  href="mailto:info@shahautomotives.com"
                  style={{
                    fontSize: '1rem',
                    color: '#b0b0b0',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                    wordBreak: 'break-all'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#FF5C39'}
                  onMouseLeave={(e) => e.target.style.color = '#b0b0b0'}
                >
                  info@shahautomotives.com
                </a>
              </div>

              {/* Location Card */}
              <div
                ref={el => cardsRef.current[2] = el}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
                style={{
                  transitionDelay: '500ms',
                  backgroundColor: '#2a2a2a',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid #3a3a3a',
                  gridColumn: 'span 2'
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'rgba(255, 92, 57, 0.1)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                      fill="#FF5C39"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    color: '#f5f5f5'
                  }}
                >
                  Visit Our Workshop
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: '#b0b0b0',
                    lineHeight: '1.6'
                  }}
                >
                  123 Industrial Area Road, Nairobi, Kenya<br />
                  Mon - Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div
            ref={imageRef}
            className="contact-hero-image-wrapper opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{
              transitionDelay: '600ms',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <div
              className="contact-hero-image-container"
              style={{
                width: '640px',
                height: '672px',
                borderRadius: '16px',
                overflow: 'hidden'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=900&fit=crop&q=80"
                alt="Friendly mechanic ready to assist customers at Shah Automotives workshop."
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
