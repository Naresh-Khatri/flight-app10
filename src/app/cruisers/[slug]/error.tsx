"use client";

export default function Error() {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Something went wrong</h2>
        <p className="text-gray-600">
          We couldn&apos;t load the cruise line information. Please try again
          later.
        </p>
      </div>
    </div>
  );
}

