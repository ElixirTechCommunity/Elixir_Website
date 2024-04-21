"use client";
import EventsCard from "@/components/EventsCard3D";
import { Gradient } from "@/components/landingPage/design/Roadmap";
import Heading from "@/components/landingPage/Heading";
import Section from "@/components/landingPage/Section";
import useEventApi from "@/hooks/useEventApi";
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
      <Section crosses={true}>
        <main className='relative antialiased'>
          <Heading tag='Ready to get started' title='Events' />
          <div className='flex flex-wrap justify-center items-stretch gap-10 pb-24 max-w-[97vw]'>
            {events?.map((event: Event) => (
              <>
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
              </>
            ))}
            <Gradient />
          </div>
        </main>
      </Section>
    )
  );
}
