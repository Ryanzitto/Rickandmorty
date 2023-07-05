"use client";

import { useState } from "react";

export default function SectionHome() {
  const [nome, setNome] = useState(null);
  const [existeNome, setExisteNome] = useState(false);
  const registraNome = () => {
    if (nome !== "") {
      setExisteNome(true);
    }
  };

  return (
    <div className="overflow-x-hidden my-custom-bg-class bg-no-repeat flex h-screen">
      <div className="overflow-hidden w-screen h-screen teste69 flex">
        <div className="w-2/4 font-black flex justify-center items-start text-white flex-col gap-4">
          <div className="pl-4 sm:pl-16 lg:pl-32 2xl:pl-32 pt-28 cursor-default ">
            <h1 className="w-fit text-8xl sm:text-9xl lg:text-[150px] tracking-wide duration-[2000ms] transition-all hover:-rotate-2">
              RICK
            </h1>
            <h1 className="w-fit text-8xl sm:text-9xl lg:text-[150px] duration-[2000ms] w-86 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-green-700 to-green-500 tracking-wide hover:rotate-2">
              AND
            </h1>
            <h1 className="w-fit text-8xl sm:text-9xl lg:text-[150px] tracking-wide duration-[2000ms] hover:-rotate-2">
              MORTY
            </h1>
          </div>
        </div>
        <div className="w-2/4 h-full font-black flex text-white justify-center items-center">
          {/* <Notificacao /> */}
          {/* <div className="w-full h-[50%] flex items-center justify-center pt-20">
              <h1 className="text-white tracking-wide hover:opacity-70 text-3xl">
                {`Olá,  ${nome}`}
              </h1>
            </div> */}
          {/* <div className="w-full h-[50%]"></div> */}
          <img
            className="hidden w-[500px] h-[500px] animate-pulse mt-32 lg:flex"
            src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-moon-mod-download-35.png"
          />
        </div>
      </div>
    </div>
  );
}
