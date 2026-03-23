import { useEffect, useRef, useState } from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const TermsOfUse = () => {
  const [activeSection, setActiveSection] = useState('section-0');
  const contentRef = useRef(null);
  const sectionRefs = useRef([]);

  const sections =[
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      content: 'By accessing and using the Shah Automotives website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please discontinue use of our website and services immediately.'
    },
    {
      id: 'services',
      title: '2. Services Description',
      content: 'Shah Automotives provides professional automotive repair, maintenance, and diagnostic services in Nairobi. Our website serves as an informational platform and a means of communication between our team and customers. Service availability, pricing, and scheduling are subject to change without prior notice.'
    },
    {
      id: 'responsibilities',
      title: '3. User Responsibilities',
      content: 'You agree to provide accurate and complete information when using our contact forms, booking services, or subscribing to our newsletter. You are responsible for maintaining the confidentiality of any account information and for all activities that occur under your account. You must not use our services for any unlawful purpose.'
    },
    {
      id: 'ip',
      title: '4. Intellectual Property',
      content: 'All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Shah Automotives and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.'
    },
    {
      id: 'pricing',
      title: '5. Service Estimates & Pricing',
      content: 'Any estimates provided through our website or during consultations are approximate and subject to change upon physical inspection of your vehicle. Final pricing will be confirmed before any work begins. Shah Automotives reserves the right to adjust pricing based on the actual scope of work required.'
    },
    {
      id: 'liability',
      title: '6. Limitation of Liability',
      content: 'Shah Automotives shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services. Our total liability for any claim shall not exceed the amount paid by you for the specific service in question. We are not responsible for any delays caused by parts availability or circumstances beyond our control.'
    },
    {
      id: 'privacy',
      title: '7. Privacy & Data Collection',
      content: 'We collect and process personal data in accordance with applicable data protection laws. Information collected through our website, including email subscriptions and contact form submissions, is used solely for the purpose of providing and improving our services. We do not sell or share your personal information with third parties for marketing purposes.'
    },
    {
      id: 'communications',
      title: '8. Newsletter & Communications',
      content: 'By subscribing to our newsletter, you consent to receive periodic emails about our services, promotions, and automotive tips. You may unsubscribe at any time by following the unsubscribe link in any email or by contacting us directly.'
    },
    {
      id: 'third-party',
      title: '9. Third-Party Links',
      content: 'Our website may contain links to third-party websites or services. Shah Automotives is not responsible for the content, privacy policies, or practices of any third-party sites. We encourage you to review the terms and privacy policies of any third-party websites you visit.'
    },
    {
      id: 'modifications',
      title: '10. Modifications to Terms',
      content: 'Shah Automotives reserves the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the website. Your continued use of our website and services after any modifications constitutes your acceptance of the updated terms.'
    },
    {
      id: 'law',
      title: '11. Governing Law',
      content: 'These Terms of Use shall be governed by and construed in accordance with the laws of Kenya. Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts in Nairobi, Kenya.'
    },
    {
      id: 'contact',
      title: '12. Contact Information',
      content: 'If you have any questions about these Terms of Use, please contact us at info@shahautomotives.com or visit our office in Nairobi. We are committed to addressing your concerns promptly.'
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    // Initial page load animation
    if (contentRef.current) {
      contentRef.current.classList.add('animate-slide-up-in');
    }

    // Scroll Spy for Table of Contents
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Triggers when section is near the top of the viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  },[]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky navbar if you have one
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#111111] min-h-screen text-gray-300 font-sans">
      <Navbar />

      <main 
        ref={contentRef}
        className="pt-32 pb-24 px-6 max-w-[1400px] mx-auto opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      >
        {/* Header Area */}
        <div className="mb-16 md:mb-24 border-b border-[#333] pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ffd700]/20 bg-[#ffd700]/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ffd700]"></span>
            <span className="text-xs font-medium text-[#ffd700] uppercase tracking-wider">Legal Document</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Terms of Use
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-4">
            Please read these terms carefully before using our website and services. By accessing Shah Automotives, you agree to the following terms and conditions.
          </p>
          <p className="text-sm font-mono text-gray-500">
            Effective Date: March 2026
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Sticky Table of Contents */}
          <aside className="hidden lg:block w-[300px] shrink-0 sticky top-32">
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Table of Contents</h3>
            <nav className="flex flex-col border-l border-[#333]">
              {sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(`section-${index}`)}
                  className={`
                    text-left py-3 pl-6 text-sm transition-all duration-200 border-l-2 -ml-[1px]
                    ${activeSection === `section-${index}` 
                      ? 'border-[#ffd700] text-[#ffd700] font-medium bg-gradient-to-r from-[#ffd700]/10 to-transparent' 
                      : 'border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-500'}
                  `}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </aside>

          {/* Right Column: Terms Content */}
          <div className="flex-1 max-w-3xl">
            <div className="prose prose-invert prose-lg max-w-none">
              {sections.map((section, index) => (
                <div 
                  key={index} 
                  id={`section-${index}`}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className="mb-16 scroll-mt-32"
                >
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-baseline gap-4">
                    {/* Add a subtle visual marker next to the heading */}
                    <span className="text-[#ffd700] text-lg opacity-50 font-mono">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    {section.title.replace(/^\d+\.\s/, '')} {/* Removes the number from title since we added it creatively above */}
                  </h2>
                  <p className="text-gray-400 leading-loose text-lg">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Contact Box */}
            <div className="mt-20 p-8 rounded-2xl bg-[#1a1a1a] border border-[#333]">
              <h3 className="text-xl font-bold text-white mb-3">Still have questions?</h3>
              <p className="text-gray-400 mb-6">
                If you have any questions regarding our terms of service, please don't hesitate to reach out to our legal team.
              </p>
              <a 
                href="mailto:info@shahautomotives.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-[#ffd700] transition-colors"
              >
                Contact Support
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfUse;