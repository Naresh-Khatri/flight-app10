"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Ship,
  Anchor,
  Users,
  Waves,
  Calendar,
  Star,
  Check,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const ships = [
  {
    name: "Royal Voyager",
    class: "Luxury Class",
    capacity: "2,800 guests",
    rating: 4.9,
    reviews: 856,
    features: [
      "5-Star Dining Experience",
      "Premium Spa & Wellness Center",
      "Broadway-Style Theater",
      "Luxury Casino",
      "Adults-Only Solarium",
      "Adventure Sports Deck",
    ],
    amenities: ["24/7 Room Service", "Butler Service", "Premium Wi-Fi"],
    image: "/ships/royal-voyager.png",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Crystal Serenity",
    class: "Premium Class",
    capacity: "3,200 guests",
    rating: 4.8,
    reviews: 742,
    features: [
      "Adventure Sports Complex",
      "Kids & Teens Club",
      "Shopping Promenade",
      "Multiple Pool Decks",
      "Ice Skating Rink",
      "Rock Climbing Wall",
    ],
    amenities: ["Mini Bar", "Balcony Dining", "Concierge"],
    image: "/ships/crystal-serenity.jpg",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    name: "Ocean Majesty",
    class: "Elite Class",
    capacity: "2,400 guests",
    rating: 4.9,
    reviews: 624,
    features: [
      "Michelin-Star Restaurant",
      "Golf Simulator",
      "IMAX Cinema",
      "Luxury Suite Collection",
      "Observation Lounge",
      "Art Gallery",
    ],
    amenities: ["Premium Bedding", "Private Lounge", "Priority Boarding"],
    image: "/ships/ocean-majesty.jpg",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
];

export function ShipsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-primary font-medium">Our Fleet</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Luxury Cruise Ships
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Experience unparalleled luxury aboard our world-class fleet of
              cruise ships
            </p>
          </motion.div>

          {/* Ships Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {ships.map((ship, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${ship.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Content */}
                  <div className="relative">
                    {/* Image */}
                    <div className="relative h-[300px] overflow-hidden">
                      <Image
                        src={ship.image}
                        alt={ship.name}
                        fill
                        className="object-cover"
                      />
                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-medium">
                          {ship.rating}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{ship.name}</h3>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-primary font-semibold">
                          {ship.class}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-600">{ship.capacity}</span>
                      </div>

                      {/* Features Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {ship.features.slice(0, 6).map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm text-slate-600"
                          >
                            <Check className="w-4 h-4 text-primary" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* Amenities */}
                      <div className="flex gap-2 mb-6">
                        {ship.amenities.map((amenity, i) => (
                          <span
                            key={i}
                            className="text-sm bg-slate-100 px-3 py-1 rounded-full text-slate-700"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>

                      <Button
                        className="w-full group-hover:bg-primary group-hover:text-white transition-all"
                        variant="outline"
                      >
                        View Ship Details
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
