import LinkButton from "@/components/common/link-button";
import FeatureItem from "@/components/common/feature-item";
import BackgroundCard from "@/components/common/background-card";
import ContentImageGrid from "@/components/common/content-image-grid";
import { features } from "@/data/become-a-host";
import Image from "next/image";

export default function BecomeHostSection() {
  return (
    <section
      id="become-host"
      aria-labelledby="become-host-heading"
      className="text-secondary mb-12 sm:mb-16 md:mb-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with improved semantic markup */}
        <h2
          id="become-host-heading"
          className="mb-12 flex flex-col items-center justify-center text-3xl font-bold sm:flex-row sm:gap-4 sm:text-4xl md:text-6xl"
        >
          <span className="pb-1">Put your</span>
          <div className="flex items-center">
            <Image
              src="/ps-logo-text-flex.svg"
              alt="PartySpot Logo"
              width={400}
              height={400}
              className="h-auto w-52 sm:w-64 md:w-72"
              priority
            />
            <span className="pb-2">!</span>
          </div>
        </h2>

        {/* Main container - Using reusable components */}
        <BackgroundCard>
          <ContentImageGrid
            imageSrc="/images/become-a-host.webp"
            imageAlt="A satisfied person generating income as a host on PartySpot"
            imagePosition="right"
          >
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="flex flex-col justify-center text-left">
                <h3 className="text-2xl font-bold md:text-3xl">
                  Your space, your source of income
                </h3>
                <p className="text-lg text-gray-600">
                  Post your space today and start earning every month
                </p>
              </div>

              <ul
                className="space-y-4 text-left"
                aria-label="Benefits of being a host"
              >
                {features.map((feature) => (
                  <li key={feature.title}>
                    <FeatureItem
                      title={feature.title}
                      description={feature.description}
                      icon={feature.icon}
                    />
                  </li>
                ))}
              </ul>

              <LinkButton
                href="/become-host"
                size="md"
                aria-label="Start posting my space as a host"
              >
                Post my space
              </LinkButton>
              <p className="text-sm text-gray-500">
                No long-term commitments. Check the results{" "}
                <span className="font-bold text-pink-600">
                  in less than 15 days
                </span>
                .
              </p>
            </div>
          </ContentImageGrid>
        </BackgroundCard>

        {/* Testimonials or additional information with improved markup */}
        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-gray-900">
            More than{" "}
            <span className="font-bold text-pink-600">
              50 hosts in Atlantic City
            </span>{" "}
            are already generating income with their spaces
          </p>
        </div>
      </div>
    </section>
  );
}
