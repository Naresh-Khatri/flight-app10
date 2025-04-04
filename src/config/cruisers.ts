export const cruisers = {
  "royal-caribbean": {
    name: "Royal Caribbean",
    href: "/cruisers/royal-caribbean",
    logo: "/cruisers/royal-caribbean.jpg",
    description:
      "Experience luxury at sea with Royal Caribbean's world-class ships and destinations.",
    headquarters: "Miami, Florida, USA",
    founded: "1968",
    shipCount: 26,
    amenityCount: 42,
    maxCapacity: 6988,
    fleet: [
      {
        name: "Wonder of the Seas",
        capacity: 6988,
        amenities: [
          "Central Park",
          "AquaTheater",
          "Ultimate Abyss Slide",
          "FlowRider Surf Simulator",
          "Zip Line",
          "Ice Skating Rink",
          "Rock Climbing Wall",
          "Mini Golf Course",
          "Casino Royale",
          "Vitality Spa",
          "Youth Zone",
          "Multiple Pools",
          "Sports Court",
          "Fitness Center",
          "Broadway Shows",
        ],
        class: ["Interior", "Ocean View", "Balcony", "Suite"],
      },
      {
        name: "Symphony of the Seas",
        capacity: 6680,
        amenities: [
          "Perfect Storm Waterslides",
          "Bionic Bar",
          "Laser Tag Arena",
          "Escape Room",
          "FlowRider",
          "Ice Skating Rink",
          "Zip Line",
          "Rock Climbing",
          "Mini Golf",
          "Casino",
          "Spa & Fitness Center",
          "Theater Shows",
          "Adventure Ocean Youth Program",
          "Multiple Dining Venues",
          "Sports Court",
        ],
        class: ["Interior", "Ocean View", "Balcony", "Suite"],
      },
      {
        name: "Oasis of the Seas",
        capacity: 6780,
        amenities: [
          "Central Park",
          "AquaTheater",
          "Zip Line",
          "Rising Tide Bar",
        ],
        class: [
          "Interior",
          "Ocean View",
          "Balcony",
          "Suite",
          "Royal Loft Suite",
        ],
      },
      {
        name: "Anthem of the Seas",
        capacity: 4905,
        amenities: ["North Star", "RipCord by iFLY", "SeaPlex", "Two70"],
        class: ["Interior", "Ocean View", "Balcony", "Suite"],
      },
    ],
    popularRoutes: [
      {
        from: "Miami",
        to: "Caribbean",
        duration: "7 nights",
        price: {
          interior: 599,
          oceanView: 699,
          balcony: 899,
          suite: 1499,
        },
      },
      {
        from: "Barcelona",
        to: "Mediterranean",
        duration: "7 nights",
        price: {
          interior: 799,
          oceanView: 899,
          balcony: 1099,
          suite: 1899,
        },
      },
      {
        from: "Singapore",
        to: "Southeast Asia",
        duration: "5 nights",
        price: {
          interior: 649,
          oceanView: 749,
          balcony: 949,
          suite: 1599,
        },
      },
    ],
    features: [
      "Adventure Ocean® Youth Program",
      "Royal Promenade Shopping",
      "FlowRider® Surf Simulator",
      "Rock Climbing Walls",
      "Ice Skating Rinks",
      "Broadway-Style Shows",
      "AquaTheater Performances",
      "Central Park® Neighborhood",
      "Multiple Dining Venues",
      "Vitality Spa & Fitness Center",
    ],
    rating: 4.8,
    reviewCount: 12500,
  },
  carnival: {
    name: "Carnival Cruise Line",
    href: "/cruisers/carnival",
    logo: "/cruisers/carnival.jpg",
    description:
      "Fun-filled voyages with endless entertainment options for families and couples alike.",
    headquarters: "Miami, Florida, USA",
    founded: "1972",
    shipCount: 24,
    amenityCount: 35,
    maxCapacity: 6500,
    rating: 4.5,
    reviewCount: 15800,
    features: [
      "WaterWorks™ Aqua Parks",
      "Seuss at Sea™",
      "Cloud 9 Spa™",
      "Carnival Live Shows",
      "Dive-In Movies",
      "Casino Games",
      "Kids Programs",
      "Sports Square",
      "Alchemy Bar™",
      "RedFrog Pub®",
    ],
    fleet: [
      {
        name: "Carnival Celebration",
        capacity: 5282,
        amenities: ["WaterWorks", "SkyRide", "IMAX Theater"],
        class: ["Interior", "Ocean View", "Balcony", "Suite"],
      },
      // Limited example ships for display
    ],
    popularRoutes: [
      {
        from: "Miami",
        to: "Caribbean",
        duration: "7 nights",
        price: {
          interior: 499,
          oceanView: 599,
          balcony: 799,
          suite: 1499,
        },
      },
    ],
  },
  norwegian: {
    name: "Norwegian Cruise Line",
    href: "/cruisers/norwegian",
    logo: "/cruisers/norwegian.jpg",
    description:
      "Freedom and flexibility with Freestyle Cruising® and award-winning entertainment.",
    headquarters: "Miami, Florida, USA",
    founded: "1966",
    shipCount: 18,
    amenityCount: 38,
    maxCapacity: 4200,
    rating: 4.6,
    reviewCount: 10200,
    features: [
      "Freestyle Dining®",
      "Broadway Shows",
      "Mandara Spa®",
      "Aqua Parks",
      "Race Tracks",
      "The Haven™ Suites",
      "Ocean Loops Slides",
      "Casino Action",
      "Kids' Clubs",
      "Observation Lounges",
    ],
    fleet: [
      {
        name: "Norwegian Prima",
        capacity: 3950,
        amenities: ["Ocean Boulevard", "Prima Speedway", "Infinity Beach"],
        class: ["Interior", "Ocean View", "Balcony", "Haven"],
      },
    ],
    popularRoutes: [
      {
        from: "New York",
        to: "Bermuda",
        duration: "7 nights",
        price: {
          interior: 599,
          oceanView: 699,
          balcony: 899,
          suite: 1699,
        },
      },
    ],
  },
  celebrity: {
    name: "Celebrity Cruises",
    href: "/cruisers/celebrity",
    logo: "/cruisers/celebrity.jpg",
    description:
      "Modern luxury cruising with sophisticated style and contemporary design. Experience premium travel with exceptional service.",
    headquarters: "Miami, Florida, USA",
    founded: "1988",
    shipCount: 15,
    amenityCount: 32,
    maxCapacity: 3750,
    rating: 4.7,
    reviewCount: 8900,
    features: [
      "The Retreat® Luxury Experience",
      "Magic Carpet® Platform",
      "Rooftop Garden",
      "Eden Restaurant & Lounge",
      "Le Petit Chef™ Experience",
      "Luminae Restaurant",
      "Martini Bar",
      "The Spa",
      "Celebrity iLounge®",
      "Exclusive Shore Excursions",
    ],
    fleet: [
      {
        name: "Celebrity Beyond",
        capacity: 3260,
        amenities: [
          "Magic Carpet Platform",
          "Rooftop Garden",
          "Eden Restaurant & Lounge",
          "The Retreat Sundeck",
          "Le Petit Chef Experience",
          "The Theatre",
          "Luxury Spa",
          "F45 Fitness Studio",
          "Resort Deck",
          "Sunset Bar",
          "Martini Bar",
          "The Club",
          "Celebrity iLounge",
          "Camp at Sea",
        ],
        class: ["Interior", "Ocean View", "AquaClass", "Suite"],
      },
      {
        name: "Celebrity Edge",
        capacity: 2918,
        amenities: [
          "Infinite Verandas",
          "Magic Carpet",
          "Eden Complex",
          "Rooftop Garden",
          "The Retreat",
          "Spa & Fitness Center",
          "Theater Shows",
          "Multiple Pools",
          "Specialty Restaurants",
          "Kids' Programming",
          "Casino",
          "Art Gallery",
          "Shopping Arcade",
          "Conference Center",
        ],
        class: ["Interior", "Ocean View", "AquaClass", "Suite"],
      },
      {
        name: "Celebrity Apex",
        capacity: 2910,
        amenities: [
          "The Magic Carpet",
          "Eden Restaurant",
          "The Theatre",
          "The Club",
          "Rooftop Garden",
          "Resort Deck",
          "Spa & Fitness Center",
          "Fine Dining Venues",
          "Craft Social Bar",
          "The Retreat",
          "Oceanview Café",
          "Sunset Bar",
        ],
        class: ["Interior", "Ocean View", "AquaClass", "Suite"],
      },
    ],
    popularRoutes: [
      {
        from: "Rome",
        to: "Mediterranean",
        duration: "10 nights",
        price: {
          interior: 899,
          oceanView: 1099,
          balcony: 1399,
          suite: 2499,
        },
      },
      {
        from: "Fort Lauderdale",
        to: "Caribbean",
        duration: "7 nights",
        price: {
          interior: 799,
          oceanView: 999,
          balcony: 1299,
          suite: 2299,
        },
      },
      {
        from: "Sydney",
        to: "South Pacific",
        duration: "12 nights",
        price: {
          interior: 1299,
          oceanView: 1499,
          balcony: 1899,
          suite: 3299,
        },
      },
    ],
  },
  virgin: {
    name: "Virgin Voyages",
    href: "/cruisers/virgin",
    logo: "/cruisers/virgin.jpg",
    description:
      "Adult-by-Design luxury cruising experience with a fresh approach to ocean travel. Modern, yacht-inspired aesthetic with premium amenities.",
    headquarters: "Plantation, Florida, USA",
    founded: "2014",
    shipCount: 4,
    amenityCount: 28,
    maxCapacity: 2770,
    rating: 4.6,
    reviewCount: 3200,
    features: [
      "Adults-Only Cruising",
      "All-Inclusive Dining",
      "Unlimited Group Fitness",
      "Premium WiFi Included",
      "No-Tipping Required",
      "Rockstar Quarters",
      "The Manor Nightclub",
      "Redemption Spa",
      "Athletic Club",
      "The Red Room Theater",
    ],
    fleet: [
      {
        name: "Scarlet Lady",
        capacity: 2770,
        amenities: [
          "The Athletic Club",
          "Redemption Spa",
          "The Manor Nightclub",
          "The Dock Beach Club",
          "Test Kitchen Restaurant",
          "Razzle Dazzle Restaurant",
          "The Wake Restaurant",
          "Gym & Tonic Bar",
          "The Red Room Theater",
          "The Groupie Karaoke",
          "High Street Shopping",
          "Squid Ink Tattoo Parlor",
          "B-Complex Fitness",
          "Aquatic Club Pool",
        ],
        class: ["Sea Terrace", "Sea View", "Insider", "RockStar Quarters"],
      },
      {
        name: "Valiant Lady",
        capacity: 2770,
        amenities: [
          "The Manor",
          "The Dock",
          "The Wake",
          "Gunbae Restaurant",
          "Pink Agave",
          "The Pizza Place",
          "Redemption Spa",
          "Athletic Club",
          "VIP Deck Club",
          "The Band Stand",
          "Voyage Vinyl",
          "The Social Club",
        ],
        class: ["Sea Terrace", "Sea View", "Insider", "RockStar Quarters"],
      },
    ],
    popularRoutes: [
      {
        from: "Miami",
        to: "Caribbean",
        duration: "5 nights",
        price: {
          interior: 699,
          oceanView: 799,
          balcony: 999,
          suite: 1899,
        },
      },
      {
        from: "Barcelona",
        to: "Mediterranean",
        duration: "7 nights",
        price: {
          interior: 899,
          oceanView: 1099,
          balcony: 1399,
          suite: 2499,
        },
      },
      {
        from: "Athens",
        to: "Greek Islands",
        duration: "7 nights",
        price: {
          interior: 849,
          oceanView: 999,
          balcony: 1299,
          suite: 2299,
        },
      },
    ],
  },
  "princess": {
    name: "Princess Cruises",
    href: "/cruisers/princess",
    logo: "/cruisers/princess.jpg",
    description: "Premium cruising with elegant comfort and enriching experiences.",
    headquarters: "Santa Clarita, California, USA",
    founded: "1965",
    shipCount: 15,
    amenityCount: 30,
    maxCapacity: 4610,
    rating: 4.5,
    reviewCount: 9800,
    features: [
      "MedallionClass™ Experience",
      "Movies Under the Stars®",
      "The Sanctuary",
      "Discovery at SEA™ Programs",
      "Original Musical Productions",
      "Lotus Spa®",
      "Chef's Table Experience",
      "Princess Live! TV Studio",
      "Vegas-Style Casino",
      "Youth & Teen Centers"
    ],
    fleet: [
      {
        name: "Discovery Princess",
        capacity: 3660,
        amenities: [
          "Sky Suites",
          "The Sanctuary",
          "Movies Under the Stars",
          "SeaWalk",
          "Crown Grill",
          "Lotus Spa",
          "Princess Theater",
          "Vista Lounge",
          "Take Five",
          "Casino"
        ],
        class: ["Interior", "Ocean View", "Balcony", "Suite"]
      }
    ],
    popularRoutes: [
      {
        from: "Los Angeles",
        to: "Alaska",
        duration: "7 nights",
        price: {
          interior: 699,
          oceanView: 899,
          balcony: 1199,
          suite: 2199
        }
      }
    ]
  },
  "msc": {
    name: "MSC Cruises",
    href: "/cruisers/msc",
    logo: "/cruisers/msc.jpg",
    description: "European style cruising with modern luxury and family-friendly entertainment.",
    headquarters: "Geneva, Switzerland",
    founded: "1989",
    shipCount: 19,
    amenityCount: 35,
    maxCapacity: 6762,
    rating: 4.3,
    reviewCount: 7500,
    features: [
      "MSC Yacht Club",
      "Swarovski Crystal Staircases",
      "Formula 1 Simulators",
      "4D Cinema",
      "Aquapark",
      "LED Sky Screen",
      "MSC Aurea Spa",
      "Kids Clubs",
      "Theater Shows",
      "Specialty Restaurants"
    ],
    fleet: [
      {
        name: "MSC World Europa",
        capacity: 6762,
        amenities: [
          "World Promenade",
          "Spiral Slide",
          "MSC Yacht Club",
          "Aquapark",
          "Entertainment District",
          "Kids' Areas",
          "Spa & Fitness",
          "Shopping Gallery"
        ],
        class: ["Interior", "Ocean View", "Balcony", "Yacht Club"]
      }
    ],
    popularRoutes: [
      {
        from: "Miami",
        to: "Caribbean",
        duration: "7 nights",
        price: {
          interior: 499,
          oceanView: 599,
          balcony: 799,
          suite: 1499
        }
      }
    ]
  },
  "holland-america": {
    name: "Holland America Line",
    href: "/cruisers/holland-america",
    logo: "/cruisers/holland.jpg",
    description: "Premium cruising with a focus on enrichment, culinary excellence, and classic elegance.",
    headquarters: "Seattle, Washington, USA",
    founded: "1873",
    shipCount: 11,
    amenityCount: 28,
    maxCapacity: 2668,
    rating: 4.6,
    reviewCount: 6800,
    features: [
      "Music Walk®",
      "BBC Earth Experiences",
      "Culinary Arts Center",
      "America's Test Kitchen",
      "Lincoln Center Stage",
      "B.B. King's Blues Club",
      "Greenhouse Spa & Salon",
      "Digital Workshop",
      "Club HAL Youth Program",
      "Explorations Café"
    ],
    fleet: [
      {
        name: "Rotterdam",
        capacity: 2668,
        amenities: [
          "Rolling Stone Rock Room",
          "B.B. King's Blues Club",
          "Lincoln Center Stage",
          "World Stage",
          "Greenhouse Spa",
          "Club Orange",
          "Pinnacle Grill",
          "Tamarind"
        ],
        class: ["Interior", "Ocean View", "Verandah", "Suite"]
      }
    ],
    popularRoutes: [
      {
        from: "Seattle",
        to: "Alaska",
        duration: "7 nights",
        price: {
          interior: 799,
          oceanView: 999,
          balcony: 1299,
          suite: 2199
        }
      }
    ]
  },
  "disney": {
    name: "Disney Cruise Line",
    href: "/cruisers/disney",
    logo: "/cruisers/disney.jpg",
    description: "Magical family cruising with Disney's signature entertainment and storytelling.",
    headquarters: "Celebration, Florida, USA",
    founded: "1995",
    shipCount: 5,
    amenityCount: 25,
    maxCapacity: 4000,
    rating: 4.8,
    reviewCount: 5600,
    features: [
      "Disney Character Experiences",
      "Broadway-Style Shows",
      "Bibbidi Bobbidi Boutique",
      "AquaDuck Water Coaster",
      "Disney's Oceaneer Club",
      "Adult-Exclusive Areas",
      "Rotational Dining",
      "Pirate Night",
      "Castaway Cay",
      "Movie Theaters"
    ],
    fleet: [
      {
        name: "Disney Wish",
        capacity: 4000,
        amenities: [
          "AquaMouse",
          "Star Wars: Hyperspace Lounge",
          "Marvel Super Hero Academy",
          "Disney Uncharted Adventure",
          "Worlds of Marvel restaurant",
          "Quiet Cove Pool",
          "Senses Spa",
          "Broadway Shows"
        ],
        class: ["Interior", "Ocean View", "Verandah", "Concierge"]
      }
    ],
    popularRoutes: [
      {
        from: "Port Canaveral",
        to: "Bahamas",
        duration: "4 nights",
        price: {
          interior: 1299,
          oceanView: 1499,
          balcony: 1699,
          suite: 3499
        }
      }
    ]
  },
  "costa": {
    name: "Costa Cruises",
    href: "/cruisers/costa",
    logo: "/cruisers/costa.jpg",
    description: "Italian-style cruising with Mediterranean flair and international atmosphere.",
    headquarters: "Genoa, Italy",
    founded: "1854",
    shipCount: 11,
    amenityCount: 25,
    maxCapacity: 6600,
    rating: 4.2,
    reviewCount: 5200,
    features: [
      "Samsara Spa",
      "4D Cinema",
      "Grand Prix Simulator",
      "Water Park",
      "Theater Shows",
      "Italian Cuisine",
      "Kids Clubs",
      "Casino",
      "Shopping Center",
      "Sports Courts"
    ],
    fleet: [
      {
        name: "Costa Toscana",
        capacity: 6600,
        amenities: [
          "Infinity Pool",
          "Spa & Wellness Center",
          "Water Park",
          "Theater",
          "Kids Club",
          "Sports Area",
          "Restaurants",
          "Bars & Lounges"
        ],
        class: ["Interior", "Ocean View", "Balcony", "Suite"]
      }
    ],
    popularRoutes: [
      {
        from: "Barcelona",
        to: "Mediterranean",
        duration: "7 nights",
        price: {
          interior: 599,
          oceanView: 699,
          balcony: 899,
          suite: 1599
        }
      }
    ]
  },
  "viking": {
    name: "Viking Cruises",
    href: "/cruisers/viking",
    logo: "/cruisers/viking.jpg",
    description: "Destination-focused voyages with cultural enrichment and elegant Scandinavian design.",
    headquarters: "Basel, Switzerland",
    founded: "1997",
    shipCount: 9,
    amenityCount: 20,
    maxCapacity: 930,
    rating: 4.9,
    reviewCount: 4800,
    features: [
      "The Nordic Spa",
      "Infinity Pool",
      "Explorers' Lounge",
      "Wintergarden",
      "Cultural Enrichment Programs",
      "Destination Lectures",
      "Cooking Classes",
      "Wine Tastings",
      "Library",
      "Torshavn Night Club"
    ],
    fleet: [
      {
        name: "Viking Star",
        capacity: 930,
        amenities: [
          "Nordic Spa",
          "Infinity Pool",
          "Snow Grotto",
          "Explorers' Lounge",
          "Main Pool",
          "Theater",
          "Wintergarden",
          "World Café"
        ],
        class: ["Veranda", "Penthouse Veranda", "Penthouse Junior Suite", "Explorer Suite"]
      }
    ],
    popularRoutes: [
      {
        from: "Bergen",
        to: "Norwegian Fjords",
        duration: "8 nights",
        price: {
          interior: null, // Viking only offers outside cabins
          oceanView: 3299,
          balcony: 3699,
          suite: 5999
        }
      }
    ]
  }
};
export const getAllCruisers = () => {
  return Object.values(cruisers);
};

export const getCruiserBySlug = (slug: string) => {
  return cruisers[slug as keyof typeof cruisers];
};

export const searchCruisers = (query: string) => {
  return Object.values(cruisers).filter(
    (cruiser) =>
      cruiser.name.toLowerCase().includes(query.toLowerCase()) ||
      cruiser.description.toLowerCase().includes(query.toLowerCase()),
  );
};
