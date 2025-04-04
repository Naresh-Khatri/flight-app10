"use client";
import { HeroSection } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats";
import { Features } from "@/components/sections/features";
import { PopularCruises } from "@/components/sections/popular-cruises";
import { BenefitsSection } from "@/components/sections/benefits";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { NewsletterSection } from "@/components/sections/newsletter";
import { DestinationsSection } from "@/components/sections/destinations";
import { ShipsSection } from "@/components/sections/ships";
import { ExperiencesSection } from "@/components/sections/experiences";
import { CTASection } from "@/components/sections/cta";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

// Fade in animation variant
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="relative" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-white">
        <HeroSection />
      </section>

      {/* Stats Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="relative z-10 -mt-8 bg-white shadow-luxury"
      >
        <StatsSection />
      </motion.section>

      {/* Features Section */}
      <section className="bg-primary-lightest">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Features />
        </motion.div>
      </section>

      {/* Popular Cruises */}
      <section className="bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <PopularCruises />
        </motion.div>
      </section>

      {/* Destinations */}
      <section className="bg-primary-lightest">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <DestinationsSection />
        </motion.div>
      </section>

      {/* Ships and Experiences */}
      <section className="bg-white">
        <div className="space-y-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <ShipsSection />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <ExperiencesSection />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-primary-lightest">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <BenefitsSection />
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <TestimonialsSection />
        </motion.div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary-lightest">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <NewsletterSection />
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <CTASection />
        </motion.div>
      </section>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
    </main>
  );
}
