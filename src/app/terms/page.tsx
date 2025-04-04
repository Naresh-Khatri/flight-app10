import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/config/data";

export const metadata = {
  title: `Terms of Use | ${siteConfig.name}`,
  description: "Terms and conditions for using our service",
};

export default function TermsPage() {
  return (
    <main>
      <PageHeader
        title="Terms of Service"
        description="Last updated: January 2024"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2>Cruise Booking Terms</h2>
          <p>
            Welcome to {siteConfig.name}. These terms govern your use of our cruise booking platform. 
            By using our services, you agree to these terms and our booking conditions.
          </p>

          <h2>Booking Conditions</h2>
          <ul>
            <li>All cruise bookings require valid passports</li>
            <li>Deposit requirements vary by cruise line</li>
            <li>Final payment deadlines are cruise-specific</li>
            <li>Cancellation policies vary by sailing</li>
            <li>Travel insurance is strongly recommended</li>
          </ul>

          <h2>Price Guarantee</h2>
          <p>
            Our Best Price Guarantee ensures you get the best value on your cruise vacation. 
            If you find a lower price on the same cruise, we'll match it or refund the difference.
          </p>

          <h2>Cruise Modifications</h2>
          <p>
            Cruise lines reserve the right to:
          </p>
          <ul>
            <li>Modify itineraries due to weather or safety</li>
            <li>Change ports of call when necessary</li>
            <li>Substitute ships of similar quality</li>
            <li>Adjust sailing dates with notice</li>
          </ul>

          <h2>Your Responsibilities</h2>
          <ul>
            <li>Provide accurate passenger information</li>
            <li>Ensure valid travel documents</li>
            <li>Meet cruise line health requirements</li>
            <li>Arrive at embarkation on time</li>
            <li>Follow onboard safety protocols</li>
          </ul>

          <h2>Cancellations & Refunds</h2>
          <p>
            Cancellation policies vary by:
          </p>
          <ul>
            <li>Cruise line</li>
            <li>Sailing date</li>
            <li>Cabin category</li>
            <li>Promotion type</li>
          </ul>

          <h2>Travel Insurance</h2>
          <p>
            We strongly recommend purchasing comprehensive travel insurance to protect your cruise investment.
          </p>

          <h2>Prohibited Activities</h2>
          <ul>
            <li>Reselling cruise bookings</li>
            <li>Providing false booking information</li>
            <li>Manipulating prices or promotions</li>
            <li>Unauthorized use of our booking system</li>
          </ul>

          <div className="bg-primary/5 p-6 rounded-xl mt-8">
            <h3 className="text-primary font-semibold mb-4">Contact Our Cruise Specialists</h3>
            <p>
              Questions about our terms? Our cruise experts are here to help 24/7.
            </p>
            <p className="mt-2">
              Call {siteConfig.contact.phone.display} or email{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:text-primary/80">
                {siteConfig.contact.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

