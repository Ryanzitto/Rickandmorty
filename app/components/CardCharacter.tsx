"use client";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite,
} from "../GlobalRedux/Feature/character/characterSlice";

const coracaoVazio = "https://cdn-icons-png.flaticon.com/128/2589/2589197.png";

const coracaoCheio = "https://cdn-icons-png.flaticon.com/128/2589/2589175.png";

export default function Card({ data }: any) {
  // const [click, setClick] = useState(false);

  // const dispatch = useDispatch();

  // const toggle = (data: any) => {
  //   if (click === false) {
  //     dispatch(addToFavorite(data));
  //   } else {
  //     dispatch(removeFromFavorite(data));
  //   }
  // };

  return (
    <div className="border-[1px] border-slate-200 bg-zinc-100 w-[200px] h-[400px] rounded-md mt-4 mb-4 relative  sm:flex sm:flex-row sm:w-[400px] sm:h-[200px] items-center dark:border-zinc-600 dark:bg-zinc-700">
      <img
        className="w-[200px] h-[200px] rounded-t-md sm:rounded-l-md sm:rounded-none"
        src={data?.image}
      />
      <img
        // onClick={() => {
        //   setClick(!click);
        //   toggle(data);
        // }}
        className="bg-white/80 rounded-full p-2 absolute w-10 h-10 ml-2 mb-36 cursor-pointer hover:animate-pulse"
        // src={click ? coracaoCheio : coracaoVazio}
      />
      <div className="w-[200px] h-[200px] rounded-r-md text-center">
        <img
          className=" hidden w-[200px] h-[200px] grayscale opacity-10 absolute p-2 dark:flex"
          src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png"
        />
        <div className="w-full h-10 flex flex-col justify-end items-center">
          <span className="text-white font-bold text-xs bg-zinc-800 px-2 py-1 rounded-md bg-opacity-50 text-center tracking-wider">
            {data?.name}
          </span>
        </div>
        <div className="w-full h-40 flex flex-col justify-center items-center">
          <div className="flex items-center gap-2">
            <span className="text-zinc-800 font-bold text-xs text-opacity-70 dark:text-white">
              Status:
            </span>
            <div className="flex gap-2 justify-center items-center">
              <p className="text-zinc-800 font-bold text-xs dark:text-white">
                {data?.status}
              </p>
              {data?.status === "Alive" && (
                <div className="rounded-full bg-green-500 w-2 h-2"></div>
              )}
              {data?.status === "Dead" && (
                <div className="rounded-full bg-red-500 w-2 h-2"></div>
              )}
              {data?.status === "unknown" && (
                <div className="rounded-full bg-amber-500 w-2 h-2"></div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center pt-2">
            <span className="text-zinc-800 font-bold text-xs text-opacity-70 dark:text-white">
              Specie/Gender:
            </span>
            <p className="text-zinc-800 font-bold text-xs dark:text-white">
              {data?.species} - {data?.gender}
            </p>
          </div>
          <div className="flex flex-col items-center pt-2">
            <span className="text-zinc-800 font-bold text-xs text-opacity-70 dark:text-white">
              Last location:
            </span>
            <p className="text-zinc-800 font-bold text-xs dark:text-white">
              {data?.location?.name}
            </p>
          </div>
          <div className="flex flex-col items-center pt-2">
            <span className="text-zinc-800 font-bold text-xs text-opacity-70 dark:text-white">
              Origin:
            </span>
            <p className="text-zinc-800 font-bold text-xs dark:text-white ">
              {data?.origin?.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
