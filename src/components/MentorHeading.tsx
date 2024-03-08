"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function MentorHeading() {
  const words = [
    
    {
        text: "Get",
      },
    {
        text: "A",
      },
    {
        text: "Mentor",
      },



  ];
  return (
    <div className="flex flex-col items-center justify-center h-[10vw] font-normal mt-[2vw]">
      
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
