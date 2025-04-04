"use client";
import { notFound, usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/data";
import {
  Palmtree,
  Anchor,
  Waves,
  Calendar,
  DollarSign,
  Globe,
  Sun,
  Umbrella,
  Languages,
  Coins,
  Clock,
  MapPin,
  ListChecks,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import FadeIn from "@/components/animations/fade-in";
import { motion } from "framer-motion";
import { destinations, getDestinationBySlug } from "@/config/destinations";

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    delay: 3,
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    delay: 3,
    opacity: 1,
    transition: {
      duration: 1.2,
    },
  },
};

export default function DestinationPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").at(-1);
  if (!slug) notFound();
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  const DestinationIcon = getDestinationIcon(destination.name);

  function getDestinationIcon(name: string) {
    switch (name.toLowerCase()) {
      case "caribbean":
        return Palmtree;
      case "mediterranean":
        return Anchor;
      case "alaska":
        return Waves;
      default:
        return Globe; // Always return a valid component
    }
  }

  return (
    <main className="container mx-auto p-4 space-y-12">
      {/* Hero Section */}
      <section className="relative h-[60vh] rounded-xl overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />

        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="text-center text-white space-y-6"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 blur-2xl bg-primary/30 rounded-full" />
              <DestinationIcon className="w-16 h-16 mx-auto relative" />
            </motion.div>

            <motion.h1
              variants={heroVariants}
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-lighter to-white"
            >
              {destination.name}
            </motion.h1>

            <motion.p
              variants={heroVariants}
              className="text-xl max-w-2xl mx-auto text-primary-lightest/90"
            >
              {destination.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Call Us Banners */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <Card className="bg-gradient-to-r from-primary-lightest to-primary-lighter">
          <CardContent className="p-8 flex items-center gap-6">
            <div className="bg-white p-4 rounded-full">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Book by Phone</h3>
              <p className="text-gray-600 mb-4">
                Speak with our cruise experts
              </p>
              <Button
                variant="link"
                className="text-2xl font-bold text-primary p-0 h-auto hover:no-underline"
                asChild
              >
                <a href={`tel:${siteConfig.contact.phone.value}`}>
                  {siteConfig.contact.phone.display}
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-50 to-green-100">
          <CardContent className="p-8 flex items-center gap-6">
            <div className="bg-white p-4 rounded-full">
              <MessageCircle className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Chat with Us</h3>
              <p className="text-gray-600 mb-4">
                Available {siteConfig.contact.hours}
              </p>
              <Button className="bg-green-600 hover:bg-green-700" asChild>
                <a href={`mailto:${siteConfig.contact.email}`}>
                  Start Chat
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Key Information */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Destination Highlights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {destination.highlights.map((highlight, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="flex items-start gap-2">
                    <ListChecks className="w-5 h-5 text-primary mt-1" />
                    <span>{highlight}</span>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-4">Popular Ports</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {destination.popularPorts.map((port, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{port}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold mb-4">Activities</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {destination.activities.map((activity, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h4 className="font-semibold">{activity.name}</h4>
                      <p className="text-sm text-gray-600">
                        {activity.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sidebar Information */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Duration: {destination.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                <span>Starting from ${destination.startingPrice}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="w-5 h-5 text-orange-400" />
                <span>Best Time: {destination.bestTimeToVisit}</span>
              </div>
              <Button className="w-full">View Available Cruises</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Travel Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Languages className="w-5 h-5 text-gray-600" />
                <span className="text-sm">{destination.visaRequirements}</span>
              </div>
              <div className="flex items-center gap-2">
                <Languages className="w-5 h-5 text-gray-600" />
                <span className="text-sm">
                  {destination.languages.join(", ")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Coins className="w-5 h-5 text-gray-600" />
                <span className="text-sm">{destination.currency}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gray-600" />
                <span className="text-sm">{destination.timeZone}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="bg-primary-lightest rounded-xl p-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">
            Ready to Explore {destination.name}?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our cruise experts can help you plan the perfect {destination.name}{" "}
            cruise experience. Get personalized recommendations and the best
            available deals.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-dark"
            asChild
          >
            <a href={`tel:${siteConfig.contact.phone.value}`}>
              <Phone className="w-4 h-4 mr-2" />
              Call {siteConfig.contact.phone.display}
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
