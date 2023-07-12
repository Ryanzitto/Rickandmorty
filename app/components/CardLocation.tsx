"use client";
import { saveUrl } from "@/app/GlobalRedux/Feature/location/locationSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

interface CardProps {
  data: {
    url: string;
    name: string;
    dimension: string;
    type: string;
  } | null;
}

export default function Card({ data }: CardProps) {
  const dispatch = useDispatch();

  const setaInfo = () => {
    dispatch(saveUrl(null));
    dispatch(saveUrl(data?.url));
    console.log(data?.url);
  };

  return (
    <div className="bg-zinc-100 border-[1px] border-slate-200 dark:border-zinc-600 dark:bg-zinc-700 w-[200px] h-[250px] rounded-md mt-4 mb-4 relative justify-center  sm:flex sm:flex-row sm:w-[250px]">
      <img
        className="hidden dark:flex grayscale opacity-10 absolute p-2"
        src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png"
      />
      <div className="w-[200px] h-[250px] rounded-r-md flex flex-col justify-evenly items-center text-center z-10">
        <div className="w-[80%] h-10 flex flex-col justify-center items-center font-black">
          <span className="text-white font-bold text-sm bg-zinc-800 px-2 py-1 rounded-md bg-opacity-60 text-center tracking-wider">
            {data?.name}
          </span>
        </div>
        <div className="w-full h-32 flex flex-col justify-center items-center">
          <div className="flex flex-col items-center gap-1 tracking-wider">
            <span className="text-zinc-800 font-bold text-xs opacity-70 dark:text-white">
              Dimension:
            </span>
            <div className="flex gap-2 justify-center items-center">
              <p className="text-zinc-800 font-bold text-xs dark:text-white">
                {data?.dimension}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center pt-2 gap-1 tracking-wider">
            <span className="text-zinc-800 font-bold text-xs opacity-70 dark:text-white">
              type:
            </span>
            <p className="text-zinc-800 font-bold text-xs dark:text-white">
              {data?.type}
            </p>
          </div>
          <div className="flex items-center pt-2">
            <button
              onClick={setaInfo}
              className="font-bold tracking-wider bg-green-500 text-white text-sm rounded-sm transition-colors hover:bg-opacity-60 p-2"
            >
              SHOW MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
