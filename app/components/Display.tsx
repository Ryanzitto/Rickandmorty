import React, { useEffect } from "react";
import axios from "axios";
import Card from "./CardCharacter";
import { useState } from "react";

interface Props {
  dataProp: {
    info: {
      next: string | null;
      prev: string | null;
    };
    results: Array<{
      id: number;
      name: string;
      image: string;
      species: string;
      status: string;
      type: string;
      location: {
        name: string;
      };
      origin: {
        name: string;
      };
      gender: string;
    }> | null;
  };
  erro: string | null;
}

export default function Display({ dataProp, erro }: Props) {
  const [next, setNext] = useState(dataProp?.info.next);
  const [prev, setPrev] = useState(dataProp?.info.prev);
  const [data, setData] = useState(dataProp?.results);

  const nextPage = () => {
    axios.get(`${next}`).then(
      (response) => {
        console.log("funcionou");
        console.log(response);
        setData(response.data.results);
        setNext(response.data.info.next);
        setPrev(response.data.info.prev);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const prevPage = () => {
    axios.get(`${prev}`).then(
      (response) => {
        console.log("funcionou");
        console.log(response);
        setData(response.data.results);
        setNext(response.data.info.next);
        setPrev(response.data.info.prev);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    console.log(erro);
  }, [erro]);
  return (
    <>
      <div className="w-[80%] flex flex-col justify-center items-center bg-zinc-800  rounded-md px-8 pt-4 pb-8">
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
          <div className="overflow-y-auto bg-zinc-800 w-[100%] h-[350px] max-h-[350px] max-h-fit flex flex-col justify-start items-center">
            {data?.map((item) => {
              return <Card key={item.id} data={item} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}
