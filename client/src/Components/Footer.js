import { useState, useEffect, useRef } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    email: '',
    consent: false
  });

  const formSectionRef = useRef(null);
  const linksSectionRef = useRef(null);
  const logoSectionRef = useRef(null);
  const copyrightRef = useRef(null);

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

    // Observe elements
    if (formSectionRef.current) observer.observe(formSectionRef.current);
    if (linksSectionRef.current) observer.observe(linksSectionRef.current);
    if (logoSectionRef.current) observer.observe(logoSectionRef.current);
    if (copyrightRef.current) observer.observe(copyrightRef.current);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', formData);
    // Reset form
    setFormData({
      email: '',
      consent: false
    });
  };

  // Email validation regex
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = formData.email && isValidEmail(formData.email) && formData.consent;

  return (
    <footer
      id="footer"
      style={{
        background: '#212121',
        color: '#f3f1e0',
        display: 'grid',
        gridTemplateRows: 'repeat(3, auto)',
        padding: '2.78vw',
        rowGap: '2.78vw',
        width: '100%',
        position: 'relative'
      }}
    >
      {/* Content Section */}
      <div
        style={{
          display: 'flex',
          columnGap: '2.78vw'
        }}
      >
        {/* Left Side - Newsletter Form */}
        <div
          ref={formSectionRef}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
          style={{ width: '33.68vw' }}
        >
          <h6
            style={{
              fontSize: '1.67vw',
              fontFamily: 'UniversalSansDisplay, Arial, Helvetica, sans-serif',
              fontWeight: 500,
              marginBottom: '1.39vw'
            }}
          >
            Stay in the Loop
          </h6>

          <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
            {/* Email Input and Subscribe Button - Side by Side */}
            <div style={{ display: 'flex', gap: '0.69vw', marginBottom: '1.11vw' }}>
              <input
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  flex: 1,
                  height: '3.47vw',
                  background: 'rgba(88, 88, 88, 1)',
                  border: 'none',
                  borderRadius: '5px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  padding: '0 1.11vw',
                  fontFamily: 'UniversalSansText, Arial, Helvetica, sans-serif',
                  fontSize: '0.97vw',
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => {
                  e.target.style.background = 'rgba(100, 100, 100, 1)';
                }}
                onBlur={(e) => {
                  e.target.style.background = 'rgba(88, 88, 88, 1)';
                }}
              />
              <button
                type="submit"
                disabled={!isFormValid}
                style={{
                  height: '3.47vw',
                  background: isFormValid ? 'rgba(88, 88, 88, 1)' : 'rgba(88, 88, 88, 0.6)',
                  border: 'none',
                  borderRadius: '5px',
                  color: isFormValid ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.3)',
                  cursor: isFormValid ? 'pointer' : 'not-allowed',
                  fontFamily: 'AeonikFono-Bold, serif',
                  fontSize: '0.83vw',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  transition: 'all 0.3s cubic-bezier(0.32, 0.94, 0.6, 1)',
                  padding: '0 2.08vw',
                  whiteSpace: 'nowrap',
                  pointerEvents: isFormValid ? 'auto' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (isFormValid) {
                    e.target.style.background = 'rgba(100, 100, 100, 1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (isFormValid) {
                    e.target.style.background = 'rgba(88, 88, 88, 1)';
                  }
                }}
              >
                Subscribe
              </button>
            </div>

            {/* Checkbox */}
            <div>
              <label
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  columnGap: '0.56vw',
                  cursor: 'pointer'
                }}
              >
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginTop: '0.14vw' }}>
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    style={{
                      position: 'absolute',
                      opacity: 0,
                      cursor: 'pointer',
                      width: '0.97vw',
                      height: '0.97vw'
                    }}
                  />
                  <span
                    style={{
                      width: '0.97vw',
                      height: '0.97vw',
                      border: '1px solid #f3f1e0',
                      borderRadius: '2px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      background: formData.consent ? '#f3f1e0' : 'transparent',
                      transition: 'all 0.3s ease',
                      flexShrink: 0
                    }}
                  >
                    {formData.consent && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          width: '0.7vw',
                          height: '0.7vw'
                        }}
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="#212121"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: '0.76vw',
                    lineHeight: '1.4',
                    fontFamily: 'UniversalSansText, Arial, Helvetica, sans-serif',
                    color: 'rgba(243, 241, 224, 0.8)'
                  }}
                >
                  I agree to receive emails from Shah Automotives and I understand I can opt out at any time.
                </span>
              </label>
            </div>
          </form>
        </div>

        {/* Right Side - Footer Links */}
        <div
          ref={linksSectionRef}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginLeft: '9.38vw',
            paddingLeft: '2.78vw',
            width: '33.68vw'
          }}
        >
          {/* Social Links */}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '1.39vw' }}>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#f3f1e0',
                  textDecoration: 'none',
                  fontFamily: 'AeonikFono-Bold, serif',
                  fontSize: '0.83vw',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  transition: 'color 0.3s cubic-bezier(0.32, 0.94, 0.6, 1)'
                }}
              >
                facebook
              </a>
            </li>
            <li style={{ marginBottom: '1.39vw' }}>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#f3f1e0',
                  textDecoration: 'none',
                  fontFamily: 'AeonikFono-Bold, serif',
                  fontSize: '0.83vw',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  transition: 'color 0.3s cubic-bezier(0.32, 0.94, 0.6, 1)'
                }}
              >
                instagram
              </a>
            </li>
          </ul>

          {/* Other Links */}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '1.39vw' }}>
              <a
                href="mailto:info@shahautomotives.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#f3f1e0',
                  textDecoration: 'none',
                  fontFamily: 'AeonikFono-Bold, serif',
                  fontSize: '0.83vw',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  transition: 'color 0.3s cubic-bezier(0.32, 0.94, 0.6, 1)'
                }}
              >
                Contact Us
              </a>
            </li>
            <li style={{ marginBottom: '1.39vw' }}>
              <a
                href="/terms-of-use"
                style={{
                  color: '#f3f1e0',
                  textDecoration: 'none',
                  fontFamily: 'AeonikFono-Bold, serif',
                  fontSize: '0.83vw',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  transition: 'color 0.3s cubic-bezier(0.32, 0.94, 0.6, 1)'
                }}
              >
                Terms of use
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Large Logo Section */}
      <div
        ref={logoSectionRef}
        className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        {/* First Word - SHAH */}
        <div
          style={{
            position: 'relative',
            backgroundColor: '#212121',
            color: '#f3f1e0',
            fontFamily: 'Aeonik-Black, serif',
            fontSize: '20.14vw',
            fontWeight: 900,
            lineHeight: 0.8,
            marginTop: 0
          }}
        >
          <div
            style={{
              position: 'relative',
              display: 'inline-block',
              transform: 'translateX(-1.1vw)'
            }}
          >
            <div
              style={{
                position: 'relative',
                display: 'inline-block'
              }}
            >
              SHAH
            </div>
          </div>

          {/* Mask Container */}
          <div
            style={{
              overflow: 'hidden',
              position: 'absolute',
              right: '-7.67vw',
              top: '7%'
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '0.5vw'
              }}
            >
              <div
                style={{
                  width: '0.28vw',
                  height: '16.67vw',
                  background: '#f3f1e0'
                }}
              />
              <div
                style={{
                  width: '0.28vw',
                  height: '16.67vw',
                  background: '#f3f1e0'
                }}
              />
            </div>
          </div>
        </div>

        {/* Second Word - AT */}
        <p
          style={{
            backgroundColor: '#212121',
            color: '#f3f1e0',
            fontFamily: 'Aeonik-Black, serif',
            fontSize: '20.14vw',
            fontWeight: 900,
            lineHeight: 0.8,
            marginTop: 0,
            display: 'inline-flex'
          }}
        >
          <span style={{ position: 'relative', display: 'inline-block' }}>
            AT
          </span>
        </p>
      </div>

      {/* Copyright Section */}
      <div>
        <p
          style={{
            fontSize: '1.11vw',
            lineHeight: 1.3,
            fontFamily: 'UniversalSansText, Arial, Helvetica, sans-serif'
          }}
        >
          (C) 2026 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
