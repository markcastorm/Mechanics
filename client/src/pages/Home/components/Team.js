import { useEffect, useRef, useState } from 'react';

const Team = () => {
  const teamRefs = useRef([]);
  const headingRef = useRef(null);
  const textRefs = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

    // Observe heading
    if (headingRef.current) observer.observe(headingRef.current);

    // Observe text blocks
    textRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    // Observe team cards
    teamRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: 'John Kamau',
      position: 'Master Mechanic',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop'
    },
    {
      name: 'Mary Njeri',
      position: 'Service Manager',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop'
    },
    {
      name: 'David Omondi',
      position: 'Diagnostic Specialist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop'
    },
    {
      name: 'Grace Wanjiku',
      position: 'Parts Coordinator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop'
    }
  ];

  return (
    <section
      id="team"
      className="flex justify-between"
      style={{
        background: '#ffffff',
        paddingTop: '166.65px',
        paddingBottom: '153.33px',
        paddingLeft: '53.32px',
        paddingRight: '53.32px',
        gap: '2.78vw',
        color: '#212121'
      }}
    >
      {/* Left Side - About History */}
      <div style={{ width: '45.83vw' }}>
        {/* Heading */}
        <h2
          ref={headingRef}
          className="font-light overflow-hidden opacity-0 translate-y-8 transition-all duration-700 ease-out"
          style={{
            fontSize: '5.28vw',
            lineHeight: '105%',
            fontFamily: 'UniversalSansDisplay, Arial, Helvetica, sans-serif',
            fontWeight: 100
          }}
        >
          <span style={{ display: 'block' }}>
            Meet Our Expert Team of Mechanics.
          </span>
        </h2>

        {/* Content Container */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(2, 1fr)',
            columnGap: '2.78vw',
            marginTop: '25.42vw'
          }}
        >
          <div
            ref={el => textRefs.current[0] = el}
            className="overflow-hidden opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{
              width: '21.53vw',
              fontSize: '1.11vw',
              lineHeight: '1.3',
              fontFamily: 'UniversalSansText, Arial, Helvetica, sans-serif',
              letterSpacing: '-0.02em'
            }}
          >
            <div style={{ display: 'block' }}>
              <span style={{ display: 'block' }}>
                Our garage is home to a team of highly skilled and certified mechanics with years of experience serving Nairobi's automotive needs.
              </span>
            </div>
          </div>

          <div
            ref={el => textRefs.current[1] = el}
            className="overflow-hidden opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{
              width: '21.53vw',
              fontSize: '1.11vw',
              lineHeight: '1.3',
              fontFamily: 'UniversalSansText, Arial, Helvetica, sans-serif',
              letterSpacing: '-0.02em'
            }}
          >
            <div style={{ display: 'block' }}>
              <span style={{ display: 'block' }}>
                From routine maintenance to complex diagnostics, our dedicated professionals are committed to keeping your vehicle running at its best with honest service and quality workmanship.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Team Members Grid */}
      <div
        className="grid gap-[2.78vw]"
        style={{
          gridTemplateColumns: 'repeat(2, 1fr)',
          width: '45.83vw'
        }}
      >
        {teamMembers.map((member, index) => (
          <button
            key={index}
            ref={el => teamRefs.current[index] = el}
            className="cursor-pointer opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{
              display: 'content',
              height: 'fit-content',
              width: '21.53vw',
              transitionDelay: `${index * 100}ms`,
              background: 'transparent',
              border: 'none',
              padding: 0
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div>
              {/* Employee Picture */}
              <div className="relative">
                {/* Default Image (B&W with multiply blend) */}
                <div
                  className="block"
                  style={{
                    background: '#f5f5f5',
                    borderRadius: '5px'
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="block w-full h-auto transition-opacity duration-400"
                    style={{
                      borderRadius: '5px',
                      mixBlendMode: 'multiply',
                      filter: 'grayscale(100%)',
                      aspectRatio: '1 / 1',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                {/* Colored Image (appears on hover) */}
                <div
                  className="absolute top-0 left-0 w-full h-full block transition-opacity duration-800"
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    zIndex: 9999,
                    borderRadius: '5px',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="block w-full h-full transition-opacity duration-400"
                    style={{
                      borderRadius: '5px',
                      aspectRatio: '1 / 1',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>

              {/* Employee Controls */}
              <div
                className="grid items-center justify-between"
                style={{
                  gridTemplateColumns: '1fr auto',
                  columnGap: '0.69vw',
                  marginTop: '1.39vw'
                }}
              >
                <div>
                  <h6
                    className="m-0"
                    style={{
                      fontSize: '1.67vw',
                      fontFamily: 'UniversalSansDisplay, Arial, Helvetica, sans-serif',
                      fontWeight: 500
                    }}
                  >
                    {member.name}
                  </h6>
                  <span
                    className="uppercase"
                    style={{
                      fontSize: '0.83vw',
                      lineHeight: '1.15',
                      fontFamily: 'AeonikFono-Bold, serif'
                    }}
                  >
                    {member.position}
                  </span>
                </div>

                {/* Plus Icon Button */}
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
                      transition: 'transform 0.3s cubic-bezier(0.32, 0.94, 0.6, 1)'
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
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Team;
