import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";

function Home() {
  window.scrollTo(0, 0);
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  );
}

export default Home;
