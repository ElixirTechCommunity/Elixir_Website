"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function MentorHeading() {
  const words = [
    
    {
        text: "Mentors",
      },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[5vw] font-normal mt-[2vw]">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
