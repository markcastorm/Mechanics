import { useEffect, useRef } from 'react';

const CultureGrid = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.bento-item');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('opacity-100', 'translate-y-0');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#111111] py-24 px-6 text-white" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Heading */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            More Than Just <br />
            <span className="text-[#ffd700]">A Workshop.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            We are building a legacy. Join a team where precision meets passion, and where your skills are respected and rewarded.
          </p>
        </div>

        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 h-auto md:h-[800px]">
          
          {/* Item 1: Large Text Block */}
          <div className="bento-item opacity-0 translate-y-8 transition-all duration-700 ease-out md:col-span-2 md:row-span-1 bg-[#1a1a1a] rounded-3xl p-8 flex flex-col justify-center border border-white/5 hover:border-[#ffd700]/30 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-[#ffd700]/10 flex items-center justify-center mb-4 group-hover:bg-[#ffd700] transition-colors duration-300">
               <svg className="w-6 h-6 text-[#ffd700] group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">High-Performance Culture</h3>
            <p className="text-gray-400">We don't cut corners. Whether it's a routine service or an engine rebuild, we apply the same level of obsessive detail.</p>
          </div>

          {/* Item 2: Image Block (Mechanic) */}
          <div className="bento-item opacity-0 translate-y-8 transition-all duration-700 ease-out md:col-span-1 md:row-span-2 relative rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop" 
              alt="Precision work"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <h3 className="text-xl font-bold text-white">Master Your Craft</h3>
              <p className="text-sm text-gray-300 mt-1">Work on premium vehicles.</p>
            </div>
          </div>

          {/* Item 3: Stat Block 1 */}
          <div className="bento-item opacity-0 translate-y-8 transition-all duration-700 ease-out md:col-span-1 md:row-span-1 bg-[#ffd700] rounded-3xl p-8 flex flex-col justify-between text-black">
            <h3 className="text-lg font-bold opacity-80">Annual Growth</h3>
            <div className="text-5xl font-bold tracking-tighter">40%</div>
            <p className="text-sm font-medium opacity-70">We are expanding fast.</p>
          </div>

          {/* Item 4: Stat Block 2 */}
          <div className="bento-item opacity-0 translate-y-8 transition-all duration-700 ease-out md:col-span-1 md:row-span-1 bg-[#1a1a1a] rounded-3xl p-8 border border-white/5 flex flex-col justify-between hover:border-white/20 transition-colors">
            <h3 className="text-lg font-bold text-gray-400">Tools Budget</h3>
            <div className="text-4xl font-bold text-white">Unlimited</div>
            <p className="text-sm text-gray-500">We buy what you need.</p>
          </div>

          {/* Item 5: Wide Image Block (Bottom) */}
          <div className="bento-item opacity-0 translate-y-8 transition-all duration-700 ease-out md:col-span-3 md:row-span-1 relative rounded-3xl overflow-hidden group">
             <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/40 transition-colors" />
             <img 
               src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
               alt="Teamwork" 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 z-20 flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
                <div>
                   <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Continuous Education</h3>
                   <p className="text-gray-200 max-w-lg">We sponsor ASE certifications and EV training for all senior staff.</p>
                </div>
                <div className="mt-6 md:mt-0">
                  <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white font-medium border border-white/30">
                    Learn & Earn
                  </span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CultureGrid;