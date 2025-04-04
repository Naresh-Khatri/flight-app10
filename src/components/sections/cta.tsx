"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, ArrowRight, Star } from "lucide-react";
import { siteConfig } from "@/config/data";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#00000012_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="space-y-8">
                {/* Review Badge */}
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-slate-700 text-sm">
                    Rated 4.9/5 from over 10,000 travelers
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  Start Your Journey to
                  <span className="block mt-2 text-primary">Extraordinary Adventures</span>
                </h2>

                <div className="space-y-6">
                  <p className="text-slate-700 text-lg">
                    Book now and unlock exclusive benefits:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      "Premium cabin upgrades",
                      "Complimentary beverage package",
                      "Flexible booking options",
                      "24/7 concierge service",
                    ].map((perk, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-slate-700">{perk}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="absolute -top-4 -right-4 bg-primary text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                  Limited Time Offer
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Ready to Start Planning?
                  </h3>

                  <div className="space-y-4">
                    <Button
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-white text-lg h-14 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Your Consultation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-slate-500">
                          or call us directly
                        </span>
                      </div>
                    </div>

                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full text-lg h-14 border-2 hover:bg-slate-50 transition-colors duration-300"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      {siteConfig.contact.phone.display}
                    </Button>
                  </div>

                  <p className="text-sm text-slate-500 text-center">
                    Our cruise experts are available 24/7 to assist you
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
