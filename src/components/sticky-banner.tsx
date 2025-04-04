"use client";
import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/data";
import { motion, AnimatePresence } from "framer-motion";

export function StickyBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-[9999] p-2 bg-white border-b shadow-lg md:hidden"
        >
          <a
            href={`tel:${siteConfig.contact.phone.value}`}
            className="flex items-center justify-between gap-4 px-4 py-3 bg-green-50 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-600 animate-pulse" />
              <div>
                <div className="font-semibold text-green-700">
                  {siteConfig.contact.phone.display}
                </div>
                <div className="text-xs text-green-600">
                  Tap to call • {siteConfig.contact.hours}
                </div>
              </div>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
