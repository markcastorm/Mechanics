import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const prevScrollPos = useRef(0);

  // Navigation items for the center section
  const navLinks = [
    { name: 'Services', href: '/services', active: false },
    { name: 'About Us', href: '/about', active: false },
    { name: 'Blogs', href: '/blogs', active: false },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos < 50) {
        // At top of page - always expanded
        setIsScrolled(false);
      } else if (prevScrollPos.current > currentScrollPos) {
        // Scrolling up - expand navbar
        setIsScrolled(false);
      } else if (prevScrollPos.current < currentScrollPos) {
        // Scrolling down - shrink navbar
        setIsScrolled(true);
      }

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out top-6"
    >
      <div
        className={`flex items-center bg-[#111113] border border-white/5 shadow-2xl transition-all duration-500 ease-out ${
          isScrolled
            ? 'px-3 py-2 rounded-xl'
            : 'px-4 py-3 rounded-2xl'
        }`}
        style={{
          backdropFilter: 'none',
          WebkitBackdropFilter: 'none'
        }}
      >

        {/* Logo Section */}
        <a
          href="/"
          className={`flex items-center gap-2 transition-all duration-500 ease-out hover:opacity-80 ${
            isScrolled ? 'pr-3' : 'pr-4'
          }`}
        >
          <div className="w-5 h-5 bg-[#FF5C39] rounded-sm flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold italic text-sm leading-none" style={{ fontFamily: '"Playfair Display", serif' }}>S</span>
          </div>
          <span className="text-white font-medium text-base whitespace-nowrap tracking-tight leading-[1.4em]">
            Shah Automotives
          </span>
        </a>

        {/* Separator 1 - Fades out when scrolled */}
        <div
          className={`h-4 bg-white/10 transition-all duration-500 ease-out overflow-hidden ${
            isScrolled ? 'w-0 opacity-0' : 'w-[1px] opacity-100'
          }`}
        />

        {/* Middle Links - Collapse when scrolled */}
        <div
          className={`flex items-center gap-6 overflow-hidden transition-all duration-500 ease-out ${
            isScrolled
              ? 'max-w-0 opacity-0 px-0'
              : 'max-w-[500px] opacity-100 px-6'
          }`}
        >
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-base font-normal whitespace-nowrap transition-all duration-300 leading-[1.4em] ${
                link.active ? 'text-[#FF5C39]' : 'text-gray-400 hover:text-white'
              }`}
              style={{
                transitionDelay: isScrolled ? '0ms' : `${index * 50}ms`
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Separator 2 - Fades out when scrolled */}
        <div
          className={`h-4 bg-white/10 transition-all duration-500 ease-out overflow-hidden ${
            isScrolled ? 'w-0 opacity-0' : 'w-[1px] opacity-100'
          }`}
        />

        {/* External Links Section - Collapse when scrolled */}
        <div
          className={`flex items-center gap-5 overflow-hidden transition-all duration-500 ease-out ${
            isScrolled
              ? 'max-w-0 opacity-0 px-0'
              : 'max-w-[200px] opacity-100 px-6'
          }`}
        >
          <a
            href="/careers"
            className="text-gray-400 hover:text-white text-base font-normal leading-[1.4em] flex items-center gap-1 group whitespace-nowrap"
          >
            Careers
            <svg width="7" height="8" viewBox="0 0 7 8" fill="none" className="opacity-50 group-hover:opacity-100 transition-opacity">
              <path d="M6.853 6.073H5.853V2.28L0.706 7.427L0 6.72L5.146 1.573H1.353V0.573H6.853V6.073Z" fill="currentColor"/>
            </svg>
          </a>
          {/* <a
            href="https://heimdallcloud.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-base font-normal leading-[1.4em] flex items-center gap-1 group whitespace-nowrap"
          >
            Log In
            <svg width="7" height="8" viewBox="0 0 7 8" fill="none" className="opacity-50 group-hover:opacity-100 transition-opacity">
              <path d="M6.853 6.073H5.853V2.28L0.706 7.427L0 6.72L5.146 1.573H1.353V0.573H6.853V6.073Z" fill="currentColor"/>
            </svg>
          </a> */}
        </div>

        {/* The Contact Button - Always Visible */}
        <a
          href="/contact"
          className="flex items-center bg-[#1b1b1e] hover:bg-[#252529] transition-all duration-300 rounded-full pl-5 pr-1.5 py-1 gap-3 border border-white/5 group flex-shrink-0"
        >
          <span className="text-white text-base font-medium leading-[1.4em]">Contact</span>
          <div className="w-7 h-7 bg-[#FF5C39] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="text-[#111113]"
            >
              <path
                d="M1 5.25C0.586 5.25 0.25 5.586 0.25 6C0.25 6.414 0.586 6.75 1 6.75V5.25ZM11.53 6.53C11.823 6.237 11.823 5.763 11.53 5.47L6.757 0.697C6.464 0.404 5.99 0.404 5.697 0.697C5.404 0.99 5.404 1.464 5.697 1.757L9.939 6L5.697 10.243C5.404 10.536 5.404 11.01 5.697 11.303C5.99 11.596 6.464 11.596 6.757 11.303L11.53 6.53ZM1 6V6.75H11V6V5.25H1V6Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </a>

        {/* Mobile Menu Button - Hidden on desktop */}
        <button
          className={`ml-2 w-8 h-8 bg-[#FF5C39] rounded-md items-center justify-center md:hidden transition-all duration-300 ${
            isScrolled ? 'flex' : 'hidden'
          }`}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 4H14M2 8H14M2 12H14" stroke="#111113" strokeWidth="2" strokeLinecap="square"/>
          </svg>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
