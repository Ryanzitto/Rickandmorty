import { useState, useRef } from "react";
import axios from "axios";

interface Data {
  image: string;
  name: string;
}

export default function Where() {
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState<Data | null>(null);
  const btnRef = useRef<any>(null);

  const toggle = () => {
    setIsClicked(true);
    let randomNumber = Math.random() * 100;
    let numberFormated = Math.round(randomNumber);
    axios
      .get(`https://rickandmortyapi.com/api/location/${numberFormated}`)
      .then(
        (response) => {
          setData(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="w-[90%] h-40 border-[1px] border-slate-200 dark:border-none bg-white dark:bg-zinc-900 rounded-lg flex justify-center items-center mt-1">
      {isClicked === false && (
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <span className="text-center text-zinc-800 dark:text-white/60 md:text-xl font-bold tracking-wider cursor-default hover:text-opacity-50">
            WHERE WOULD YOU LIVE?
          </span>
          <button
            onClick={toggle}
            className="text-white bg-green-600 w-36 h-12 rounded-md tracking-wider font-bold transition-colors hover:bg-opacity-80"
          >
            DISCOVER
          </button>
        </div>
      )}

      {isClicked && (
        <div className="w-fit h-[90%] flex justify-center px-6 bg-zinc-100 border border-slate-200 dark:bg-zinc-950/20 dark:border dark:border-zinc-800 rounded-md">
          <div className="w-[300px] h-full flex flex-col pl-4">
            <div className="flex w-full flex flex-col justify-center tracking-wider mt-2">
              <span className="text-zinc-800 dark: text-sm dark:text-white font-bold">
                WOULD YOU LIVE IN...
              </span>
              <span className="text-sm text-zinc-800/80 dark:text-white/80 font-bold">
                {data?.name.toLocaleUpperCase()}
              </span>
            </div>
            <div className="items-center flex flex-col mt-2">
              <p className="font-medium text-zinc-800 dark:text-white text-sm">
                WOW!!! <strong className="text-opacity-60">{data?.name}</strong>
                . looks like a nice place...
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
