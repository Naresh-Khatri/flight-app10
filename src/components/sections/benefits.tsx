"use client";
import { motion } from "framer-motion";
import {
  Shield,
  Sparkles,
  Headphones,
  Globe2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    title: "Best Price Guarantee",
    description: "Find a lower cruise fare and we'll match it, plus give you onboard credit",
    icon: Shield,
    features: ["Price match guarantee", "No booking fees", "Flexible payment plans"],
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-500",
  },
  {
    title: "Premium Experience",
    description: "Enjoy luxury amenities and world-class service on every voyage",
    icon: Sparkles,
    features: ["Luxury accommodations", "Gourmet dining", "Premium entertainment"],
    color: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-500",
  },
  {
    title: "24/7 Support",
    description: "Our cruise experts are here to help you before, during, and after your voyage",
    icon: Headphones,
    features: ["Expert cruise advisors", "Onboard assistance", "Emergency support"],
    color: "from-emerald-500/20 to-emerald-600/20",
    iconColor: "text-emerald-500",
  },
  {
    title: "Global Destinations",
    description: "Explore over 400+ ports of call across all seven continents",
    icon: Globe2,
    features: ["Worldwide itineraries", "Exclusive shore excursions", "Cultural experiences"],
    color: "from-orange-500/20 to-orange-600/20",
    iconColor: "text-orange-500",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 relative bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-lg max-w-2xl mx-auto"
            >
              Experience unparalleled service and exceptional value on your next cruise adventure
            </motion.p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full rounded-3xl p-8 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm ${benefit.iconColor}`}>
                      <benefit.icon className="w-8 h-8" />
                    </div>

                    <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                    <p className="text-slate-600 mb-6">{benefit.description}</p>

                    <ul className="space-y-3">
                      {benefit.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-slate-700">
                          <CheckCircle2 className={`w-5 h-5 ${benefit.iconColor}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
