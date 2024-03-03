"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";

function Participate() {
  return (
    <div className="h-[100vh] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-start  antialiased">
      <div className="max-w-2xl mx-auto mt-20 p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b mt-30 from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Roadmap Page
        </h1>
        <p className="text-neutral-200 max-w-lg mx-auto my-2 text-md text-center relative z-10">
          This is a community effort to create roadmaps, guides and other
          educational content to help guide developers in picking up a path and
          guide their learnings.
        </p>
      </div>
      <button className="z-10 p-[3px] relative mt-10">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px] text-xl  relative group transition duration-200 text-white">
          Role Based Roadmaps
        </div>
      </button>
      <div className="w-content h-content p-10 grid grid-cols-3 gap-6">
        {data.map(({ name, path }) => (
          <>
            <Link href={`/roadmap/${path}`} key={name}>
              <button className="w-full z-10 relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-xl font-medium text-white backdrop-blur-3xl">
                  {name}
                </span>
              </button>
            </Link>
          </>
        ))}
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default Participate;

const data = [
  {
    name: "Frontend",
    path: "/frontend",
  },
  {
    name: "Backend",
    path: "/backend",
  },
  {
    name: "DevOps",
    path: "/devops",
  },
  {
    name: "FullStack",
    path: "/fullstack",
  },
  {
    name: "Blockchain",
    path: "/blockchain",
  },
  {
    name: "AI and Data Scientists",
    path: "/ai",
  },
  {
    name: "UI/UX Developer",
    path: "/ui",
  },
  {
    name: "Flutter",
    path: "/flutter",
  },
  {
    name: "Cyber Security",
    path: "/cybersec",
  },
  {
    name: "Game Developer",
    path: "/gamedev1",
  },
  {
    name: "Android",
    path: "/android",
  },
];
