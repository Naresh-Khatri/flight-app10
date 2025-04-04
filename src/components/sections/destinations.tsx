"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Users, Star } from "lucide-react";
import { destinations } from "@/config/destinations";

export function DestinationsSection() {
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
            <span className="text-primary font-medium">Explore The World</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Featured Destinations
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Discover our handpicked selection of world-class cruise destinations
            </p>
          </motion.div>

          {/* Destinations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/destinations/${dest.slug}`}>
                  <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                    {/* Image Container */}
                    <div className="relative h-[400px] overflow-hidden">
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-medium">{dest.rating.score}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {dest.name}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {dest.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center gap-6 mb-6 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{dest.trips.length * 12} trips</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{dest.region}</span>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-white transition-all"
                      >
                        Explore Destination
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Link>
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
            <Link href="/destinations">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View All Destinations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
