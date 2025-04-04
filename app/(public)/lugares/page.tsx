import { lugares } from "@/src/data/lugares";
import { SpotCard } from "@/src/components/common/spot-card";
import { ShowMap } from "@/src/components/common/show-map";

export default function LugaresPage() {
  return (
    <>
      {/* Header with count and filter */}
      <div className="my-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900">
          Viendo 1-24 de +10000 spots para &ldquo;Solo estoy viendo&rdquo; en
          S.M. de Tucumán, Argentina.
        </h1>
        <ShowMap />
      </div>

      {/* Grid of spots */}
      <div className="grid grid-cols-1 gap-6 space-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {lugares.map((lugar) => (
          <SpotCard key={lugar.id} {...lugar} />
        ))}
      </div>
    </>
  );
}
