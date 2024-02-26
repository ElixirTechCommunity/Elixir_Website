"use client";
import React, { use, useEffect, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { WavyBackground } from "@/components/ui/wavy-background";
import { type } from "os";
import axios from "axios";
import { useTheme } from "next-themes";
import { Card, HoverEffect } from "@/components/careers-card";
import { AddCareerCard } from "@/components/AddNewCareerCard";

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
          <WavyBackground
            className=""
            backgroundFill={theme === "light" ? "white" : `#0a0a0a`}
          >
            <h1 className="text-white font-4xl text-6xl md:text-8xl text-center font-bold -mt-20">
              Careers
            </h1>
            <h1 className="md:mt-6 mt-2 md:text-2xl text-lg text-center text-white font-semibold">
              We find it, You hack it
            </h1>
          </WavyBackground>
          <div className="md:-mt-60 -mt-[20rem] w-fit mx-auto flex flex-col items-center px-6">
            <HoverEffect items={careers} />
            <Card
              text="Add new opening"
              className="mx-4 text-center"
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
