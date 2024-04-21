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
      <Section
        crosses={true}
        className='' // Add appropriate class name here
        id='' // Add a unique ID here
        crossesOffset={0} // Adjust according to your design needs
        customPaddings='' // Add custom padding values here
      >
        <main className='relative antialiased flex flex-col items-center justify-center'>
          <Heading
            tag='Explore Our Dynamic'
            title='Events'
            className='mt-16 md:mt-0'
            text=''
          />
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
