"use client";
import {
  saveData,
  saveInfo,
  saveErro,
} from "../GlobalRedux/Feature/character/characterSlice";
import { ChangeEvent, useEffect, useState } from "react";
import { RootState } from "../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";

import Image from "next/image";
import axios from "axios";
import Display from "./Character/Display";
import Filters from "./Character/Filters";
import Who from "./Character/WhoCharacter";
import Spinner from "./spinner";
import FavBoard from "./Character/FavBoard";

export default function Characters() {
  const [pesquisa, setPesquisa] = useState("");
  const [mostraPesquisa, setMostraPesquisa] = useState<boolean | null>(null);
  const [specie, setSpecie] = useState("Human");
  const [status, setStatus] = useState("alive");
  const [gender, setGender] = useState("male");

  const data = useSelector((state: RootState) => state.character.data);
  const erro = useSelector((state: RootState) => state.character.erro);

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

  const pesquisaHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
    getCharacter();
  }, [pesquisa]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [specie, status, gender]);

  return (
    <>
      <div className="w-screen flex-col justify-center pb-10 pt-56 xl:flex xl:flex-row">
        <div className="w-full flex flex-col items-center justify-between xl:w-[50%]">
          <div className="w-[90%] h-28 flex-col justify-center border-[1px] border-slate-200 dark:border-none bg-white dark:bg-zinc-900 rounded-md sm:flex sm:flex-row items-center">
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
          {data !== null && (
            <div className="w-full h-full flex justify-center items-end">
              <Display />
            </div>
          )}

          {data === null && erro === null && (
            <div className="w-full h-full flex justify-center items-center">
              <Spinner />
            </div>
          )}
          {data === null && erro != null && (
            <div className="w-full h-[300px] xl:h-full flex justify-center items-center">
              <h1 className="text-3xl text-red-500 font-semibold animate-pulse">
                {erro}
              </h1>
            </div>
          )}
        </div>
        <div className=" w-full flex flex-col justify-between gap-6 items-center pt-6 xl:pt-0 xl:w-[50%] ">
          <FavBoard />
          <Who />
        </div>
      </div>
    </>
  );
}
