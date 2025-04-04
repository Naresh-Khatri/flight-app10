"use client";
import { motion } from "framer-motion";
import { Ship, Users, Globe2, Trophy, Star } from "lucide-react";
import NumberTicker from "../animations/number-ticker";

const stats = [
  {
    label: "Cruise Ships",
    value: "50 +",
    icon: Ship,
    description: "Premium vessels",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
  },
  {
    label: "Happy Travelers",
    value: "100 K+",
    icon: Users,
    description: "Satisfied guests",
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
  },
  {
    label: "Destinations",
    value: "400 +",
    icon: Globe2,
    description: "Ports of call",
    gradient: "from-emerald-500/20 to-green-500/20",
    iconColor: "text-emerald-500",
  },
  {
    label: "Awards Won",
    value: "25 +",
    icon: Trophy,
    description: "Industry recognition",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-500",
  },
];

export function StatsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#000000_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative rounded-3xl p-8 bg-white transition-all duration-300 hover:shadow-xl border border-slate-100">
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Content */}
                  <div className="relative">
                    <div
                      className={`w-16 h-16 rounded-2xl ${stat.iconColor} bg-white flex items-center justify-center mb-6 shadow-sm`}
                    >
                      <stat.icon className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-4xl font-bold flex ">
                        <NumberTicker value={+stat.value.split(" ")[0]} />{" "}
                        <span>{stat.value.split(" ")[1]}</span>
                      </h3>
                      <p className="text-xl font-semibold">{stat.label}</p>
                      <p className="text-slate-600">{stat.description}</p>
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
