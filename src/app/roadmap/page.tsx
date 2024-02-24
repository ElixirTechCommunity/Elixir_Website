"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

function Participate() {
  return (
    <div className="h-[100vh] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
         Roadmap Page Coming Soon 
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          If you're interested in getting involved with the community, please enter your email below and we'll keep you updated with the latest news and events.
        </p>
        <input
          type="text"
          placeholder="hi@elixir"
         className="p-2 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default Participate;
