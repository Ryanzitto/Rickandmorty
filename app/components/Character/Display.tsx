import React, { useEffect, useState } from "react";
import { RootState } from "../../GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  saveData,
  saveInfo,
} from "../../GlobalRedux/Feature/character/characterSlice";
import axios from "axios";
import Card from "./CardCharacter";

export default function Display() {
  const data = useSelector((state: RootState) => state.character.data);
  const info = useSelector((state: RootState) => state.character.info);
  const [prev, setPrev] = useState(info?.prev);
  const [next, setNext] = useState(info?.next);

  const dispatch = useDispatch();

  const nextPage = () => {
    axios.get(`${next}`).then(
      (response) => {
        dispatch(saveData(response.data.results));
        dispatch(saveInfo(response.data.info));
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const prevPage = () => {
    axios.get(`${prev}`).then(
      (response) => {
        dispatch(saveData(response.data.results));
        dispatch(saveInfo(response.data.info));
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    setNext(info?.next);
    setPrev(info?.prev);
  }, [info]);

  return (
    <>
      <div className="mt-4 xl:mt-0 w-[90%] flex flex-col justify-center items-center border-[1px] border-slate-200 bg-white rounded-md px-8 pt-4 pb-8 dark:border-none dark:bg-zinc-900">
        <div className="p-2 w-[100%] flex justify-center items-center gap-4 pb-4">
          {prev === null ? (
            <div className="rounded-full bg-red-400 bg-opacity-50  w-8 h-8 flex justify-center items-center text-xl transition-all cursor-pointer text-white font-black hover:cursor-not-allowed">{`<`}</div>
          ) : null}
          {prev !== null ? (
            <div
              onClick={prevPage}
              className="rounded-full bg-green-500 w-8 h-8 flex justify-center items-center text-xl transition-all cursor-pointer hover:bg-opacity-90 text-white font-black"
            >{`<`}</div>
          ) : null}
          {next === null ? (
            <div className="rounded-full bg-red-400 bg-opacity-50 w-8 h-8 flex justify-center items-center text-xl transition-all cursor-pointer text-white font-black hover:cursor-not-allowed">{`>`}</div>
          ) : null}
          {next !== null ? (
            <div
              onClick={nextPage}
              className="rounded-full bg-green-500 w-8 h-8 flex justify-center items-center text-xl transition-all cursor-pointer hover:bg-opacity-90 text-white font-black"
            >{`>`}</div>
          ) : null}
        </div>
        {data != null && (
          <div className="overflow-y-auto w-[100%] h-[500px] flex flex-wrap justify-center gap-6 items-center">
            {data?.map((item) => {
              return <Card key={Math.random() * 100} data={item} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}
