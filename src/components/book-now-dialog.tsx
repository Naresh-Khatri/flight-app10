"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Shield,
  BadgePercent,
  Clock,
  HeadphonesIcon,
  CalendarCheck,
  Plane,
  CreditCard,
  Users,
  Hotel,
  Car,
  Gift,
} from "lucide-react";
import { siteConfig } from "@/config/data";
import { ReactNode } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";

interface BookNowDialogProps {
  flightDetails?: {
    from: string;
    to: string;
    price: number;
    airline: string;
  };
  children: ReactNode;
}

export function BookNowDialog({ flightDetails, children }: BookNowDialogProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const Content = (
    <>
      <div className="bg-primary-lightest p-4 rounded-lg mb-4">
        <div className="font-medium text-primary-darkest mb-2">
          Selected Flight
        </div>
        <div className="text-sm text-primary-darker">
          {flightDetails?.from} → {flightDetails?.to}
          <span className="mx-2">•</span>
          {flightDetails?.airline}
          <span className="mx-2">•</span>${flightDetails?.price}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4">
        <div className="flex items-center gap-3">
          <BadgePercent className="w-6 h-6 text-primary" />
          <div className="font-medium">Best Price Guarantee</div>
        </div>

        <div className="flex items-center gap-3">
          <HeadphonesIcon className="w-6 h-6 text-primary" />
          <div className="font-medium">24/7 Support</div>
        </div>

        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          <div className="font-medium">Secure Booking</div>
        </div>

        <div className="flex items-center gap-3">
          <CalendarCheck className="w-6 h-6 text-primary" />
          <div className="font-medium">Flexible Dates</div>
        </div>

        <div className="flex items-center gap-3">
          <Plane className="w-6 h-6 text-primary" />
          <div className="font-medium">All Airlines</div>
        </div>

        <div className="flex items-center gap-3">
          <CreditCard className="w-6 h-6 text-primary" />
          <div className="font-medium">Easy Payment</div>
        </div>

        <div className="flex items-center gap-3">
          <Users className="w-6 h-6 text-primary" />
          <div className="font-medium">Group Bookings</div>
        </div>

        <div className="flex items-center gap-3">
          <Hotel className="w-6 h-6 text-primary" />
          <div className="font-medium">Hotel Deals</div>
        </div>

        <div className="flex items-center gap-3">
          <Car className="w-6 h-6 text-primary" />
          <div className="font-medium">Car Rentals</div>
        </div>

        <div className="flex items-center gap-3">
          <Clock className="w-6 h-6 text-primary" />
          <div className="font-medium">Quick Process</div>
        </div>

        <div className="flex items-center gap-3">
          <Gift className="w-6 h-6 text-primary" />
          <div className="font-medium">Special Offers</div>
        </div>

        <div className="flex items-center gap-3">
          <Shield className="w-6 h-6 text-primary" />
          <div className="font-medium">Price Protection</div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold">Call Now</h3>
          <p className="text-sm text-gray-600">
            {siteConfig.contact.hours} available
          </p>
        </div>

        <a href={`tel:${siteConfig.contact.phone.value}`} className="w-full">
          <Button
            size="lg"
            className="w-full bg-green-600 hover:bg-green-700 text-lg h-auto py-4 group"
          >
            <div className="flex items-center justify-center gap-3">
              <div>
                <div className="font-bold tracking-wide flex items-center gap-2">
                  <Phone className="w-5 h-5 animate-pulse" />
                  {siteConfig.contact.phone.display}
                </div>
                <div className="text-xs font-medium opacity-90">
                  Tap to call
                </div>
              </div>
            </div>
          </Button>
        </a>

        <div className="mt-4 text-center text-sm text-gray-500">
          <Clock className="inline-block w-4 h-4 mr-1 mb-1" />
          Wait time: Under 1 min
        </div>
      </div>
    </>
  );

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger className="w-full" asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">Book with an Expert</DialogTitle>
            <DialogDescription className="text-base">
              Get better deals and personal assistance
            </DialogDescription>
          </DialogHeader>
          {Content}
          <DialogFooter className="text-xs text-gray-500 text-center sm:text-left">
            Your privacy is protected
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger className="w-full" asChild>
        {children}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-2xl">Book with an Expert</DrawerTitle>
          <DrawerDescription className="text-base">
            Get better deals and personal assistance
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4">{Content}</div>
        <DrawerFooter className="text-xs text-gray-500 text-center">
          Your privacy is protected
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
