"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

function JoinCommunity() {
  const words = [
    {
      text: "Join",
    },
    {
      text: "the",
    },
    {
      text: "Community",
    },
    {
      text: "of",
    },
    {
      text: "Developers.",
      className: "text-indigo-500 dark:text-indigo-500",
    },
  ];
  return (
    <div className="z-20 flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        You learn more in a community then you do on your own.
      </p>
      <TypewriterEffectSmooth words={words} />
      {/* TODO: add hover effect to buttons */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <a href="/participate">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Join now
          </button>
        </a>
        <a href="/events">
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Past Events
          </button>
        </a>
      </div>
    </div>
  );
}


export function JoinUs() {
  return (
    <div className="p-[6rem]">
      <div className="h-96  relative w-full overflow-hidden bg-background flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-background z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <JoinCommunity />
        <Boxes />
      </div>
    </div>
  );
}

