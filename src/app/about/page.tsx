import { PageHeader } from "@/components/page-header";
import AboutClientPage from "./ClientPage";
import { Metadata } from "next";
import { siteConfig } from "@/config/data";
import { SplitSection } from "@/components/split-section";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: "Learn more about our mission and values",
};
const AboutPage = () => {
  return (
    <main className="min-h-screen">
      <div className="mb-4">
        <SplitSection
          imageSrc="/call-center-2.jpg"
          imageAlt="About Our Company"
          title="Your Trusted Travel Partner"
          description="With years of experience in the cruise industry, we've helped thousands of travelers create unforgettable memories on the seas. Our expert team is dedicated to finding you the perfect cruise vacation at the best possible price."
        />
      </div>

      <PageHeader
        title="About Us"
        description="Learn more about our mission and values"
      />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AboutClientPage />
      </div>
    </main>
  );
};
export default AboutPage;
