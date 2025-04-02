import { lugares } from "@/src/data/lugares";
import { SpotCard } from "@/src/components/common/spot-card";

export default function LugaresPage() {
  return (
    <section className="mx-auto px-4 py-8">
      {/* Header with count and filter */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900">
          Viendo 1-24 de +10000 spots para &ldquo;Solo estoy viendo&rdquo; en
          S.M. de Tucumán, Argentina.
        </h1>
        <button className="flex items-center gap-1 rounded-full border border-gray-300 px-3 py-1.5 text-sm">
          Mostrar mapa
          <span className="ml-1 inline-block h-3 w-3 rounded-full bg-pink-500"></span>
        </button>
      </div>

      {/* Grid of spots */}
      <div className="grid grid-cols-1 gap-6 space-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {lugares.map((lugar) => (
          <SpotCard key={lugar.id} {...lugar} />
        ))}
      </div>
    </section>
  );
}
