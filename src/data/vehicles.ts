export interface Vehicle {
  id: string;
  slug: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  price: number; // Total all-in price
  km: number;
  bodyType: 'car' | 'suv' | 'truck' | 'van';
  transmission: string;
  drivetrain: 'FWD' | 'AWD' | '4x4' | 'RWD';
  fuelType: string;
  exteriorColor: string;
  interiorColor: string;
  vin: string;
  stockNumber: string;
  featured: boolean;
  isLifted?: boolean;
  isUnder25k: boolean;
  features: string[];
  description: string;
  images: string[];
}

export const VEHICLES: Vehicle[] = [
  {
    id: '1',
    slug: '2019-honda-civic-lx',
    year: 2019,
    make: 'Honda',
    model: 'Civic',
    trim: 'LX Sedan',
    price: 17995,
    km: 62900,
    bodyType: 'car',
    transmission: 'Automatic (CVT)',
    drivetrain: 'FWD',
    fuelType: 'Gasoline',
    exteriorColor: 'Modern Steel Metallic',
    interiorColor: 'Black Cloth',
    vin: '2HGFC2F57KH519284',
    stockNumber: 'KA-1901',
    featured: true,
    isUnder25k: true,
    features: [
      'Honda Sensing Suite (Adaptive Cruise, Lane Keeping)',
      'Apple CarPlay & Android Auto',
      'Heated Front Seats',
      'Multi-Angle Rearview Camera',
      'Bluetooth HandsFreeLink'
    ],
    description: 'Clean title, local BC commuter vehicle with ultra-low kilometers. Inspected from bumper to bumper, fresh oil service, and ready to drive home today. Full documentation and BC safety certified.',
    images: [
      'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: '2',
    slug: '2018-mazda-cx5-gs',
    year: 2018,
    make: 'Mazda',
    model: 'CX-5',
    trim: 'GS AWD',
    price: 19995,
    km: 83100,
    bodyType: 'suv',
    transmission: '6-Speed Automatic',
    drivetrain: 'AWD',
    fuelType: 'Gasoline',
    exteriorColor: 'Soul Red Crystal Metallic',
    interiorColor: 'Black Leatherette / Suede',
    vin: 'JM3KFBCM3J0342918',
    stockNumber: 'KA-1804',
    featured: true,
    isUnder25k: true,
    features: [
      'i-ACTIV All-Wheel Drive',
      'Power Liftgate',
      'Blind Spot Monitoring & Rear Cross Traffic Alert',
      'Heated Steering Wheel & Heated Seats',
      'Power Driver Seat'
    ],
    description: 'One of the best driving compact SUVs on the market. Perfect winter capability for BC highway passes and Fraser Valley commutes. Clean Carfax with no major claims.',
    images: [
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: '3',
    slug: '2017-ford-f150-xlt',
    year: 2017,
    make: 'Ford',
    model: 'F-150',
    trim: 'XLT SuperCrew 4x4',
    price: 24995,
    km: 98400,
    bodyType: 'truck',
    transmission: '10-Speed Automatic',
    drivetrain: '4x4',
    fuelType: 'Gasoline (2.7L EcoBoost)',
    exteriorColor: 'Oxford White',
    interiorColor: 'Medium Earth Gray',
    vin: '1FTEW1EP8HKD92104',
    stockNumber: 'KA-1709',
    featured: true,
    isUnder25k: true,
    features: [
      'SuperCrew Full 4-Door Cab',
      'FX4 Off-Road Package with Skid Plates',
      'Trailer Tow Package with Pro Trailer Backup Assist',
      'Sync 3 8-inch Touchscreen',
      'Spray-in Bedliner & Tonneau Cover'
    ],
    description: 'The workhorse every BC buyer asks for. 2.7L EcoBoost twin-turbo combines great fuel efficiency with 8,500 lbs towing capacity. Fresh safety inspection, good tire tread all around.',
    images: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: '4',
    slug: '2016-ram-1500-sport-lifted',
    year: 2016,
    make: 'Ram',
    model: '1500',
    trim: 'Sport Crew Cab 3-Inch Lift',
    price: 23995,
    km: 121300,
    bodyType: 'truck',
    transmission: '8-Speed Automatic',
    drivetrain: '4x4',
    fuelType: '5.7L HEMI V8',
    exteriorColor: 'Brilliant Black Crystal',
    interiorColor: 'Black Leather-Trimmed',
    vin: '1C6RR7MT9GS198302',
    stockNumber: 'KA-1612',
    featured: true,
    isLifted: true,
    isUnder25k: true,
    features: [
      'Professional 3-inch suspension lift',
      '33-inch All-Terrain Tires on 20-inch Gloss Black Wheels',
      'Sport Performance Hood',
      '5.7L HEMI V8 with Dual Exhaust',
      'Alpine 9-Speaker Audio with Subwoofer'
    ],
    description: 'Turn heads everywhere in BC. Lifted right, sits aggressive, sounds incredible, and pulls hard. Clean title, inspected, and priced all-in with zero hidden surprises.',
    images: [
      'https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: '5',
    slug: '2017-toyota-corolla-le',
    year: 2017,
    make: 'Toyota',
    model: 'Corolla',
    trim: 'LE Sedan',
    price: 14995,
    km: 74500,
    bodyType: 'car',
    transmission: 'Automatic (CVT)',
    drivetrain: 'FWD',
    fuelType: 'Gasoline',
    exteriorColor: 'Classic Silver Metallic',
    interiorColor: 'Ash Fabric',
    vin: '2T1BURHE6HC782910',
    stockNumber: 'KA-1703',
    featured: true,
    isUnder25k: true,
    features: [
      'Toyota Safety Sense P (Pre-Collision, Pedestrian Detection)',
      'Backup Camera',
      'Heated Front Seats',
      'Automatic Climate Control',
      'Legendary Toyota Reliability'
    ],
    description: 'Rock-solid reliability with very cheap maintenance and insurance. One of the easiest cars to get bank approved on because lenders love Corolla resale values.',
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: '6',
    slug: '2020-hyundai-tucson-preferred',
    year: 2020,
    make: 'Hyundai',
    model: 'Tucson',
    trim: 'Preferred AWD',
    price: 21495,
    km: 68400,
    bodyType: 'suv',
    transmission: '6-Speed Automatic',
    drivetrain: 'AWD',
    fuelType: 'Gasoline',
    exteriorColor: 'Coliseum Gray',
    interiorColor: 'Black Cloth',
    vin: 'KM8J33A46LU891230',
    stockNumber: 'KA-2005',
    featured: false,
    isUnder25k: true,
    features: [
      'HTRAC All-Wheel Drive',
      'Heated Front & Rear Seats',
      'Heated Steering Wheel',
      'Blind-Spot Collision Warning',
      'Apple CarPlay & Android Auto'
    ],
    description: 'Modern compact SUV with low mileage and great all-weather road manners. Loaded with cold weather features including heated rear seats and heated steering wheel.',
    images: [
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: '7',
    slug: '2018-dodge-grand-caravan-sxt',
    year: 2018,
    make: 'Dodge',
    model: 'Grand Caravan',
    trim: 'SXT Stow n Go',
    price: 16995,
    km: 88200,
    bodyType: 'van',
    transmission: '6-Speed Automatic',
    drivetrain: 'FWD',
    fuelType: '3.6L Pentastar V6',
    exteriorColor: 'Billet Metallic',
    interiorColor: 'Black / Light Graystone',
    vin: '2C4RDGBG9JR298103',
    stockNumber: 'KA-1811',
    featured: false,
    isUnder25k: true,
    features: [
      'Full Stow n Go 2nd and 3rd Row Folding Seats',
      'Power Sliding Doors & Power Liftgate',
      'Rear Air Conditioning & Heating',
      'Roof Rack with Stowable Crossbars',
      'Huge Cargo Space'
    ],
    description: 'The ultimate utility vehicle for big families, contractors, or delivery drivers. Seats 7 comfortably or folds flat into a cavernous flatbed in seconds.',
    images: [
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1000&q=80'
    ]
  }
];
