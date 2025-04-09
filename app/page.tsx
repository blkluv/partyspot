import type { NextPage } from "next";
import HeroSection from "@/components/hero-section/hero-section";
import FeaturedSpotsSection from "@/components/featured-spots-section/featured-spots";
import MadeWithPartySpotSection from "@/components/made-with-ps-section/made-with-party-spot-section";
import WhyUsePartySpot from "@/components/why-use-ps-section/why-use-party-spot";
import BecomeHostSection from "@/components/become-host-section/become-host";
import NextParty from "@/components/cta-next-party/cta-next-party";
import Navbar from "@/components/layouts/navbar/navbar";
import NavLinks from "@/components/layouts/navbar/nav-links";
import Footer from "@/components/layouts/footer/footer";

const Home: NextPage = () => {
  return (
    <>
      <Navbar>
        <NavLinks />
      </Navbar>
      <HeroSection />
      <FeaturedSpotsSection />
      <NextParty />
      <MadeWithPartySpotSection />
      <WhyUsePartySpot />
      <BecomeHostSection />
      <Footer />
    </>
  );
};

export default Home;
