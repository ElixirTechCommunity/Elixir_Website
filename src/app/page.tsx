"use client";
import React from "react";
import useEventApi from "@/hooks/useEventApi";
import RetroGrid from "@/components/magicui/retro-grid";
import { TextRevealDemo } from "@/components/TextReveal";
import { FadeTextDemo } from "@/components/FadeText";

export default function Home() {
  useEventApi();
  return (
    <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden h-screen'>
      <div className='flex items-center justify-center mt-48'>
        {/* <TextRevealDemo /> */}
        <FadeTextDemo />
      </div>
      <RetroGrid />
    </div>
  );
}
