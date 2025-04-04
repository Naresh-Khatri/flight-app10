import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/config/data";

export default function RefundsPage() {
  return (
    <main>
      <PageHeader
        title="Cruise Refund Policy"
        description="Understanding cruise cancellations, refunds, and our commitment to fair policies"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <section>
              <p className="text-gray-700 leading-relaxed">
                At {siteConfig.name}, we understand that plans can change. Our cruise refund 
                policy is designed to be fair and transparent, while adhering to the specific 
                guidelines set by each cruise line. Most cruise bookings have varying 
                cancellation penalties based on how close to the sailing date you cancel.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">
                Cruise Cancellation Timeline
              </h3>
              <p className="text-gray-700 mb-4">
                Refund amounts are typically determined by when you cancel relative to your 
                sailing date:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  90+ days before sailing: Full refund (minus any non-refundable deposits)
                </li>
                <li>
                  89-60 days: 75% refund of cruise fare
                </li>
                <li>
                  59-30 days: 50% refund of cruise fare
                </li>
                <li>
                  29-15 days: 25% refund of cruise fare
                </li>
                <li>
                  14 days or less: No refund (unless covered by travel insurance)
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Refund Process</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  When you submit a cruise cancellation request, our team will:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Review your booking details and applicable cruise line policies
                  </li>
                  <li>
                    Calculate any refund amount based on the cancellation timeline
                  </li>
                  <li>
                    Process the refund request with the cruise line
                  </li>
                  <li>
                    Keep you informed of the refund status throughout the process
                  </li>
                </ul>
                <p>
                  Refund processing typically takes 7-14 business days, depending on your 
                  payment method and the cruise line's procedures.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Special Circumstances</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Holiday cruises may have stricter cancellation policies
                </li>
                <li>
                  Suite bookings often have different cancellation terms
                </li>
                <li>
                  Group bookings have specific cancellation guidelines
                </li>
                <li>
                  Special promotions may have non-refundable deposits
                </li>
                <li>
                  Travel insurance claims follow separate procedures
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">Additional Information</h3>
              <div className="space-y-4 text-gray-700">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Port fees and taxes are typically refundable
                  </li>
                  <li>
                    Prepaid gratuities are usually refundable if cancelled within policy
                  </li>
                  <li>
                    Shore excursions can often be cancelled up to 48 hours before port arrival
                  </li>
                  <li>
                    Beverage packages and other add-ons have their own cancellation policies
                  </li>
                </ul>
              </div>
            </section>

            <section className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Need Assistance?</h3>
              <p className="text-gray-700">
                Our cruise specialists are available 24/7 to help with any questions about 
                refunds or cancellations. Contact us at {siteConfig.contact.phone.display} or 
                email {siteConfig.contact.email} for immediate assistance.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
