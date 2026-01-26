import { useEffect, useRef } from 'react';

const TechnicalSpecs = () => {
  const specsRefs = useRef([]);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

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

    // Observe heading and description
    if (headingRef.current) observer.observe(headingRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);

    // Observe specs table rows
    specsRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const specsData = [
    {
      title: 'OUR GARAGE',
      items: [
        { label: 'Service Bays', value: '8 Fully Equipped Bays' },
        { label: 'Hydraulic Lifts', value: 'Heavy Duty Capacity' },
        { label: 'Diagnostic Equipment', value: 'Modern Computer Scanners' },
        { label: 'Working Hours', value: 'Mon-Sat 8AM-6PM, Sun 9AM-4PM' },
        { label: 'Location', value: 'Nairobi, Kenya' }
      ]
    },
    {
      title: 'VEHICLES WE SERVICE',
      items: [
        { label: 'Japanese Makes', value: 'Toyota, Nissan, Mazda, Mitsubishi, Subaru, Isuzu' },
        { label: 'European Brands', value: 'Mercedes, BMW, VW, Peugeot, Renault' },
        { label: 'Korean Models', value: 'Hyundai, Kia, SsangYong' },
        { label: 'Commercial', value: 'Trucks, Vans, Pickups, Matatus' },
        { label: 'American & Others', value: 'Ford, Chevrolet, Land Rover, Tata' }
      ]
    },
    {
      title: 'EXPERTISE & STANDARDS',
      items: [
        { label: 'Experience', value: 'Over 15 Years in Business' },
        { label: 'Qualified Mechanics', value: 'Trained & Certified Technicians' },
        { label: 'Quality Parts', value: 'Genuine & Approved Aftermarket' },
        { label: 'Modern Tools', value: 'Latest Equipment & Technology' }
      ]
    },
    {
      title: 'SERVICE GUARANTEE',
      items: [
        { label: 'Workmanship', value: '6 Months / 10,000 KM Warranty' },
        { label: 'Parts Quality', value: 'Manufacturer Warranty Applied' },
        { label: 'Customer Care', value: 'Free Consultation & Advice' },
        { label: 'Transparency', value: 'Detailed Quotations & Updates' }
      ]
    }
  ];

  return (
    <section
      id="technical-specs"
      className="bg-[#212121] text-[#f3f1e0]"
      style={{
        paddingTop: '159.98px',
        paddingBottom: '159.98px',
        paddingLeft: '53.32px',
        paddingRight: '53.32px'
      }}
    >
      {/* Title */}
      <h2
        ref={headingRef}
        className="font-light overflow-hidden opacity-0 translate-y-8 transition-all duration-700 ease-out"
        style={{
          fontSize: '5.28vw',
          lineHeight: '105%',
          width: '33.68vw',
          fontFamily: 'UniversalSansDisplay, Arial, Helvetica, sans-serif',
          fontWeight: 100
        }}
      >
        <span style={{ display: 'block' }}>
          Technical Specification
        </span>
      </h2>

      {/* Content Grid */}
      <div
        className="grid relative w-full"
        style={{
          gridTemplateColumns: '21.53vw 70.14vw',
          columnGap: '2.78vw',
          marginTop: '5.56vw'
        }}
      >
        {/* Left Column - Description */}
        <div>
          <div
            className="sticky"
            style={{
              top: '5.56vw',
              left: 0
            }}
          >
            <div
              ref={descriptionRef}
              className="overflow-hidden opacity-0 translate-y-8 transition-all duration-700 ease-out"
            >
              <div style={{ display: 'block' }}>
                <p
                  className="mb-4"
                  style={{
                    fontSize: '1.11vw',
                    lineHeight: '1.3',
                    fontFamily: 'UniversalSansText, Arial, Helvetica, sans-serif',
                    letterSpacing: '-0.02em'
                  }}
                >
                  Before you schedule your service, please review our technical specifications. Have questions?
                </p>
              </div>
            </div>

            <a
              href="/#faq"
              className="inline-flex items-center uppercase transition-all duration-300"
              style={{
                background: '#fc0',
                border: '1px solid #fc0',
                borderRadius: '5px',
                color: '#212121',
                padding: '0.90vw 2.08vw',
                marginTop: '1.39vw',
                fontFamily: 'AeonikFono-Regular, serif',
                fontSize: '0.83vw',
                fontWeight: 700,
                textTransform: 'uppercase'
              }}
            >
              <span>FAQ</span>
            </a>
          </div>
        </div>

        {/* Right Column - Specs Table */}
        <div
          className="relative uppercase"
          style={{
            fontSize: '0.97vw',
            letterSpacing: '-0.01em',
            lineHeight: '1.15'
          }}
        >
          {specsData.map((spec, index) => (
            <div
              key={index}
              ref={el => specsRefs.current[index] = el}
              className="flex transition-all duration-700 ease-out"
              style={{
                borderTop: '2px solid #f3f1e0',
                opacity: 0,
                transform: 'translate(0px)',
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Left: Category Title - Fixed Width */}
              <div style={{ paddingTop: '24px', paddingBottom: '24px', width: '280px', flexShrink: 0, paddingRight: '40px' }}>
                <div className="font-medium">{spec.title}</div>
              </div>

              {/* Right: Specs Content (Two Column Grid) */}
              <div className="flex-1">
                {spec.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="grid"
                    style={{
                      gridTemplateColumns: '1fr 1fr',
                      paddingTop: '24px',
                      paddingBottom: '24px',
                      borderBottom: itemIndex < spec.items.length - 1 ? '1px solid rgba(243, 241, 224, 0.2)' : 'none',
                      opacity: 1,
                      transform: 'translate(0px)'
                    }}
                  >
                    <div>{item.label}</div>
                    <div className="text-right">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
