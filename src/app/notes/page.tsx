"use client";

import React from "react";
import { Meteors } from "@/components/ui/meteors";

function Card({
  title,
  text,
  link,
}: {
  title: string;
  text: string;
  link: string;
}) {
  return (
    <div className="relative w-full h-[300px]">
      <div className="absolute h-full w-full transform" />
      <div className="relative shadow-xl  border bg-transparent border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
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

        <h1 className="font-bold text-xl text-white mb-6 relative z-50">
          {title}
        </h1>

        <p className="font-normal text-base text-slate-500 mb-6 relative z-50">
          {text}
        </p>


        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-50"
        >
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Explore
          </button>
        </a>

        {/* Meaty part - Meteor effect */}
        <Meteors number={40} />
      </div>
    </div>
  );
}

function Notes() {
  return (
    <div className="h-full p-2 ">
      <h1 className="text-6xl font-bold text-center m-8">Notes</h1>
      <div className="p-8 grid gap-8  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-w-screen-lg mx-auto">
        <Card
          title="First Year"
          text="Text for card 1."
          link="https://drive.google.com/drive/folders/1TTjSSShjK5nrUURnSIVOK1wnO-CBCp7R"
        />
        <Card
          title="Second Year"
          text="Text for card 2."
          link="https://drive.google.com/drive/folders/1c2gZ8TJ53P3ecNETMB403lTueQY5pEHU"
        />
        <Card
          title="Third Year"
          text="Text for card 3."
          link="https://drive.google.com/drive/folders/1jUHgBPZdN5V5Am6gEHpHNTc4XWIQgC_W"
        />
        <Card
          title="Fourth Year"
          text="Text for card 4."
          link="https://drive.google.com/drive/folders/1LdrCdkcasmu_qA0vOK-UdI8UeThNhZ2C"
        />
      </div>
    </div>
  );
}

export default Notes;
