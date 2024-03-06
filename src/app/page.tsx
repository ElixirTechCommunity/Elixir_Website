"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import ClubsInformation from "@/components/ClubsInformation";
import { JoinUs } from "@/components/JoinUs";
import { ElixirTabs } from "@/components/ElixirTabs";
import useEventApi from "@/hooks/useEventApi";

export default function Home() {
  useEventApi();
  return (
    <main>
      <HeroSection />
      <ClubsInformation />
      <ElixirTabs />
      <JoinUs />
    </main>
  );
}
