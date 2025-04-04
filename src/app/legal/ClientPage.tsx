"use client";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { siteConfig } from "@/config/data";
import { motion } from "framer-motion";
import { Ship, Shield, Anchor, Globe2 } from "lucide-react";

const LegalClientPage = () => {
  return (
    <Tabs defaultValue="company" className="space-y-8">
      <TabsList className="grid w-full grid-cols-4 mb-8">
        <TabsTrigger value="company">Company Info</TabsTrigger>
        <TabsTrigger value="terms">Cruise Terms</TabsTrigger>
        <TabsTrigger value="privacy">Privacy</TabsTrigger>
        <TabsTrigger value="compliance">Compliance</TabsTrigger>
      </TabsList>

      <TabsContent value="company">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Company Details</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-700">Legal Name</h3>
                  <p>{siteConfig.company.name}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Industry</h3>
                  <p>Cruise Travel Agency</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">
                    Cruise Line Partnerships
                  </h3>
                  <p>10+ Major Cruise Lines</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">
                    Service Coverage
                  </h3>
                  <p>Worldwide Cruise Destinations</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              Cruise Agency Certifications
            </h2>
            <div className="space-y-2">
              <p>
                <strong>CLIA Certified:</strong> Cruise Lines International
                Association Member
              </p>
              <p>
                <strong>ASTA Member:</strong> American Society of Travel
                Advisors
              </p>
              <p>
                <strong>IATA Accredited:</strong> International Air Transport
                Association
              </p>
            </div>
          </Card>
        </motion.div>
      </TabsContent>

      <TabsContent value="terms">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-lg max-w-none"
        >
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Cruise Booking Terms</h2>
            <div className="space-y-4">
              <section>
                <h3 className="text-xl font-semibold">
                  1. Cruise Booking Agreement
                </h3>
                <p>
                  By booking a cruise through {siteConfig.company.name}, you
                  agree to both our terms and the specific terms and conditions
                  of the cruise line you select.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold">
                  2. Pricing and Payments
                </h3>
                <p>
                  All cruise prices are subject to availability and can change
                  without notice. Deposits and payment schedules are determined
                  by individual cruise lines.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold">
                  3. Cancellation Policy
                </h3>
                <p>
                  Cancellation policies vary by cruise line, sailing date, and
                  cabin category. We strongly recommend cruise insurance to
                  protect your vacation investment.
                </p>
              </section>
            </div>
          </Card>
        </motion.div>
      </TabsContent>

      <TabsContent value="compliance">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              Cruise Industry Compliance
            </h2>
            <div className="space-y-4">
              <section>
                <h3 className="text-xl font-semibold">
                  Cruise Line Partnerships
                </h3>
                <p>
                  Authorized seller for all major cruise lines including Royal
                  Caribbean, Carnival, Norwegian, Celebrity, and more.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold">Data Protection</h3>
                <p>
                  Compliant with international data protection regulations for
                  secure cruise booking and passenger information handling.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold">
                  Industry Certifications
                </h3>
                <ul className="list-disc pl-6">
                  <li>CLIA Certified Cruise Counsellor</li>
                  <li>Secure Payment Processing for Cruise Bookings</li>
                  <li>Maritime Safety Compliance</li>
                </ul>
              </section>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Travel Insurance</h2>
            <p>
              We offer comprehensive cruise travel insurance through licensed
              providers, protecting your voyage investment against unforeseen
              circumstances.
            </p>
          </Card>
        </motion.div>
      </TabsContent>
    </Tabs>
  );
};

export default LegalClientPage;
