import { Loader2 } from "lucide-react";

interface SearchDetails {
  destination?: string;
  departure?: string;
  length?: string;
  date?: string;
  line?: string;
}

export default function LoadingOverlay({
  searchDetails,
}: {
  searchDetails: SearchDetails;
}) {
  // Helper function to format the date range
  const formatDateRange = (dateParam: string) => {
    if (!dateParam) return "";
    switch (dateParam) {
      case "next-3-months":
        return "Next 3 months";
      case "next-6-months":
        return "Next 6 months";
      case "next-year":
        return "Next year";
      case "custom":
        return "Custom date";
      default:
        return dateParam;
    }
  };
  console.log(searchDetails);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 px-8 md:px-0">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <Loader2 className="h-8 w-8 text-primary animate-spin mr-2" />
          <h2 className="text-2xl font-bold text-primary">Finding Cruises</h2>
        </div>
        <div className="space-y-4">
          {searchDetails.destination && (
            <div className="flex justify-between">
              <span className="font-semibold">Destination:</span>
              <span>{searchDetails.destination}</span>
            </div>
          )}
          {searchDetails.departure && (
            <div className="flex justify-between">
              <span className="font-semibold">Departure Port:</span>
              <span>{searchDetails.departure}</span>
            </div>
          )}
          {searchDetails.length && (
            <div className="flex justify-between">
              <span className="font-semibold">Length:</span>
              <span>{searchDetails.length}</span>
            </div>
          )}
          {searchDetails.date && (
            <div className="flex justify-between">
              <span className="font-semibold">When:</span>
              <span>{formatDateRange(searchDetails.date)}</span>
            </div>
          )}
          {searchDetails.line && (
            <div className="flex justify-between">
              <span className="font-semibold">Cruise Line:</span>
              <span>{searchDetails.line}</span>
            </div>
          )}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Please wait while we find the perfect cruise for you...
        </p>
      </div>
    </div>
  );
}
