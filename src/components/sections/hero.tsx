"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CruiseSearchForm } from "../cruise-search-form";
import { Ship, MapPin, Calendar, Users, Star } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Caribbean",
    image: "/caribbean.jpg",
    price: "from $899",
    duration: "7 nights",
    description: "Crystal clear waters and white sand beaches",
  },
  {
    id: 2,
    name: "Mediterranean",
    image: "/mediterranean.jpg",
    price: "from $1,299",
    duration: "10 nights",
    description: "Ancient cultures and coastal charm",
  },
  {
    id: 3,
    name: "Alaska",
    image: "/alaska.jpg",
    price: "from $1,499",
    duration: "12 nights",
    description: "Glaciers and untamed wilderness",
  },
];

export function HeroSection() {
  const [activeDestination, setActiveDestination] = useState(0);

  return (
    <main className="relative min-h-[90dvh] overflow-hidden bg-black">
      {/* Background Slideshow */}
      {destinations.map((dest, index) => (
        <motion.div
          key={dest.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === activeDestination ? 1 : 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src={dest.image}
            alt={dest.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />
        </motion.div>
      ))}

      {/* Stats Bar at Top */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center py-4 border-b border-white/10 gap-4 sm:gap-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
            >
              <Ship className="w-4 h-4 text-primary" />
              <span className="text-white/90 text-sm font-medium">
                LUXURY CRUISE EXPERIENCES
              </span>
            </motion.div>

            <div className="grid grid-cols-2 sm:flex items-center gap-6 sm:gap-12">
              {[
                "200+ Destinations",
                "50+ Cruise Lines",
                "10K+ Happy Travelers",
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-base sm:text-lg font-bold text-white">
                    {stat.split(" ")[0]}
                  </div>
                  <div className="text-xs sm:text-sm text-white/60">
                    {stat.split(" ").slice(1).join(" ")}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-[calc(100vh-80px)] py-12 sm:py-0">
        <div className="container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
          <div className="max-w-[1000px] mx-auto space-y-8 sm:space-y-12">
            {/* Trust Badge - Mobile Only */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex sm:hidden items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full w-fit mx-auto"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white/90 text-sm">
                Rated 4.9/5
              </span>
            </motion.div>

            {/* Destination Navigation */}
            <div className="flex justify-center sm:justify-end gap-3 sm:gap-4">
              {destinations.map((dest, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDestination(index)}
                  className={`group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden 
                    ${index === activeDestination ? "ring-2 ring-primary" : "ring-1 ring-white/20"}`}
                >
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all
                    ${index === activeDestination ? "bg-black/10" : "bg-black/50"}`}
                  />
                </button>
              ))}
            </div>

            {/* Destination Info */}
            <div className="space-y-4 text-center sm:text-left">
              <motion.h1
                key={activeDestination}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight"
              >
                {destinations[activeDestination].name}
              </motion.h1>
              <motion.p
                key={`desc-${activeDestination}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-white/70 text-base sm:text-xl max-w-2xl mx-auto sm:mx-0"
              >
                {destinations[activeDestination].description}
              </motion.p>
            </div>

            {/* Trip Details */}
            <motion.div
              key={`details-${activeDestination}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center sm:justify-start gap-6 sm:gap-8"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="text-lg sm:text-xl text-white">
                  {destinations[activeDestination].duration}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="text-lg sm:text-xl text-white">
                  {destinations[activeDestination].price}
                </span>
              </div>
            </motion.div>

            {/* Search Form */}
            <div className="backdrop-blur-sm bg-white/5 p-4 sm:p-8 rounded-xl border border-white/10">
              <CruiseSearchForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
