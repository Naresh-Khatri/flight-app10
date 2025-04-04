"use client";
import { motion } from "framer-motion";
import { Ship, Sparkles, Shield, Clock, Gift, Heart } from "lucide-react";

const features = [
  {
    title: "Luxury Accommodations",
    description:
      "Elegant suites with ocean views and premium amenities for ultimate comfort",
    icon: Ship,
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
    benefits: ["Ocean view balconies", "Premium bedding", "24/7 room service"],
  },
  {
    title: "World-Class Dining",
    description:
      "Exquisite culinary experiences crafted by renowned international chefs",
    icon: Gift,
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-500",
    benefits: ["Specialty restaurants", "Wine pairings", "Gourmet cuisine"],
  },
  {
    title: "Premium Service",
    description:
      "Personalized attention and exceptional service throughout your journey",
    icon: Heart,
    gradient: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-500",
    benefits: ["Personal butler", "Concierge service", "Priority boarding"],
  },
  {
    title: "Best Price Guarantee",
    description:
      "Unbeatable value with our price match promise and exclusive deals",
    icon: Shield,
    gradient: "from-emerald-500/20 to-green-500/20",
    iconColor: "text-emerald-500",
    benefits: ["Price matching", "No hidden fees", "Flexible payments"],
  },
];

export function Features() {
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
            <span className="text-primary font-medium">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Experience Excellence at Sea
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Discover the perfect blend of luxury, comfort, and adventure on
              your next cruise
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full rounded-3xl p-8 bg-white transition-all duration-300 hover:shadow-xl border border-slate-100">
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Content */}
                  <div className="relative">
                    <div
                      className={`w-16 h-16 rounded-2xl ${feature.iconColor} bg-white flex items-center justify-center mb-6 shadow-sm`}
                    >
                      <feature.icon className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-semibold mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 mb-6">{feature.description}</p>

                    {/* Benefits List */}
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-slate-700"
                        >
                          <Sparkles
                            className={`w-4 h-4 ${feature.iconColor}`}
                          />
                          {benefit}
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

