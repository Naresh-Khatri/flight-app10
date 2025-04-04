"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/config/data";
import { useMediaQuery } from "@/hooks/use-media-query";

export function BottomBanner() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-md">
      <a
        href={`tel:${siteConfig.contact.phone.value}`}
        className="flex items-center justify-between px-6 py-4"
      >
        {/* Left side - Phone info */}
        <div className="flex items-center gap-4">
          <div className="bg-primary/5 p-3 rounded-full">
            <Phone className="w-5 h-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-gray-600 font-body">
              Speak with a Cruise Expert
            </span>
            <span className="text-lg font-heading text-primary">
              {siteConfig.contact.phone.display}
            </span>
          </div>
        </div>

        {/* Right side - Available badge */}
        <div className="bg-primary/5 px-4 py-2 rounded-full">
          <span className="text-sm font-body text-primary">
            24/7
          </span>
        </div>
      </a>
    </div>
  );
}
