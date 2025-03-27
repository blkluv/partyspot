import { Search } from "lucide-react";

interface MobileSearchFieldProps {
  placeholder?: string;
  onClick?: () => void;
}

export default function MobileSearchField({
  placeholder = "Start your search",
  onClick
}: MobileSearchFieldProps) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center rounded-md border border-gray-300 bg-white px-4 py-3 shadow-sm transition-all hover:shadow-md"
      type="button"
    >
      <Search className="mr-3 h-4 w-4 text-gray-500" aria-hidden="true" />
      <span className="text-lg font-normal text-gray-800">{placeholder}</span>
    </button>
  );
}
