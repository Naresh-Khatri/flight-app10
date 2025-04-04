"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface SidebarProps {
  stops: number[];
  setStops: (stops: number[]) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  departureTime: string;
  setDepartureTime: (time: string) => void;
  returnTime: string;
  setReturnTime: (time: string) => void;
}

export function Sidebar({
  stops,
  setStops,
  priceRange,
  setPriceRange,
  departureTime,
  setDepartureTime,
  returnTime,
  setReturnTime,
}: SidebarProps) {
  const timeOptions = [
    { value: "morning", label: "Morning", time: "6AM - 12PM" },
    { value: "afternoon", label: "Afternoon", time: "12PM - 5PM" },
    { value: "evening", label: "Evening", time: "5PM - 9PM" },
    { value: "night", label: "Night", time: "9PM - 6AM" },
  ];

  return (
    <Card className="p-4 h-fit">
      <div className="space-y-6">
        {/* Stops Filter */}
        <div>
          <h3 className="font-semibold mb-3">Stops</h3>
          <div className="space-y-2">
            {[
              { id: "nonstop", label: "Non Stop", value: 0 },
              { id: "1stop", label: "1 Stop", value: 1 },
              { id: "2plus", label: "2+ Stops", value: 2 },
            ].map((stop) => (
              <div key={stop.id} className="flex items-center space-x-2">
                <Checkbox
                  id={stop.id}
                  checked={stops.includes(stop.value)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setStops([...stops, stop.value]);
                    } else {
                      setStops(stops.filter((s) => s !== stop.value));
                    }
                  }}
                />
                <Label htmlFor={stop.id}>{stop.label}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div>
          <h3 className="font-semibold mb-3">Price</h3>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={0}
            max={3000}
            step={100}
            className="mt-2"
          />
          <div className="flex justify-between mt-2">
            <span className="text-sm text-muted-foreground">
              ${priceRange[0].toLocaleString()}
            </span>
            <span className="text-sm text-muted-foreground">
              ${priceRange[1].toLocaleString()}
            </span>
          </div>
        </div>

        {/* Departure Time */}
        <div>
          <h3 className="font-semibold mb-3">Departure Time</h3>
          <RadioGroup
            value={departureTime}
            onValueChange={setDepartureTime}
            className="grid grid-cols-2 gap-2"
          >
            {timeOptions.map((time) => (
              <Label
                key={time.value}
                htmlFor={`departure-${time.value}`}
                className={cn(
                  "cursor-pointer rounded-md border-2 p-3 text-center hover:border-primary-lighter",
                  departureTime === time.value
                    ? "border-primary bg-primary-lightest text-primary"
                    : "border-transparent bg-slate-50",
                )}
              >
                <RadioGroupItem
                  value={time.value}
                  id={`departure-${time.value}`}
                  className="sr-only"
                />
                <div className="font-medium">{time.label}</div>
                <div className="text-xs text-muted-foreground">{time.time}</div>
              </Label>
            ))}
          </RadioGroup>
        </div>

        {/* Return Time */}
        <div>
          <h3 className="font-semibold mb-3">Return Time</h3>
          <RadioGroup
            value={returnTime}
            onValueChange={setReturnTime}
            className="grid grid-cols-2 gap-2"
          >
            {timeOptions.map((time) => (
              <Label
                key={time.value}
                htmlFor={`return-${time.value}`}
                className={cn(
                  "cursor-pointer rounded-md border-2 p-3 text-center hover:border-primary-lighter",
                  returnTime === time.value
                    ? "border-primary bg-primary-lightest text-primary"
                    : "border-transparent bg-slate-50",
                )}
              >
                <RadioGroupItem
                  value={time.value}
                  id={`return-${time.value}`}
                  className="sr-only"
                />
                <div className="font-medium">{time.label}</div>
                <div className="text-xs text-muted-foreground">{time.time}</div>
              </Label>
            ))}
          </RadioGroup>
        </div>

        {/* Airlines */}
        <div>
          <h3 className="font-semibold mb-3">Airlines</h3>
          <div className="space-y-2">
            {[
              { id: "aa", label: "American Airlines" },
              { id: "ua", label: "United Airlines" },
              { id: "dl", label: "Delta" },
              { id: "em", label: "Emirates" },
            ].map((airline) => (
              <div key={airline.id} className="flex items-center space-x-2">
                <Checkbox id={airline.id} />
                <Label htmlFor={airline.id}>{airline.label}</Label>
              </div>
            ))}
            <div className="flex items-center gap-[.25rem] text-sm text-muted-forground">
              <ChevronDown className="w-5 h-5" /> <span>View more</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
