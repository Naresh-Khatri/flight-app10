"use client";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AlertCircle, Clock, CreditCard, Ship, ShieldCheck } from "lucide-react";

const RefundClientPage = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card className="p-8 prose prose-lg max-w-none">
        <div className="space-y-8">
          {/* Alert Banner */}
          <div className="bg-primary/5 p-4 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-primary mt-0.5" />
            <p className="text-sm text-gray-700 leading-relaxed m-0">
              Cruise vacation cancellations and refunds are subject to the specific policies 
              of each cruise line. Most cruise bookings have varying cancellation penalties 
              based on the timing of cancellation relative to the sailing date.
            </p>
          </div>

          {/* Refund Eligibility */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <ShieldCheck className="w-5 h-5" />
              <h3 className="text-xl font-semibold m-0">Refund Eligibility</h3>
            </div>
            <div className="bg-white rounded-lg border p-4 space-y-3">
              <p className="text-gray-700 text-sm m-0">
                Refund eligibility is determined by several factors:
              </p>
              <ul className="list-none p-0 m-0 space-y-2 text-sm text-gray-700">
                {[
                  "Time remaining before your cruise departure date",
                  "Specific cruise line's cancellation policy",
                  "Type of fare booked (refundable vs. non-refundable)",
                  "Whether travel insurance was purchased",
                  "Any special promotions or terms applied to the booking"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Refund Process */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Clock className="w-5 h-5" />
              <h3 className="text-xl font-semibold m-0">Refund Process</h3>
            </div>
            <div className="bg-white rounded-lg border p-4 space-y-4">
              <p className="text-sm text-gray-700 m-0">
                When we receive your refund request, our cruise specialists will:
              </p>
              <div className="grid gap-3">
                {[
                  "Review your booking details and applicable policies",
                  "Calculate any cancellation penalties",
                  "Process the refund request with the cruise line",
                  "Keep you informed of the refund status"
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium">
                      {index + 1}
                    </span>
                    {step}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-700 mt-4 mb-0 bg-gray-50 p-3 rounded">
                Refund processing times typically range from 7-14 business days, 
                depending on your payment method and cruise line policies.
              </p>
            </div>
          </section>

          {/* Important Notes */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Ship className="w-5 h-5" />
              <h3 className="text-xl font-semibold m-0">Important Notes</h3>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <ul className="list-none p-0 m-0 space-y-2 text-sm text-gray-700">
                {[
                  "Booking service fees are typically non-refundable",
                  "Cruise line insurance premiums may be non-refundable",
                  "Shore excursions may have separate cancellation policies",
                  "Future cruise credits may be offered in lieu of refunds",
                  "Special event or holiday cruises may have stricter policies"
                ].map((note, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Payment Method */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <CreditCard className="w-5 h-5" />
              <h3 className="text-xl font-semibold m-0">Payment Method</h3>
            </div>
            <div className="bg-white rounded-lg border p-4">
              <p className="text-sm text-gray-700 m-0">
                Refunds are processed to the original form of payment used for booking. 
                For cruise protection, we strongly recommend purchasing travel insurance 
                to protect against unexpected cancellations.
              </p>
            </div>
          </section>
        </div>
      </Card>
    </motion.div>
  );
};

export default RefundClientPage;
