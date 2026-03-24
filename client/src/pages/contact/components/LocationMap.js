import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, ZoomControl, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// --- Icons ---
const MapPinIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const PhoneIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const ArrowUpRight = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>;

// --- Custom Styles ---
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
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  }

  /* HIDE SCROLLBAR UTILITY */
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
`;

const createCustomIcon = () => new L.divIcon({
  className: 'custom-pin-container',
  html: `<div class="custom-pin"></div>`,
  iconSize:[24, 24],
  iconAnchor: [12, 12],
});

// --- Data ---
const locations = [
  {
    name: 'Main Workshop',
    area: 'South B',
    address: 'South B, Nairobi',
    phone: '+254 712 345 678',
    coordinates: [-1.3183892, 36.8174934]
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

  // Fixed the animation logic to properly utilize Tailwind classes
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-8');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  },[]);

  return (
    <section className="relative bg-[#f8f9fa] py-24 px-6 overflow-hidden font-sans">
      <style>{customStyles}</style>

      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div 
          ref={headingRef} 
          className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
            Find Us on the Map
          </h2>
          <p className="mt-4 text-gray-500 text-lg">Visit our workshops and showrooms across Nairobi.</p>
        </div>

        {/* Main Content Grid */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-150"
        >
          
          {/* Left Column: Location Cards */}
          {/* Added p-2 and -m-2 to prevent shadow clipping on the scrollable container */}
          <div className="lg:col-span-1 flex flex-col gap-5 lg:max-h-[600px] overflow-y-auto hide-scrollbar p-2 -m-2">
            {locations.map((loc, index) => {
              const isActive = activeLocation === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveLocation(index)}
                  className={`
                    p-6 rounded-2xl cursor-pointer transition-all duration-300 border
                    ${isActive 
                      ? 'bg-[#1a1a1a] border-[#1a1a1a] shadow-xl scale-[1.02] ring-4 ring-[#ffd700]/20' 
                      : 'bg-white border-gray-200 hover:border-[#ffd700] hover:shadow-lg hover:-translate-y-1'}
                  `}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-[#ffd700]' : 'text-gray-500'}`}>
                        {loc.area}
                      </span>
                      <h3 className={`text-xl font-bold mt-1 ${isActive ? 'text-white' : 'text-[#1a1a1a]'}`}>
                        {loc.name}
                      </h3>
                    </div>
                    {isActive && (
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffd700] animate-pulse mt-1 shadow-[0_0_8px_rgba(255,215,0,0.8)]"></div>
                    )}
                  </div>

                  <div className={`space-y-3 mb-6 ${isActive ? 'text-gray-300' : 'text-gray-600'}`}>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5"><MapPinIcon /></div>
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
                      inline-flex items-center gap-2 text-sm font-bold pb-1 border-b-2 transition-all
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
          <div className="lg:col-span-2 h-[450px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 relative z-0">
            <MapContainer
              center={locations[0].coordinates}
              zoom={14}
              style={{ height: '100%', width: '100%' }}
              scrollWheelZoom={false}
              zoomControl={false} // Disable default top-left control
            >
              <TileLayer
                attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              />
              
              {/* Added Zoom control cleanly to the bottom right */}
              <ZoomControl position="bottomright" />

              {locations.map((loc, index) => (
                <Marker
                  key={index}
                  position={loc.coordinates}
                  icon={createCustomIcon()}
                  eventHandlers={{ 
                    click: () => setActiveLocation(index)
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