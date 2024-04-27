"use client";

import React, { useState, useRef } from "react";
import sendContactFrom from "@/utils/contact_form";
import { BackgroundCircles } from "@/components/landingPage/design/Hero";
import { Gradient } from "@/components/landingPage/design/Roadmap";

function Participate() {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const issueRef = useRef<HTMLTextAreaElement>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const parallaxRef = useRef(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {

            if ( nameRef.current && emailRef.current && issueRef.current ) {

            const response = await sendContactFrom({
                name: nameRef.current.value,
                fromEmail: emailRef.current.value,
                issue: issueRef.current.value,
            });
            if (response.error) {
                setError(response.error);
            } else {
                setSuccess(true);
                nameRef.current.value = "";
                emailRef.current.value = "";
                issueRef.current.value = "";
            }
        }
        } catch (error) {
            setError("An error occurred. Please try again later.");
        }

        setLoading(false);
    };

    return (
        <div className="h-[120vh] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4" ref={parallaxRef}>
                <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
                    Join The Community
                    <BackgroundCircles parallaxRef={parallaxRef} />
                </h1>
                <p></p>
                <p className="text-neutral-300 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    If you're interested in getting involved with the community,
                    please enter your email below and we'll keep you updated
                    with the latest news and events.
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="relative z-10 flex flex-col"
                >
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="p-2 rounded-lg border border-gray-500 focus:ring-2 focus:ring-teal-500 w-full mt-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
                        ref={nameRef}
                        disabled={loading}
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-2 rounded-lg border border-gray-500 focus:ring-2 focus:ring-teal-500 w-full mt-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
                        ref={emailRef}
                        disabled={loading}
                    />
                    <textarea
                        placeholder="Describe your issue"
                        className="p-2 rounded-lg border border-gray-500 focus:ring-2 focus:ring-teal-500 w-full mt-4 bg-neutral-950 placeholder:text-neutral-700 text-white h-32 resize-none"
                        ref={issueRef}
                        disabled={loading}
                    />

                    <button
                        type="submit"
                        className=" bg-violet-800 text-white font-semibold uppercase px-4 py-2 rounded-md mt-4"
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    {success && (
                        <p className="text-green-500 mt-2">
                            Thank you for joining!
                        </p>
                    )}
                </form>
                <Gradient />
            </div>
        </div>
    );
}

export default Participate;
