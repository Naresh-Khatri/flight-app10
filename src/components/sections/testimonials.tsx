"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "First-time Cruiser",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    content: "The most amazing vacation experience! The staff was incredible and the destinations were breathtaking.",
    rating: 5,
    location: "Mediterranean Cruise",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Michael Chen",
    role: "Frequent Cruiser",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    content: "I've been on many cruises, but this company consistently delivers the best service and value.",
    rating: 5,
    location: "Caribbean Adventure",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    name: "Emma Thompson",
    role: "Family Traveler",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    content: "Perfect for families! Activities for all ages and the kids' programs were exceptional.",
    rating: 5,
    location: "Alaska Expedition",
    gradient: "from-emerald-500/20 to-green-500/20",
  },
];

export function TestimonialsSection() {
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
            <span className="text-primary font-medium">Guest Reviews</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              What Our Guests Say
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Real experiences from our valued travelers who have explored the world with us
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full rounded-3xl p-8 bg-white transition-all duration-300 hover:shadow-xl">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 -right-2 text-slate-200">
                      <Quote className="w-12 h-12" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Content */}
                    <p className="text-slate-700 text-lg mb-6 italic">
                      "{testimonial.content}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-slate-600">{testimonial.role}</p>
                        <p className="text-primary text-sm">{testimonial.location}</p>
                      </div>
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
