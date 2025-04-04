import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/data";
import { footerLinks } from "@/config/footer";
import { TransitionLink } from "./page-transition";

export function Footer() {
  return (
    <footer className="bg-primary-darker text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-secondary font-heading text-xl mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <TransitionLink
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-secondary font-heading text-xl mb-6">
              Popular Destinations
            </h3>
            <ul className="space-y-3">
              {footerLinks.popularDestinations.map((link) => (
                <li key={link.href}>
                  <TransitionLink
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Cruise Lines */}
          <div>
            <h3 className="text-secondary font-heading text-xl mb-6">
              Popular Cruise Lines
            </h3>
            <ul className="space-y-3">
              {footerLinks.cruiseLines.map((link) => (
                <li key={link.href}>
                  <TransitionLink
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-secondary font-heading text-xl mb-6">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-secondary">24/7 Support:</span>
                <a
                  href={`tel:${siteConfig.contact.phone.value}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {siteConfig.contact.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-secondary">Email:</span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Payment Methods */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              {footerLinks.paymentMethods.map((method) => (
                <div key={method.name} className="opacity-70 hover:opacity-100 transition-opacity">
                  {method.logo}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-end gap-6">
              {Object.entries(siteConfig.contact.social).map(([platform, url]) => (
                <Link
                  key={platform}
                  href={url}
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label={platform}
                >
                  {platform === "facebook" && <Facebook className="h-5 w-5" />}
                  {platform === "twitter" && <Twitter className="h-5 w-5" />}
                  {platform === "instagram" && <Instagram className="h-5 w-5" />}
                  {platform === "youtube" && <Youtube className="h-5 w-5" />}
                  {platform === "linkedin" && <Linkedin className="h-5 w-5" />}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 text-sm text-white/60">
          <p>
            Disclaimer: {siteConfig.name} is an independent cruise booking
            agency. We work with multiple cruise lines to offer you the best
            deals and experiences. While we strive to provide accurate
            information, all cruise details, prices, and availability are
            subject to change. We recommend confirming all details with our
            cruise specialists before booking.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-white/60">
            © {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
