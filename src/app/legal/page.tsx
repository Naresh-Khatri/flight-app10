import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/config/data";
import ClientLegalPage from "./ClientPage";

export const metadata = {
  title: `Legal Information | ${siteConfig.name}`,
  description:
    "Legal information, terms of service, and regulatory compliance details",
};

export default function LegalPage() {
  return (
    <main>
      <PageHeader
        title="Legal Information"
        description="Important legal documents and company information"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ClientLegalPage />
      </div>
    </main>
  );
}
