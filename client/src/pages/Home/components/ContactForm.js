import { useState, useEffect, useRef } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const formRef = useRef(null);

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
    if (headingRef.current) observer.observe(headingRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (formRef.current) observer.observe(formRef.current);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        consent: false
      });
    }, 1000);
  };

  const isFormValid = formData.name && formData.email && formData.phone && formData.consent;

  return (
    <section
      className="relative"
      style={{
        background: '#212121',
        color: '#f3f1e0',
        minHeight: '55.56vw',
        position: 'relative'
      }}
    >
      {/* Background Image with Overlay */}
      <div
        className="scroll-image"
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          overflow: 'hidden',
          top: 0,
          left: 0
        }}
      >
        <div
          style={{
            position: 'relative',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            zIndex: 0
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&h=1067&fit=crop"
            alt="Auto repair garage background"
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: 'scale(1.15)',
              transition: 'opacity 0.4s cubic-bezier(0.32, 0.94, 0.6, 1)'
            }}
          />
          {/* Dark Overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(33, 33, 33, 0.7)',
              zIndex: 1
            }}
          />
        </div>
      </div>

      {/* Content Container */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          paddingTop: '8.33vw',
          paddingBottom: '8.33vw',
          paddingLeft: '53.32px',
          paddingRight: '53.32px',
          gap: '2.78vw',
          zIndex: 2
        }}
      >
        {/* Left Side - Title and Description (Unchanged) */}
        <div
          style={{
            width: '45.83vw'
          }}
        >
          {/* Title */}
          <div style={{ overflow: 'hidden' }}>
            <h2
              ref={headingRef}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{
                fontSize: '5.28vw',
                lineHeight: '105%',
                fontFamily: 'UniversalSansDisplay, Arial, Helvetica, sans-serif',
                fontWeight: 100,
                display: 'block',
                margin: 0
              }}
            >
              Expert Service,
              <br />
              Honest Care.
            </h2>
          </div>

          {/* Description */}
          <div
            style={{
              overflow: 'hidden',
              marginTop: '1.39vw'
            }}
          >
            <div
              ref={descriptionRef}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
            >
              <span
                style={{
                  display: 'block',
                  fontSize: '1.39vw',
                  lineHeight: '1.3',
                  fontFamily: 'UniversalSansText, Arial, Helvetica, sans-serif'
                }}
              >
                Get in touch with us for expert automotive care and honest service.
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form Container */}
        <div
          ref={formRef}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
            padding: '2.5rem',
            borderRadius: '10px',
            backdropFilter: 'blur(10px)'
          }}
        >
          {/* Inner container to constrain form width */}
          <div style={{ width: '100%', maxWidth: '450px' }}>
            <h6
              style={{
                fontSize: '1.67vw',
                fontFamily: 'UniversalSansDisplay, Arial, Helvetica, sans-serif',
                fontWeight: 500,
                marginBottom: '2rem'
              }}
            >
              Contact Us
            </h6>

            <form
              onSubmit={handleSubmit}
              style={{ position: 'relative' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '5px',
                      color: '#f3f1e0',
                      padding: '1rem',
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '1rem'
                    }}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '5px',
                      color: '#f3f1e0',
                      padding: '1rem',
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '1rem'
                    }}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '5px',
                      color: '#f3f1e0',
                      padding: '1rem',
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '1rem'
                    }}
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message (Optional)"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '5px',
                      color: '#f3f1e0',
                      padding: '1rem',
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                  />
              </div>

              {/* Checkbox */}
              <div style={{ margin: '1.5rem 0' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    style={{
                      width: '1.25rem',
                      height: '1.25rem',
                      cursor: 'pointer',
                      accentColor: '#fc0',
                      flexShrink: 0
                    }}
                  />
                  <span style={{ fontSize: '0.875rem', lineHeight: '1.4', fontFamily: 'UniversalSansText, Arial, Helvetica, sans-serif' }}>
                    I agree to receive communication about services and updates from Shah Automotives
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                style={{
                  width: '100%',
                  background: isFormValid && !isSubmitting ? '#fc0' : 'rgba(244, 242, 226, 0.2)',
                  border: 'none',
                  borderRadius: '5px',
                  color: isFormValid && !isSubmitting ? '#212121' : 'rgba(244, 242, 226, 0.5)',
                  cursor: isFormValid && !isSubmitting ? 'pointer' : 'not-allowed',
                  padding: '1rem',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s ease',
                  fontFamily: 'AeonikFono-Bold, serif',
                  fontSize: '1rem',
                  fontWeight: 700
                }}
              >
                <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;