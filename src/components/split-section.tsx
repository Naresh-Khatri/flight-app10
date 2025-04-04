"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import { siteConfig } from "@/config/data";
import { Badge } from "./ui/badge";
import { PhoneIcon, ArrowRight, Clock, Shield, Star } from "lucide-react";
import { motion } from "framer-motion";

interface SplitSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  description: string;
  imageLeft?: boolean;
  className?: string;
  features?: string[];
  ctaText?: string;
  ctaLink?: string;
  rating?: number;
  reviews?: number;
}

export function SplitSection({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  description,
  imageLeft = true,
  className,
  features = [],
  ctaText = "Contact Us",
  ctaLink,
  rating = 4.9,
  reviews = 1250,
}: SplitSectionProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, x: imageLeft ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center space-y-6 px-8 lg:px-14 py-14"
    >
      {/* Trust Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 bg-primary/5 backdrop-blur-sm px-4 py-2 rounded-full w-fit"
      >
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <span className="text-slate-700 text-sm">
          {rating} ({reviews.toLocaleString()}+ reviews)
        </span>
      </motion.div>

      {subtitle && (
        <div className="flex items-center gap-2">
          <div className="h-px w-8 bg-primary" />
          <p className="text-sm font-medium text-primary uppercase tracking-wider">
            {subtitle}
          </p>
        </div>
      )}

      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
        {title}
      </h2>

      <p className="text-gray-600 md:text-lg leading-relaxed">{description}</p>

      {features.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
            >
              <div className="p-2 rounded-lg bg-white">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <Button
          size="lg"
          className="group bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
          asChild
        >
          <a href={ctaLink || `tel:${siteConfig.contact.phone.value}`}>
            <PhoneIcon className="w-5 h-5 mr-2" />
            {ctaText}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>No Hold - Call answered in seconds</span>
        </div>
        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
          24/7 Available
        </Badge>
      </div>
    </motion.div>
  );

  const image = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative h-96 md:h-full group overflow-hidden rounded-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent z-10" />
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
    </motion.div>
  );

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 bg-white overflow-hidden rounded-3xl shadow-xl border border-primary/10",
        className,
      )}
    >
      {imageLeft ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          {content}
          {image}
        </>
      )}
    </div>
  );
}
