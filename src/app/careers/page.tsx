"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTheme } from "next-themes";
import { Card, HoverEffect } from "@/components/careers-card";
import { AddCareerCard } from "@/components/AddNewCareerCard";
import { SparklesCore } from "@/components/ui/sparkles";

function Careers() {
  const [careers, setCareers] = useState([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const { theme } = useTheme();

  const fetchCareers = async () => {
    try {
      const careersData = await axios.get(
        "https://elixir-careers.onrender.com/api/v1/henlo"
      );
      setCareers(careersData.data.careerData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCareers();
  }, []);

  const handleShowModal = () => {
    setShowModal(!showModal);
    if (!showModal) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  };

  return (
    <>
      {showModal && <AddCareerCard handleClose={handleShowModal} />}
      <div className="flex justify-center items-center">
        <div className="w-full relative">
          <div className="mt-24 h-fit w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
            <div className="md:text-[5.5rem] text-6xl font-bold text-center dark:text-white text-blue-900 relative z-20">
              Careers
            </div>
            <div className="md:w-[30rem] w-full mt-2 flex justify-center h-4 relative">
              {/* Gradients */}
              <div className="absolute top-0 bg-gradient-to-r from-transparent dark:via-indigo-500 via-sky-800 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute top-0 bg-gradient-to-r from-transparent dark:via-indigo-500 via-sky-800 to-transparent h-px w-3/4" />
              <div className="absolute top-0 bg-gradient-to-r from-transparent dark:via-indigo-500 via-sky-200 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute top-0 bg-gradient-to-r from-transparent dark:via-sky-500 via-sky-800 to-transparent h-px w-1/4" />

            </div>
          </div>

          <h1 className="md:text-2xl text-2xl text-center text-[#042c75] dark:text-white font-semibold">
            We find it, You hack it
          </h1>
          <div className="w-fit mx-auto flex flex-col items-center px-6">
            <HoverEffect items={careers} />
            <Card
              text="Add new opening"
              className="mx-4 text-center mb-4 w-fit"
              onClick={handleShowModal}
            >
              <h1>
                If any new opening is available you can add it here so that
                other people can see it.
              </h1>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Careers;
