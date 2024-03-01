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
          <div className="mt-28 h-fit w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="md:text-7xl text-[5.5rem] lg:text-9xl font-bold text-center dark:text-white text-blue-900 relative z-20">
              Careers
            </h1>
            <div className="w-[40rem] h-40 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent darK:via-sky-500 via-blue-900 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent dark:via-sky-500 via blue-900 to-transparent h-px w-1/4" />

              {/* Core component */}
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={2}
                particleDensity={1200}
                className="w-full h-full"
                particleColor={theme == "dark" ? "#FFFFFF" : "#3618db"}
              />

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full dark:bg-[#0a0a0a] bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>

          <h1 className="md:mt-1 md:text-2xl text-2xl text-center text-[#042c75] dark:text-white font-semibold">
            We find it, You hack it
          </h1>
          <div className="w-fit mx-auto flex flex-col items-center px-6">
            <HoverEffect items={careers} />
            <Card
              text="Add new opening"
              className="mx-4 text-center mb-4"
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
