"use client";
import React, { useState } from "react";
import { ModeToggle } from "@/components/ui/ThemeToggle";
import { ThemeProvider } from "@/components/ThemeProvider";

const HamburgerMenu: React.FC = () => (
  <div className="absolute top-5 right-30 mt-12 mr-4 w-80 rounded-2xl shadow-lg text-white bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg py-2 z-50">
    <div className="dropdown-menu">
      {
        <div className="flex flex-col justify-center items-center space-y-20 dark:text-white light:text-black">
          <a href="/notes" className="text-xl font-extrabold" style={{ fontSize: "30px" }}>Notes</a>
          <a href="/events" className="text-xl font-extrabold" style={{ fontSize: "30px" }}>Events</a>
          <a href="/mentors" className="text-xl font-extrabold" style={{ fontSize: "30px" }}>Mentorship</a>
          <a href="/participate" className="text-xl font-extrabold" style={{ fontSize: "30px" }}>Participate</a>

          <a href="#">
            <svg
              className="h-6 w-6 transform transition duration-300 hover:text-yellow-400 hover:scale-125 dark:text-white light:text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="#">
            <svg
              className="h-6 w-6 transform transition duration-300 hover:text-yellow-400 hover:scale-125"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
            </svg>
          </a>
          <a href="#">
            <svg
              className="h-8 w-6 transform transition duration-300 hover:text-yellow-400 hover:scale-125 dark:text-white light:text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
      }
    </div>
  </div>
);

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      style={{
        position: "sticky",
        top: 10,
        zIndex: 1000,
      }}
    >
      <nav className="flex justify-center items-center mt-5">
        <div className="max-w-6x1 rounded-2xl overflow-hidden shadow-lg text-white bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg">
          <div className="py-4  px-4 flex justify-between items-center space-x-12">
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M2 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm1 5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="font-m items-center md:hidden ">
              <a href="#">
                <h1 className="font-bold text-2xl ">Elixir</h1>
              </a>
            </div>

            <a href="#">
              {/* TODO: replace with elixir logo */}
              <svg
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                <polyline points="7.5 19.79 7.5 14.6 3 12" />
                <polyline points="21 12 16.5 14.6 16.5 19.79" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </a>

            <div className="font-m items-center hidden md:flex space-x-12">
              <a href="/notes" className="dark:text-white light:text-black">Notes</a>
              <a href="/events" className="dark:text-white light:text-black">Events</a>
              <a href="/mentors" className="dark:text-white light:text-black">Mentorship</a>
              <a href="/participate" className="dark:text-white light:text-black">Participate</a>
            </div>

            <div className="font-m items-center hidden md:flex space-x-12">
              <a href="#">
                <svg
                  className="h-6 w-6 transform transition duration-300 hover:text-yellow-400 hover:scale-125"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#">
                <svg
                  className="h-6 w-6 transform transition duration-300 hover:text-yellow-400 hover:scale-125 dark:text-white light:text-black"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
                </svg>
              </a>
              <a href="#">
                <svg
                  className="h-8 w-6 transform transition duration-300 hover:text-yellow-400 hover:scale-125 dark:text-white light:text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="md:flex space-x-8 items-center">
          <a href="#">
            <button className="bg-transparent font-m text-gray-800 py-1 px-3 rounded-lg">
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <ModeToggle />
              </ThemeProvider>
            </button>
          </a>
        </div>

        {isOpen && <HamburgerMenu />}
      </nav>
    </div>
  );
};
