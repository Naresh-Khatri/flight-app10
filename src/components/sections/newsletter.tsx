"use client";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Bell } from "lucide-react";

export function NewsletterSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#ffffff12_1px,transparent_1px)] bg-[length:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            {/* Newsletter Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <Bell className="w-4 h-4 text-primary" />
              <span className="text-white/90 text-sm">Stay Updated</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Exclusive Cruise Deals
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Subscribe to our newsletter and receive the latest updates on luxury cruises,
              special offers, and travel inspiration straight to your inbox.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form className="relative max-w-xl mx-auto">
              <div className="flex gap-4 p-2 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="flex-1 flex items-center gap-3 bg-white rounded-xl px-4 py-3">
                  <Mail className="w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 bg-transparent border-none focus:outline-none text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-xl 
                           flex items-center gap-2 transition-colors duration-200"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Trust Badges */}
            <div className="flex justify-center items-center gap-8 mt-8">
              {['No spam', 'Unsubscribe anytime', 'Weekly updates'].map((text, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-white/60 text-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
