import React from "react";
import EventsCard from "@/components/EventsCard3D";

export default function Events(): JSX.Element {
    return (
        <main className="relative bg-black/[0.96] antialiased bg-grid-white/[0.02]">
            <div className="flex flex-wrap justify-center gap-4 pt-52 pb-24 max-w-[70dvw] mx-auto">
                <EventsCard
                    title="Event Title"
                    description="Event Description"
                    eventName="Event Name"
                    eventImage="https://via.placeholder.com/1000"
                    clubName="Club Name"
                    clubImage="https://via.placeholder.com/25"
                    deadline="2022-12-31T23:59:59Z"
                    isOver={false}
                />
            </div>
        </main>
    );
}
