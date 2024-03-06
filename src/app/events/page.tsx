"use client";
import EventsCard from "@/components/EventsCard3D";
import useEventApi from "@/hooks/useEventApi";
import { useEffect } from "react";
import { useSelector } from "react-redux";
type Event = {
  id: number;
  name: string;
  event_summary: string;
  img_link: string;
  club: string;
  date: string;
  form_link: string;
};

export default function Events(): JSX.Element {
  const events = useSelector((store: any) => store?.event?.events);
  useEventApi();

  return (
    events && (
      <main className='relative antialiased'>
        <h1 className='text-6xl font-bold text-center m-20'>Events</h1>
        <div className='flex flex-wrap sm:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-10 pb-24 max-w-[70dvw] mx-auto'>
          {events?.map((event: Event) => (
            <EventsCard
              key={event.id}
              title={event.name}
              description={event.event_summary}
              eventName={event.name}
              eventImage={event.img_link}
              clubName={event.club}
              clubImage='https://via.placeholder.com/25'
              deadline={event.date}
              formLink={event.form_link}
            />
          ))}
        </div>
      </main>
    )
  );
}
