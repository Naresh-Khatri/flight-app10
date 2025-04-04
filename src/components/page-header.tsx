"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  size?: 'default' | 'large';
  rating?: number;
  reviews?: number;
  showTrustBadge?: boolean;
}

export function PageHeader({ 
  title, 
  description, 
  subtitle,
  align = 'left',
  size = 'default',
  rating = 4.9,
  reviews = 1250,
  showTrustBadge = false,
}: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#00000008_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      <div className={`
        relative
        max-w-7xl 
        mx-auto 
        px-4 
        sm:px-6 
        lg:px-8 
        ${size === 'large' ? 'py-24 md:py-32' : 'py-16 md:py-20'}
        ${align === 'center' ? 'text-center' : 'text-left'}
      `}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`${align === 'center' ? 'mx-auto' : ''} max-w-3xl`}
        >
          {showTrustBadge && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-8 ${align === 'center' ? 'mx-auto' : ''}`}
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
          )}

          {subtitle && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`flex items-center gap-3 mb-6 ${align === 'center' ? 'justify-center' : ''}`}
            >
              <div className="h-px w-8 bg-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {subtitle}
              </span>
              {align === 'center' && <div className="h-px w-8 bg-primary" />}
            </motion.div>
          )}

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`
              font-bold 
              tracking-tight 
              bg-gradient-to-r 
              from-gray-900 
              via-gray-800 
              to-gray-700 
              bg-clip-text 
              text-transparent
              ${size === 'large' ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-3xl md:text-4xl lg:text-5xl'}
            `}
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`
                mt-6
                text-gray-600 
                ${size === 'large' ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}
                leading-relaxed
                ${align === 'center' ? 'mx-auto max-w-2xl' : ''}
              `}
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute left-0 bottom-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
        <div className="absolute right-0 top-0 w-40 h-40 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
      </div>
    </div>
  );
}

