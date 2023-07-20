import { useState, useRef } from "react";
import axios from "axios";
import Image from "next/image";

interface Data {
  image: string;
  name: string;
}

export default function Who() {
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState<Data | null>(null);
  const btnRef = useRef<any>(null);
  const [existTimeOut, setExistTimeOut] = useState(false);

  const toggle = () => {
    setIsClicked(true);
    let randomNumber = Math.random() * 100;
    let numberFormated = Math.round(randomNumber);
    axios
      .get(`https://rickandmortyapi.com/api/character/${numberFormated}`)
      .then(
        (response) => {
          setData(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const MoveButton = () => {
    let alturaTela = innerHeight - 800;
    let largura = innerWidth - 800;
    btnRef.current.style.top = Math.random() * alturaTela + "px";
    btnRef.current.style.right = Math.random() * largura + "px";

    if (existTimeOut === false) {
      setExistTimeOut(true);
      setTimeout(() => {
        resetaButton();
      }, 20000);
    } else {
      return;
    }
  };

  const resetaButton = () => {
    setExistTimeOut(false);
    btnRef.current.style.top = 0;
    btnRef.current.style.right = 0;
  };

  return (
    <div className="w-[90%] h-56 border-[1px] border-slate-200 dark:border-none bg-white dark:bg-zinc-900 rounded-lg flex justify-center items-center p-4">
      {isClicked === false && (
        <div className="w-full px-6 sm:px-12 md:px-20 lg:px-8 xl:px-16 flex flex-col justify-center items-center gap-6">
          <span className="text-center text-zinc-800 dark:text-white/60 text-xl font-bold tracking-wider cursor-default hover:text-opacity-50">
            WHICH CHARACTER WOULD YOU BE?
          </span>
          <button
            onClick={toggle}
            className="text-white bg-green-600 w-64 h-16 rounded-md tracking-wider font-bold transition-colors hover:bg-opacity-80"
          >
            DISCOVER
          </button>
        </div>
      )}

      {isClicked && (
        <div className="w-fit h-full flex justify-center px-6 gap-4 bg-zinc-200 border border-slate-200 dark:bg-zinc-950/20 dark:border dark:border-zinc-800 rounded-md">
          <div className="flex flex-col justify-center items-center mt-2 gap-4">
            {data !== null && (
              <Image
                className="rounded-md"
                src={data?.image}
                width={100}
                height={100}
                alt="imagem de personagem aleatório da série rick and morty"
              />
            )}
            {data === null && <h1>LOADING...</h1>}
            <div className=" w-full sm:w-[90%] h-8 flex items-center justify-center relative">
              <button
                ref={btnRef}
                onMouseOver={MoveButton}
                className="absolute bg-green-600 text-white px-4 py-2 rounded-md text-sm font-bold transition-all"
              >
                REPLACE
              </button>
            </div>
          </div>
          <div className="w-[300px] h-full flex flex-col gap-4 pl-4">
            <div className="flex w-full flex flex-col justify-center tracking-wider mt-4">
              <span className="text-zinc-800 dark: text-xl dark:text-white font-bold">
                YOU WOULD BE...
              </span>
              <span className="text-lg text-zinc-800/80 dark:text-white/80 font-bold">
                {data?.name.toLocaleUpperCase()}
              </span>
            </div>
            <div className="items-center flex flex-col overflow-auto">
              <p className="font-medium text-zinc-800 dark:text-white text-sm">
                WOW!!! you really look like {""}
                <strong className="text-opacity-60">{data?.name}</strong>. I
                think... you can switch characters by clicking on the green
                button.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
