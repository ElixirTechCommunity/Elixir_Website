"use client";

import React from "react";
import { Meteors } from "@/components/ui/meteors";

function Card({ title, text }: { title: string, text: string }) {
  return (
    <div className="relative w-3/4 sm:max-w-sm sm:min-w-[20rem]">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-2 w-2 text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </div>

        <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          {title}
        </h1>

        <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
          {text}
        </p>

        <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
          Explore
        </button>

        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  );
}

function Notes() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 m-auto max-w-screen-lg place-items-center min-h-screen">
      <Card title="First Year" text="Text for card 1." />
      <Card title="Second Year" text="Text for card 2." />
      <Card title="Third Year" text="Text for card 3." />
      <Card title="Fourth Year" text="Text for card 4." />
    </div>
  );
}

export default Notes;