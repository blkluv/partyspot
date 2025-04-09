import HeroIconList from "@/components/hero-section/hero-icon-list";
import BackgroundPageContainer from "@/components/common/background-page-container";
import SearchField from "@/components/common/search-field";
import MobileSearchField from "@/components/common/mobile-search-field";
import HeroText from "@/components/common/hero-text";

export default function HeroSection() {
  return (
    <BackgroundPageContainer>
      <section className="row-span-1 row-start-2 mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 space-y-6 px-3 pb-4 sm:space-y-8 sm:px-6 lg:px-8">
        <HeroIconList />
        <HeroText />
        {/* Accessibility */}
        <h2 className="sr-only">Encuentra tu evento ideal</h2>
        <div className="w-full max-w-6xl" aria-labelledby="search-heading">
          <span id="search-heading" className="sr-only">
            Busca eventos por actividad, ubicación y fecha
          </span>
          {/* Mobile search field */}
          <div className="block lg:hidden">
            <MobileSearchField />
          </div>
          {/* Desktop search field */}
          <div className="hidden lg:block">
            <SearchField />
          </div>
        </div>
      </section>
    </BackgroundPageContainer>
  );
}
