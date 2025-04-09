import { lugares } from "@/data/lugares";
import { SpotCard } from "@/components/common/spot-card";
import { ShowMap } from "@/components/common/show-map";
import SearchBar from "@/components/common/search-bar";
import Ammenities from "./ammenities";
import Button from "@/components/common/button";
import { FilterIcon } from "lucide-react";

export default function LugaresPage() {
  return (
    <>
      {/* Header with search and filters */}
      <div className="my-4 flex flex-col space-y-4 md:my-6 md:flex-row md:items-center md:gap-8 md:space-y-0">
        <SearchBar placeholder="Buscar lugares" className="w-full" />

        <div className="flex items-center justify-between gap-2">
          <Ammenities />
          <Button variant="ghost" size="default">
            <FilterIcon className="size-4" />
            Filtros
          </Button>
        </div>
      </div>

      <div className="my-4 flex flex-col space-y-2 md:my-6 md:flex-row md:items-center md:justify-between">
        <h1 className="text-lg font-semibold text-gray-900 md:text-xl">
          Viendo 1-24 de +10000 spots para &ldquo;Solo estoy viendo&rdquo; en
          S.M. de Tucumán, Argentina.
        </h1>
        <div className="hidden md:mt-0 md:block">
          <ShowMap />
        </div>
      </div>

      {/* Grid of spots */}
      <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:my-6 md:gap-6 lg:grid-cols-3 xl:grid-cols-5">
        {lugares.map((lugar) => (
          <SpotCard key={lugar.id} {...lugar} />
        ))}
      </div>
    </>
  );
}
