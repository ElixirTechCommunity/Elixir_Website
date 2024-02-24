"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export function ElixirTabs() {
  const tabs = [
    {
      title: "Event",
      value: "event",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Recent Events</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Notes",
      value: "notes",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Notes</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Community",
      value: "community",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Join the Community</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Mentorship",
      value: "mentorship",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Become a mentee or be a mentor</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b  flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1080&q=75"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

