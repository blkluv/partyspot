// TODO: Refactor this component with zod and react-hook-form then remove the use client
"use client";
import { ChevronDown, Calendar, Search, MapPin } from "lucide-react";
import { useState } from "react";
import SearchInput from "./search-input";

export default function SearchField({ className = "" }) {
  const [activity, setActivity] = useState("Just browsing");
  const [location, setLocation] = useState("Anywhere");
  const [date, setDate] = useState("Anytime");

  return (
    <form
      className={`mx-auto flex w-full max-w-7xl flex-col items-center rounded-lg border border-gray-100 bg-white text-black shadow-lg sm:flex-row ${className}`}
      role="search"
      aria-label="Place search"
    >
      <div className="flex w-full flex-grow flex-col divide-y divide-gray-300 sm:divide-x sm:divide-y-0 lg:flex-row">
        <SearchInput
          id="activity-search"
          label="What are you planning?"
          placeholder="Search for an activity"
          value={activity}
          onChange={setActivity}
          icon={<ChevronDown className="h-4 w-4 text-gray-500" />}
        />

        <SearchInput
          id="location-search"
          label="Where?"
          placeholder="Enter a location"
          value={location}
          onChange={setLocation}
          icon={<MapPin className="h-4 w-4 text-gray-500" />}
        />

        <SearchInput
          id="date-search"
          label="When?"
          placeholder="Pick a date"
          value={date}
          onChange={setDate}
          icon={<Calendar className="h-4 w-4 text-gray-500" />}
        />
      </div>

      <button
        type="submit"
        aria-label="Search places"
        className="bg-primary hover:bg-primary/90 mx-auto mt-3 flex w-full items-center justify-center gap-2 rounded-md px-6 py-3 shadow-sm transition-all duration-200 sm:mx-4 sm:mt-0 sm:w-auto"
      >
        <Search className="size-4 text-white" aria-hidden="true" />
        <span className="font-regular text-lg text-white">Search</span>
      </button>
    </form>
  );
}
