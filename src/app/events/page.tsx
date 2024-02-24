"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import EventsCard from "@/components/EventsCard3D";

export default function Events(): JSX.Element {
    const [events, setEvents] = useState([]);
    const fetchevents = async () => {
        try {
            const events = await axios.get(
                "https://elixir-backendv2.vercel.app/events/?format=json"
            );
            setEvents(events.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchevents();
    }, []);

    return (
        <main className="relative antialiased">
            <h1 className="text-6xl font-bold text-center m-20">Events</h1>
            <div className="flex flex-wrap sm:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-10 pb-24 max-w-[70dvw] mx-auto">
                {events.map((event: any) => (
                    <EventsCard
                        key={event.id}
                        title={event.name}
                        description={event.event_summary}
                        eventName={event.name}
                        eventImage={event.img_link}
                        clubName={event.club}
                        clubImage="https://via.placeholder.com/25"
                        deadline={event.date}
                        formLink={event.form_link}
                    />
                ))}
            </div>
        </main>
    );
}
