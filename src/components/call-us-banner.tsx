import { siteConfig } from "@/config/data";
import { Input } from "@/components/ui/input";
import { Card } from "./ui/card";
import { Shield, Clock, HeadphonesIcon, Phone, TagIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
const CallUsBanner = () => {
  return (
    <>
      <div className="space-y-4">
        <Card className="overflow-hidden bg-gradient-to-r from-slate-50 to-primary-lightest">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">
            {/* Left Section - Price and Trust */}
            <div className="col-span-7 xl:col-span-4 flex-col justify-center hidden lg:flex">
              <div className="text-center lg:text-left space-y-4">
                <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  Special Offer Available
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  Save up to
                  <span className="text-primary"> 40% </span>
                  on flights
                </h2>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4" />
                    Price Match Guarantee
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    24/7 Support
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Section - Call Now */}
            <div className="col-span-5 flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary-lighter flex items-center justify-center">
                    <HeadphonesIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Speak to a Travel Expert
                    </h3>
                    <p className="text-sm text-gray-600">
                      Get personalized assistance for your booking
                    </p>
                  </div>
                </div>

                <a
                  href={`tel:${siteConfig.contact.phone.value}`}
                  className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary-dark"
                >
                  <Phone className="h-5 w-5" />
                  {siteConfig.contact.phone.display}
                </a>

                <div className="relative hidden md:block">
                  <form className="flex gap-2">
                    <div className="relative flex-1">
                      <Input
                        type="tel"
                        placeholder="Your phone number"
                        className="pl-10 bg-white"
                      />
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                    <Button className="bg-primary hover:bg-primary-dark">
                      Request Callback
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="col-span-0 lg:col-span-3 items-center justify-center hidden xl:flex">
              <div className="relative">
                <div className="absolute -top-6 -left-6 bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg text-sm shadow-xl">
                  Top Rated Service
                </div>
                <Image
                  src="/call-center.jpg"
                  alt="Travel Support Team"
                  width={200}
                  height={200}
                  className="w-full max-h-[200px] rounded-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white shadow-lg rounded-full px-3 py-1 flex items-center gap-1">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-sm font-medium">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <Card className="overflow-hidden">
        <div className="grid grid-cols-12 items-center bg-gradient-to-r from-primary-lightest to-primary-lighter">
          {/* Phone Icon Section - Hidden on mobile */}
          <div className="hidden md:block md:col-span-2 p-4 text-center">
            <div className="bg-primary rounded-full w-14 h-14 mx-auto flex items-center justify-center">
              <Phone className="h-6 w-6 text-white" />
            </div>
          </div>

          {/* Main Call Section */}
          <div className="col-span-8 md:col-span-4 p-3 md:p-4 text-left">
            <div className="space-y-0.5">
              <h3 className="text-xs md:text-sm font-medium text-primary uppercase tracking-wider">
                Exclusive Phone Fares
              </h3>
              <a
                href={`tel:${siteConfig.contact.phone.value}`}
                className="text-xl md:text-2xl font-bold text-gray-900 hover:text-primary transition-colors"
              >
                {siteConfig.contact.phone.display}
              </a>
              <p className="text-xs text-gray-600">24/7 Support • Best Price</p>
            </div>
          </div>

          {/* Trust Badge Section */}
          <div className="hidden md:block col-span-3 p-4">
            <div className="bg-white/80 backdrop-blur rounded-lg p-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="bg-primary-lighter rounded-full p-2">
                  <TagIcon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Exclusive Deals</span>
                  <span className="text-xs text-gray-600">
                    Phone-only Special Rates
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="col-span-4 md:col-span-3 h-full">
            <Button
              className="h-full w-full rounded-none bg-primary hover:bg-primary-dark text-white"
              asChild
            >
              <a
                href="tel:1-888-1222-0000"
                className="flex items-center justify-center gap-2 px-3 py-4 md:py-8"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden md:inline">Call Now</span>
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
};
export default CallUsBanner;
