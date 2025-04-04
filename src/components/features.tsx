import {
  Search,
  Plane,
  HeartHandshake,
  Wallet2,
  LucideIcon,
} from "lucide-react";
import FadeIn from "./animations/fade-in";
import { siteConfig } from "@/config/data";

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
};

export const features: Feature[] = [
  {
    title: "Smart Search",
    description: "Compare flights across airlines instantly",
    icon: Search,
    color: "purple",
  },
  {
    title: "Direct Flights",
    description: "Find non-stop flights to your destination",
    icon: Plane,
    color: "orange",
  },
  {
    title: "Price Promise",
    description: "Get the best rates with price match guarantee",
    icon: Wallet2,
    color: "green",
  },
  {
    title: "Travel Support",
    description: "Expert assistance throughout your journey",
    icon: HeartHandshake,
    color: "blue",
  },
];

export function Features() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      <div className="container mx-auto px-4 relative">
        <FadeIn className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-orange-500 tracking-wider uppercase mb-2 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Travel Smart with{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.1} className="group">
              <div className="relative h-full p-6 bg-white hover:bg-gray-50 rounded-3xl border border-gray-100 transition-all duration-300">
                <div
                  className={`w-12 h-12 rounded-2xl bg-${feature.color}-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon
                    className={`w-6 h-6 text-${feature.color}-500`}
                  />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>

                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-${feature.color}-50/20 rounded-bl-[64px] -z-10 transition-all duration-300 group-hover:bg-${feature.color}-50/40`}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
