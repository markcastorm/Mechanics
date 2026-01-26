const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#0a0a0b] text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&h=1080&fit=crop"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-car-repair-shop-8533/1080p.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 md:px-10">
        {/* Main Title */}
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-8 animate-fade-in-up">
            <span className="block">The Power of</span>
            <span className="block">Expert Care</span>
          </h1>

          {/* CTA Button */}
          <a
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF5C39] hover:bg-[#ff7050] text-white font-medium text-lg rounded-xl transition-all duration-300 group animate-fade-in-up animation-delay-200"
          >
            <span>Book Your Service</span>
            <svg
              width="20"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <path
                d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 8L0 9H16V8V7L0 7L0 8Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>

        {/* Bottom Text */}
        <div className="absolute bottom-12 left-0 right-0">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-3 gap-4 text-center text-sm md:text-base uppercase tracking-widest text-gray-400 font-light">
              <div className="animate-fade-in-up animation-delay-400">TRUSTED SERVICE</div>
              <div className="animate-fade-in-up animation-delay-600">SINCE 1995</div>
              <div className="animate-fade-in-up" style={{ animationDelay: '800ms' }}>YOUR GARAGE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
