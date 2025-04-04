"use client";

import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "@/lib/lenis";

interface LenisProps {
  children: React.ReactNode;
}

function SmoothScroll({ children }: LenisProps) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      lenis?.stop();
      lenis?.start();
    });
  }, []);

  return (
    <ReactLenis
      root
      options={{
        duration: 2,
        prevent: (node) => {
          const shouldPrevent = node.classList.contains("about-us");
          return shouldPrevent;
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
