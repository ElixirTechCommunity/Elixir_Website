"use client";
import { TypewriterEffectSmooth } from "./typewriter-effect";
export function MentorHeading() {
  const words = [
    {
      text: "Find",
    },
    {
      text: "Your",
    },
    {
      text: "Mentor",
    },
  ];
  return (
    <div className='flex flex-col items-center justify-center h-[10vw] font-normal mt-[2vw]'>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
