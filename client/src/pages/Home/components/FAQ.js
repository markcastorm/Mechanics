import { useEffect, useRef, useState } from 'react';

const FAQ = () => {
  const [activeSection, setActiveSection] = useState('common-questions');
  const [openQuestion, setOpenQuestion] = useState(null);
  const navRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.faq-group');
      let currentSection = 'common-questions';

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // Section is active when its top is in the upper 40% of the viewport
        if (rect.top <= window.innerHeight * 0.4 && rect.bottom > 0) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

    // Observe title
    if (titleRef.current) observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = {
    'common-questions': [
      {
        question: 'What services do you offer?',
        answer: `We provide comprehensive automotive repair and maintenance services including engine diagnostics, brake repairs, oil changes, transmission services, electrical system repairs, tire services, air conditioning repairs, and general vehicle maintenance. Our certified mechanics are equipped to handle both routine maintenance and complex repairs for all vehicle makes and models.`
      },
      {
        question: 'Do you service all vehicle makes and models?',
        answer: `Yes! We service all types of vehicles including Japanese makes (Toyota, Nissan, Mazda, Mitsubishi, Subaru, Isuzu), European brands (Mercedes, BMW, VW, Peugeot, Renault), Korean models (Hyundai, Kia, SsangYong), and American brands (Ford, Chevrolet, Land Rover). We also handle commercial vehicles like trucks, vans, pickups, and matatus.`
      },
      {
        question: 'How long does a typical service take?',
        answer: `Service duration depends on the type of work needed. A basic oil change takes about 30-45 minutes, while more comprehensive services like brake repairs or transmission work may take several hours or a full day. We always provide time estimates when you book your appointment and keep you updated throughout the process.`
      },
      {
        question: 'Do you offer warranty on your work?',
        answer: `Yes, we stand behind our work with a 6 months / 10,000 KM warranty on workmanship. Parts come with manufacturer warranty as applicable. This gives you peace of mind knowing that your vehicle is in good hands.`
      },
      {
        question: 'What are your operating hours?',
        answer: `We are open Monday to Saturday from 8:00 AM to 6:00 PM, and Sunday from 9:00 AM to 4:00 PM. We recommend booking an appointment in advance to ensure we can accommodate your vehicle at your preferred time.`
      }
    ],
    'pricing-booking': [
      {
        question: 'How do I get a quote for repairs?',
        answer: `You can get a free quote by calling us, visiting our garage, or using our online contact form. For accurate estimates, we recommend bringing your vehicle in for inspection. Our mechanics will diagnose the issue and provide a detailed quotation before any work begins.`
      },
      {
        question: 'Do I need to book an appointment?',
        answer: `While walk-ins are welcome, we highly recommend booking an appointment to minimize wait times and ensure our mechanics can dedicate proper attention to your vehicle. You can book by phone or through our website.`
      },
      {
        question: 'What payment methods do you accept?',
        answer: `We accept cash, M-Pesa, bank transfers, and major credit/debit cards. Payment is due upon completion of service. We also provide detailed invoices for all work performed.`
      },
      {
        question: 'Do you offer emergency services?',
        answer: `Yes, we can accommodate emergency repairs during our operating hours. If you experience a breakdown or urgent issue, call us immediately and we'll do our best to get you back on the road as quickly as possible.`
      }
    ]
  };

  return (
    <section
      id="faq"
      className="relative"
      style={{
        background: '#f3f1e0',
        paddingLeft: '53.32px',
        paddingRight: '53.32px'
      }}
    >
      <div
        className="grid"
        style={{
          gridTemplateColumns: '33.68vw 45.83vw',
          columnGap: '14.93vw',
          width: '100%'
        }}
      >
        {/* Left Side - Navigation */}
        <div>
          <div
            ref={navRef}
            className="sticky"
            style={{
              top: '2.78vw',
              left: 0,
              margin: '8.33vw auto',
              width: '33.68vw',
              transition: 'top 0.4s cubic-bezier(0.32, 0.94, 0.6, 1)'
            }}
          >
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li
                ref={titleRef}
                className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
                style={{
                  marginBottom: '1.39vw'
                }}
              >
                <a
                  href="#common-questions"
                  className="flex justify-between w-full"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    opacity: activeSection === 'common-questions' ? 1 : 0.15,
                    transition: 'opacity 0.3s ease'
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('common-questions').scrollIntoView({ behavior: 'smooth' });
                    setActiveSection('common-questions');
                  }}
                >
                  <span
                    style={{
                      fontSize: '2.99vw',
                      fontFamily: 'UniversalSansDisplay, Arial, Helvetica, sans-serif',
                      fontWeight: 100,
                      lineHeight: 1
                    }}
                  >
                    01
                  </span>
                  <span
                    style={{
                      fontSize: '2.99vw',
                      fontFamily: 'UniversalSansDisplay, Arial, Helvetica, sans-serif',
                      fontWeight: 100,
                      lineHeight: 1
                    }}
                  >
                    Common Questions
                  </span>
                </a>
              </li>
              <li
                style={{
                  marginBottom: '1.39vw'
                }}
              >
                <a
                  href="#pricing-booking"
                  className="flex justify-between w-full"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    opacity: activeSection === 'pricing-booking' ? 1 : 0.15,
                    transition: 'opacity 0.3s ease'
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('pricing-booking').scrollIntoView({ behavior: 'smooth' });
                    setActiveSection('pricing-booking');
                  }}
                >
                  <span
                    style={{
                      fontSize: '2.99vw',
                      fontFamily: 'UniversalSansDisplay, Arial, Helvetica, sans-serif',
                      fontWeight: 100,
                      lineHeight: 1
                    }}
                  >
                    02
                  </span>
                  <span
                    style={{
                      fontSize: '2.99vw',
                      fontFamily: 'UniversalSansDisplay, Arial, Helvetica, sans-serif',
                      fontWeight: 100,
                      lineHeight: 1
                    }}
                  >
                    Pricing & Booking
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side - Questions */}
        <div style={{ margin: '8.33vw auto' }}>
          {/* Common Questions Section */}
          <div id="common-questions" className="faq-group">
            {faqData['common-questions'].map((item, index) => (
              <div
                key={`common-${index}`}
                style={{
                  borderTop: '2px solid rgba(33, 33, 33, 0.15)',
                  position: 'relative',
                  overflowX: 'hidden'
                }}
              >
                <button
                  onClick={() => toggleQuestion(`common-${index}`)}
                  className="w-full"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    columnGap: '1.39vw',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: '1.39vw 0',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left'
                  }}
                  aria-expanded={openQuestion === `common-${index}`}
                >
                  <h6
                    style={{
                      fontSize: '1.67vw',
                      fontFamily: 'UniversalSansDisplay, Arial, Helvetica, sans-serif',
                      fontWeight: 500,
                      margin: 0
                    }}
                  >
                    {item.question}
                  </h6>
                  <span
                    className="flex items-center justify-center transition-all duration-700"
                    style={{
                      width: '2.78vw',
                      height: '2.78vw',
                      aspectRatio: '1',
                      border: '2px solid #212121',
                      borderRadius: '5px',
                      backgroundColor: 'transparent',
                      color: '#212121'
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      style={{
                        width: '1.74vw',
                        height: '1.74vw',
                        margin: '0 auto',
                        transition: 'transform 0.3s cubic-bezier(0.32, 0.94, 0.6, 1)',
                        display: openQuestion === `common-${index}` ? 'none' : 'block'
                      }}
                    >
                      <path
                        d="M12 5.00012V19.0001"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 12H19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      style={{
                        width: '1.74vw',
                        height: '1.74vw',
                        margin: '0 auto',
                        transition: 'transform 0.3s cubic-bezier(0.32, 0.94, 0.6, 1)',
                        display: openQuestion === `common-${index}` ? 'block' : 'none'
                      }}
                    >
                      <path
                        d="M5 12H19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: openQuestion === `common-${index}` ? '1000px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.32, 0.94, 0.6, 1)'
                  }}
                >
                  <div
                    style={{
                      paddingBottom: '1.39vw',
                      fontSize: '1.11vw',
                      lineHeight: '1.3',
                      fontFamily: 'UniversalSansText, Arial, Helvetica, sans-serif',
                      letterSpacing: '-0.02em',
                      color: '#212121'
                    }}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing & Booking Section */}
          <div id="pricing-booking" className="faq-group" style={{ marginTop: '4.17vw' }}>
            {faqData['pricing-booking'].map((item, index) => (
              <div
                key={`pricing-${index}`}
                style={{
                  borderTop: '2px solid rgba(33, 33, 33, 0.15)',
                  position: 'relative',
                  overflowX: 'hidden'
                }}
              >
                <button
                  onClick={() => toggleQuestion(`pricing-${index}`)}
                  className="w-full"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    columnGap: '1.39vw',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: '1.39vw 0',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left'
                  }}
                  aria-expanded={openQuestion === `pricing-${index}`}
                >
                  <h6
                    style={{
                      fontSize: '1.67vw',
                      fontFamily: 'UniversalSansDisplay, Arial, Helvetica, sans-serif',
                      fontWeight: 500,
                      margin: 0
                    }}
                  >
                    {item.question}
                  </h6>
                  <span
                    className="flex items-center justify-center transition-all duration-700"
                    style={{
                      width: '2.78vw',
                      height: '2.78vw',
                      aspectRatio: '1',
                      border: '2px solid #212121',
                      borderRadius: '5px',
                      backgroundColor: 'transparent',
                      color: '#212121'
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      style={{
                        width: '1.74vw',
                        height: '1.74vw',
                        margin: '0 auto',
                        transition: 'transform 0.3s cubic-bezier(0.32, 0.94, 0.6, 1)',
                        display: openQuestion === `pricing-${index}` ? 'none' : 'block'
                      }}
                    >
                      <path
                        d="M12 5.00012V19.0001"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 12H19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      style={{
                        width: '1.74vw',
                        height: '1.74vw',
                        margin: '0 auto',
                        transition: 'transform 0.3s cubic-bezier(0.32, 0.94, 0.6, 1)',
                        display: openQuestion === `pricing-${index}` ? 'block' : 'none'
                      }}
                    >
                      <path
                        d="M5 12H19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: openQuestion === `pricing-${index}` ? '1000px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.32, 0.94, 0.6, 1)'
                  }}
                >
                  <div
                    style={{
                      paddingBottom: '1.39vw',
                      fontSize: '1.11vw',
                      lineHeight: '1.3',
                      fontFamily: 'UniversalSansText, Arial, Helvetica, sans-serif',
                      letterSpacing: '-0.02em',
                      color: '#212121'
                    }}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
