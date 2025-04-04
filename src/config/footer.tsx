import AmericanExpressCardIcon from "@/assets/payment-icons/american-express";
import DiscoverCardIcon from "@/assets/payment-icons/discover";
import MasterCardIcon from "@/assets/payment-icons/master";
import VisaCardIcon from "@/assets/payment-icons/visa";

export const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Refunds", href: "/refunds" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ],
  popularDestinations: [
    { name: "Caribbean Cruises", href: "/destinations/caribbean" },
    { name: "Mediterranean Cruises", href: "/destinations/mediterranean" },
    { name: "Alaska Cruises", href: "/destinations/alaska" },
    { name: "Bahamas Cruises", href: "/destinations/bahamas" },
    { name: "European Cruises", href: "/destinations/europe" },
    { name: "Hawaiian Cruises", href: "/destinations/hawaii" },
  ],
  cruiseLines: [
    { name: "Carnival Cruise Line", href: "/cruisers/carnival" },
    { name: "Royal Caribbean", href: "/cruisers/royal-caribbean" },
    { name: "Norwegian Cruise Line", href: "/cruisers/norwegian" },
    { name: "Princess Cruises", href: "/cruisers/princess" },
    { name: "Celebrity Cruises", href: "/cruisers/celebrity" },
    { name: "MSC Cruises", href: "/cruisers/msc" },
    { name: "Holland America", href: "/cruisers/holland-america" },
    { name: "Disney Cruise Line", href: "/cruisers/disney" },
    { name: "Costa Cruises", href: "/cruisers/costa" },
    { name: "Viking Cruises", href: "/cruisers/viking" },
  ],
  paymentMethods: [
    { name: "Visa", logo: <VisaCardIcon className="w-14 h-14" fill="#fff" /> },
    {
      name: "Mastercard",
      logo: <MasterCardIcon className="w-14 h-14" fill="#fff" />,
    },
    {
      name: "American Express",
      logo: <AmericanExpressCardIcon className="w-14 h-14" fill="#fff" />,
    },
    {
      name: "Discover",
      logo: <DiscoverCardIcon className="w-14 h-14" fill="#fff" />,
    },
  ],
};
