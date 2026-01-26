import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const ComingSoon = ({
  pageTitle = "Coming Soon",
  description = "We're working hard to bring you this feature. Check back soon!",
  showContactCTA = true
}) => {
  const contentRef = useRef(null);

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

    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#111111] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF5C39]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF5C39]/10 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="relative z-10 container mx-auto px-6 text-center opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-[#FF5C39]/10 rounded-full mb-8">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FF5C39"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
            {pageTitle}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="px-8 py-4 bg-[#FF5C39] hover:bg-[#ff7050] text-white font-bold text-lg rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              Back to Home
            </Link>

            {showContactCTA && (
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white/40 text-white font-medium text-lg rounded-full hover:bg-white/10 hover:border-white/60 transition-all backdrop-blur-sm"
              >
                Contact Us
              </Link>
            )}
          </div>

          {/* Decorative elements */}
          <div className="mt-16 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#FF5C39] animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-[#FF5C39] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full bg-[#FF5C39] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="bg-[#1a1a1a] py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What to Expect
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-[#FF5C39]/50 transition-all">
              <div className="w-12 h-12 bg-[#FF5C39] rounded-full flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Content</h3>
              <p className="text-gray-400 leading-relaxed">
                In-depth articles and guides from our experienced automotive technicians.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-[#FF5C39]/50 transition-all">
              <div className="w-12 h-12 bg-[#FF5C39] rounded-full flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="3" y1="9" x2="21" y2="9"/>
                  <line x1="9" y1="21" x2="9" y2="9"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Regular Updates</h3>
              <p className="text-gray-400 leading-relaxed">
                Fresh content covering the latest automotive trends and maintenance tips.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-[#FF5C39]/50 transition-all">
              <div className="w-12 h-12 bg-[#FF5C39] rounded-full flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Community Driven</h3>
              <p className="text-gray-400 leading-relaxed">
                Answering your questions and addressing real-world automotive challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComingSoon;
