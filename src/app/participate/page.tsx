"use client";

import React, { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import sendContactFrom from "@/utils/contact_form";

function Participate() {
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [issue, setIssue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await sendContactFrom({ name, fromEmail, issue });
      if (response.error) {
        setError(response.error);
      } else {
        setSuccess(true);
        setName("");
        setFromEmail("");
        setIssue("");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="h-[100vh] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Join The Community
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          If you're interested in getting involved with the community, please
          enter your email below and we'll keep you updated with the latest news
          and events.
        </p>
        <form onSubmit={handleSubmit} className="relative z-10">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full mt-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full mt-4 bg-neutral-950 placeholder:text-neutral-700 text-white"
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
            disabled={loading}
          />
          <textarea
            placeholder="Describe your issue"
            className="p-2 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full mt-4 bg-neutral-950 placeholder:text-neutral-700 text-white h-32 resize-none"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            disabled={loading}
          />

          <button
            type="submit"
            className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && (
            <p className="text-green-500 mt-2">Thank you for joining!</p>
          )}
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default Participate;
