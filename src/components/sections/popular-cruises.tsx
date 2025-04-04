"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Calendar, Users, MapPin, Anchor } from "lucide-react";

const cruises = [
  {
    title: "Mediterranean Dream",
    duration: "7 nights",
    price: "From $1,299",
    image: "/destinations/mediterranean.jpg",
    rating: 4.9,
    reviews: 128,
    departure: "Barcelona",
    destinations: ["Rome", "Athens", "Santorini"],
    ship: "Royal Voyager"
  },
  {
    title: "Caribbean Paradise",
    duration: "10 nights",
    price: "From $1,499",
    image: "/destinations/caribbean.jpg",
    rating: 4.8,
    reviews: 156,
    departure: "Miami",
    destinations: ["Jamaica", "Bahamas", "St. Lucia"],
    ship: "Crystal Serenity"
  },
  {
    title: "Alaska Adventure",
    duration: "12 nights",
    price: "From $1,899",
    image: "/destinations/alaska.jpg",
    rating: 4.9,
    reviews: 142,
    departure: "Vancouver",
    destinations: ["Juneau", "Skagway", "Ketchikan"],
    ship: "Ocean Majesty"
  },
];

export function PopularCruises() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-primary font-medium">Featured Voyages</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Popular Cruise Packages
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Embark on an unforgettable journey with our most sought-after cruise experiences
            </p>
          </motion.div>

          {/* Cruises Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cruises.map((cruise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative h-[300px] overflow-hidden">
                    <Image
                      src={cruise.image}
                      alt={cruise.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium">{cruise.rating}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {cruise.title}
                    </h3>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{cruise.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Anchor className="w-4 h-4 text-primary" />
                        <span>{cruise.ship}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{cruise.departure}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{cruise.reviews} reviews</span>
                      </div>
                    </div>

                    {/* Destinations */}
                    <div className="flex gap-2 mb-6">
                      {cruise.destinations.map((dest, i) => (
                        <span
                          key={i}
                          className="text-sm bg-slate-100 px-3 py-1 rounded-full text-slate-700"
                        >
                          {dest}
                        </span>
                      ))}
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-500">Starting from</p>
                        <p className="text-2xl font-bold text-primary">{cruise.price}</p>
                      </div>
                      <Button
                        variant="outline"
                        className="group-hover:bg-primary group-hover:text-white transition-all"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <Link href="/cruises">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View All Cruises
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
