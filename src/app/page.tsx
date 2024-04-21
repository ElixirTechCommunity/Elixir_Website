"use client";
import React from "react";
// import HeroSection from "@/components/HeroSection";
// import ClubsInformation from "@/components/ClubsInformation";
// import { JoinUs } from "@/components/JoinUs";
// import { ElixirTabs } from "@/components/ElixirTabs";
import useEventApi from "@/hooks/useEventApi";
import Hero from "@/components/landingPage/Hero";
// import Benefits from "@/components/landingPage/Benefits";
import Collaboration from "@/components/landingPage/Collaboration";
// import Services from "@/components/landingPage/Services";
import Pricing from "@/components/landingPage/Pricing";
import Roadmap from "@/components/landingPage/Roadmap";

export default function Home() {
  useEventApi();
  return (
    <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
      <Hero />
      {/* <Benefits /> */}
      <Collaboration />
      {/* <Services /> */}
      <Roadmap />
      <Pricing />
    </div>
  );
}
