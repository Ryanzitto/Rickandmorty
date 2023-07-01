"use client";

import { useState } from "react";
import axios from "axios";

interface Character {
  name: string;
  image: string;
  // outros campos necessários
}
export default function SectionHome() {
  const [data, setData] = useState<Character | null>(null);
  const [tentantivas, setTentativas] = useState(3);

  const getRandomCharacter = () => {
    const randomNumber = Math.random() * 200;
    const randomFormatado = Math.round(randomNumber);
    const baseURL = "https://rickandmortyapi.com/api";
    axios.get(`${baseURL}/character/${randomFormatado}`).then(
      (response) => {
        console.log(response);
        setData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const tryAgain = () => {
    if (tentantivas >= 1) {
      setTentativas(tentantivas - 1);
      const randomNumber = Math.random() * 100;
      const randomFormatado = Math.round(randomNumber);
      const baseURL = "https://rickandmortyapi.com/api";
      axios.get(`${baseURL}/character/${randomFormatado}`).then(
        (response) => {
          console.log(response);
          setData(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      return;
    }
  };

  return (
    <div className="overflow-x-hidden my-custom-bg-class bg-no-repeat flex h-screen">
      <div className="overflow-hidden w-screen h-screen teste69 flex">
        <div className="w-2/4 font-black flex justify-center items-start text-white flex-col gap-4">
          <div className="pl-16 lg:pl-32 pt-28 cursor-default ">
            <h1 className="w-fit text-7xl sm:text-8xl lg:text-9xl tracking-wide transition-all hover:-rotate-2">
              RICK
            </h1>
            <h1 className="w-fit text-7xl sm:text-8xl lg:text-9xl w-86 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-green-700 to-green-500 tracking-wide hover:rotate-2">
              AND
            </h1>
            <h1 className="w-fit text-7xl sm:text-8xl lg:text-9xl tracking-wide hover:-rotate-2">
              MORTY
            </h1>
          </div>
        </div>
        <div className="w-2/4 h-full font-black flex-col text-white">
          <div className="w-full h-[50%] flex items-center justify-center pt-20">
            <div className="w-80 h-40 bg-zinc-800 bg-opacity-50 rounded-md flex flex-col justify-start items-center gap-4">
              <div className="h-[40px] w-full flex justify-between items-center pr-2 bg-zinc-800 rounded-tr-md rounded-tl-md">
                <span className="text-gray-700 font-semibold ml-6">
                  NOTIFICAÇÃO
                </span>
                <button className="h-6 p-2 bg-black bg-opacity-30 flex justify-center items-center rounded-md text-md transition-all hover:bg-red-400">{`X`}</button>
              </div>
              <p className="text-sm w-[80%] tracking-wider">
                Que tal nos dizer seu nome para uma experiência mais divertida?
              </p>
              <div className="gap-2 flex">
                <input className="h-6 w-48 bg-zinc-800 border border-gray-600 rounded-md focus:outline-none text-center focus:animate-pulse" />
                <button className="h-6 p-2 bg-green-600 flex justify-center items-center rounded-md text-lg transition-all hover:bg-green-400">{`>`}</button>
              </div>
            </div>
          </div>
          <div className="w-full h-[50%]"></div>
        </div>
      </div>
    </div>
  );
}
