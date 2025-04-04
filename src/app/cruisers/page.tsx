import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CruiseSearchForm } from "@/components/cruise-search-form";
import { Star, ArrowRight } from "lucide-react";
import { getAllCruisers } from "@/config/cruisers";

export default async function CruisersPage() {
  const cruisers = getAllCruisers();
  // const [searchParams, setSearchParams] = useState({
  //   destination: "",
  //   departureDate: "",
  //   returnDate: "",
  //   guests: 1,
  // });

  return (
    <main className="container mx-auto p-4 mt-32">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Explore Our Cruise Ships</h1>
        <p className="text-lg text-gray-600">
          Discover the best cruise deals and enjoy a luxurious journey on the
          sea
        </p>
      </section>

      <section className="mb-12">
        <CruiseSearchForm />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cruisers.map((cruiser, index) => (
          <Link
            href={`${cruiser.href}`}
            key={index}
            className="group transition-transform hover:-translate-y-1"
          >
            <Card className="h-full shadow-md hover:shadow-xl transition-shadow">
              <CardHeader className="relative h-48">
                <Image
                  src={cruiser.logo}
                  alt={cruiser.name}
                  width={400}
                  height={400}
                  className="object-cover w-auto h-full rounded-md"
                />
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <CardTitle
                    className="text-xl font-semibold mb-2 group-hover:text-primary
                    transition-colors"
                  >
                    {cruiser.name}
                  </CardTitle>
                  <p className="text-gray-600 line-clamp-2">
                    {cruiser.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="font-medium">{cruiser.rating}</span>
                    <span className="text-sm text-gray-500">
                      ({cruiser.reviewCount.toLocaleString()})
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Since {cruiser.founded}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-sm">
                    <span className="text-gray-500">Starting from </span>
                    <span className="font-bold text-green-600">$ 899</span>
                  </div>
                  <Button
                    variant="ghost"
                    className="group-hover:text-primary
                    group-hover:bg-primary-lightest"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>

      {/* Additional Info Section */}
      <section className="mt-12 bg-primary-lightest rounded-xl p-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Need Help Choosing?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our cruise experts are here to help you find the perfect cruise
            package. Get personalized recommendations and the best available
            deals.
          </p>
          <Button
            size="lg"
            className="bg-primary
          hover:bg-primary-dark"
          >
            Contact an Expert
          </Button>
        </div>
      </section>
    </main>
  );
}
