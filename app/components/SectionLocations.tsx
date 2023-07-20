"use client";
import {
  saveData,
  saveInfo,
  saveErro,
} from "../GlobalRedux/Feature/location/locationSlice";
import { RootState } from "../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Info from "./Locations/InfoLocations";
import Image from "next/image";
import axios from "axios";
import DisplayLocation from "./Locations/DisplayLocation";
import Spinner from "./spinner";

export default function Characters() {
  const data = useSelector((state: RootState) => state.location.data);
  const erro = useSelector((state: RootState) => state.location.erro);
  const url = useSelector((state: RootState) => state.location.url);

  const [dataUrl, setDataUrl] = useState(null);
  const [pesquisa, setPesquisa] = useState("");
  const [mostraPesquisa, setMostraPesquisa] = useState<boolean | null>(null);
  const dispatch = useDispatch();

  const getLocations = () => {
    dispatch(saveData(null));
    const baseURL = "https://rickandmortyapi.com/api";
    axios.get(`${baseURL}/location/?name=${pesquisa}`).then(
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

  useEffect(() => {
    getLocations();
  }, []);

  useEffect(() => {
    getLocations();
  }, [pesquisa]);

  useEffect(() => {
    axios.get(`${url}`).then(
      (response) => {
        setDataUrl(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [url]);

  return (
    <>
      <div className="w-screen flex-col justify-center pt-[100px] lg:pt-56 xl:flex xl:flex-row ">
        <div className="w-full flex flex-col items-center justify-start">
          <div className="w-[90%] h-[130px] flex-col justify-center bg-white border-[1px] border-slate-200 dark:border-none dark:bg-zinc-900 rounded-md sm:flex sm:flex-row items-center">
            <div className="w-[100%] flex justify-center items-center">
              <h1 className="hidden text-zinc-800 text-opacity-80 dark:text-white text-md dark:opacity-50 font-black cursor-pointer transition-colors hover:text-opacity-70  dark:hover:text-opacity-70 pb-4 sm:text-2xl sm:pb-0 md:text-3xl sm:flex">
                LOCATIONS
              </h1>
            </div>
            <div className="w-[100%] mt-6 flex flex-col justify-end items-center gap-2 sm:mt-0">
              <h2 className="text-[10px] text-zinc-800 dark:text-white opacity-70 tracking-wider font-bold dark:font-medium">
                SEARCH FOR LOCATIONS NAMES
              </h2>
              <div
                onChange={pesquisaHandleChange}
                className="w-56 h-6 rounded-md flex"
              >
                <input className="w-48 h-8 rounded-l-md bg-zinc-200 dark:bg-zinc-800 focus:outline-none text-zinc-800 text-center focus:animate-pulse dark:text-white font-bold text-lg tracking-wider" />
                <div
                  onClick={getLocations}
                  className="w-8 h-8 bg-zinc-200 dark:bg-zinc-800 rounded-r-md flex justify-center items-center cursor-pointer transition-all dark:hover:opacity-90 dark:hover:bg-green-600 hover:opacity-90 hover:bg-green-600"
                >
                  <Image
                    className="w-[20px]"
                    src="https://cdn-icons-png.flaticon.com/128/2311/2311526.png"
                    width={20}
                    height={20}
                    alt="imagem de lupa"
                  />
                </div>
              </div>
              {mostraPesquisa === true && pesquisa !== "" && (
                <span className="h-0 text-zinc-800/40 dark:text-white/40 text-[12px] mt-1 font-bold tracking-wider">{`Showing results for: ${pesquisa}`}</span>
              )}
            </div>
          </div>

          <div className="w-full flex mt-8 justify-center">
            {data !== null && <DisplayLocation />}
          </div>

          {data === null && erro === null && (
            <div className="w-full h-full flex justify-center items-center">
              <Spinner />
            </div>
          )}
          {data === null && erro != null && (
            <div className="w-full h-[300px] flex justify-center items-center">
              <h1 className="text-3xl text-red-500 font-semibold animate-pulse">
                {erro}
              </h1>
            </div>
          )}
        </div>
        <div className="w-full h-[800px] flex justify-center items-start pt-8 xl:pt-0">
          <div className="w-full h-full flex flex-col justify-center">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <Info data={dataUrl} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
