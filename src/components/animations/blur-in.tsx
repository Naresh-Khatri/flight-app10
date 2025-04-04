"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { ReactNode, useContext } from "react";
// import { PageTransitionContext } from "../page-transition";

interface BlurIntProps {
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
  delay?: number;
  children: ReactNode;
}
const BlurIn = ({
  children,
  className,
  variant,
  duration = 1,
  delay = 0,
}: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;
  // const { pageIsReady } = useContext(PageTransitionContext);

  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      transition={{ duration, delay }}
      viewport={{ once: true }}
      variants={combinedVariants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export default BlurIn;
