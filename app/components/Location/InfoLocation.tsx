import { useState } from "react";
import Residents from "./Residents";

interface Prop {
  data: {
    dimension: string | null;
    name: string | null;
    residents: Array<string> | null;
    type: string;
  } | null;
}

export default function Info({ data }: Prop) {
  console.log(data);
  return (
    <div className="w-full flex flex-col justify-center items-center gap-6">
      <div className="w-[100%] lg:w-[80%] bg-white border-[1px] border-slate-200 dark:border-none dark:bg-zinc-900 p-6 rounded-md">
        <div className="flex justify-center items-center">
          <h1 className="text-zinc-800 dark:bg-zinc-800/40 dark:text-white/80 text-2xl px-2 py-1 rounded-md font-black tracking-widest cursor-default">
            {data?.name}
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center mt-2">
          <span className="text-zinc-800 font-black text-lg text-opacity-70 dark:text-white/50 tracking-wider">
            dimension:
          </span>
          <span className="text-zinc-800 font-black text-lg dark:text-white tracking-wider">
            {data?.dimension}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center mt-2">
          <span className="text-zinc-800 font-black text-lg text-opacity-70 dark:text-white/50 tracking-wider">
            type:
          </span>
          <span className="text-zinc-800 font-black text-lg dark:text-white tracking-wider">
            {data?.type}
          </span>
        </div>
      </div>
      <div className="w-[100%] lg:w-[80%] flex flex-col justify-center items-center bg-white border-[1px] border-slate-200 dark:border-none dark:bg-zinc-900 rounded-md p-6">
        <span className="text-zinc-800 dark:bg-zinc-800/40 dark:text-white/80 text-2xl px-2 py-1 rounded-md font-black tracking-widest cursor-default">
          Residents:
        </span>
        <img
          className="w-[300px] h-[300px] grayscale opacity-5 absolute p-2"
          src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png"
        />
        <div className="w-[80%] rounded-md h-64 flex justify-center items-center gap-6 flex-wrap p-6 overflow-auto mt-4">
          <div className="z-10 w-full flex justify-center flex-wrap gap-6">
            {data?.residents?.map((item) => {
              return <Residents key={item} url={item} />;
            })}
          </div>
          {data?.residents?.length <= 0 && (
            <h1 className="dark:text-white text-zinc-800 tracking-wider font-black text-opacity-60">
              NOBODY LIVES HERE
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
