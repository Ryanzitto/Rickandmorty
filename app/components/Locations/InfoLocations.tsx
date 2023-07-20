import Residents from "./Residents";
import Where from "./Where";
import Image from "next/image";

interface Prop {
  data: {
    dimension: string | null;
    name: string | null;
    residents: Array<string> | null;
    type: string;
  } | null;
}

export default function Info({ data }: Prop) {
  return (
    <>
      {data && (
        <div className="w-full h-full flex items-center gap-8 flex-col xl:mt-0">
          <div className="flex flex-row w-[90%] bg-white border-[1px] border-slate-200 dark:border-none dark:bg-zinc-900 p-6 rounded-md">
            <div className="w-[100%] md:w-[70%] flex flex-col justify-between items-center xl:items-start">
              <div className="flex justify-center items-center">
                <h1 className="text-zinc-800/80 border border-slate-200 dark:border-zinc-700 dark:bg-zinc-900 bg-zinc-200 text-center dark:bg-zinc-800/40 dark:text-white/80 text-2xl px-2 py-1 rounded-md font-black tracking-widest cursor-default hover:text-zinc-800/60 dark:hover:text-white/60">
                  {data?.name}
                </h1>
              </div>
              <div className="flex justify-center items-center mt-2 gap-2">
                <span className="text-zinc-800 font-black text-lg text-opacity-70 dark:text-white/50 tracking-wider">
                  dimension:
                </span>
                <span className="text-zinc-800 font-black text-lg dark:text-white tracking-wider">
                  {data?.dimension}
                </span>
              </div>
              <div className="flex justify-center items-center mt-2 gap-2">
                <span className="text-zinc-800 font-black text-lg text-opacity-70 dark:text-white/50 tracking-wider">
                  type:
                </span>
                <span className="text-zinc-800 font-black text-lg dark:text-white tracking-wider">
                  {data?.type}
                </span>
              </div>
            </div>
            <div className="hidden md:flex  w-[30%] flex justify-center xl:justify-end items-center">
              <Image
                className="w-40 h-40 grayscale opacity-20 dark:opacity-5"
                width={500}
                height={500}
                alt="Imagem da série rick and morty"
                src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-morty-face-kushmastafresh-deviantart-27.png"
              />
            </div>
          </div>
          <div className="w-[90%] flex flex-col justify-center items-center bg-white border-[1px] border-slate-200 dark:border-none dark:bg-zinc-900 rounded-md p-6">
            <span className="text-zinc-800/80 border border-slate-200 dark:border-zinc-700 dark:bg-zinc-900 bg-zinc-200 text-center dark:bg-zinc-800/40 dark:text-white/80 text-2xl px-2 py-1 rounded-md font-black tracking-widest cursor-default hover:text-zinc-800/60 dark:hover:text-white/60">
              Residents:
            </span>
            <div className="w-[90%] rounded-md h-56 flex justify-center items-center gap-6 flex-wrap p-6 overflow-auto mt-4">
              <div className="z-10 w-full flex justify-center flex-wrap gap-6">
                {data?.residents?.map((item: string) => {
                  return <Residents key={item} url={item} />;
                })}
              </div>
              {data?.residents?.length === 0 && (
                <h1 className="dark:text-white text-zinc-800 tracking-wider font-black text-opacity-60">
                  NOBODY LIVES HERE
                </h1>
              )}
            </div>
          </div>
          <Where />
        </div>
      )}
    </>
  );
}
