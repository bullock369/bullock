import Footer from "@/common/footer";
import Header from "@/common/header";
import AboutUs from "@/components/about-us";
import ChooseUs from "@/components/choose-us";
import FirstCard from "@/components/first-card";
import HeroSlider from "@/components/hero-slider";
import OurTeam from "@/components/our-team";
import QualityService from "@/components/quality-service";
import ServiceWeOffer from "@/components/service-we-offer";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSlider />
      <FirstCard />
      <AboutUs />
      <ServiceWeOffer />
      <QualityService />
      <OurTeam />
      <ChooseUs />
      <Footer />
    </div>
  );
};

export default LandingPage;
