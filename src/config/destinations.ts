interface Destination {
  name: string;
  slug: string;
  image: string;
  description: string;
  duration: string;
  startingPrice: number;
  popularPorts: string[];
  highlights: string[];
  activities: {
    name: string;
    description: string;
  }[];
  bestTimeToVisit: string;
  weather: {
    summer: string;
    winter: string;
  };
  cruiseTypes: string[];
  thingsToPack: string[];
  visaRequirements: string;
  languages: string[];
  currency: string;
  timeZone: string;
  rating: {
    score: number;
    reviews: number;
  };
  trips: {
    name: string;
    duration: string;
    price: number;
    highlights: string[];
    ports: string[];
    departureDates: string[];
    shipName: string;
  }[];
}

export const destinations: Destination[] = [
  {
    name: "Caribbean",
    slug: "caribbean",
    image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg",
    description: "Crystal clear waters, white sandy beaches, and tropical paradise",
    duration: "7-14 nights",
    startingPrice: 799,
    popularPorts: [
      "Miami, Florida",
      "San Juan, Puerto Rico",
      "Nassau, Bahamas",
      "St. Thomas, USVI",
    ],
    highlights: [
      "Snorkeling in crystal-clear waters",
      "Exploring ancient pirate coves",
      "Relaxing on pristine beaches",
      "Experiencing vibrant island culture",
    ],
    activities: [
      {
        name: "Water Sports",
        description: "Snorkeling, scuba diving, jet skiing, and parasailing",
      },
      {
        name: "Beach Activities",
        description: "Sunbathing, volleyball, and beachcombing",
      },
      {
        name: "Cultural Tours",
        description: "Visit historic sites and local markets",
      },
    ],
    bestTimeToVisit: "December to April",
    weather: {
      summer: "Hot and humid with occasional showers (75-85°F)",
      winter: "Warm and dry with cool evenings (70-80°F)",
    },
    cruiseTypes: ["Family", "Romantic", "Adventure", "Luxury"],
    thingsToPack: [
      "Sunscreen",
      "Swimwear",
      "Light clothing",
      "Evening wear",
      "Water shoes",
    ],
    visaRequirements: "Valid passport required for most destinations",
    languages: ["English", "Spanish", "French", "Dutch"],
    currency: "US Dollar widely accepted",
    timeZone: "Eastern Caribbean Time (ECT)",
    rating: {
      score: 4.8,
      reviews: 12453
    },
    trips: [
      {
        name: "Eastern Caribbean Paradise",
        duration: "7 nights",
        price: 799,
        highlights: [
          "St. Maarten's Pristine Beaches",
          "San Juan's Historic Sites",
          "Private Island Experience"
        ],
        ports: ["Miami", "St. Maarten", "San Juan", "Perfect Day at CocoCay"],
        departureDates: ["2024-06-15", "2024-07-13", "2024-08-10"],
        shipName: "Symphony of the Seas"
      },
      {
        name: "Western Caribbean Adventure",
        duration: "7 nights",
        price: 849,
        highlights: [
          "Mayan Ruins in Cozumel",
          "Jamaican Waterfalls",
          "Grand Cayman Snorkeling"
        ],
        ports: ["Fort Lauderdale", "Cozumel", "Jamaica", "Grand Cayman"],
        departureDates: ["2024-06-22", "2024-07-20", "2024-08-17"],
        shipName: "Oasis of the Seas"
      }
    ],
  },
  {
    name: "Mediterranean",
    slug: "mediterranean",
    image: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg",
    description: "Ancient history meets modern luxury along stunning coastlines",
    duration: "7-21 nights",
    startingPrice: 999,
    popularPorts: [
      "Barcelona, Spain",
      "Rome (Civitavecchia), Italy",
      "Athens (Piraeus), Greece",
      "Venice, Italy",
    ],
    highlights: [
      "Exploring ancient ruins and historical sites",
      "Savoring world-renowned Mediterranean cuisine",
      "Visiting charming coastal villages",
      "Experiencing rich cultural heritage",
    ],
    activities: [
      {
        name: "Historical Tours",
        description: "Explore ancient ruins, museums, and UNESCO World Heritage sites",
      },
      {
        name: "Culinary Experiences",
        description: "Wine tasting, cooking classes, and local market visits",
      },
      {
        name: "Coastal Adventures",
        description: "Beach hopping, sailing, and scenic coastal drives",
      },
    ],
    bestTimeToVisit: "May to October",
    weather: {
      summer: "Hot and dry with plenty of sunshine (75-90°F)",
      winter: "Mild with occasional rain (50-65°F)",
    },
    cruiseTypes: ["Cultural", "Luxury", "Romantic", "Family"],
    thingsToPack: [
      "Comfortable walking shoes",
      "Sun protection",
      "Smart casual wear",
      "Evening formal wear",
      "Light jacket",
    ],
    visaRequirements: "Schengen visa required for some nationalities",
    languages: ["Italian", "Spanish", "Greek", "English"],
    currency: "Euro (EUR)",
    timeZone: "Central European Time (CET)",
    rating: {
      score: 4.9,
      reviews: 9876
    },
    trips: [
      {
        name: "Greek Isles Explorer",
        duration: "10 nights",
        price: 1299,
        highlights: [
          "Santorini Sunset Views",
          "Ancient Athens Tour",
          "Mykonos Beach Day"
        ],
        ports: ["Rome", "Athens", "Santorini", "Mykonos", "Naples"],
        departureDates: ["2024-05-15", "2024-06-25", "2024-07-15"],
        shipName: "Celebrity Edge"
      },
      {
        name: "Italian Riviera & France",
        duration: "7 nights",
        price: 999,
        highlights: [
          "Monte Carlo Casino",
          "Florence Art Tours",
          "Amalfi Coast Drive"
        ],
        ports: ["Barcelona", "Monte Carlo", "Florence", "Rome"],
        departureDates: ["2024-06-01", "2024-07-06", "2024-08-03"],
        shipName: "Norwegian Epic"
      }
    ],
  },
  {
    name: "Alaska",
    slug: "alaska",
    image: "https://images.pexels.com/photos/2675268/pexels-photo-2675268.jpeg",
    description: "Glaciers, wildlife, and breathtaking natural wonders",
    duration: "7-14 nights",
    startingPrice: 899,
    popularPorts: [
      "Seattle, Washington",
      "Juneau, Alaska",
      "Skagway, Alaska",
      "Ketchikan, Alaska",
    ],
    highlights: [
      "Exploring glaciers",
      "Watching wildlife",
      "Enjoying natural beauty",
      "Experiencing Alaska's culture",
    ],
    activities: [
      {
        name: "Glacier Tours",
        description: "Cruise through the majestic glaciers",
      },
      {
        name: "Wildlife Watching",
        description: "Watch moose, bears, and other wildlife",
      },
      {
        name: "Cultural Tours",
        description: "Visit local communities and experience Alaska's culture",
      },
    ],
    bestTimeToVisit: "June to September",
    weather: {
      summer: "Cool and rainy with cool evenings (50-70°F)",
      winter: "Cold and snowy with cool evenings (30-50°F)",
    },
    cruiseTypes: ["Adventure", "Luxury", "Cultural", "Romantic"],
    thingsToPack: [
      "Warm clothing",
      "Rain gear",
      "Water shoes",
      "Camera",
      "Binoculars",
    ],
    visaRequirements: "Valid passport required for most destinations",
    languages: ["English", "Spanish", "French", "Dutch"],
    currency: "US Dollar widely accepted",
    timeZone: "Alaska Time (AKST)",
    rating: {
      score: 4.7,
      reviews: 7654
    },
    trips: [
      {
        name: "Glacier Bay Discovery",
        duration: "7 nights",
        price: 899,
        highlights: [
          "Glacier Bay National Park",
          "Whale Watching",
          "Denali Extension Available"
        ],
        ports: ["Seattle", "Juneau", "Skagway", "Ketchikan"],
        departureDates: ["2024-05-20", "2024-06-17", "2024-07-15"],
        shipName: "Royal Princess"
      },
      {
        name: "Inside Passage Adventure",
        duration: "10 nights",
        price: 1199,
        highlights: [
          "Tracy Arm Fjord",
          "Hubbard Glacier",
          "Wildlife Viewing"
        ],
        ports: ["Vancouver", "Icy Strait Point", "Sitka", "Victoria"],
        departureDates: ["2024-06-10", "2024-07-08", "2024-08-05"],
        shipName: "Celebrity Solstice"
      }
    ],
  },
  {
    name: "Norwegian Fjords",
    slug: "norwegian-fjords",
    image: "https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg",
    description: "Dramatic landscapes and stunning natural beauty of Norway's coastline",
    duration: "7-14 nights",
    startingPrice: 1299,
    popularPorts: [
      "Bergen, Norway",
      "Geiranger, Norway",
      "Stavanger, Norway",
      "Flåm, Norway",
    ],
    highlights: [
      "Exploring the fjords",
      "Watching waterfalls",
      "Enjoying Norwegian culture",
      "Experiencing natural beauty",
    ],
    activities: [
      {
        name: "Fjord Tours",
        description: "Cruise through the Norwegian fjords",
      },
      {
        name: "Waterfalls Watching",
        description: "Watch waterfalls in the fjords",
      },
      {
        name: "Cultural Tours",
        description: "Visit local communities and experience Norwegian culture",
      },
    ],
    bestTimeToVisit: "June to September",
    weather: {
      summer: "Cool and rainy with cool evenings (50-70°F)",
      winter: "Cold and snowy with cool evenings (30-50°F)",
    },
    cruiseTypes: ["Adventure", "Luxury", "Cultural", "Romantic"],
    thingsToPack: [
      "Warm clothing",
      "Rain gear",
      "Water shoes",
      "Camera",
      "Binoculars",
    ],
    visaRequirements: "Valid passport required for most destinations",
    languages: ["English", "Spanish", "French", "Norwegian"],
    currency: "Norwegian Krone widely accepted",
    timeZone: "Central European Time (CET)",
    rating: {
      score: 4.9,
      reviews: 5432
    },
    trips: [
      {
        name: "Fjords & Waterfalls",
        duration: "8 nights",
        price: 1299,
        highlights: [
          "Geirangerfjord Cruise",
          "Flåm Railway",
          "Bergen Fish Market"
        ],
        ports: ["Copenhagen", "Geiranger", "Flåm", "Bergen"],
        departureDates: ["2024-06-05", "2024-07-03", "2024-08-07"],
        shipName: "Viking Sky"
      }
    ],
  },
  {
    name: "South Pacific",
    slug: "south-pacific",
    image: "https://images.pexels.com/photos/1021073/pexels-photo-1021073.jpeg",
    description: "Paradise islands, crystal-clear lagoons, and Polynesian culture",
    duration: "10-21 nights",
    startingPrice: 1499,
    popularPorts: [
      "Papeete, Tahiti",
      "Bora Bora, French Polynesia",
      "Moorea, French Polynesia",
      "Noumea, New Caledonia",
    ],
    highlights: [
      "Relaxing on paradise islands",
      "Exploring crystal-clear lagoons",
      "Experiencing Polynesian culture",
      "Enjoying tropical paradise",
    ],
    activities: [
      {
        name: "Island Activities",
        description: "Snorkeling, swimming, and beachcombing",
      },
      {
        name: "Cultural Tours",
        description: "Visit local markets and experience Polynesian culture",
      },
      {
        name: "Water Sports",
        description: "Snorkeling, scuba diving, and jet skiing",
      },
    ],
    bestTimeToVisit: "December to April",
    weather: {
      summer: "Hot and humid with occasional showers (75-85°F)",
      winter: "Warm and dry with cool evenings (70-80°F)",
    },
    cruiseTypes: ["Family", "Romantic", "Adventure", "Luxury"],
    thingsToPack: [
      "Sunscreen",
      "Swimwear",
      "Light clothing",
      "Evening wear",
      "Water shoes",
    ],
    visaRequirements: "Valid passport required for most destinations",
    languages: ["English", "French", "Polynesian"],
    currency: "US Dollar widely accepted",
    timeZone: "Pacific Time (PT)",
    rating: {
      score: 4.8,
      reviews: 3456
    },
    trips: [
      {
        name: "Tahitian Paradise",
        duration: "10 nights",
        price: 1499,
        highlights: [
          "Bora Bora Overwater Bungalows",
          "Moorea Lagoon Snorkeling",
          "Traditional Luau"
        ],
        ports: ["Papeete", "Bora Bora", "Moorea", "Raiatea"],
        departureDates: ["2024-06-12", "2024-07-10", "2024-08-14"],
        shipName: "Paul Gauguin"
      }
    ],
  },
  {
    name: "Asia",
    slug: "asia",
    image: "https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg",
    description: "Ancient traditions meet modern cities across diverse Asian cultures",
    duration: "12-21 nights",
    startingPrice: 1199,
    popularPorts: [
      "Singapore",
      "Hong Kong",
      "Shanghai, China",
      "Tokyo (Yokohama), Japan",
    ],
    highlights: [
      "Exploring ancient traditions",
      "Experiencing modern cities",
      "Enjoying diverse Asian cultures",
      "Experiencing Asian cuisine",
    ],
    activities: [
      {
        name: "Cultural Tours",
        description: "Visit historic sites and experience Asian culture",
      },
      {
        name: "Modern Cities",
        description: "Explore modern cities and experience Asian lifestyle",
      },
      {
        name: "Asian Cuisine",
        description: "Enjoy Asian cuisine and experience Asian food culture",
      },
    ],
    bestTimeToVisit: "October to March",
    weather: {
      summer: "Hot and humid with occasional showers (75-85°F)",
      winter: "Warm and dry with cool evenings (70-80°F)",
    },
    cruiseTypes: ["Adventure", "Luxury", "Cultural", "Romantic"],
    thingsToPack: [
      "Warm clothing",
      "Rain gear",
      "Water shoes",
      "Camera",
      "Binoculars",
    ],
    visaRequirements: "Valid passport required for most destinations",
    languages: ["English", "Chinese", "Japanese", "Korean"],
    currency: "US Dollar widely accepted",
    timeZone: "Eastern Standard Time (EST)",
    rating: {
      score: 4.6,
      reviews: 4321
    },
    trips: [
      {
        name: "Far East Discovery",
        duration: "14 nights",
        price: 1199,
        highlights: [
          "Great Wall of China",
          "Tokyo Night Tour",
          "Singapore Gardens"
        ],
        ports: ["Hong Kong", "Shanghai", "Tokyo", "Singapore"],
        departureDates: ["2024-10-05", "2024-11-09", "2024-12-07"],
        shipName: "Quantum of the Seas"
      },
      {
        name: "Southeast Asia Explorer",
        duration: "12 nights",
        price: 1399,
        highlights: [
          "Ha Long Bay Cruise",
          "Bangkok Temples",
          "Phuket Beaches"
        ],
        ports: ["Singapore", "Bangkok", "Ho Chi Minh City", "Hong Kong"],
        departureDates: ["2024-11-15", "2024-12-13", "2025-01-10"],
        shipName: "Celebrity Solstice"
      }
    ],
  },
];

export function getAllDestinations() {
  return destinations;
}

export function getDestinationBySlug(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
} 