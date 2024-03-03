"use client";
import React, { useEffect, useState } from "react";
import { SparklesCore } from "../../../components/ui/sparkles";
import axios from "axios";
import Flowchart from "@/components/Flowcharts";
import Link from "next/link";

type node = {
    "id": string
    "type": string
    "data": {
        "label": string
    },
    "position": {
        "x": number,
        "y": number
    }
}
type edges = {
    "id": string,
    "source": string,
    "target": string
}

type roadmapData = {
    nodes:node[],
    edges:edges[],
    name:string,
    __v:number,
    _id:string
}
function page({params}:{params:{roadmap:string}}) {
    const  [data, setData] = useState<roadmapData[] | null> (null);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async()=>{
        await axios.get(`https://roadmap-backend.onrender.com/${params.roadmap}`).then(response => {
        setData(response.data);
        setLoading(false);
      });
        }
        fetchData();
    },[])
    data && console.log(data[0]);
  return (
    <>
      <div className="absolute  top-14 left-14">
        <Link href="/roadmap">
        <button className="cursor-pointer shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 text-lg transition duration-400">
          Go Back
        </button>
        </Link>
      </div>
      <div className="h-content p-auto mt-20 w-full bg-[#0A0A0A] flex flex-col items-center justify-start overflow-hidden rounded-md">
        <h1 className="md:text-5xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
          {`${params.roadmap.toLocaleUpperCase()}  ROADMAP`}
        </h1>
        <div className="lg:w-[40rem] sm:w-[20rem] bg-[#0A0A0A] h-40 lg:h-20 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-[#0A0A0A] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      {data && (
        <Flowchart nodes={data[0].nodes} edges={data[0].edges} height1={200} />
      )}
    </>
  );
}

export default page;
