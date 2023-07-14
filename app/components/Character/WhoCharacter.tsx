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
          console.log(response);
          setData(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const MoveButton = () => {
    let alturaTela = innerHeight - 400;
    let largura = innerWidth - 300;
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
    <div className="w-[80%] h-56 border-[1px] border-slate-200 dark:border-none bg-white dark:bg-zinc-900 rounded-lg lg:w-[80%] xl:w-[80%] flex justify-center items-center">
      {isClicked === false && (
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <span className="text-center text-zinc-800 dark:text-white/60 text-xl font-bold tracking-wider cursor-default hover:text-opacity-50">
            QUAL PERSONAGEM VOCÊ SERIA?
          </span>
          <button
            onClick={toggle}
            className="text-white bg-green-600 w-64 h-16 rounded-md tracking-wider font-bold transition-colors hover:bg-opacity-80"
          >
            DESCOBRIR
          </button>
        </div>
      )}

      {isClicked && (
        <div className="w-fit h-[80] flex md-pr-24 lg-pr-0 justify-end sm:gap-4 md:gap-20 lg:gap-0 xl:gap-6 2xl:gap-12 gap-4 relative">
          <div className="hidden sm:flex lg:hidden xl:flex w-44 h-44 flex justify-center">
            {data !== null && (
              <Image
                className="rounded-md"
                src={data?.image}
                width={176}
                height={176}
                alt="imagem de personagem aleatório da série rick and morty"
              />
            )}
            {data === null && <h1>LOADING...</h1>}
          </div>
          <div className="w-[300px] h-full flex flex-col gap-4">
            <div className="flex w-full flex flex-col justify-center tracking-wider mt-4">
              <span className="text-zinc-800 dark: text-xl dark:text-white font-bold">
                VOCÊ SERIA...
              </span>
              <span className="text-lg text-zinc-800/80 dark:text-white/80 font-bold">
                {data?.name.toLocaleUpperCase()}
              </span>
            </div>
            <div className="flexflex items-center flex flex-col">
              <p className="font-medium text-zinc-800 dark:text-white text-sm">
                UAUUU!!! você realmente se parece com {""}
                <strong className="text-opacity-60">{data?.name}</strong>. eu
                acho... você pode trocar de personagem clicando no botão verde.
              </p>
            </div>
          </div>
          <button
            ref={btnRef}
            onMouseOver={MoveButton}
            className="bg-green-600 text-white absolute px-4 py-2 rounded-md text-sm font-bold transition-all"
          >
            TROCAR
          </button>
        </div>
      )}
    </div>
  );
}
