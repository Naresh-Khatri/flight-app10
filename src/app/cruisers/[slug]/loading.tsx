export default function Loading() {
  return (
    <div className="container mx-auto p-4">
      <div className="animate-pulse space-y-8">
        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
        <div className="h-32 bg-gray-200 rounded"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
} 