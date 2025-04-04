"use client";

import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { siteConfig } from "@/config/data";
import { motion } from "framer-motion";

export function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      className="bg-gradient-luxury text-white text-sm py-2 top-0 left-0 w-full h-[60px] md:h-[40px] z-[11] relative overflow-hidden"
    >
      {/* Animated background shine effect */}
      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] animate-shine" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-center space-x-6 md:space-x-8">
          {/* Phone */}
          <motion.div 
            className="flex flex-col items-center group"
            whileHover={{ scale: 1.02 }}
          >
            <a
              href={`tel:${siteConfig.contact.phone.value}`}
              className="flex items-center gap-1 hover:text-secondary transition-colors leading-3 relative"
            >
              <div className="relative">
                <Phone className="h-6 w-6 md:h-3 md:w-3 mr-3 md:mr-0 text-secondary" />
                <div className="absolute inset-0 bg-secondary/20 blur-lg -z-10" />
              </div>
              <span className="text-xl font-heading md:text-sm font-bold md:py-0 group-hover:text-secondary-lighter transition-colors">
                {siteConfig.contact.phone.display}
              </span>
            </a>
            <div className="block md:hidden text-xs text-white/80 font-body">
              Available {siteConfig.contact.hours}
            </div>
          </motion.div>

          {/* Divider */}
          <span className="hidden sm:block h-4 w-px bg-white/20" />

          {/* Email */}
          <motion.a
            href={`mailto:${siteConfig.contact.email}`}
            className="hidden sm:flex items-center gap-2 hover:text-secondary-lighter transition-colors group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <Mail className="h-3 w-3 text-secondary" />
              <div className="absolute inset-0 bg-secondary/20 blur-lg -z-10" />
            </div>
            <span className="font-body group-hover:text-secondary-lighter transition-colors">
              {siteConfig.contact.email}
            </span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
