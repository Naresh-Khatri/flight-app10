"use client";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/data";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Star, Shield, X, Anchor, Gift, ArrowRight } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { usePathname } from "next/navigation";

export function StartPopup() {
  const [open, setOpen] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const pathname = usePathname();
  const cruiseLine = pathname?.includes("carnival")
    ? "Carnival"
    : pathname?.includes("royal-caribbean")
      ? "Royal Caribbean"
      : pathname?.includes("norwegian")
        ? "Norwegian"
        : pathname?.includes("princess")
          ? "Princess"
          : pathname?.includes("celebrity")
            ? "Celebrity"
            : pathname?.includes("virgin")
              ? "Virgin Voyages"
              : pathname?.includes("msc")
                ? "MSC"
                : "Cruise";

  useEffect(() => {
    const popupTimer = setTimeout(() => setOpen(true), 1500);
    const popupCloseTimer = setTimeout(() => setShowCloseButton(true), 11500);
    return () => {
      clearTimeout(popupTimer);
      clearTimeout(popupCloseTimer);
    };
  }, []);

  const Content = (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-slate-50 rounded-3xl">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(30deg,#00000008_1px,transparent_1px)] bg-[length:20px_20px] opacity-50 rounded-3xl" />
      
      <div className="relative space-y-6 p-8">
        {showCloseButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 p-2.5 rounded-full hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <X className="w-4 h-4" />
          </motion.button>
        )}

        <div className="text-center space-y-4">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-slate-700 text-sm">
              Rated 4.9/5 by travelers
            </span>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full text-sm font-medium"
          >
            <Gift className="w-4 h-4" />
            Limited Time Offer
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
          >
            Save Up To 65% On {cruiseLine} Cruises
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-2xl shadow-lg border border-primary/10 space-y-4"
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-primary/10">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-slate-700">
                24/7 Cruise Experts
              </span>
            </div>
            <div className="p-2 rounded-xl bg-primary/10">
              <Shield className="w-5 h-5 text-primary" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-center p-4 rounded-xl bg-primary/5">
              <div className="text-sm text-slate-600">
                Get Exclusive Rates & Up To
              </div>
              <div className="text-2xl font-bold text-primary">
                $1,000 Onboard Credit
              </div>
            </div>

            <a href={`tel:${siteConfig.contact.phone.value}`}>
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg group h-14 rounded-xl"
                size="lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span className="font-medium">{siteConfig.contact.phone.display}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {[
            "Price Match Guarantee",
            "24/7 Expert Support",
            "Exclusive Perks",
            "Flexible Payments",
          ].map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
            >
              <div className="p-2 rounded-xl bg-white">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-slate-700">{text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-sm text-slate-500">
            Best Price Guarantee • Expert Advice • Free Perks
          </p>
        </motion.div>
      </div>
    </div>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={showCloseButton ? setOpen : undefined}>
        <DialogTitle className="sr-only">Cruise Booking</DialogTitle>
        <DialogContent className="sm:max-w-[450px] p-0 rounded-3xl" closeButton={false}>
          {Content}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={showCloseButton ? setOpen : undefined}>
      <DrawerTitle className="sr-only">Cruise Booking</DrawerTitle>
      <DrawerContent className="p-0 rounded-t-3xl">{Content}</DrawerContent>
    </Drawer>
  );
}
