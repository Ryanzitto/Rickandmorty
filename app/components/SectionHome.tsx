"use client";
import ThemeSwithcer from "../ThemeSwitcher";
import Image from "next/image";

export default function SectionHome() {
  return (
    <div className="overflow-x-hidden bg-no-repeat flex h-[600px] 2xl:h-[1000px]">
      <div className="overflow-hidden w-screen h-[600px]  2xl:h-[1000px] teste69 flex">
        <div className="w-2/4 font-black flex justify-center items-start text-zinc-800 dark:text-white flex-col gap-4">
          <div className="w-full pl-4 sm:pl-16 lg:pl-32 2xl:pl-56 pt-28 cursor-default">
            <div className="w-full flex justify-start items-center pl-2">
              <ThemeSwithcer />
            </div>
            <h1 className="w-fit text-8xl sm:text-9xl lg:text-[150px] 2xl:text-[200px] tracking-wide duration-[2000ms] transition-all hover:-rotate-2">
              RICK
            </h1>
            <h1 className="w-fit text-8xl sm:text-9xl lg:text-[150px] 2xl:text-[200px] duration-[2000ms] w-86 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-green-700 to-green-500 tracking-wide hover:rotate-2">
              AND
            </h1>
            <h1 className="w-fit text-8xl sm:text-9xl lg:text-[150px] 2xl:text-[200px] tracking-wide duration-[2000ms] hover:-rotate-2">
              MORTY
            </h1>
          </div>
        </div>
        <div className="w-2/4 h-full font-black flex text-white justify-center items-center 2xl:pr-16">
          <Image
            className="hidden w-[500px] h-[500px] animate-pulse mt-32 lg:flex 2xl:w-[700px] 2xl:h-[700px]"
            src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-moon-mod-download-35.png"
            width={500}
            height={500}
            alt="imagem dos personagens rick e morty saindo de um portal"
          />
        </div>
      </div>
    </div>
  );
}
