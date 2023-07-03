"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Display from "./Display";

export default function Characters() {
  const [pesquisa, setPesquisa] = useState(null);
  const [mostraPesquisa, setMostraPesquisa] = useState<boolean | null>(null);
  const [data, setData] = useState<undefined | null>(undefined);
  const [erro, setErro] = useState(null);

  function getCharacter() {
    setData(null);
    const baseURL = "https://rickandmortyapi.com/api";
    axios.get(`${baseURL}/character/?name=${pesquisa}`).then(
      (response) => {
        console.log(response);
        setData(response.data);
        console.log(data);
        setMostraPesquisa(true);
      },
      (error) => {
        setErro(error.response.data.error);
      }
    );
  }

  const pesquisaHandleChange = (e: any) => {
    setMostraPesquisa(false);
    setPesquisa(e.target.value);
  };

  return (
    <>
      <div className="h-fit w-screen flex justify-center pb-10 pt-16">
        <div className="w-[50%] flex flex-col items-center pb-6 rounded-md mt-8">
          <div className="w-[80%] h-[100px] flex justify-center bg-zinc-800">
            <div className="w-[50%] flex justify-center items-center">
              <h1 className="text-white text-3xl opacity-30 font-black cursor-pointer transition-all hover:opacity-50">
                CHARACTERS
              </h1>
            </div>
            <div className="w-[50%] flex flex-col justify-center items-center gap-2">
              <h2 className="text-xs text-white opacity-70 tracking-wider">
                BUSQUE POR UM PERSONAGEM
              </h2>
              <div
                onChange={pesquisaHandleChange}
                className="w-56 h-6 rounded-md flex"
              >
                <input className="w-48 h-8 rounded-l-md bg-zinc-900 focus:outline-none text-center focus:animate-pulse text-white font-bold text-lg tracking-wider" />
                <div
                  onClick={getCharacter}
                  className="w-8 h-8 bg-zinc-900 rounded-r-md flex justify-center items-center cursor-pointer transition-all hover:opacity-90 hover:bg-green-600"
                >
                  <img
                    className="w-[20px]"
                    src="https://cdn-icons-png.flaticon.com/128/2311/2311526.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[50px] w-full flex">
            <div className="w-[50%] h-full"></div>
            <div className="w-[50%] h-full flex justify-center items-center">
              {mostraPesquisa && (
                <span className="text-white font-medium text-sm opacity-30">{`Buscando por : ${pesquisa}`}</span>
              )}
            </div>
          </div>
          {data !== null && data !== undefined && (
            <Display erro={erro} dataProp={data} />
          )}
          {data === null && (
            <div className="w-full h-full flex justify-center items-center">
              <h1 className="text-3xl text-white font-semibold opacity-60">
                Carregando ...
              </h1>
            </div>
          )}
          {data === undefined && (
            <div className="w-full h-full flex justify-center items-center">
              <h1 className="text-3xl text-white font-semibold opacity-60">
                PESQUISE POR UM PERSONAGEM
              </h1>
            </div>
          )}
        </div>
        <div className="w-2/4 flex justify-center items-end">
          <div className="w-[80%] h-[95%] bg-zinc-800 rounded-lg mt-2">
            <div className="w-full h-20 text-white flex justify-center items-center">
              <div className="text-white flex justify-center items-center bg-zinc-500 bg-opacity-20 rounded-md">
                <h1 className="font-black text-3xl px-2 py-2 opacity-40 rounded-md transition-all cursor-default hover:opacity-30">
                  QUADRO DE FAVORITOS
                </h1>
              </div>
            </div>
            <div className="w-full h-96 flex justify-center items-center">
              <img
                className="opacity-5 w-[400px] h-[400px] grayscale"
                src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-moon-mod-download-35.png"
              />
            </div>
            <div className="w-full h-20 flex justify-center items-center">
              <h2 className="text-white opacity-80 font-bold text-2xl px-2 py-2 rounded-md tracking-wider cursor-default hover:opacity-50">
                {` NENHUM ITEM AINDA :(`}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
