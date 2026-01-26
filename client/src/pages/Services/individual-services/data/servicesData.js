// Individual service page data with slugs for routing
export const individualServicesData = {
  'engine-diagnostics': {
    slug: 'engine-diagnostics',
    title: 'Engine Diagnostics',
    tagline: 'Precision Diagnostics for Peak Performance',
    heroDescription: 'Advanced computerized diagnostics to identify and resolve engine issues before they become costly repairs.',
    heroImage: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1600&q=80',
    features: [
      'OBD-II Computer Scanning',
      'Check Engine Light Analysis',
      'Performance Testing',
      'Emission System Diagnostics'
    ],
    quickStats: {
      avgTime: '45-90 min',
      warranty: '12 months',
      certified: 'ASE Certified'
    },
    detailsHeading: 'Comprehensive Engine Analysis',
    detailsDescription: 'Our advanced diagnostic process uses state-of-the-art equipment to accurately identify issues and provide solutions.',
    serviceDetails: [
      {
        icon: '🔍',
        title: 'Computer Diagnostics',
        description: 'Advanced OBD-II scanning to read error codes and live data streams from your engine control module.',
        items: [
          'Full system scan of all modules',
          'Error code interpretation',
          'Live data monitoring',
          'Freeze frame analysis'
        ]
      },
      {
        icon: '⚡',
        title: 'Performance Testing',
        description: 'Comprehensive tests to evaluate engine performance, efficiency, and response under various conditions.',
        items: [
          'Acceleration and power output tests',
          'Fuel efficiency analysis',
          'Throttle response evaluation',
          'Idle stability check'
        ]
      },
      {
        icon: '💨',
        title: 'Emission Analysis',
        description: 'Detailed emission system testing to ensure your vehicle meets environmental standards.',
        items: [
          'Exhaust gas analysis',
          'Catalytic converter testing',
          'O2 sensor functionality',
          'EVAP system inspection'
        ]
      },
      {
        icon: '📋',
        title: 'Detailed Report',
        description: 'Receive a comprehensive report with findings, recommendations, and repair cost estimates.',
        items: [
          'Color-coded priority system',
          'Photo documentation',
          'Repair recommendations',
          'Transparent pricing'
        ]
      }
    ]
  },

  'brake-service': {
    slug: 'brake-service',
    title: 'Brake Service & Repair',
    tagline: 'Safety First, Every Time',
    heroDescription: 'Comprehensive brake system inspection, maintenance, and repair to ensure your vehicle stops safely every time.',
    heroImage: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=1600&q=80',
    features: [
      'Brake Pad Replacement',
      'Rotor Resurfacing & Replacement',
      'Brake Fluid Flush',
      'Complete System Inspection'
    ],
    quickStats: {
      avgTime: '1-2 hours',
      warranty: '24 months',
      certified: 'Brake Safety Certified'
    },
    detailsHeading: 'Complete Brake System Service',
    detailsDescription: 'Your safety depends on reliable brakes. Our comprehensive service covers every component of your braking system.',
    serviceDetails: [
      {
        icon: '🛑',
        title: 'Brake Pad Service',
        description: 'Inspection and replacement of brake pads using premium materials for optimal stopping power.',
        items: [
          'Ceramic or metallic pad options',
          'Thickness measurement',
          'Wear indicator inspection',
          'Proper break-in procedure'
        ]
      },
      {
        icon: '⚙️',
        title: 'Rotor Service',
        description: 'Professional rotor inspection, resurfacing, or replacement to ensure smooth, vibration-free braking.',
        items: [
          'Thickness and runout measurement',
          'Surface condition assessment',
          'Precision machining when applicable',
          'Quality replacement rotors'
        ]
      },
      {
        icon: '💧',
        title: 'Brake Fluid Service',
        description: 'Complete brake fluid exchange to maintain hydraulic efficiency and prevent corrosion.',
        items: [
          'DOT 3/4 or DOT 5.1 fluid',
          'Moisture content testing',
          'Complete system bleeding',
          'ABS module service'
        ]
      },
      {
        icon: '🔧',
        title: 'System Inspection',
        description: 'Thorough examination of all brake components including calipers, lines, and hardware.',
        items: [
          'Caliper operation check',
          'Brake line inspection',
          'Hardware lubrication',
          'Parking brake adjustment'
        ]
      }
    ]
  },

  'tire-suspension': {
    slug: 'tire-suspension',
    title: 'Tire & Suspension',
    tagline: 'Smooth Rides, Safe Journeys',
    heroDescription: 'Expert tire services and suspension repairs to keep your vehicle stable, comfortable, and road-ready.',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
    features: [
      'Tire Rotation & Balancing',
      'Wheel Alignment',
      'Suspension Inspection',
      'Tire Replacement'
    ],
    quickStats: {
      avgTime: '30-90 min',
      warranty: '18 months',
      certified: 'Alignment Specialists'
    },
    detailsHeading: 'Expert Tire & Suspension Care',
    detailsDescription: 'Proper tire maintenance and suspension service ensure optimal handling, comfort, and tire longevity.',
    serviceDetails: [
      {
        icon: '🔄',
        title: 'Tire Rotation & Balancing',
        description: 'Regular rotation and precision balancing to maximize tire life and ensure smooth driving.',
        items: [
          'Pattern-specific rotation',
          'Computerized wheel balancing',
          'Tire pressure adjustment',
          'Visual tread inspection'
        ]
      },
      {
        icon: '📐',
        title: 'Wheel Alignment',
        description: 'Precision alignment using advanced equipment to prevent uneven wear and improve handling.',
        items: [
          'Computerized 4-wheel alignment',
          'Camber, caster, and toe adjustment',
          'Steering angle calibration',
          'Before and after printout'
        ]
      },
      {
        icon: '🔍',
        title: 'Tire Inspection & Sales',
        description: 'Thorough tire condition assessment and access to premium tire brands at competitive prices.',
        items: [
          'Tread depth measurement',
          'Sidewall damage check',
          'All major tire brands available',
          'Professional installation'
        ]
      },
      {
        icon: '⚙️',
        title: 'Suspension Check',
        description: 'Complete suspension system inspection to identify worn components affecting ride quality.',
        items: [
          'Shock and strut inspection',
          'Bushing condition check',
          'Ball joint examination',
          'Spring and mount inspection'
        ]
      }
    ]
  },

  'oil-fluid-maintenance': {
    slug: 'oil-fluid-maintenance',
    title: 'Oil & Fluid Maintenance',
    tagline: 'Extend Your Engine Life',
    heroDescription: 'Regular maintenance using premium oils and fluids to keep your engine running smoothly for years to come.',
    heroImage: 'https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=1600&q=80',
    features: [
      'Synthetic Oil Changes',
      'Filter Replacement',
      'Fluid Level Checks',
      'Coolant System Service'
    ],
    quickStats: {
      avgTime: '30-45 min',
      warranty: '6 months',
      certified: 'OEM Approved'
    },
    detailsHeading: 'Premium Oil & Fluid Services',
    detailsDescription: 'Regular fluid maintenance is the key to engine longevity. We use only premium products that meet or exceed manufacturer specifications.',
    serviceDetails: [
      {
        icon: '🛢️',
        title: 'Oil Change Service',
        description: 'Professional oil changes using synthetic, synthetic blend, or conventional oil tailored to your vehicle.',
        items: [
          'Premium oil brands (Mobil 1, Castrol, Valvoline)',
          'Manufacturer-spec viscosity',
          'Quality oil filter replacement',
          'Oil disposal & recycling'
        ]
      },
      {
        icon: '🔧',
        title: 'Filter Replacement',
        description: 'Complete filter service to keep contaminants out of your engine and cabin.',
        items: [
          'Engine oil filter',
          'Air filter inspection/replacement',
          'Cabin air filter service',
          'Fuel filter when applicable'
        ]
      },
      {
        icon: '💧',
        title: 'Fluid Top-Off',
        description: 'Comprehensive check and top-off of all essential fluids during every service.',
        items: [
          'Coolant/antifreeze level',
          'Power steering fluid',
          'Brake fluid check',
          'Windshield washer fluid'
        ]
      },
      {
        icon: '📋',
        title: 'Multi-Point Inspection',
        description: 'Complimentary vehicle inspection with every oil change to catch potential issues early.',
        items: [
          'Tire pressure and tread depth',
          'Battery and charging system',
          'Belts and hoses inspection',
          'Light and wiper check'
        ]
      }
    ]
  },

  'transmission-services': {
    slug: 'transmission-services',
    title: 'Transmission Services',
    tagline: 'Smooth Shifting, Every Gear',
    heroDescription: 'Expert transmission repair, maintenance, and rebuilds for automatic and manual transmissions.',
    heroImage: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80',
    features: [
      'Transmission Fluid Service',
      'Clutch Repair & Replacement',
      'Transmission Rebuilds',
      'Performance Diagnostics'
    ],
    quickStats: {
      avgTime: '2-4 hours',
      warranty: '36 months',
      certified: 'Transmission Specialists'
    },
    detailsHeading: 'Complete Transmission Solutions',
    detailsDescription: 'From routine maintenance to complete rebuilds, our transmission specialists handle automatic and manual transmissions with expertise.',
    serviceDetails: [
      {
        icon: '💧',
        title: 'Fluid Service',
        description: 'Transmission fluid exchange to maintain smooth shifting and prevent internal wear.',
        items: [
          'Fluid drain and refill',
          'Pan gasket replacement',
          'Filter replacement when applicable',
          'ATF type specific to your vehicle'
        ]
      },
      {
        icon: '🔍',
        title: 'Diagnostics & Inspection',
        description: 'Advanced diagnostic testing to identify transmission issues before major failure.',
        items: [
          'Computer scan for error codes',
          'Road test evaluation',
          'Leak detection and repair',
          'Clutch engagement testing (manual)'
        ]
      },
      {
        icon: '🔧',
        title: 'Clutch Service',
        description: 'Complete clutch system repair and replacement for manual transmission vehicles.',
        items: [
          'Clutch disc replacement',
          'Pressure plate service',
          'Flywheel resurfacing',
          'Hydraulic system service'
        ]
      },
      {
        icon: '⚙️',
        title: 'Rebuilds & Repairs',
        description: 'Expert transmission rebuilds using quality parts and backed by our warranty.',
        items: [
          'Complete teardown and inspection',
          'Solenoid and valve body service',
          'Torque converter replacement',
          '36-month warranty coverage'
        ]
      }
    ]
  },

  'steering-suspension': {
    slug: 'steering-suspension',
    title: 'Steering & Suspension',
    tagline: 'Control and Comfort Combined',
    heroDescription: 'Professional steering and suspension services to restore responsive handling and a smooth ride.',
    heroImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1600&q=80',
    features: [
      'Shock & Strut Replacement',
      'Power Steering Service',
      'Control Arm Repair',
      'Steering System Diagnostics'
    ],
    quickStats: {
      avgTime: '1-3 hours',
      warranty: '24 months',
      certified: 'Suspension Experts'
    },
    detailsHeading: 'Steering & Suspension Expertise',
    detailsDescription: 'Restore your vehicle\'s handling characteristics and ride comfort with our comprehensive steering and suspension services.',
    serviceDetails: [
      {
        icon: '🔧',
        title: 'Shock & Strut Service',
        description: 'Premium shock absorbers and struts to restore ride quality and handling performance.',
        items: [
          'Monroe, KYB, and Bilstein options',
          'Complete assembly replacement',
          'Strut mount inspection',
          'Ride height restoration'
        ]
      },
      {
        icon: '🎯',
        title: 'Steering System',
        description: 'Complete steering system repair including rack and pinion, power steering, and linkage.',
        items: [
          'Rack and pinion service',
          'Power steering pump repair',
          'Tie rod end replacement',
          'Steering fluid flush'
        ]
      },
      {
        icon: '⚙️',
        title: 'Control Arms & Bushings',
        description: 'Suspension arm and bushing replacement to eliminate noise and restore alignment capability.',
        items: [
          'Upper and lower control arms',
          'Polyurethane or OEM bushings',
          'Ball joint replacement',
          'Sway bar link service'
        ]
      },
      {
        icon: '📋',
        title: 'Complete Inspection',
        description: 'Thorough suspension inspection to identify worn components before they cause further damage.',
        items: [
          'Visual component inspection',
          'Play and movement testing',
          'Road test evaluation',
          'Alignment recommendation'
        ]
      }
    ]
  },

  'ac-heating-repair': {
    slug: 'ac-heating-repair',
    title: 'AC & Heating Repair',
    tagline: 'Climate Comfort Year-Round',
    heroDescription: 'Complete automotive climate control service to keep you comfortable in any weather condition.',
    heroImage: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1600&q=80',
    features: [
      'AC Recharge & Leak Detection',
      'Compressor Replacement',
      'Heater Core Service',
      'Cabin Air Filter Replacement'
    ],
    quickStats: {
      avgTime: '1-2 hours',
      warranty: '12 months',
      certified: 'HVAC Certified'
    },
    detailsHeading: 'Climate Control Services',
    detailsDescription: 'Stay comfortable in any weather with our comprehensive AC and heating system repair and maintenance services.',
    serviceDetails: [
      {
        icon: '❄️',
        title: 'AC System Service',
        description: 'Complete air conditioning service from recharge to major component replacement.',
        items: [
          'Refrigerant recharge (R134a/R1234yf)',
          'Electronic leak detection',
          'System pressure testing',
          'Performance temperature check'
        ]
      },
      {
        icon: '🔧',
        title: 'Component Repair',
        description: 'Expert diagnosis and replacement of failed AC system components.',
        items: [
          'Compressor replacement',
          'Condenser and evaporator service',
          'Expansion valve/orifice tube',
          'Receiver-drier replacement'
        ]
      },
      {
        icon: '🔥',
        title: 'Heating System',
        description: 'Heater core and climate control system repair to keep you warm in winter.',
        items: [
          'Heater core replacement',
          'Thermostat service',
          'Coolant system flush',
          'Blend door actuator repair'
        ]
      },
      {
        icon: '💨',
        title: 'Air Quality',
        description: 'Cabin air filtration and ventilation system service for improved air quality.',
        items: [
          'Cabin air filter replacement',
          'Blower motor service',
          'Vent cleaning and sanitization',
          'Climate control diagnostics'
        ]
      }
    ]
  },

  'electrical-systems': {
    slug: 'electrical-systems',
    title: 'Electrical Systems',
    tagline: 'Powering Your Journey',
    heroDescription: 'Advanced electrical diagnostics and repair for all modern vehicle electrical and electronic systems.',
    heroImage: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1600&q=80',
    features: [
      'Battery Testing & Replacement',
      'Alternator Repair',
      'Sensor Diagnostics',
      'Wiring & Circuit Repair'
    ],
    quickStats: {
      avgTime: '1-3 hours',
      warranty: '12 months',
      certified: 'Electrical Specialists'
    },
    detailsHeading: 'Electrical System Diagnostics & Repair',
    detailsDescription: 'Modern vehicles rely on complex electrical systems. Our technicians have the expertise and tools to diagnose and repair any electrical issue.',
    serviceDetails: [
      {
        icon: '🔋',
        title: 'Battery & Charging',
        description: 'Complete battery and charging system testing, service, and replacement.',
        items: [
          'Load testing and CCA measurement',
          'Premium battery installation',
          'Alternator output testing',
          'Parasitic drain diagnosis'
        ]
      },
      {
        icon: '⚡',
        title: 'Starting System',
        description: 'Starter motor and ignition system diagnosis and repair for reliable engine starting.',
        items: [
          'Starter motor replacement',
          'Ignition switch service',
          'Neutral safety switch',
          'Battery cable inspection'
        ]
      },
      {
        icon: '🔌',
        title: 'Sensors & Modules',
        description: 'Advanced diagnostics for engine sensors and electronic control modules.',
        items: [
          'Oxygen sensor replacement',
          'MAF and MAP sensor service',
          'Throttle position sensor',
          'Module programming when needed'
        ]
      },
      {
        icon: '🔧',
        title: 'Wiring & Circuits',
        description: 'Expert wiring diagnosis and repair for shorts, opens, and ground issues.',
        items: [
          'Circuit testing and repair',
          'Harness connector service',
          'Ground point cleaning',
          'Accessory installation'
        ]
      }
    ]
  },

  'exhaust-system': {
    slug: 'exhaust-system',
    title: 'Exhaust System Repair',
    tagline: 'Clean Performance, Quiet Operation',
    heroDescription: 'Professional exhaust system service ensuring optimal emissions, performance, and sound levels.',
    heroImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1600&q=80',
    features: [
      'Muffler Replacement',
      'Catalytic Converter Service',
      'Emission Testing',
      'Custom Exhaust Systems'
    ],
    quickStats: {
      avgTime: '1-2 hours',
      warranty: '18 months',
      certified: 'Emission Certified'
    },
    detailsHeading: 'Complete Exhaust System Service',
    detailsDescription: 'From minor repairs to complete system replacement, we ensure your exhaust system performs efficiently and meets emission standards.',
    serviceDetails: [
      {
        icon: '💨',
        title: 'Muffler & Pipes',
        description: 'Quality muffler and exhaust pipe replacement for quiet operation and proper exhaust flow.',
        items: [
          'OEM or performance mufflers',
          'Pipe section replacement',
          'Hanger and bracket service',
          'Leak detection and repair'
        ]
      },
      {
        icon: '🔧',
        title: 'Catalytic Converter',
        description: 'Catalytic converter diagnosis, service, and replacement to meet emission standards.',
        items: [
          'Efficiency testing',
          'OEM-grade converters',
          'Proper installation certification',
          'Oxygen sensor replacement'
        ]
      },
      {
        icon: '✅',
        title: 'Emission Testing',
        description: 'Pre-inspection diagnostics and repairs to ensure your vehicle passes emission testing.',
        items: [
          'OBD-II readiness check',
          'Emission system diagnosis',
          'Check engine light repair',
          'Test preparation service'
        ]
      },
      {
        icon: '⚙️',
        title: 'Performance Exhaust',
        description: 'Custom exhaust solutions for improved performance and sound.',
        items: [
          'Cat-back exhaust systems',
          'Headers and downpipes',
          'Performance mufflers',
          'Professional fabrication'
        ]
      }
    ]
  },

  'pre-purchase-inspection': {
    slug: 'pre-purchase-inspection',
    title: 'Pre-Purchase Inspection',
    tagline: 'Buy with Confidence',
    heroDescription: 'Comprehensive 150-point inspection to reveal hidden issues before you buy your next vehicle.',
    heroImage: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1600&q=80',
    features: [
      '150-Point Inspection',
      'Computer Diagnostics',
      'Road Test Evaluation',
      'Detailed Written Report'
    ],
    quickStats: {
      avgTime: '90-120 min',
      warranty: 'N/A',
      certified: 'Certified Inspectors'
    },
    detailsHeading: 'Comprehensive Pre-Purchase Inspection',
    detailsDescription: 'Don\'t buy a used car blindly. Our detailed inspection reveals the true condition of the vehicle before you commit.',
    serviceDetails: [
      {
        icon: '🔍',
        title: 'Mechanical Inspection',
        description: 'Thorough examination of all major mechanical systems and components.',
        items: [
          'Engine performance and condition',
          'Transmission operation',
          'Brake system evaluation',
          'Suspension and steering check'
        ]
      },
      {
        icon: '💻',
        title: 'Computer Diagnostics',
        description: 'Advanced scanning to uncover hidden issues and verify system functionality.',
        items: [
          'Full OBD-II system scan',
          'Error code documentation',
          'Module communication check',
          'Emission readiness status'
        ]
      },
      {
        icon: '🚗',
        title: 'Body & Interior',
        description: 'Complete visual inspection of body condition, interior, and evidence of previous damage.',
        items: [
          'Paint and body panel inspection',
          'Accident damage indicators',
          'Rust and corrosion check',
          'Interior condition assessment'
        ]
      },
      {
        icon: '📋',
        title: 'Detailed Report',
        description: 'Comprehensive written report with photos, findings, and repair cost estimates.',
        items: [
          'Priority-coded issue list',
          'Photo documentation',
          'Estimated repair costs',
          'Buy/negotiate/walk away recommendation'
        ]
      }
    ]
  }
};

// Helper function to get service by slug
export const getServiceBySlug = (slug) => {
  return individualServicesData[slug] || null;
};

// Get all service slugs (useful for routing)
export const getAllServiceSlugs = () => {
  return Object.keys(individualServicesData);
};
