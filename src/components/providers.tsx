"use client";

import { Suspense } from "react";
import SmoothScroll from "./smooth-scroll";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      {/* Add providers here later, such as:
        - Theme provider
        - Auth provider
        - State management provider
        - Toast provider
        etc.
      */}

      <Suspense fallback={<div>Loading...</div>}>
        <SmoothScroll>{children}</SmoothScroll>
      </Suspense>
    </>
  );
}

