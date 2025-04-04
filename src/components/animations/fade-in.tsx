"use client";

import { motion, Transition, Variants } from "framer-motion";

import { ReactNode, useContext } from "react";
// import { PageTransitionContext } from "../page-transition";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  variants?: Variants;
  className?: string;
  transition?: Transition;
  dir?: "up" | "down" | "left" | "right";
}
const getDirectionVariant = (dir: FadeInProps["dir"]): Variants => {
  const directions = {
    up: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
  };
  return directions[dir || "up"];
};

export default function FadeIn({
  delay = 0,
  duration = 0.5,
  variants,
  children,
  className,
  transition = {},
  dir = "up",
}: FadeInProps) {
  const defaultVariants = getDirectionVariant(dir);
  // const { pageIsReady } = useContext(PageTransitionContext);

  return (
    <motion.div
      className={className}
      variants={variants || defaultVariants}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true }}
      transition={{
        ...transition,
        duration,
        delay,
        type: "spring",
        stiffness: 100,
      }}
    >
      {children}
    </motion.div>
  );
}
