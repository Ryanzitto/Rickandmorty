"use client";
import axios from "axios";
import { RootState } from "../app/GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import DisplayEpisode from "./DisplayEpisode";
import {
  saveData,
  saveInfo,
  saveErro,
} from "../app/GlobalRedux/Feature/episode/episodeSlice";

export default function Episodes() {
  const data = useSelector((state: RootState) => state.episode.data);

  const [dataUrl, setDataUrl] = useState(null);
  const [pesquisa, setPesquisa] = useState("");
  const [mostraPesquisa, setMostraPesquisa] = useState<boolean | null>(null);
  const dispatch = useDispatch();

  const getEpisodes = () => {
    dispatch(saveData(null));
    const baseURL = "https://rickandmortyapi.com/api";
    axios.get(`${baseURL}/episode/?name=${pesquisa}`).then(
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

  return (
    <>
      <div className="h-[1200px] w-screen flex-col justify-center pb-10 pt-[100px] lg:pt-56">
        <div className="w-full flex flex-col items-center justify-start rounded-md 2xl:max-w-[800px]">
          <div className="w-[80%] h-28 flex-col justify-center bg-white border-[1px] border-slate-200 dark:border-none dark:bg-zinc-900 rounded-md sm:flex sm:flex-row items-center">
            <div className="w-[100%] flex justify-center items-center">
              <h1 className="hidden text-zinc-800 text-opacity-80 dark:text-white text-md dark:opacity-50 font-black cursor-pointer transition-colors hover:text-opacity-70  dark:hover:text-opacity-70 pb-4 sm:text-2xl sm:pb-0 md:text-3xl sm:flex">
                EPISODES
              </h1>
            </div>
            <div className="w-[100%] mt-6 flex flex-col justify-end items-center gap-2 sm:mt-0">
              <h2 className="text-[10px] text-zinc-800 dark:text-white opacity-70 tracking-wider font-bold dark:font-medium">
                SEARCH FOR EPISODES TITLES
              </h2>
              <div
                onChange={pesquisaHandleChange}
                className="w-56 h-6 rounded-md flex"
              >
                <input className="w-48 h-8 rounded-l-md bg-zinc-200 dark:bg-zinc-800 focus:outline-none text-zinc-800 text-center focus:animate-pulse dark:text-white font-bold text-lg tracking-wider" />
                <div
                  onClick={getEpisodes}
                  className="w-8 h-8 bg-zinc-200 dark:bg-zinc-800 rounded-r-md flex justify-center items-center cursor-pointer transition-all dark:hover:opacity-90 dark:hover:bg-green-600 hover:opacity-90 hover:bg-green-600"
                >
                  <img
                    className="w-[20px]"
                    src="https://cdn-icons-png.flaticon.com/128/2311/2311526.png"
                  />
                </div>
              </div>
              {mostraPesquisa === true && pesquisa !== "" && (
                <span className="h-0 text-zinc-800/40 dark:text-white/40 text-[12px] mt-1 font-bold tracking-wider">{`Showing results for: ${pesquisa}`}</span>
              )}
            </div>
          </div>
          <div className=" w-[100%] h-[600px] flex items-center justify-center mt-8">
            {data !== null && <DisplayEpisode />}
          </div>
        </div>
        <div className="w-full h-32 flex justify-end items-center pr-10">
          <img
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            src="https://cdn-icons-png.flaticon.com/128/4315/4315710.png"
            className="w-16 h-16 animate-bounce cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}
