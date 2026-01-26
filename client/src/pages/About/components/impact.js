import React, { useState, useEffect, useRef } from 'react';

// Data for the tabs. This makes it easy to add, remove, or edit content.
const tabsData = [
  {
    name: 'Sustainability',
    title: 'Eco-friendly automotive service',
    description: "We responsibly recycle oil, fluids, and parts. Our shop uses energy-efficient equipment and proper waste disposal to minimize environmental impact while keeping your car running clean.",
    imageUrl: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=600&h=600&fit=crop',
  },
  {
    name: 'Community',
    title: 'Supporting local drivers',
    description: 'We offer apprenticeships to young mechanics, provide free vehicle safety checks for community members, and partner with local driving schools to promote safe vehicle maintenance.',
    imageUrl: 'https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=600&h=600&fit=crop',
  },
  {
    name: 'Training',
    title: 'Continuous skill development',
    description: 'Our mechanics attend regular training on the latest automotive technology, diagnostic tools, and safety standards to ensure expert service for every vehicle type.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=600&fit=crop',
  },
];

const Impact = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].name);
  const headingRef = useRef(null);
  const tabContainerRef = useRef(null);

  const activeContent = tabsData.find(tab => tab.name === activeTab);

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
    if (tabContainerRef.current) observer.observe(tabContainerRef.current);

    return () => observer.disconnect();
  }, []);

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
            Our commitment extends beyond repairs
          </h2>
        </div>

        {/* --- Tab Component --- */}
        <div
          ref={tabContainerRef}
          className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
          style={{
            transitionDelay: '100ms',
          backgroundColor: '#2a2a2a',
          borderRadius: '12px',
          display: 'grid',
          gridTemplateColumns: '30% 70%',
          overflow: 'hidden'
        }}>
          {/* Left Side: Tab Navigation */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {tabsData.map((tab, index) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                style={{
                  flex: '1 1 0', // Ensures buttons grow to fill space
                  padding: '0 2.5rem',
                  textAlign: 'left',
                  backgroundColor: activeTab === tab.name ? '#ffd700' : 'transparent',
                  color: activeTab === tab.name ? '#1a1a1a' : '#f5f5f5',
                  border: 'none',
                  borderBottom: index === tabsData.length - 1 ? 'none' : '1px solid #3a3a3a', // No border on the last item
                  cursor: 'pointer',
                  fontSize: '1.375rem',
                  fontWeight: '500',
                  transition: 'background-color 0.3s, color 0.3s',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Right Side: Tab Content */}
          <div style={{ padding: '3.5rem', borderLeft: '1px solid #3a3a3a' }}>
            {activeContent && (
              <div style={{ display: 'grid', gridTemplateColumns: '40% 60%', gap: '3rem', alignItems: 'center' }}>
                {/* Image */}
                <div style={{ aspectRatio: '1 / 1', borderRadius: '8px', overflow: 'hidden' }}>
                  <img src={activeContent.imageUrl} alt={activeContent.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                </div>
                {/* Text Content */}
                <div>
                  <h3 style={{ fontSize: '2.25rem', fontWeight: '600', marginBottom: '1.5rem' }}>{activeContent.title}</h3>
                  <p style={{ color: '#b0b0b0', lineHeight: '1.6', fontSize: '1.125rem' }}>{activeContent.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;