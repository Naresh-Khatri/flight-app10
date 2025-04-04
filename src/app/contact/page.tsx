import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/config/data";
import ClientContactPage from "./ClientPage";
import { SplitSection } from "@/components/split-section";

export const metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description: "Get in touch with our team",
};

export default function ContactPage() {
  return (
    <main>
      <div className="mb-4">
        <SplitSection
          imageSrc="/call-center-2.jpg"
          imageAlt="About Our Company"
          title="Your Trusted Travel Partner"
          description="With years of experience in the cruise industry, we've helped thousands of travelers create unforgettable memories on the seas. Our expert team is dedicated to finding you the perfect cruise vacation at the best possible price."
        />
      </div>
      <PageHeader
        title="Let's Connect"
        description="Have a question or want to collaborate? We'd love to hear from you!"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ClientContactPage />
      </div>
    </main>
  );
}
