"use client";
import { notFound, usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Star,
  Anchor,
  Phone,
  DollarSign,
  MapPin,
  Ship,
  Clock,
  Building,
  Users,
  Sparkles,
  UtensilsCrossed,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { getCruiserBySlug } from "@/config/cruisers";
import { siteConfig } from "@/config/data";
import FadeIn from "@/components/animations/fade-in";
import { motion, Variants } from "framer-motion";

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
    },
  },
};

export default function CruiserPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").at(-1);
  if (!slug) notFound();
  const cruiser = getCruiserBySlug(slug);
  if (!cruiser) notFound();

  return (
    <main className="container mx-auto p-4 space-y-12">
      {/* Hero Section */}
      <section className="relative h-[70vh] rounded-xl overflow-hidden">
        <Image
          src={cruiser.logo}
          alt={cruiser.name}
          fill
          className="object-cover"
          priority
        />

        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"
        />

        <div className="absolute inset-0 flex items-end justify-start">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="text-left text-white space-y-6 p-12 max-w-3xl"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              <span className="text-lg text-white/90">
                {cruiser.rating}/5 ({cruiser.reviewCount} reviews)
              </span>
            </motion.div>

            <motion.h1
              variants={heroVariants}
              className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-primary-light"
            >
              {cruiser.name}
            </motion.h1>

            <motion.p
              variants={heroVariants}
              className="text-xl text-primary-lightest/90"
            >
              {cruiser.description}
            </motion.p>

            <motion.div
              variants={heroVariants}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary-darkest text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <a href={`tel:${siteConfig.contact.phone.value}`}>
                  <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Book Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary/10 border-2 border-primary-lighter/50 text-primary-light hover:bg-primary/20 hover:border-primary-lighter/80 backdrop-blur-sm transition-all duration-300 group"
              >
                View Fleet
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Call Us Banners */}
      <div className="container mx-auto pt-12 px-0">
        <div className="grid md:grid-cols-2 gap-8 -mt-12 relative z-10">
          <Card className="bg-gradient-to-r from-primary-lightest to-primary-light">
            <CardContent className="p-8 flex items-center gap-6">
              <div className="bg-white p-4 rounded-full">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Book by Phone</h3>
                <p className="text-gray-600 mb-4">
                  Speak with our {cruiser.name} experts
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
      </div>
      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <FadeIn>
          <Card className="bg-primary-lightest">
            <CardContent className="p-6 text-center">
              <Ship className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">
                {cruiser.shipCount}
              </div>
              <div className="text-sm text-gray-600">Ships</div>
            </CardContent>
          </Card>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Card className="bg-green-50">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">
                {cruiser.maxCapacity}+
              </div>
              <div className="text-sm text-gray-600">Passenger Capacity</div>
            </CardContent>
          </Card>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Card className="bg-orange-50">
            <CardContent className="p-6 text-center">
              <UtensilsCrossed className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-600">
                {cruiser.amenityCount}
              </div>
              <div className="text-sm text-gray-600">Amenities</div>
            </CardContent>
          </Card>
        </FadeIn>
        <FadeIn delay={0.3}>
          <Card className="bg-purple-50">
            <CardContent className="p-6 text-center">
              <Sparkles className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">
                {cruiser.founded}
              </div>
              <div className="text-sm text-gray-600">Est. Year</div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
      {/* Main Content Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Content - 2 Columns */}
        <div className="md:col-span-2 space-y-8">
          {/* Company Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Company Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" />
                <span>Founded: {cruiser.founded}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Headquarters: {cruiser.headquarters}</span>
              </div>
            </CardContent>
          </Card>

          {/* Fleet Section */}
          <Card>
            <CardHeader>
              <CardTitle>Our Fleet</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-6">
                {cruiser.fleet.map((ship, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <div className="p-4 bg-gray-50 rounded-lg space-y-3">
                      <div className="flex items-center gap-2">
                        <Ship className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold">{ship.name}</h3>
                      </div>
                      <p>Capacity: {ship.capacity} passengers</p>
                      <div className="space-y-2">
                        <h4 className="font-medium">Amenities:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          {ship.amenities.map((amenity, i) => (
                            <li key={i}>{amenity}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Popular Routes */}
          <Card>
            <CardHeader>
              <CardTitle>Popular Routes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-6">
                {cruiser.popularRoutes.map((route, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <div className="p-4 bg-gray-50 rounded-lg space-y-3">
                      <h3 className="font-semibold">
                        {route.from} to {route.to}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-600" />
                        <span className="text-sm">
                          Duration: {route.duration}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Pricing:</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          {Object.entries(route.price).map(([type, price]) => (
                            <div
                              key={type}
                              className="flex justify-between items-center"
                            >
                              <span className="capitalize">{type}:</span>
                              <span className="font-medium">${price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full" asChild>
                        <a href={`tel:${siteConfig.contact.phone.value}`}>
                          Check Availability
                        </a>
                      </Button>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - 1 Column */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span>Rating: {cruiser.rating}/5</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                <span>Starting from $899</span>
              </div>
              <Button className="w-full" asChild>
                <a href={`tel:${siteConfig.contact.phone.value}`}>Book Now</a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {cruiser.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Anchor className="w-4 h-4 text-primary" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Final CTA Section */}
      <section className="bg-primary-lightest rounded-xl p-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">
            Ready to Book with {cruiser.name}?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our cruise experts can help you plan the perfect voyage with{" "}
            {cruiser.name}. Get personalized recommendations and the best
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
