"use client";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../GlobalRedux/Feature/character/characterSlice";

const coracaoVazio = "https://cdn-icons-png.flaticon.com/128/2589/2589197.png";

const coracaoCheio = "https://cdn-icons-png.flaticon.com/128/2589/2589175.png";

interface CardProps {
  data: {
    name: string;
    image: string;
    species: string;
    status: string;
    type: string;
    location: {
      name: string;
    };
    origin: {
      name: string;
    };
    gender: string;
  } | null;
}

export default function Card({ data }: CardProps) {
  const [click, setClick] = useState<boolean>(false);

  const dispatch = useDispatch();

  const toggle = (data: CardProps) => {
    if (click === false) {
      dispatch(addToFavorite(data));
    } else {
      dispatch(removeFromFavorite(data));
    }
  };

  return (
    <div className="bg-zinc-700 w-[200px] h-[400px] rounded-md mt-4 mb-4 relative  sm:flex sm:flex-row sm:w-[400px] sm:h-[200px]">
      <img
        className="w-[200px] h-[200px] rounded-t-md sm:rounded-l-md sm:rounded-none"
        src={data?.image}
      />
      <img
        onClick={(): void => {
          setClick(!click);
          toggle(data);
        }}
        className="absolute justify-self-start w-8 h-8 ml-2 mt-2 cursor-pointer hover:animate-pulse"
        src={click ? coracaoCheio : coracaoVazio}
      />
      <div className="w-[200px] h-[200px] rounded-r-md">
        <div className="w-full h-10 flex flex-col justify-end items-center">
          <span className="text-white font-bold text-xs bg-zinc-800 px-2 py-1 rounded-md bg-opacity-50 text-center tracking-wider">
            {data?.name}
          </span>
        </div>
        <div className="w-full h-40 flex flex-col justify-center items-center">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-xs opacity-70">
              Status:
            </span>
            <div className="flex gap-2 justify-center items-center">
              <p className="text-white font-bold text-xs">{data?.status}</p>
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
            <span className="text-white font-bold text-xs opacity-70">
              Specie/Gender:
            </span>
            <p className="text-white font-bold text-xs">
              {data?.species} - {data?.gender}
            </p>
          </div>
          <div className="flex flex-col items-center pt-2">
            <span className="text-white font-bold text-xs opacity-70">
              Last location:
            </span>
            <p className="text-white font-bold text-xs">
              {data?.location?.name}
            </p>
          </div>
          <div className="flex flex-col items-center pt-2">
            <span className="text-white font-bold text-xs opacity-70">
              Origin:
            </span>
            <p className="text-white font-bold text-xs">{data?.origin?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
