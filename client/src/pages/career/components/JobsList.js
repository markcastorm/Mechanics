import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { jobsData } from '../data/jobsData'; // Adjust path if necessary

// --- Icons ---
const MapPin = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const Clock = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const Briefcase = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
const ArrowRight = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>;

const JobsList = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef(null);

  // Extract unique categories from data
  const categories = ['All', ...new Set(jobsData.map(job => job.category))];

  // Filter jobs based on selection
  const filteredJobs = activeCategory === 'All' 
    ? jobsData 
    : jobsData.filter(job => job.category === activeCategory);

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

    if (sectionRef.current) observer.observe(sectionRef.current);

    // Also observe individual job cards as they re-render
    const cards = document.querySelectorAll('.job-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredJobs]); // Re-run effect when filter changes

  return (
    <section id="open-positions" className="bg-[#111111] pb-24 px-6 relative">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header & Filter */}
        <div ref={sectionRef} className="opacity-0 translate-y-8 transition-all duration-700 ease-out mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-[#333] pb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Current Openings</h2>
              <p className="text-gray-400">Join the team that keeps Kenya moving.</p>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                    ${activeCategory === cat 
                      ? 'bg-[#ffd700] text-black border-[#ffd700]' 
                      : 'bg-transparent text-gray-400 border-[#333] hover:border-gray-500 hover:text-white'}
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Jobs List */}
        <div className="flex flex-col gap-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div 
                key={job.id}
                className="job-card group relative bg-[#1f1f1f] border border-[#333] hover:border-[#ffd700] rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 opacity-0 translate-y-8 ease-out"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  
                  {/* Left: Job Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[#ffd700] text-xs font-bold uppercase tracking-wider border border-[#ffd700]/30 bg-[#ffd700]/10 px-2 py-1 rounded">
                        {job.category}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <Clock /> {job.postedAt}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ffd700] transition-colors">
                      {job.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-y-2 gap-x-6 text-gray-400 text-sm mb-4">
                      <span className="flex items-center gap-2">
                        <MapPin /> {job.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Briefcase /> {job.type}
                      </span>
                      <span className="flex items-center gap-2 text-gray-300">
                        KES {job.salary}
                      </span>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                      {job.description}
                    </p>
                  </div>

                  {/* Right: Action */}
                  <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:border-l border-[#333] md:pl-8 min-w-[140px]">
                    <Link 
                      to={`/careers/${job.slug}`} // Assuming you have a dynamic job details page
                      className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-[#ffd700] text-black font-bold rounded-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                    >
                      Apply Now
                      <ArrowRight />
                    </Link>
                  </div>

                </div>
              </div>
            ))
          ) : (
            // Empty State
            <div className="text-center py-20 bg-[#1f1f1f] rounded-2xl border border-dashed border-[#333]">
              <p className="text-gray-400 text-lg">No open positions in this category right now.</p>
              <button 
                onClick={() => setActiveCategory('All')}
                className="mt-4 text-[#ffd700] hover:underline font-medium"
              >
                View all openings
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default JobsList;