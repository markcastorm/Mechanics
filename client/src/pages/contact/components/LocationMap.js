import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// --- Icons ---
const MapPinIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const PhoneIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const ArrowUpRight = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>;

// --- Custom Styles (Marker Pulse + Hide Scrollbar) ---
const customStyles = `
  /* Pulse Animation for Map Marker */
  @keyframes pulse-gold {
    0% { box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.7); }
    70% { box-shadow: 0 0 0 15px rgba(255, 215, 0, 0); }
    100% { box-shadow: 0 0 0 0 rgba(255, 215, 0, 0); }
  }
  .custom-pin {
    background-color: #ffd700;
    border: 3px solid #ffffff;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    animation: pulse-gold 2s infinite;
  }

  /* HIDE SCROLLBAR UTILITY */
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
`;

const createCustomIcon = () => new L.divIcon({
  className: 'custom-pin-container',
  html: `<div class="custom-pin"></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

// --- Data ---
const locations = [
  {
    name: 'Main Workshop',
    area: 'Industrial Area',
    address: '123 Industrial Area Road, Nairobi',
    phone: '+254 712 345 678',
    coordinates: [-1.3194, 36.8292] 
  },
  {
    name: 'Westlands Branch',
    area: 'Westlands',
    address: '45 Waiyaki Way, Westlands, Nairobi',
    phone: '+254 712 345 679',
    coordinates: [-1.2674, 36.8074]
  },
  {
    name: 'Mombasa Road Hub',
    area: 'Mombasa Road',
    address: '78 Mombasa Road, Nairobi',
    phone: '+254 712 345 680',
    coordinates: [-1.3105, 36.8515]
  }
];

// --- Helper Component: Fly to location smoothly ---
function FlyToLocation({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, { animate: true, duration: 1.5, easeLinearity: 0.25 });
  }, [center, zoom, map]);
  return null;
}

const LocationMap = () => {
  const [activeLocation, setActiveLocation] = useState(0);
  const headingRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('animate-slide-up-in');
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-[#f8f9fa] py-24 px-6 overflow-hidden font-sans">
      <style>{customStyles}</style>

      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            ref={headingRef} 
            className="text-4xl md:text-5xl font-bold text-[#1a1a1a] opacity-0 translate-y-8 transition-all duration-700 ease-out"
          >
            Find Us on the Map
          </h2>
          <p className="mt-4 text-gray-500 text-lg">Visit one of our three convenient locations across Nairobi.</p>
        </div>

        {/* Main Content Grid */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100"
        >
          
          {/* Left Column: Location Cards (Scrollbar Hidden) */}
          <div className="lg:col-span-1 flex flex-col gap-4 h-[600px] overflow-y-auto hide-scrollbar">
            {locations.map((loc, index) => {
              const isActive = activeLocation === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveLocation(index)}
                  className={`
                    p-6 rounded-xl cursor-pointer transition-all duration-300 border
                    ${isActive 
                      ? 'bg-[#1a1a1a] border-[#1a1a1a] shadow-xl scale-[1.02]' 
                      : 'bg-white border-gray-200 hover:border-[#ffd700] hover:shadow-md'}
                  `}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-[#ffd700]' : 'text-gray-500'}`}>
                        {loc.area}
                      </span>
                      <h3 className={`text-xl font-bold mt-1 ${isActive ? 'text-white' : 'text-[#1a1a1a]'}`}>
                        {loc.name}
                      </h3>
                    </div>
                    {isActive && (
                      <div className="w-2 h-2 rounded-full bg-[#ffd700] animate-pulse"></div>
                    )}
                  </div>

                  <div className={`space-y-3 mb-6 ${isActive ? 'text-gray-300' : 'text-gray-600'}`}>
                    <div className="flex items-start gap-3">
                      <div className="mt-1"><MapPinIcon /></div>
                      <p className="text-sm leading-relaxed">{loc.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div><PhoneIcon /></div>
                      <p className="text-sm font-medium">{loc.phone}</p>
                    </div>
                  </div>

                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${loc.coordinates[0]},${loc.coordinates[1]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-flex items-center gap-2 text-sm font-bold pb-1 border-b transition-all
                      ${isActive 
                        ? 'text-[#ffd700] border-[#ffd700] hover:text-white hover:border-white' 
                        : 'text-[#1a1a1a] border-gray-300 hover:text-[#ffd700] hover:border-[#ffd700]'}
                    `}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Get Directions <ArrowUpRight />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Right Column: The Map */}
          <div className="lg:col-span-2 h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 relative z-0">
            <MapContainer
              center={[-1.2864, 36.8172]}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
              scrollWheelZoom={false}
              zoomControl={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              />

              {locations.map((loc, index) => (
                <Marker
                  key={index}
                  position={loc.coordinates}
                  icon={createCustomIcon()}
                  eventHandlers={{ 
                    click: () => {
                      setActiveLocation(index);
                    }
                  }}
                />
              ))}

              <FlyToLocation center={locations[activeLocation].coordinates} zoom={15} />
            </MapContainer>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationMap;