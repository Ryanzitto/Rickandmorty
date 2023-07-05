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
    <div className="bg-zinc-700 w-[200px] h-[200px] rounded-md mt-4 mb-4 relative justify-center  sm:flex sm:flex-row sm:w-[250px] sm:h-[250px]">
      <div className="w-[200px] h-[250px] rounded-r-md flex flex-col justify-evenly items-center">
        <div className="w-[80%] h-10 flex flex-col justify-center items-center">
          <span className="text-white font-bold text-sm bg-zinc-800 px-2 py-1 rounded-md bg-opacity-50 text-center tracking-wider">
            {data?.name}
          </span>
        </div>
        <div className="w-full h-32 flex flex-col justify-center items-center">
          <div className="flex flex-col items-center gap-1">
            <span className="text-white font-bold text-sm opacity-70">
              Dimension:
            </span>
            <div className="flex gap-2 justify-center items-center">
              <p className="text-white font-bold text-sm">{data?.dimension}</p>
            </div>
          </div>
          <div className="flex flex-col items-center pt-2 gap-1">
            <span className="text-white font-bold text-sm opacity-70">
              type:
            </span>
            <p className="text-white font-bold text-sm">{data?.type}</p>
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
