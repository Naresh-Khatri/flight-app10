import { siteConfig } from "@/config/data";
import { footerLinks } from "@/config/footer";
import { MetadataRoute } from "next";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Terms of Service",
    href: "/terms",
  },
  {
    label: "Disclaimer",
    href: "/disclaimer",
  },
  {
    label: "Feedback",
    href: "/feedback",
  },
  {
    label: "Legal",
    href: "/legal",
  },
  {
    label: "Refunds",
    href: "/refunds",
  },
  // Cruise-specific pages
  {
    label: "Search Cruises",
    href: "/search",
  },
  {
    label: "Destinations",
    href: "/destinations",
  },
];

// Major cruise lines
const cruiseLines = [
  {
    label: "Royal Caribbean",
    href: "/cruisers/royal-caribbean",
  },
  {
    label: "Carnival Cruise Line",
    href: "/cruisers/carnival",
  },
  {
    label: "Norwegian Cruise Line",
    href: "/cruisers/norwegian",
  },
  {
    label: "Celebrity Cruises",
    href: "/cruisers/celebrity",
  },
  {
    label: "MSC Cruises",
    href: "/cruisers/msc",
  },
  {
    label: "Disney Cruise Line",
    href: "/cruisers/disney",
  },
];

// Popular cruise destinations
const destinations = [
  {
    label: "Caribbean Cruises",
    href: "/destinations/caribbean",
  },
  {
    label: "Mediterranean Cruises",
    href: "/destinations/mediterranean",
  },
  {
    label: "Alaska Cruises",
    href: "/destinations/alaska",
  },
  {
    label: "European Cruises",
    href: "/destinations/europe",
  },
  {
    label: "Bahamas Cruises",
    href: "/destinations/bahamas",
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allLinks = [
    ...links,
    ...cruiseLines,
    ...destinations,
    ...footerLinks.popularDestinations.map((link) => ({
      ...link,
    })),
  ];

  return allLinks.map((link) => ({
    url: `${siteConfig.website}${link.href}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "daily",
    priority:
      link.href === "/"
        ? 1.0
        : link.href.startsWith("/cruisers/")
          ? 0.9
          : link.href.startsWith("/destinations/")
            ? 0.8
            : 0.5,
  }));
}
