import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/config/data";

export const metadata = {
  title: `Disclaimer | ${siteConfig.name}`,
  description: "Important disclaimers about our cruise booking service",
};

export default function DisclaimerPage() {
  return (
    <main>
      <PageHeader
        title="Disclaimer"
        description="Important information about our cruise booking service"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2>Cruise Booking Disclaimer</h2>
          <p>
            The information provided on {siteConfig.name} regarding cruise vacations, 
            itineraries, and pricing is accurate to the best of our knowledge. We work 
            directly with major cruise lines to ensure current pricing and availability. 
            However, cruise lines reserve the right to modify itineraries, prices, and 
            policies without notice.
          </p>

          <h3>Pricing and Availability</h3>
          <p>
            Cruise prices are subject to change based on availability, season, and 
            promotions. All offers are capacity-controlled and may be withdrawn 
            without notice. Certain blackout dates, holiday surcharges, and 
            restrictions may apply.
          </p>

          <h3>Itinerary Changes</h3>
          <p>
            Cruise lines reserve the right to:
          </p>
          <ul>
            <li>Alter or cancel any port of call</li>
            <li>Modify embarkation/disembarkation times</li>
            <li>Substitute vessels of similar quality</li>
            <li>Change stateroom assignments when necessary</li>
            <li>Adjust onboard programming and activities</li>
          </ul>

          <h3>Booking Terms</h3>
          <p>
            When booking through {siteConfig.name}, you agree to the cruise line's 
            terms and conditions, including:
          </p>
          <ul>
            <li>Deposit and final payment requirements</li>
            <li>Cancellation and refund policies</li>
            <li>Travel document requirements</li>
            <li>Health and safety protocols</li>
            <li>Onboard conduct policies</li>
          </ul>

          <h3>Travel Insurance</h3>
          <p>
            We strongly recommend purchasing comprehensive travel insurance to protect 
            your cruise investment. {siteConfig.name} is not responsible for any 
            losses or expenses due to trip cancellation, medical emergencies, or 
            other travel-related incidents.
          </p>

          <div className="bg-primary/5 p-6 rounded-xl mt-8">
            <h3 className="text-primary font-semibold">Questions?</h3>
            <p>
              Contact our cruise specialists for clarification on any policies or disclaimers:
            </p>
            <p className="mt-2">
              Phone: {siteConfig.contact.phone.display}<br />
              Email: {siteConfig.contact.email}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

