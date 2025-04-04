"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import LoadingOverlay from "@/components/LoadingOverlay";
import { AnimatePresence } from "framer-motion";
import CallUsBanner from "@/components/call-us-banner";
import { CruiseSearchForm } from "@/components/cruise-search-form";
import { siteConfig } from "@/config/data";

const useCruiseSearch = () => {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  // Search parameters state from URL
  const destination = searchParams.get("dest") || "";
  const departurePort = searchParams.get("port") || "";
  const cruiseLength = searchParams.get("length") || "";
  const departureDate = searchParams.get("date") || "";
  const cruiseLine = searchParams.get("line") || "";

  useEffect(() => {
    // Simulate loading when search parameters change
    setIsLoading(true);
    // Simulate API delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, [searchParams]);

  return {
    isLoading,
    searchParams: {
      destination,
      departurePort,
      cruiseLength,
      departureDate,
      cruiseLine,
    },
  };
};

const SearchResults = ({ searchParams }: { searchParams: any }) => {
  return (
    <Card className="p-8 text-center">
      <div className="max-w-md mx-auto">
        <h3 className="text-xl font-semibold mb-2">
          Let Us Find Your Perfect Cruise
        </h3>
        <p className="text-muted-foreground mb-6">
          We couldn't find any cruises matching your search criteria. Try
          adjusting your filters or call us for personalized assistance.
        </p>
        <div className="space-y-4">
          <Button variant="default" size="lg" asChild>
            <a href={`tel:${siteConfig.contact.phone.value}`}>
              Call {siteConfig.contact.phone.display}
            </a>
          </Button>
          {/* <p className="text-sm text-muted-foreground"> */}
          {/*   Our cruise experts are available 24/7 to help you plan your dream */}
          {/*   vacation */}
          {/* </p> */}
        </div>
      </div>
    </Card>
  );
};

const SearchClientPage = () => {
  const { isLoading, searchParams } = useCruiseSearch();

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingOverlay
            searchDetails={{
              destination: searchParams.destination,
              departure: searchParams.departurePort,
              length: searchParams.cruiseLength,
              date: searchParams.departureDate,
              line: searchParams.cruiseLine,
            }}
          />
        )}
      </AnimatePresence>

      <div className="container py-6">
        <div className="space-y-6">
          <CruiseSearchForm />

          <CallUsBanner />

          <SearchResults searchParams={searchParams} />
        </div>
      </div>
    </>
  );
};

export default SearchClientPage;
