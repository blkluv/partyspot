"use client";
import { SearchIcon, XIcon } from "lucide-react";
import { useDebounce } from "@/src/lib/hooks/use-debounce";
import { useEffect, useState } from "react";
import { cn } from "@/src/lib/utils/cn";

interface SearchBarProps {
  placeholder: string;
  className?: string;
}

function SearchBar({ placeholder, className }: SearchBarProps) {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    console.log(debouncedSearch);
  }, [debouncedSearch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClearSearch = () => {
    setSearch("");
  };

  return (
    <div className={cn(className)}>
      <div className="relative">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          type="text"
          name="search"
          aria-label={placeholder}
          value={search}
          onChange={handleSearch}
          placeholder={placeholder}
          className="focus:ring-primary w-full rounded-md border border-gray-300 p-2 pr-8 pl-9 focus:ring-2 focus:outline-none"
        />
        <SearchIcon className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-gray-400" />
        {search && (
          <button
            type="button"
            title="Clear search"
            className="hover:text-primary focus:text-primary absolute top-1/2 right-2 size-4 -translate-y-1/2 cursor-pointer text-gray-400 transition-all duration-200 hover:scale-110 focus:outline-none"
            aria-label="Clear search"
            onClick={handleClearSearch}
          >
            <XIcon className="size-4" />
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
