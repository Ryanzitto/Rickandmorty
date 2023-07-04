"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Display from "./Display";
import { RootState } from "../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  saveData,
  saveInfo,
  saveErro,
} from "../GlobalRedux/Feature/character/characterSlice";

export default function Characters() {
  const [pesquisa, setPesquisa] = useState(null);
  const [mostraPesquisa, setMostraPesquisa] = useState<boolean | null>(null);

  const data = useSelector((state: RootState) => state.character.data);
  const erro = useSelector((state: RootState) => state.character.erro);
  const favorites = useSelector(
    (state: RootState) => state.character.favorites
  );

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  const dispatch = useDispatch();

  function getCharacter() {
    dispatch(saveData(null));
    const baseURL = "https://rickandmortyapi.com/api";
    axios.get(`${baseURL}/character/?name=${pesquisa}`).then(
      (response) => {
        setMostraPesquisa(true);
        dispatch(saveData(response.data.results));
        dispatch(saveInfo(response.data.info));
      },
      (error) => {
        dispatch(saveErro(error.response.data.error));
      }
    );
  }

  const pesquisaHandleChange = (e: any) => {
    setMostraPesquisa(false);
    setPesquisa(e.target.value);
    dispatch(saveErro(null));
  };

  return (
    <>
      <div className="h-[1000px] w-screen flex justify-center pb-10 pt-56">
        <div className="w-[50%] flex flex-col items-center justify-start rounded-md">
          <div className="w-[80%] h-28 flex justify-center bg-zinc-900 opacity-80 rounded-md">
            <div className="w-[50%] flex justify-center items-center">
              <h1 className="text-white text-3xl opacity-50 font-black cursor-pointer transition-colors hover:opacity-70">
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
                <input className="w-48 h-8 rounded-l-md bg-zinc-800 focus:outline-none text-center focus:animate-pulse text-white font-bold text-lg tracking-wider" />
                <div
                  onClick={getCharacter}
                  className="w-8 h-8 bg-zinc-800 rounded-r-md flex justify-center items-center cursor-pointer transition-all hover:opacity-90 hover:bg-green-600"
                >
                  <img
                    className="w-[20px]"
                    src="https://cdn-icons-png.flaticon.com/128/2311/2311526.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex mt-8 justify-center">
            {data !== null && <Display />}
          </div>

          {data === null && erro === null && (
            <div className="w-full h-56 flex justify-center items-center">
              <h1 className="text-xl text-white font-semibold opacity-60">
                PESQUISE POR UM PERSONAGEM
              </h1>
            </div>
          )}
          {data === null && erro != null && (
            <div className="w-full h-full flex justify-center items-center">
              <h1 className="text-3xl text-red-500 font-semibold animate-pulse">
                {erro}
              </h1>
            </div>
          )}
        </div>
        <div className="w-2/4 flex justify-center items-start">
          <div className="w-[80%] max-h-[83%] bg-zinc-900 opacity-80 rounded-lg">
            <div className="w-full h-20 text-white flex justify-center items-center">
              <h1 className="font-black text-3xl px-2 py-2 opacity-40 rounded-md transition-colors cursor-default hover:opacity-30">
                QUADRO DE FAVORITOS
              </h1>
            </div>
            <div className="w-full h-96 flex justify-center items-center">
              {favorites === null && (
                <img
                  className="opacity-5 w-[400px] h-[400px] grayscale"
                  src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-moon-mod-download-35.png"
                />
              )}
              {favorites !== null && (
                <div className=" w-full h-full p-6 overflow-auto flex justify-center">
                  <div className="flex w-[80%] justify-center flex-wrap gap-4">
                    {favorites.map((item) => {
                      return (
                        <div
                          key={item.name}
                          className="w-40 h-40 relative flex justify-center items-end"
                        >
                          <img
                            className="rounded-md absolute"
                            src={item.image}
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
            <div className="w-full h-20 flex justify-center items-center">
              {favorites === null && (
                <h2 className="text-white opacity-40 font-bold text-2xl px-2 py-2 rounded-md tracking-wider cursor-default hover:opacity-30">
                  {` NENHUM ITEM AINDA :(`}
                </h2>
              )}
              {favorites !== null && (
                <h2 className="text-white opacity-40 font-bold text-2xl px-2 py-2 rounded-md tracking-wider cursor-default hover:opacity-30">
                  {` FAVORITOS: ${favorites.length}`}
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
