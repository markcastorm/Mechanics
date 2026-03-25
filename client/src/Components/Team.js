import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const Team = () => {
  const teamRefs = useRef([]);
  const headingRef = useRef(null);
  const textRefs = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

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
    textRefs.current.forEach(ref => { if (ref) observer.observe(ref); });
    teamRefs.current.forEach(ref => { if (ref) observer.observe(ref); });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedMember]);

  const teamMembers = [
    {
      name: 'Peter Makeu',
      position: 'Master Mechanic',
      image: '/TeamPics/team 1.jpeg',
      email: 'Peter.makeu@shahauto.co.ke',
      phone: '+254 712 345 678',
      bio: 'With over 15 years of experience in German automotive engineering, John leads our technical team with precision and unparalleled expertise in engine reconstruction.',
      skills: ['Engine Rebuilds', 'German Auto Specialist', 'Performance Tuning', 'Team Leadership']
    },
    {
      name: 'Mary Njeri',
      position: 'Service Manager',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop',
      email: 'mary.n@garage.co.ke',
      phone: '+254 722 987 654',
      bio: 'Mary ensures every client receives transparent communication and timely service. Her background in logistics keeps our garage running like a well-oiled machine.',
      skills: ['Client Relations', 'Logistics', 'Workflow Optimization', 'Quality Control']
    },
    {
      name: 'David Omondi',
      position: 'Diagnostic Specialist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop',
      email: 'david.o@garage.co.ke',
      phone: '+254 733 112 233',
      bio: 'A certified electrical systems expert, David utilizes state-of-the-art diagnostic tools to identify and resolve complex electronic issues that others miss.',
      skills: ['Advanced Diagnostics', 'ECU Programming', 'Hybrid Systems', 'Electrical Repair']
    },
    {
      name: 'Grace Wanjiku',
      position: 'Parts Coordinator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop',
      email: 'grace.w@garage.co.ke',
      phone: '+254 700 445 566',
      bio: 'Grace manages our extensive inventory of genuine parts, ensuring that whether it is a vintage restoration or a modern repair, we have exactly what is needed.',
      skills: ['Inventory Management', 'Vintage Sourcing', 'Supply Chain', 'Vendor Relations']
    }
  ];

  return (
    <>
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
              onClick={() => setSelectedMember(member)}
              className="cursor-pointer opacity-0 translate-y-8 transition-all duration-700 ease-out group"
              style={{
                display: 'content',
                height: 'fit-content',
                width: '21.53vw',
                transitionDelay: `${index * 100}ms`,
                background: 'transparent',
                border: 'none',
                padding: 0,
                textAlign: 'left'
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
                      zIndex: 10,
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
                    className="flex items-center justify-center transition-all duration-700 group-hover:bg-[#212121] group-hover:text-[#d4d4d4]"
                    style={{
                      width: '2.78vw',
                      height: '2.78vw',
                      aspectRatio: '1',
                      border: '2px solid #212121',
                      borderRadius: '5px',
                      backgroundColor: 'transparent',
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

      {/* TEAM MEMBER MODAL - Portal to escape transform containing block */}
      {selectedMember && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: 'rgba(0, 0, 0, 0.4)' }}
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white grid animate-slide-up-in"
            style={{
              width: '85vw',
              maxWidth: '1400px',
              gridTemplateColumns: '1fr 1.2fr',
              gap: '4.16vw',
              padding: '2.78vw',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              borderRadius: '5px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left: Image */}
            <div className="relative h-full w-full">
               <div
                  className="block w-full h-full"
                  style={{
                    background: '#f5f5f5',
                    borderRadius: '5px'
                  }}
                >
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="block w-full h-full"
                    style={{
                      borderRadius: '5px',
                      objectFit: 'cover',
                      aspectRatio: '0.85',
                    }}
                  />
                </div>
            </div>

            {/* Right: Details */}
            <div className="flex flex-col h-full">
              {/* Header Section */}
              <div className="flex justify-between items-start mb-[2vw]">
                <div>
                  <h2
                    style={{
                      fontSize: '3.33vw',
                      lineHeight: '1.1',
                      fontFamily: 'UniversalSansDisplay, Arial, Helvetica, sans-serif',
                      fontWeight: 500,
                      marginBottom: '0.55vw',
                      color: '#212121'
                    }}
                  >
                    {selectedMember.name}
                  </h2>
                  <span
                    className="uppercase block"
                    style={{
                      fontSize: '1.11vw',
                      fontFamily: 'AeonikFono-Bold, serif',
                      color: '#555',
                    }}
                  >
                    {selectedMember.position}
                  </span>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="flex items-center justify-center hover:bg-[#212121] hover:text-[#d4d4d4] transition-all duration-300"
                  style={{
                    width: '3.47vw',
                    height: '3.47vw',
                    border: '2px solid #212121',
                    borderRadius: '5px',
                    background: 'transparent',
                    cursor: 'pointer'
                  }}
                >
                   <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: '2vw', height: '2vw' }}
                  >
                    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
                    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Bio Section */}
              <div
                style={{
                  fontSize: '1.5vw',
                  lineHeight: '1.4',
                  fontFamily: 'UniversalSansText, Arial, Helvetica, sans-serif',
                  color: '#212121',
                  marginBottom: 'auto', // Pushes content below it down
                  maxWidth: '95%'
                }}
              >
                {selectedMember.bio}
              </div>

              {/* NEW SECTION: Expertise/Skills (Fills the empty space) */}
              <div className="mb-[2.78vw] mt-[2vw]">
                <span
                  className="uppercase block"
                  style={{
                    fontSize: '0.83vw',
                    fontFamily: 'AeonikFono-Bold, serif',
                    color: '#888',
                    marginBottom: '1vw'
                  }}
                >
                  Specialized Skills
                </span>
                <div className="flex flex-wrap gap-[0.55vw]">
                  {selectedMember.skills && selectedMember.skills.map((skill, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.97vw',
                        fontFamily: 'UniversalSansText, Arial, Helvetica, sans-serif',
                        padding: '0.55vw 1.11vw',
                        border: '1px solid #e5e5e5',
                        borderRadius: '100px',
                        color: '#212121'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contacts Footer */}
              <div
                className="grid gap-[1.39vw]"
                style={{
                  borderTop: '1px solid #eee',
                  paddingTop: '2.08vw',
                  fontFamily: 'AeonikFono-Bold, serif',
                }}
              >
                 <div className="flex items-center gap-4">
                    <span className="uppercase text-gray-400" style={{ fontSize: '0.83vw', width: '4vw' }}>Email</span>
                    <a href={`mailto:${selectedMember.email}`} className="hover:underline" style={{ fontSize: '1.11vw', color: '#212121' }}>
                      {selectedMember.email}
                    </a>
                 </div>
                 <div className="flex items-center gap-4">
                    <span className="uppercase text-gray-400" style={{ fontSize: '0.83vw', width: '4vw' }}>Phone</span>
                    <a href={`tel:${selectedMember.phone}`} className="hover:underline" style={{ fontSize: '1.11vw', color: '#212121' }}>
                      {selectedMember.phone}
                    </a>
                 </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Team;