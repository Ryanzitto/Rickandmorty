"use client";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import Display from "./Character/Display";
import { RootState } from "../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  saveData,
  saveInfo,
  saveErro,
} from "../GlobalRedux/Feature/character/characterSlice";
import Filters from "./Character/Filters";
import Who from "./Character/WhoCharacter";
export default function Characters() {
  const [pesquisa, setPesquisa] = useState("");
  const [mostraPesquisa, setMostraPesquisa] = useState<boolean | null>(null);
  const [specie, setSpecie] = useState("Human");
  const [status, setStatus] = useState("alive");
  const [gender, setGender] = useState("male");

  const data = useSelector((state: RootState) => state.character.data);
  const erro = useSelector((state: RootState) => state.character.erro);
  const favorites = useSelector(
    (state: RootState) => state.character.favorites
  );

  const dispatch = useDispatch();

  const getCharacter = () => {
    dispatch(saveData(null));
    const baseURL = "https://rickandmortyapi.com/api";
    axios
      .get(
        `${baseURL}/character/?name=${pesquisa}&species=${specie}&status=${status}&gender=${gender}`
      )
      .then(
        (response) => {
          setMostraPesquisa(true);
          dispatch(saveData(response.data.results));
          dispatch(saveInfo(response.data.info));
        },
        (error) => {
          dispatch(saveErro(error.response.data.error));
        }
      );
  };

  const pesquisaHandleChange = (e: any) => {
    setMostraPesquisa(false);
    setPesquisa(e.target.value);
    dispatch(saveErro(null));
  };

  const setaEspecie = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== "all") {
      setSpecie(e.target.value);
    } else {
      setSpecie("");
    }
  };

  const setaStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== "all") {
      setStatus(e.target.value);
      getCharacter();
    } else {
      setStatus("");
      getCharacter();
    }
  };

  const setaGender = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== "all") {
      setGender(e.target.value);
      getCharacter();
    } else {
      setGender("");
      getCharacter();
    }
  };

  useEffect(() => {
    dispatch(saveData(null));
    const baseURL = "https://rickandmortyapi.com/api";
    axios
      .get(
        `${baseURL}/character/?name=${pesquisa}&species=${specie}&status=${status}&gender=${gender}`
      )
      .then(
        (response) => {
          setMostraPesquisa(true);
          dispatch(saveData(response.data.results));
          dispatch(saveInfo(response.data.info));
        },
        (error) => {
          dispatch(saveErro(error.response.data.error));
        }
      );
  }, [specie, status, gender]);
  return (
    <>
      <div className="w-screen flex-col justify-center pb-10 pt-56 lg:flex lg:flex-row">
        <div className="w-full flex flex-col items-center justify-start rounded-md 2xl:max-w-[800px]">
          <div className="w-[80%] h-28 flex-col justify-center border-[1px] border-slate-200 dark:border-none bg-white dark:bg-zinc-900 rounded-md sm:flex sm:flex-row items-center lg:w-[90%] xl:w-[80%]">
            <div className="w-[100%] flex justify-center items-center">
              <h1 className="hidden text-zinc-800 text-opacity-80 dark:text-white text-md dark:opacity-50 font-black cursor-pointer transition-colors hover:text-opacity-70  dark:hover:text-opacity-70 pb-4 sm:text-2xl sm:pb-0 md:text-3xl sm:flex">
                CHARACTERS
              </h1>
            </div>
            <div className="w-[100%] mt-6 flex flex-col justify-end items-center gap-2 sm:mt-0">
              <h2 className="text-[10px] text-zinc-800 dark:text-white text-opacity-70 tracking-wider font-bold dark:font-medium">
                SEARCH FOR CHARACTERS NAMES
              </h2>
              <div
                onChange={pesquisaHandleChange}
                className="w-56 h-6 rounded-md flex"
              >
                <input className="w-48 h-8 rounded-l-md bg-zinc-200 dark:bg-zinc-800 focus:outline-none text-zinc-800 text-center focus:animate-pulse dark:text-white font-bold text-lg tracking-wider" />
                <div
                  onClick={getCharacter}
                  className="w-8 h-8 bg-zinc-200 dark:bg-zinc-800 rounded-r-md flex justify-center items-center cursor-pointer transition-all dark:hover:opacity-90 dark:hover:bg-green-600 hover:opacity-90 hover:bg-green-600"
                >
                  <Image
                    className="w-[20px]"
                    src="https://cdn-icons-png.flaticon.com/128/2311/2311526.png"
                    width={32}
                    height={32}
                    alt="icone de lupa"
                  />
                </div>
              </div>
              {mostraPesquisa === true && pesquisa !== "" && (
                <span className="h-0 text-zinc-800/40 dark:text-white/40 text-[12px] mt-1 font-bold tracking-wider">{`Showing results for: ${pesquisa}`}</span>
              )}
            </div>
          </div>

          <div className="flex justify-center w-full">
            <Filters
              func1={setaEspecie}
              func2={setaStatus}
              func3={setaGender}
            />
          </div>

          <div className="w-full flex mt-8 justify-center">
            {data !== null && <Display />}
          </div>

          {data === null && erro === null && (
            <div className="w-full h-56 flex justify-center items-center">
              <h1 className="text-xl text-zinc-800/80 dark:text-white font-semibold opacity-60">
                SEARCH FOR CHARACTERS
              </h1>
            </div>
          )}
          {data === null && erro != null && (
            <div className="w-full h-full flex justify-center items-start">
              <h1 className="text-3xl text-red-500 font-semibold animate-pulse">
                {erro}
              </h1>
            </div>
          )}
        </div>
        <div className="w-full flex flex-col justify-between gap-6 items-center pt-6 lg:pt-0 2xl:max-w-[800px]">
          <div className="w-[80%] pb-10 border-[1px] border-slate-200 dark:border-none  bg-white dark:bg-zinc-900 rounded-lg lg:w-[90%] xl:w-[80%]">
            <div className="w-full h-20 text-zinc-800 dark:text-white flex justify-center items-center">
              <h1 className="font-black text-lg px-2 py-2 opacity-40 rounded-md transition-colors cursor-default hover:opacity-30 sm:text-2xl md:text-3xl">
                FAVORITES BOARD
              </h1>
            </div>
            <div className="w-full h-96 flex justify-center items-center">
              {favorites !== null && (
                <div className=" w-full h-full p-6 flex justify-center">
                  <div className="flex w-[80%] justify-center flex-wrap gap-4 overflow-auto">
                    {favorites.map((item) => {
                      return (
                        <div
                          key={item.name}
                          className="w-40 h-40 relative flex justify-center items-end hover:animate-pulse"
                        >
                          <Image
                            className="rounded-md absolute dark:border-none border-[1px] border-zinc-500"
                            src={item.image}
                            width={160}
                            height={160}
                            alt="imagem de seus personagens favoritos"
                          />
                          <span className="text-xs absolute text-white bg-zinc-800 bg-opacity-80 rounded-md mb-1 p-1 text-center">
                            {item.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
          <Who />
        </div>
      </div>
    </>
  );
}
