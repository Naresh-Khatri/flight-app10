"use client";

import {
  Search,
  Check,
  ChevronsUpDown,
  X,
  Ship,
  MapPin,
  Calendar,
  Users,
  Anchor,
} from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "./ui/select";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";

const departurePorts = [
  // United States - East Coast
  { name: "Miami, FL", code: "MIA" },
  { name: "Fort Lauderdale, FL", code: "FLL" },
  { name: "Port Canaveral (Orlando), FL", code: "PCV" },
  { name: "Tampa, FL", code: "TPA" },
  { name: "Jacksonville, FL", code: "JAX" },
  { name: "Charleston, SC", code: "CHS" },
  { name: "Baltimore, MD", code: "BWI" },
  { name: "Cape Liberty (New York), NJ", code: "CBL" },
  { name: "Manhattan (New York), NY", code: "NYC" },
  { name: "Brooklyn (New York), NY", code: "BKN" },
  { name: "Boston, MA", code: "BOS" },
  { name: "Norfolk, VA", code: "ORF" },
  { name: "Bayonne, NJ", code: "BAY" },
  { name: "Portland, ME", code: "PWM" },
  { name: "Bar Harbor, ME", code: "BHB" },
  { name: "Galveston, TX", code: "GAL" },
  { name: "Mobile, AL", code: "MOB" },
  { name: "New Orleans, LA", code: "MSY" },

  // United States - West Coast
  { name: "Los Angeles, CA", code: "LAX" },
  { name: "Long Beach, CA", code: "LGB" },
  { name: "San Diego, CA", code: "SAN" },
  { name: "San Francisco, CA", code: "SFO" },
  { name: "Seattle, WA", code: "SEA" },
  { name: "Portland, OR", code: "PDX" },
  { name: "Monterey, CA", code: "MRY" },
  { name: "Astoria, OR", code: "AST" },
  { name: "Vancouver, BC", code: "YVR" },
  { name: "Victoria, BC", code: "YYJ" },

  // Hawaii
  { name: "Honolulu, HI", code: "HNL" },
  { name: "Kahului, Maui, HI", code: "OGG" },
  { name: "Hilo, HI", code: "ITO" },
  { name: "Kona, HI", code: "KOA" },
  { name: "Nawiliwili, Kauai, HI", code: "LIH" },

  // Caribbean
  { name: "San Juan, Puerto Rico", code: "SJU" },
  { name: "Charlotte Amalie, St. Thomas", code: "STT" },
  { name: "Philipsburg, St. Maarten", code: "SXM" },
  { name: "Basseterre, St. Kitts", code: "SKB" },
  { name: "George Town, Grand Cayman", code: "GCM" },
  { name: "Roatan, Honduras", code: "RTB" },
  { name: "Ocho Rios, Jamaica", code: "OCJ" },
  { name: "Montego Bay, Jamaica", code: "MBJ" },
  { name: "Bridgetown, Barbados", code: "BGI" },
  { name: "St. Johns, Antigua", code: "ANU" },
  { name: "Castries, St. Lucia", code: "SLU" },
  { name: "Nassau, Bahamas", code: "NAS" },
  { name: "Freeport, Bahamas", code: "FPO" },
  { name: "Cozumel, Mexico", code: "CZM" },
  { name: "Costa Maya, Mexico", code: "CTM" },
  { name: "Progreso, Mexico", code: "PGO" },

  // Mediterranean & Europe
  { name: "Barcelona, Spain", code: "BCN" },
  { name: "Rome (Civitavecchia), Italy", code: "FCO" },
  { name: "Venice, Italy", code: "VCE" },
  { name: "Athens (Piraeus), Greece", code: "ATH" },
  { name: "Naples, Italy", code: "NAP" },
  { name: "Marseille, France", code: "MRS" },
  { name: "Palma de Mallorca, Spain", code: "PMI" },
  { name: "Amsterdam, Netherlands", code: "AMS" },
  { name: "Copenhagen, Denmark", code: "CPH" },
  { name: "Southampton, England", code: "SOU" },
  { name: "Hamburg, Germany", code: "HAM" },
  { name: "Stockholm, Sweden", code: "STO" },
  { name: "Oslo, Norway", code: "OSL" },
  { name: "Bergen, Norway", code: "BGO" },
  { name: "Dublin, Ireland", code: "DUB" },
  { name: "Reykjavik, Iceland", code: "REK" },
  { name: "Lisbon, Portugal", code: "LIS" },
  { name: "Valletta, Malta", code: "MLA" },
  { name: "Istanbul, Turkey", code: "IST" },
  { name: "Dubrovnik, Croatia", code: "DBV" },
  { name: "Monte Carlo, Monaco", code: "MCM" },
  { name: "Nice, France", code: "NCE" },
  { name: "Genoa, Italy", code: "GOA" },
  { name: "Kiel, Germany", code: "KEL" },
];

const cruiseLines = [
  "Royal Caribbean",
  "Carnival Cruise Line",
  "Norwegian Cruise Line",
  "Celebrity Cruises",
  "Princess Cruises",
  "MSC Cruises",
  "Holland America Line",
  "Disney Cruise Line",
];

const cruiseLengths = [
  "2-3 nights",
  "4-6 nights",
  "7-9 nights",
  "10-14 nights",
  "15+ nights",
];

const destinations = [
  // Caribbean Regions
  { name: "Eastern Caribbean", code: "ECARIB" },
  { name: "Western Caribbean", code: "WCARIB" },
  { name: "Southern Caribbean", code: "SCARIB" },
  { name: "Bahamas", code: "BAHA" },
  { name: "Bermuda", code: "BER" },

  // Americas
  { name: "Mexican Riviera", code: "MEXRIV" },
  { name: "Baja Mexico", code: "BAJAMEX" },
  { name: "Alaska", code: "AK" },
  { name: "Pacific Northwest", code: "PNW" },
  { name: "Canada/New England", code: "CANE" },
  { name: "Panama Canal", code: "PAN" },
  { name: "Central America", code: "CENTAM" },
  { name: "South America", code: "SAM" },
  { name: "Amazon River", code: "AMZN" },
  { name: "California Coast", code: "CALCST" },
  { name: "Hawaii", code: "HI" },

  // Europe
  { name: "Western Mediterranean", code: "WMED" },
  { name: "Eastern Mediterranean", code: "EMED" },
  { name: "Greek Isles", code: "GREEK" },
  { name: "British Isles", code: "BRIT" },
  { name: "Baltic Sea", code: "BALT" },
  { name: "Norwegian Fjords", code: "FJORDS" },
  { name: "Iceland & Greenland", code: "ARCTIC" },
  { name: "Northern Europe", code: "NEUR" },
  { name: "Western Europe", code: "WEUR" },

  // Asia & Pacific
  { name: "Southeast Asia", code: "SEAST" },
  { name: "Japan & Korea", code: "JPKOR" },
  { name: "China", code: "CHINA" },
  { name: "South Pacific", code: "SPAC" },
  { name: "Australia", code: "AUS" },
  { name: "New Zealand", code: "NZ" },
  { name: "Tasmania", code: "TAS" },
  { name: "French Polynesia", code: "FPOLY" },

  // Indian Ocean & Middle East
  { name: "Dubai & Emirates", code: "UAE" },
  { name: "India", code: "INDIA" },
  { name: "Indian Ocean", code: "INOCN" },
  { name: "Maldives", code: "MLD" },
  { name: "Seychelles", code: "SEY" },

  // Special Voyages
  { name: "World Cruise", code: "WORLD" },
  { name: "Transatlantic", code: "TRAN" },
  { name: "Transpacific", code: "TPAC" },
  { name: "Antarctica", code: "ANT" },
  { name: "African Coast", code: "AFR" },
  { name: "Suez Canal", code: "SUEZ" },
  { name: "Grand Voyages", code: "GRAND" },

  // Themed
  { name: "Holiday Cruises", code: "HOLIDAY" },
  { name: "Repositioning", code: "REPO" },
  { name: "Wine Country", code: "WINE" },
  { name: "Northern Lights", code: "AURORA" },
];

export function CruiseSearchForm() {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [length, setLength] = useState("");
  const [date, setDate] = useState("");
  const [line, setLine] = useState("");

  const isFormValid = destination && departure && length && date && line;
  const [activeFilters, setActiveFilters] = useState<any[]>([]);

  useEffect(() => {
    const foo = [];

    if (destination.length > 0)
      foo.push({
        label: destinations.find((d) => d.code === destination)?.name,
        onClear: () => setDestination(""),
        icon: <MapPin className="w-4 h-4" />,
      });
    if (departure.length > 0)
      foo.push({
        label: departurePorts.find((p) => p.code === departure)?.name,
        onClear: () => setDeparture(""),
        icon: <Anchor className="w-4 h-4" />,
      });
    if (length.length > 0)
      foo.push({
        label: cruiseLengths.find((l) => l.toLowerCase() === length),
        onClear: () => setLength(""),
        icon: <Calendar className="w-4 h-4" />,
      });
    if (date.length > 0)
      foo.push({
        label: date === "custom" ? "Custom date" : `Next ${date.split("-")[1]}`,
        onClear: () => setDate(""),
        icon: <Calendar className="w-4 h-4" />,
      });
    if (line.length > 0)
      foo.push({
        label: cruiseLines.find((l) => l.toLowerCase() === line),
        onClear: () => setLine(""),
        icon: <Ship className="w-4 h-4" />,
      }),
        setActiveFilters(foo);
  }, [departure, destination, length, date, line]);

  const buildSearchUrl = () => {
    const params = new URLSearchParams();

    if (destination) params.append("dest", destination);
    if (departure) params.append("port", departure);
    if (length) params.append("length", length);
    if (date) params.append("date", date);
    if (line) params.append("line", line.toLowerCase());

    return `/search?${params.toString()}`;
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              className="w-full justify-start text-left h-[60px] bg-white border-white/20 hover:bg-white/95 
                       text-slate-900 font-medium shadow-sm transition-colors"
            >
              <Search className="mr-2 h-5 w-5 shrink-0 text-primary" />
              {destination
                ? destinations.find((d) => d.code === destination)?.name
                : "Search cruise destinations"}
              <ChevronsUpDown className="ml-auto h-5 w-5 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 bg-white shadow-lg border-none">
            <Command className="bg-transparent">
              <CommandInput placeholder="Search destinations..." />
              <CommandList className="max-h-[300px]">
                <CommandEmpty>No destination found.</CommandEmpty>
                <CommandGroup>
                  {destinations.map((dest) => (
                    <CommandItem
                      key={dest.code}
                      value={dest.code}
                      onSelect={(currentValue) => {
                        setDestination(
                          currentValue === destination ? "" : currentValue,
                        );
                      }}
                      className="hover:bg-slate-100"
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4 text-primary",
                          destination === dest.code
                            ? "opacity-100"
                            : "opacity-0",
                        )}
                      />
                      {dest.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="justify-between h-[60px] bg-white border-white/20 hover:bg-white/95 
                         text-slate-900 font-medium shadow-sm transition-colors"
              >
                <div className="flex items-center">
                  <Anchor className="mr-2 h-5 w-5 text-primary" />
                  {departure
                    ? departurePorts.find((port) => port.code === departure)
                        ?.name
                    : "Departure port"}
                </div>
                <ChevronsUpDown className="ml-2 h-5 w-5 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 bg-white shadow-lg border-none">
              <Command className="bg-transparent">
                <CommandInput placeholder="Search ports..." />
                <CommandList className="max-h-[300px]">
                  <CommandEmpty>No port found.</CommandEmpty>
                  <CommandGroup>
                    {departurePorts.map((port) => (
                      <CommandItem
                        key={port.code}
                        value={port.code}
                        onSelect={(value) => setDeparture(value)}
                        className="hover:bg-slate-100"
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4 text-primary",
                            departure === port.code
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                        {port.name}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="justify-between h-[60px] bg-white border-white/20 hover:bg-white/95 
                         text-slate-900 font-medium shadow-sm transition-colors"
              >
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-primary" />
                  {date ? `Next ${date.split("-")[1]}` : "Departure date"}
                </div>
                <ChevronsUpDown className="ml-2 h-5 w-5 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 bg-white shadow-lg border-none">
              <Command className="bg-transparent">
                <CommandList>
                  <CommandGroup>
                    {[
                      "next-3-months",
                      "next-6-months",
                      "next-year",
                      "custom",
                    ].map((option) => (
                      <CommandItem
                        key={option}
                        value={option}
                        onSelect={(value) => setDate(value)}
                        className="hover:bg-slate-100"
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4 text-primary",
                            date === option ? "opacity-100" : "opacity-0",
                          )}
                        />
                        {option === "custom"
                          ? "Custom date"
                          : `Next ${option.split("-")[1]}`}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="justify-between h-[60px] bg-white border-white/20 hover:bg-white/95 
                         text-slate-900 font-medium shadow-sm transition-colors"
              >
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-primary" />
                  {length || "Cruise length"}
                </div>
                <ChevronsUpDown className="ml-2 h-5 w-5 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 bg-white shadow-lg border-none">
              <Command className="bg-transparent">
                <CommandList>
                  <CommandGroup>
                    {cruiseLengths.map((option) => (
                      <CommandItem
                        key={option}
                        value={option.toLowerCase()}
                        onSelect={(value) => setLength(value)}
                        className="hover:bg-slate-100"
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4 text-primary",
                            length === option.toLowerCase()
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                        {option}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="justify-between h-[60px] bg-white border-white/20 hover:bg-white/95 
                         text-slate-900 font-medium shadow-sm transition-colors"
              >
                <div className="flex items-center">
                  <Ship className="mr-2 h-5 w-5 text-primary" />
                  {line
                    ? cruiseLines.find((l) => l.toLowerCase() === line)
                    : "Cruise line"}
                </div>
                <ChevronsUpDown className="ml-2 h-5 w-5 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 bg-white shadow-lg border-none">
              <Command className="bg-transparent">
                <CommandList>
                  <CommandGroup>
                    {cruiseLines.map((option) => (
                      <CommandItem
                        key={option}
                        value={option.toLowerCase()}
                        onSelect={(value) => setLine(value)}
                        className="hover:bg-slate-100"
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4 text-primary",
                            line === option.toLowerCase()
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                        {option}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex justify-end">
          <Button
            disabled={!isFormValid}
            className={cn(
              "bg-primary hover:bg-primary/90 text-white h-[60px] px-8 text-lg",
              !isFormValid && "opacity-50",
            )}
          >
            <Search className="mr-2 h-5 w-5" />
            Search Cruises
          </Button>
        </div>
      </div>

      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {activeFilters.map((filter, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full text-sm text-slate-900 
                       border border-slate-200 shadow-sm"
            >
              {filter?.icon}
              <span>{filter?.label}</span>
              <button
                onClick={filter?.onClear}
                className="hover:text-primary transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
          {activeFilters.length > 1 && (
            <button
              onClick={() => {
                setDestination("");
                setDeparture("");
                setLength("");
                setDate("");
                setLine("");
              }}
              className="text-sm text-slate-900 hover:text-primary transition-colors"
            >
              Clear all
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export function SelectDeparture({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between text-ellipsis truncate overflow-hidden h-14 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white"
        >
          {value
            ? departurePorts.find((port) => port.code === value)?.name
            : "departure port..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="p-0 bg-slate-900/95 backdrop-blur-xl border-white/10"
      >
        <Command>
          <CommandInput placeholder="Search ports..." className="text-white" />
          <CommandList>
            <CommandEmpty className="text-white/70">
              No port found.
            </CommandEmpty>
            <CommandGroup>
              {departurePorts.map((port) => (
                <CommandItem
                  key={port.code}
                  value={port.code}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                  className="text-white hover:bg-white/10"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4 text-primary",
                      value === port.code ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {port.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
