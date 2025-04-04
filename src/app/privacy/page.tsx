import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/config/data";

export const metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: "Learn how we collect and use your data",
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHeader
        title="Privacy Policy"
        description="Last updated: January 2024"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p>
            Welcome to <strong>{siteConfig.name}</strong>, your trusted cruise vacation partner. 
            This Privacy Policy explains how we collect, protect, and use your personal information 
            when you book cruises through our platform. We are committed to ensuring your cruise 
            planning experience is both seamless and secure.
          </p>

          <h2>Information We Collect</h2>
          <p>
            To provide you with the best cruise booking experience, we collect:
          </p>
          <ul>
            <li>Basic contact information (name, email, phone)</li>
            <li>Travel preferences and requirements</li>
            <li>Passport and travel document details (for cruise bookings)</li>
            <li>Special accommodation or dietary needs</li>
            <li>Payment information (processed securely)</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>
            Your information helps us:
          </p>
          <ul>
            <li>Book and confirm your cruise reservations</li>
            <li>Provide personalized cruise recommendations</li>
            <li>Process onboard credits and special requests</li>
            <li>Communicate important cruise updates</li>
            <li>Assist with shore excursion bookings</li>
            <li>Handle special dietary or accessibility requirements</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We share your information only with:
          </p>
          <ul>
            <li>Cruise lines (for booking confirmation)</li>
            <li>Port authorities (as required by law)</li>
            <li>Shore excursion providers (when booked)</li>
            <li>Travel insurance providers (if selected)</li>
          </ul>

          <h2>Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access your personal information</li>
            <li>Update your cruise preferences</li>
            <li>Opt-out of marketing communications</li>
            <li>Request deletion of your data</li>
          </ul>

          <h2>Contact Our Cruise Specialists</h2>
          <div className="bg-primary/5 p-6 rounded-xl mt-8">
            <p>
              For privacy inquiries, contact our dedicated cruise team:
            </p>
            <ul>
              <li>
                <strong>Phone:</strong> {siteConfig.contact.phone.display}
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:text-primary/80">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

