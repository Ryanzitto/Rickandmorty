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
      <div className="w-[80%] bg-zinc-900 opacity-80 p-6 rounded-md">
        <div className="flex justify-center items-center">
          <h1 className="text-white/60 text-2xl bg-zinc-800 bg-opacity-80 px-2 py-1 rounded-md font-black tracking-wider cursor-default hover:text-white/90">
            {data?.name}
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center mt-2">
          <span className="text-white text-lg tracking-wider font-bold opacity-50">
            dimension:
          </span>
          <span className="text-white text-lg tracking-wider font-bold">
            {data?.dimension}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center mt-2">
          <span className="text-white text-lg tracking-wider font-bold opacity-50">
            type:
          </span>
          <span className="text-white text-lg tracking-wider font-bold">
            {data?.type}
          </span>
        </div>
      </div>
      <div className=" w-[80%] flex flex-col justify-center items-center bg-zinc-900 opacity-80 rounded-md p-6">
        <span className="text-white/60 text-2xl bg-zinc-800 bg-opacity-80 px-2 py-1 rounded-md font-black tracking-wider hover:text-white/90">
          Residents:
        </span>
        <div className="w-[80%] rounded-md h-64 flex justify-center items-center gap-6 flex-wrap p-6 overflow-auto mt-4">
          {data?.residents?.map((item) => {
            return <Residents key={item} url={item} />;
          })}
          {data?.residents?.length <= 0 && (
            <h1 className="text-white tracking-wider font-bold opacity-60">
              NOBODY LIVES HERE
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
