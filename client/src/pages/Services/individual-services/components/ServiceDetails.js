import React, { useEffect, useRef, useState } from 'react';

const ServiceDetails = ({ serviceData }) => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);
    itemsRef.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  if (!serviceData || !serviceData.serviceDetails) return null;

  return (
    <section
      id="service-details"
      style={{
        backgroundColor: '#f4f3e8',
        color: '#13140e',
        position: 'relative',
        overflow: 'hidden'
      }}>
      <div style={{
        maxWidth: '1600px',
        margin: '0 auto',
        padding: isMobile ? '8rem 2rem' : '12rem 1.6rem'
      }}>
        {/* Section Header */}
        <div
          ref={sectionRef}
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          style={{
            maxWidth: '80rem',
            marginBottom: isMobile ? '6rem' : '8rem'
          }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '0.6rem 1.4rem',
            backgroundColor: 'rgba(19, 20, 14, 0.05)',
            border: '1px solid rgba(19, 20, 14, 0.1)',
            borderRadius: '10rem',
            marginBottom: isMobile ? '2rem' : '2.4rem'
          }}>
            <div style={{
              width: '0.6rem',
              height: '0.6rem',
              borderRadius: '50%',
              backgroundColor: '#13140e'
            }}/>
            <span style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: isMobile ? '1rem' : '1.1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: 500
            }}>
              What's Included
            </span>
          </div>

          <h2 style={{
            fontFamily: '"NB International Pro", sans-serif',
            fontSize: isMobile ? 'clamp(2.8rem, 7vw, 4rem)' : 'clamp(4rem, 5vw, 5.6rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: isMobile ? '1.6rem' : '2rem'
          }}>
            {serviceData.detailsHeading || 'Complete Service Breakdown'}
          </h2>

          <p style={{
            fontFamily: '"NB International Pro", sans-serif',
            fontSize: isMobile ? '1.6rem' : '2rem',
            fontWeight: 400,
            lineHeight: 1.5,
            color: 'rgba(19, 20, 14, 0.7)',
            maxWidth: '70rem'
          }}>
            {serviceData.detailsDescription || 'Our comprehensive service includes everything you need for optimal performance and reliability.'}
          </p>
        </div>

        {/* Service Details Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: isMobile ? '2.4rem' : '3.2rem'
        }}>
          {serviceData.serviceDetails.map((detail, index) => (
            <div
              key={index}
              ref={el => itemsRef.current[index] = el}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{
                padding: isMobile ? '3rem 2.4rem' : '4rem 3.2rem',
                backgroundColor: '#fff',
                borderRadius: '1.2rem',
                border: '1px solid rgba(19, 20, 14, 0.08)',
                position: 'relative',
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Number Badge */}
              <div style={{
                position: 'absolute',
                top: isMobile ? '2.4rem' : '3.2rem',
                right: isMobile ? '2.4rem' : '3.2rem',
                width: isMobile ? '4rem' : '5rem',
                height: isMobile ? '4rem' : '5rem',
                borderRadius: '50%',
                backgroundColor: 'rgba(19, 20, 14, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: isMobile ? '1.4rem' : '1.6rem',
                fontWeight: 600,
                color: 'rgba(19, 20, 14, 0.4)'
              }}>
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Icon Container */}
              <div style={{
                width: isMobile ? '5.6rem' : '6.4rem',
                height: isMobile ? '5.6rem' : '6.4rem',
                backgroundColor: '#13140e',
                borderRadius: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: isMobile ? '2rem' : '2.4rem',
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 1.2rem), calc(100% - 1.2rem) 100%, 0 100%, 0 0)'
              }}>
                <div style={{
                  fontSize: isMobile ? '2.4rem' : '2.8rem'
                }}>
                  {detail.icon}
                </div>
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: isMobile ? '1.8rem' : '2rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                marginBottom: isMobile ? '1.2rem' : '1.6rem',
                letterSpacing: '0.02em',
                paddingRight: isMobile ? '5rem' : '6rem'
              }}>
                {detail.title}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: '"NB International Pro", sans-serif',
                fontSize: isMobile ? '1.5rem' : '1.6rem',
                fontWeight: 400,
                lineHeight: 1.6,
                color: 'rgba(19, 20, 14, 0.7)',
                marginBottom: isMobile ? '2rem' : '2.4rem'
              }}>
                {detail.description}
              </p>

              {/* Items List */}
              {detail.items && detail.items.length > 0 && (
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}>
                  {detail.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem'
                      }}
                    >
                      {/* Checkmark */}
                      <div style={{
                        width: '1.8rem',
                        height: '1.8rem',
                        borderRadius: '0.4rem',
                        backgroundColor: 'rgba(19, 20, 14, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '0.2rem'
                      }}>
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="#13140e" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <span style={{
                        fontFamily: '"NB International Pro", sans-serif',
                        fontSize: isMobile ? '1.4rem' : '1.5rem',
                        color: 'rgba(19, 20, 14, 0.8)',
                        lineHeight: 1.5
                      }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info Banner */}
        <div
          className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          ref={el => itemsRef.current[serviceData.serviceDetails.length] = el}
          style={{
            marginTop: isMobile ? '4rem' : '6rem',
            padding: isMobile ? '3rem 2.4rem' : '4rem 5rem',
            backgroundColor: '#13140e',
            borderRadius: '1.2rem',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'space-between',
            gap: isMobile ? '2rem' : '3rem',
            transitionDelay: `${serviceData.serviceDetails.length * 100}ms`
          }}
        >
          <div style={{ flex: 1 }}>
            <h3 style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: isMobile ? '1.8rem' : '2rem',
              fontWeight: 500,
              color: '#f4f3e8',
              marginBottom: '0.8rem',
              textTransform: 'uppercase'
            }}>
              Need More Information?
            </h3>
            <p style={{
              fontFamily: '"NB International Pro", sans-serif',
              fontSize: isMobile ? '1.5rem' : '1.6rem',
              color: 'rgba(244, 243, 232, 0.7)',
              margin: 0
            }}>
              Our service advisors are ready to answer your questions and schedule your appointment.
            </p>
          </div>
          <a
            href="tel:+254712345678"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
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
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(244, 243, 232, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
