"use client";
import { motion } from "framer-motion";
import { 
  Utensils, 
  Waves, 
  Music, 
  Sparkles, 
  Palmtree, 
  GlassWater,
  Users,
  Dumbbell
} from "lucide-react";

const experiences = [
  {
    title: "Fine Dining",
    description: "Savor exquisite cuisine crafted by world-renowned chefs in our specialty restaurants",
    icon: Utensils,
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-500",
  },
  {
    title: "Wellness & Spa",
    description: "Indulge in premium treatments and rejuvenating therapies at our luxury spa",
    icon: GlassWater,
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
  },
  {
    title: "Entertainment",
    description: "Experience Broadway-caliber shows and live performances every evening",
    icon: Music,
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
  },
  {
    title: "Adventure",
    description: "Challenge yourself with rock climbing, surfing, and exciting activities",
    icon: Dumbbell,
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500",
  },
  {
    title: "Social Events",
    description: "Connect with fellow travelers at themed parties and social gatherings",
    icon: Users,
    gradient: "from-rose-500/20 to-red-500/20",
    iconColor: "text-rose-500",
  },
  {
    title: "Beach Activities",
    description: "Enjoy pristine beaches and water sports at exclusive private islands",
    icon: Palmtree,
    gradient: "from-yellow-500/20 to-amber-500/20",
    iconColor: "text-yellow-600",
  },
];

export function ExperiencesSection() {
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
            <span className="text-primary font-medium">Onboard Experiences</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Unforgettable Moments
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Create lasting memories with our curated selection of premium onboard experiences
            </p>
          </motion.div>

          {/* Experiences Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-full rounded-3xl p-8 bg-white transition-all duration-300 hover:shadow-xl">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl ${exp.iconColor} bg-white flex items-center justify-center mb-6 shadow-sm`}>
                      <exp.icon className="w-8 h-8" />
                    </div>

                    <h3 className="text-xl font-semibold mb-4">{exp.title}</h3>
                    <p className="text-slate-600">{exp.description}</p>
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