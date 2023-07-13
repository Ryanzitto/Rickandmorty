import { useState, useRef } from "react";
import axios from "axios";
import React from "react";

interface Data {
  image: string;
  name: string;
}

export default function Where() {
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState<Data | null>(null);
  const btnRef = useRef<any>(null);
  const [existTimeOut, setExistTimeOut] = useState(false);
  const toggle = () => {
    setIsClicked(true);
    let randomNumber = Math.random() * 100;
    let numberFormated = Math.round(randomNumber);
    axios
      .get(`https://rickandmortyapi.com/api/location/${numberFormated}`)
      .then(
        (response) => {
          console.log(response);
          setData(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="w-[100%] h-32 border-[1px] border-slate-200 dark:border-none bg-white dark:bg-zinc-900 rounded-lg lg:w-[80%] xl:w-[80%] flex justify-center items-center">
      {isClicked === false && (
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <span className="text-center text-zinc-800 dark:text-white/60 md:text-xl font-bold tracking-wider cursor-default hover:text-opacity-50">
            EM QUAL LUGAR VOCÊ VIVERIA?
          </span>
          <button
            onClick={toggle}
            className="text-white bg-green-600 w-36 h-12 rounded-md tracking-wider font-bold transition-colors hover:bg-opacity-80"
          >
            DESCOBRIR
          </button>
        </div>
      )}

      {isClicked && (
        <div className="w-[100%] h-[100%] flex justify-center px-10">
          <div className="w-full h-full flex flex-col gap-2 justify-center">
            <div className="flex w-full flex flex-col justify-center tracking-wider">
              <span className="text-zinc-800 text-lg dark:text-white/80 font-bold">
                VOCÊ VIVERIA EM..
              </span>
              <span className="text-md text-zinc-800/80 dark:text-white/60 font-bold">
                {data?.name.toLocaleUpperCase()}
              </span>
            </div>
            <div className="flex justify-center items-start flex-col">
              <p className="font-medium text-zinc-800 dark:text-white text-xs">
                UAUUU!!!{" "}
                <strong className="text-opacity-60">{data?.name}</strong> parece
                ser um lugar legal.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
