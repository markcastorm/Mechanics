import React, { useEffect, useRef } from 'react';

// --- Icon Components ---
// These are the SVG icons from your design, converted to React components.

const ListenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 512 512" fill="currentColor">
    <path d="M398.3 3.40026C382.5 -4.49974 363.3 1.90026 355.4 17.7003C347.5 33.5003 353.9 52.6003 369.6 60.6003L370 60.8003C370.4 61.0003 371.1 61.4003 372.1 62.0003C374.1 63.2003 377.1 65.0003 380.8 67.6003C388.3 72.8003 398.4 80.8003 408.5 91.8003C428.5 113.4 448 146 448 192C448 209.7 462.3 224 480 224C497.7 224 512 209.7 512 192C512 126 483.5 78.6003 455.5 48.3003C441.6 33.2003 427.7 22.2003 417.3 15.0003C412 11.3003 407.6 8.60026 404.3 6.70026C402.7 5.70026 401.3 5.00026 400.3 4.50026C399.8 4.20026 399.4 4.00026 399.1 3.80026L398.7 3.60026L398.5 3.50026C398.5 3.50026 398.5 3.50026 398.4 3.50026L384 32.0003L398.3 3.40026ZM128.7 227.5C134.9 171.5 182.4 128 240 128C301.9 128 352 178.1 352 240C352 269.3 340.8 295.9 322.4 315.9C305.4 334.3 288 361 288 393.9V400C288 426.5 266.5 448 240 448C222.3 448 208 462.3 208 480C208 497.7 222.3 512 240 512C301.9 512 352 461.9 352 400V393.9C352 384.1 357.4 372.2 369.4 359.2C398.3 327.9 416 286 416 240C416 142.8 337.2 64.0003 240 64.0003C149.4 64.0003 74.8 132.5 65.1 220.5C63.2 238.1 75.8 253.9 93.4 255.8C111 257.7 126.8 245.1 128.7 227.5ZM32 512C40.4869 512 48.6263 508.629 54.6274 502.628C60.6286 496.627 64 488.487 64 480C64 471.513 60.6286 463.374 54.6274 457.373C48.6263 451.372 40.4869 448 32 448C23.5131 448 15.3737 451.372 9.37258 457.373C3.37142 463.374 0 471.513 0 480C0 488.487 3.37142 496.627 9.37258 502.628C15.3737 508.629 23.5131 512 32 512ZM192 352C192 343.513 188.629 335.374 182.627 329.373C176.626 323.372 168.487 320 160 320C151.513 320 143.374 323.372 137.373 329.373C131.371 335.374 128 343.513 128 352C128 360.487 131.371 368.627 137.373 374.628C143.374 380.629 151.513 384 160 384C168.487 384 176.626 380.629 182.627 374.628C188.629 368.627 192 360.487 192 352ZM41.4 361.4C28.9 373.9 28.9 394.2 41.4 406.7L105.4 470.7C117.9 483.2 138.2 483.2 150.7 470.7C163.2 458.2 163.2 437.9 150.7 425.4L86.7 361.4C74.2 348.9 53.9 348.9 41.4 361.4ZM208 240C208 222.3 222.3 208 240 208C257.7 208 272 222.3 272 240C272 253.3 282.7 264 296 264C309.3 264 320 253.3 320 240C320 195.8 284.2 160 240 160C195.8 160 160 195.8 160 240C160 253.3 170.7 264 184 264C197.3 264 208 253.3 208 240Z" />
  </svg>
);

const AdaptIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 512 512" fill="currentColor">
    <path d="M105.1 202.6C112.8 180.8 125.3 160.3 142.9 142.8C205.4 80.2996 306.7 80.2996 369.2 142.8L386.3 160H352C334.3 160 320 174.3 320 192C320 209.7 334.3 224 352 224H463.5H463.9C481.6 224 495.9 209.7 495.9 192V79.9996C495.9 62.2996 481.6 47.9996 463.9 47.9996C446.2 47.9996 431.9 62.2996 431.9 79.9996V115.2L414.4 97.5996C326.9 10.0996 185.1 10.0996 97.6 97.5996C73.2 122 55.6 150.7 44.8 181.4C38.9 198.1 47.7 216.3 64.3 222.2C80.9 228.1 99.2 219.3 105.1 202.7V202.6ZM39 289.3C34 290.8 29.2 293.5 25.3 297.5C21.3 301.5 18.6 306.3 17.2 311.5C16.9 312.7 16.6 314 16.4 315.3C16.1 317 16 318.7 16 320.4V432C16 449.7 30.3 464 48 464C65.7 464 80 449.7 80 432V396.9L97.6 414.4C185.1 501.8 326.9 501.8 414.3 414.4C438.7 390 456.4 361.3 467.2 330.6C473.1 313.9 464.3 295.7 447.7 289.8C431.1 283.9 412.8 292.7 406.9 309.3C399.2 331.1 386.7 351.6 369.1 369.1C306.6 431.6 205.3 431.6 142.8 369.1L142.7 369L125.6 352H160C177.7 352 192 337.7 192 320C192 302.3 177.7 288 160 288H48.4C46.8 288 45.2 288.1 43.6 288.3C42 288.5 40.5 288.8 39 289.3Z" />
  </svg>
);

const DeliverIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 640 512" fill="currentColor">
    <path d="M112 0C85.5 0 64 21.5 64 48V96H16C7.2 96 0 103.2 0 112C0 120.8 7.2 128 16 128H64H272C280.8 128 288 135.2 288 144C288 152.8 280.8 160 272 160H64H48C39.2 160 32 167.2 32 176C32 184.8 39.2 192 48 192H64H240C248.8 192 256 199.2 256 208C256 216.8 248.8 224 240 224H64H16C7.2 224 0 231.2 0 240C0 248.8 7.2 256 16 256H64H208C216.8 256 224 263.2 224 272C224 280.8 216.8 288 208 288H64V416C64 469 107 512 160 512C213 512 256 469 256 416H384C384 469 427 512 480 512C533 512 576 469 576 416H608C625.7 416 640 401.7 640 384C640 366.3 625.7 352 608 352V288V256V237.3C608 220.3 601.3 204 589.3 192L512 114.7C500 102.7 483.7 96 466.7 96H416V48C416 21.5 394.5 0 368 0H112ZM544 237.3V256H416V160H466.7L544 237.3ZM160 368C172.73 368 184.939 373.057 193.941 382.059C202.943 391.061 208 403.27 208 416C208 428.73 202.943 440.939 193.941 449.941C184.939 458.943 172.73 464 160 464C147.27 464 135.061 458.943 126.059 449.941C117.057 440.939 112 428.73 112 416C112 403.27 117.057 391.061 126.059 382.059C135.061 373.057 147.27 368 160 368ZM432 416C432 403.27 437.057 391.061 446.059 382.059C455.061 373.057 467.27 368 480 368C492.73 368 504.939 373.057 513.941 382.059C522.943 391.061 528 403.27 528 416C528 428.73 522.943 440.939 513.941 449.941C504.939 458.943 492.73 464 480 464C467.27 464 455.061 458.943 446.059 449.941C437.057 440.939 432 428.73 432 416Z" />
  </svg>
);


// Data for the values grid
const valuesData = [
  {
    Icon: ListenIcon,
    title: 'We listen.',
    description: 'We take the time to understand your vehicle concerns and explain every repair clearly before we start.',
  },
  {
    Icon: AdaptIcon,
    title: 'We adapt.',
    description: 'We stay current with evolving automotive technology, from traditional engines to modern electric vehicles.',
  },
  {
    Icon: DeliverIcon,
    title: 'We deliver.',
    description: "We complete quality repairs on time, with genuine parts and a comprehensive warranty you can trust.",
  },
];

const Values = () => {
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const valuesRef = useRef([]);

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
    if (descriptionRef.current) observer.observe(descriptionRef.current);

    valuesRef.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      style={{ 
        backgroundColor: '#222', 
        color: '#f5f5f5', 
        padding: '8rem 0',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        borderTop: '1px solid #3a3a3a' // Adds a subtle separator line
      }}
    >
      <div style={{ maxWidth: '1424px', margin: '0 auto', padding: '0 4rem' }}>
        {/* --- Header --- */}
        <div style={{ marginBottom: '5rem' }}>
          <h2
            ref={headingRef}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '600', marginBottom: '1.5rem', maxWidth: '30ch' }}
          >
            Our values in action
          </h2>
          <p
            ref={descriptionRef}
            className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{ fontSize: '1.125rem', color: '#b0b0b0', maxWidth: '60ch', lineHeight: '1.6', transitionDelay: '100ms' }}
          >
            These values guide every service we provide. They ensure our team works with integrity, expertise, and dedication to keep your vehicle running smoothly and safely.
          </p>
        </div>

        {/* --- Values Grid --- */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem'
        }}>
          {valuesData.map((value, index) => (
            <div
              key={index}
              ref={el => valuesRef.current[index] = el}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  backgroundColor: 'rgba(75, 224, 181, 0.1)',
                  color: '#4be0b5',
                  borderRadius: '8px',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <div style={{ width: '20px', height: '20px' }}>
                    <value.Icon />
                  </div>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>{value.title}</h3>
              </div>
              <p style={{ color: '#b0b0b0', lineHeight: '1.6', fontSize: '1rem' }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;