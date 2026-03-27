import { useEffect, useRef } from 'react';

const Values = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current.querySelectorAll('.reveal-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#111111] py-24 px-6">
      <div ref={containerRef} className="max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal-item opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Why Work With <span className="text-[#FF5C39]">Us?</span>
            </h2>
            <p className="text-xl text-gray-400 mt-4 max-w-lg">
              Join Nairobi's premier automotive service center where skilled technicians thrive and grow.
            </p>
          </div>
          <div className="hidden md:block h-[1px] flex-1 bg-[#333] mx-12 mb-4"></div>
          <div className="text-right">
             <span className="block text-[#FF5C39] font-mono text-sm mb-1">EST. 2018</span>
             <span className="block text-white font-mono text-sm">NAIROBI, KENYA</span>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          
          {/* Card 1: Large Image (Innovation) - Spans 2 Cols */}
          <div className="reveal-item opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100 md:col-span-2 relative group overflow-hidden rounded-3xl bg-[#1a1a1a]">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop"
              alt="Modern Workshop Equipment"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="relative z-20 p-8 h-full flex flex-col justify-end">
              <div className="w-12 h-12 bg-[#FF5C39] rounded-full flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.61-.26"/><path d="M8 14v.01M12 14v.01M16 14v.01"/></svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Modern Equipment & Tools</h3>
              <p className="text-gray-200 text-lg max-w-md">Work with the latest diagnostic scanners, hydraulic lifts, and professional-grade tools from day one.</p>
            </div>
          </div>

          {/* Card 2: Solid Color (Compensation) - Spans 1 Col */}
          <div className="reveal-item opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200 relative overflow-hidden rounded-3xl bg-[#FF5C39] p-8 flex flex-col group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.61 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/></svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Competitive Compensation</h3>
              <ul className="space-y-2.5">
                <li className="flex items-center gap-2 text-white/90 font-medium text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></div>
                  Above-Market Wages
                </li>
                <li className="flex items-center gap-2 text-white/90 font-medium text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></div>
                  Monthly Performance Bonuses
                </li>
                <li className="flex items-center gap-2 text-white/90 font-medium text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></div>
                  Paid Overtime & Holidays
                </li>
                <li className="flex items-center gap-2 text-white/90 font-medium text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></div>
                  Medical & NHIF Coverage
                </li>
                <li className="flex items-center gap-2 text-white/90 font-medium text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></div>
                  Tool Allowance
                </li>
                <li className="flex items-center gap-2 text-white/90 font-medium text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></div>
                  Annual Leave Benefits
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Dark Text (Growth) - Spans 1 Col */}
          <div className="reveal-item opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300 rounded-3xl bg-[#1f1f1f] p-8 border border-[#333] hover:border-[#FF5C39] transition-colors group">
            <div className="h-12 w-12 bg-[#333] rounded-xl flex items-center justify-center mb-8 text-white group-hover:text-[#FF5C39] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Professional Development</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We sponsor certifications, provide ongoing manufacturer training, and support your growth in hybrid and electric vehicle technology.
            </p>
            <div className="w-full h-1 bg-[#333] rounded-full overflow-hidden">
               <div className="w-2/3 h-full bg-[#FF5C39]"></div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-right">80% of senior techs promoted internally</p>
          </div>

          {/* Card 4: Wide Banner (Culture) - Spans 2 Cols */}
          <div className="reveal-item opacity-0 translate-y-8 transition-all duration-700 ease-out delay-400 md:col-span-2 rounded-3xl bg-[#1f1f1f] border border-[#333] p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
             <div className="flex-1 relative z-10">
               <h3 className="text-3xl font-bold text-white mb-4">A Culture of Excellence</h3>
               <p className="text-gray-400 text-lg leading-relaxed mb-6">
                 "We don't just fix cars we build careers. Every technician here has room to grow, access to real tools, and the backing of a team that takes quality seriously. If you bring the skill, we bring the opportunity."
               </p>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-gray-600 overflow-hidden">
                    <img src="/TeamPics/Team2.jpeg" alt="David Muia" className="w-full h-full object-cover"/>
                 </div>
                 <div>
                    <p className="text-white font-bold">David Muia</p>
                    <p className="text-[#FF5C39] text-sm">Service Manager</p>
                 </div>
               </div>
             </div>
             <div className="flex-1 w-full h-64 md:h-full rounded-2xl overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80" alt="Professional Automotive Team" className="absolute inset-0 w-full h-full object-cover"/>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Values;