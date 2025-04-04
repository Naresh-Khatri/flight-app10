"use client";
import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Clock, HeadphonesIcon, Phone, Shield, Tag } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/data";
import { motion } from "framer-motion";

export default function BookFlightButton({
  children,
  className,
  type = "flight",
}: {
  children: ReactNode;
  className?: string;
  type?: "flight" | "hotel";
}) {
  const [isOpen, setIsOpen] = useState(false);

  const features = [
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Secure Booking",
      description: "100% secure payment processing",
    },
    {
      icon: <Tag className="h-5 w-5" />,
      title: "Best Prices",
      description: "Guaranteed lowest fares",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance",
    },
    {
      icon: <HeadphonesIcon className="h-5 w-5" />,
      title: "Expert Guidance",
      description: "Professional travel advisors",
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={className} variant={"default"}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[850px] p-0 overflow-hidden">
        <div className="grid md:grid-cols-5 gap-0">
          {/* Left Section - Image */}
          <div className="md:col-span-2 relative h-full">
            <Image
              src="/call-center-2.jpg"
              alt="Customer Service"
              width={400}
              height={600}
              className="object-cover h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium">24/7 Support</p>
              <p className="text-xs opacity-80">Always here to help</p>
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="md:col-span-3 p-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                Book Your {type === "flight" ? "Flight" : "Hotel"}
              </DialogTitle>
              <DialogDescription className="text-base">
                Get exclusive deals and expert assistance
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6 space-y-6">
              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start space-y-1 p-3 rounded-lg bg-gray-50"
                  >
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      {feature.icon}
                    </div>
                    <h4 className="font-medium text-sm">{feature.title}</h4>
                    <p className="text-xs text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="space-y-4">
                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-600">Call us now at</p>
                  <a
                    href={`tel:${siteConfig.contact.phone.value}`}
                    className="flex items-center justify-center gap-2 text-2xl font-bold text-primary hover:text-primary/90 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    {siteConfig.contact.phone.display}
                  </a>
                </div>

                <Button
                  className="w-full text-lg py-6"
                  size="lg"
                  onClick={() =>
                    (window.location.href = `tel:${siteConfig.contact.phone.value}`)
                  }
                >
                  Call Now
                </Button>
              </div>
            </div>

            <DialogFooter className="mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                Close
              </Button>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
