"use client";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/data";
import { Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TransitionLink } from "./page-transition";
import { BrandLogoWithText } from "@/assets/logo";
import { usePathname } from "next/navigation";
import { cruisers } from "@/config/cruisers";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MENU_LINKS = [
  { href: "/", label: "Home" },
  {
    label: "Cruisers",
    subItems: Object.entries(cruisers).map(([name, info]) => ({
      href: `/cruisers/${name}`,
      label: info.name,
      image: info.logo,
    })),
  },
  { href: "/destinations", label: "Destinations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <BrandLogoWithText className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {MENU_LINKS.map((link, idx) =>
              link.subItems ? (
                <HoverCard key={idx} openDelay={0} closeDelay={0}>
                  <HoverCardTrigger>
                    <span className="text-sm font-medium text-gray-700 hover:text-primary cursor-pointer">
                      {link.label}
                    </span>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-[400px] p-0 border-none shadow-md">
                    <div className="grid grid-cols-2 gap-2 p-4">
                      {link.subItems.map((subItem, idx) => (
                        <Link
                          key={idx}
                          href={subItem.href}
                          className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-sm"
                        >
                          <Image
                            src={subItem.image}
                            alt={subItem.label}
                            width={40}
                            height={40}
                            className="rounded-[8px] h-10 w-10"
                          />
                          <span className="text-sm font-medium text-gray-700">
                            {subItem.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ) : (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-primary"
                >
                  {link.label}
                </Link>
              ),
            )}

            <Link href={`tel:${siteConfig.contact.phone.value}`}>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Phone className="w-4 h-4 mr-2" />
                {siteConfig.contact.phone.display}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-[300px] p-0">
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b">
                    <BrandLogoWithText className="h-8 w-auto" />
                  </div>
                  <div className="flex-1 overflow-auto py-4">
                    {MENU_LINKS.filter((item) => item.href).map((item) => (
                      <Link
                        key={item.href}
                        href={item.href as string}
                        className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                  <div className="p-4 border-t bg-gray-50">
                    <Link href={`tel:${siteConfig.contact.phone.value}`}>
                      <Button className="w-full bg-primary text-white hover:bg-primary-dark">
                        <Phone className="w-4 h-4 mr-2" />
                        {siteConfig.contact.phone.display}
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
