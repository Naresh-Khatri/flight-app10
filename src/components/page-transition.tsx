"use client";

import { motion } from "framer-motion";
import Link, { type LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import { BrandLogoWithText } from "@/assets/logo";
import { cruisers } from "@/config/cruisers";

const sleep = async (ms: number) => new Promise((r) => setTimeout(r, ms));

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  href: string;
  onClick?: (
    e: React.MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
  ) => void;
}

export const TransitionLink = ({
  href,
  children,
  className,
  onClick,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();
  const { setPageIsReady } = useContext(PageTransitionContext);
  const handleClick = async (
    e: React.MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    setPageIsReady(false);
    await sleep(300);
    router.push(href);

    /*
     if user goes to same pathname, useeffect wont detect the change.
     so we set page is ready manually here
    */
    await sleep(1500);
    setPageIsReady(true);
  };
  return (
    <Link
      href={href}
      className={className}
      {...props}
      onClick={handleClick}
      aria-label="transition link"
    >
      {children}
    </Link>
  );
};

const PATHNAMES = [
  { path: "/about", title: "About" },
  { path: "/airlines", title: "Airlines" },
  { path: "/search", title: "Search" },
  { path: "/disclaimer", title: "Disclaimer" },
  { path: "/feedback", title: "Feedback" },
  { path: "/legal", title: "Legal" },
  { path: "/refunds", title: "Refunds" },
  { path: "/contact", title: "Contact" },
  { path: "/privacy", title: "Privacy Policy" },
  { path: "/cruisers", title: "Cruisers" },
  { path: "/cruisers/carnival", title: "Carnival Cruise Line" },
  { path: "/cruisers/royal-caribbean", title: "Royal Caribbean" },
  { path: "/cruisers/norwegian", title: "Norwegian Cruise Line" },
  { path: "/cruisers/princess", title: "Princess Cruises" },
  { path: "/cruisers/celebrity", title: "Celebrity Cruises" },
  { path: "/cruisers/virgin", title: "Virgin Voyages" },
  { path: "/cruisers/msc", title: "MSC Cruises" },
  { path: "/terms", title: "Terms of Service" },
  { path: "/404", title: "Page Not Found" },
  { path: "/500", title: "Internal Server Error" },
];

const getTitle = (pathname: string) => {
  const pathInfo = PATHNAMES.find((p) => pathname.startsWith(p.path));

  // Check if it's a cruise line page
  if (pathname.includes("/cruisers/")) {
    const cruiseSlug = pathname.split("/").pop();
    if (cruiseSlug) {
      const cruiser = cruisers[cruiseSlug as keyof typeof cruisers];
      return {
        mainTitle: "Cruisers",
        subTitle: cruiser?.name || "",
      };
    }
  }

  return {
    mainTitle: pathInfo?.title || "Home",
    subTitle: "",
  };
};

const getDescription = (pageTitle: string, pathname: string) => {
  if (pageTitle === "Home") return "Welcome to your next adventure";

  if (pathname.includes("/cruisers/")) {
    const cruiseSlug = pathname.split("/").pop();
    if (cruiseSlug) {
      const cruiser = cruisers[cruiseSlug as keyof typeof cruisers];
      return cruiser?.description || `Exploring ${pageTitle.toLowerCase()}`;
    }
  }

  return `Exploring ${pageTitle.toLowerCase()}`;
};

type PageContextProps = {
  pageIsReady: boolean;
  setPageIsReady: Dispatch<SetStateAction<boolean>>;
};
const INITIAL = { pageIsReady: false, setPageIsReady: () => {} };
export const PageTransitionContext = createContext<PageContextProps>(INITIAL);

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const [pageIsReady, setPageIsReady] = useState(false);
  const pathname = usePathname();
  const { mainTitle, subTitle } = getTitle(pathname);
  const description = getDescription(mainTitle, pathname);
  useEffect(() => {
    if (typeof window !== "undefined" && !pageIsReady) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [pageIsReady]);
  useEffect(() => {
    setPageIsReady(false);
    const t = setTimeout(() => {
      setPageIsReady(true);
      clearTimeout(t);
    }, 1500);
  }, [pathname]);
  return (
    <PageTransitionContext.Provider value={{ pageIsReady, setPageIsReady }}>
      {children}
      <motion.div
        className={cn(
          "fixed left-0 top-0 h-[100dvh] w-screen bg-gradient-to-br from-blue-50 to-blue-100 flex justify-center items-center z-[100] overflow-hidden",
          "transition-all duration-500 ease-out",
          !pageIsReady && "opacity-1",
          pageIsReady && "opacity-0 pointer-events-none",
        )}
      >
        <div className="h-fit overflow-hidden flex flex-col items-center px-4">
          <motion.div
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: "30rem" },
            }}
            initial="hidden"
            animate={!pageIsReady ? "visible" : "hidden"}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="w-fit flex flex-col items-center"
          >
            <BrandLogoWithText className="w-[20rem] md:w-[40rem] h-[4rem] md:h-[8rem]" />

            {/* Loading Bar */}
            <motion.div
              className="w-48 md:w-64 h-0.5 bg-blue-200 mt-6 md:mt-8 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="h-full bg-blue-600 rounded-full"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.3,
                  delay: 0.2,
                },
              },
              hidden: { opacity: 0, y: "5rem" },
            }}
            initial="hidden"
            animate={!pageIsReady ? "visible" : "hidden"}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mt-6 md:mt-8"
          >
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                {mainTitle}
              </h1>
              {subTitle && (
                <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
                  {subTitle}
                </h2>
              )}
            </div>
            <p className="text-sm md:text-base text-gray-600 mt-4">
              {description}
            </p>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.3 }}
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
          </motion.div>
        </div>
      </motion.div>
    </PageTransitionContext.Provider>
  );
};

export default PageTransition;
