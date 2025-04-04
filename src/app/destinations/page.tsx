import { PageHeader } from "@/components/page-header";
import { DestinationsSection } from "@/components/sections/destinations";
import { SplitSection } from "@/components/split-section";

export const metadata = {
  title: "Cruise Destinations | Find Your Perfect Voyage",
  description: "Explore our wide range of cruise destinations across the globe",
};

export default function DestinationsPage() {
  return (
    <main>
      <SplitSection
        imageSrc="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg"
        imageAlt="Cruise Destinations"
        title="Discover Your Dream Destination"
        description="From the sun-soaked Caribbean to the majestic Alaskan fjords, find your perfect cruise destination. Our expertly curated itineraries combine must-see ports with hidden gems."
      />
      <DestinationsSection />
    </main>
  );
}
