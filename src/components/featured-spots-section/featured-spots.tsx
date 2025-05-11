import Link from "next/link";
import FeaturedSpotsCard from "./featured-spotscard";
import { spots } from "@/data/spots";
import { ChevronRightIcon } from "lucide-react";

export default function FeaturedSpotsSection() {
  return (
    <section className="mb-12 sm:mb-16 md:mb-20">
      <article className="container mx-auto px-4">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-2 sm:mb-8">
          <h2 className="text-secondary text-lg font-bold sm:text-3xl">
            Featured Places
          </h2>
          <Link
            href="/lugares"
            className="text-secondary hover:text-secondary/80 font-medium transition-colors"
            title="Explore all featured places"
            aria-label="See all available featured places"
          >
            <span className="sm:text-md flex items-center gap-1 text-sm sm:gap-2 xl:text-lg">
              View all places{" "}
              <ChevronRightIcon className="h-3 w-3 sm:h-4 sm:w-4" />
            </span>
          </Link>
        </div>
        <FeaturedSpots />
      </article>
    </section>
  );
}

const FeaturedSpots = () => {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
      {spots.map((spot) => (
        <FeaturedSpotsCard key={spot.id} {...spot} />
      ))}
    </section>
  );
};
