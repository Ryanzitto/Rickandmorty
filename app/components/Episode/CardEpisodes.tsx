import { useState, useEffect, CSSProperties } from "react";
import CharPresents from "../Episodes/CharPresents";

const styleBorder: any = {
  borderBottomRightRadius: "0px",
  borderBottomLeftRadius: "0px",
};

interface Props {
  data: {
    map(
      arg0: (item: any) => import("react").JSX.Element
    ): import("react").ReactNode;
    air_date: string;
    episode: string;
    name: string;
    url: string;
    characters: Array<string>;
  };
}

export default function CardEpisodes({ data }: Props) {
  const [isCLicked, setIsClicked] = useState<boolean>(false);

  const toggle = () => {
    setIsClicked(!isCLicked);
  };

  return (
    <div className="w-full min-h-16 flex flex-col items-center justify-center mt-6">
      <div
        style={isCLicked ? styleBorder : null}
        onClick={toggle}
        className="bg-zinc-100 dark:bg-zinc-800/90 w-[90%] min-h-[50px] rounded-md flex items-center cursor-pointer transition-colors hover:bg-zinc-300 dark:hover:bg-zinc-950/20"
      >
        <span className="pl-6 text-lg font-bold text-zinc-800 dark:text-white/80 tracking-wide">
          {data?.name}
        </span>
      </div>
      {isCLicked === true && (
        <div className="bg-zinc-100 dark:bg-zinc-800/90 w-[90%] h-[500px] flex flex-col border-t border-white dark:border-zinc-900 items-center">
          <div className="mt-4 w-[90%] h-12 flex gap-2 pl-8 items-center bg-zinc-200  border border-slate-200 dark:border-none dark:bg-zinc-900 bg-opacity-80 rounded-md">
            <span className="cursor-default text-md font-bold text-zinc-800 dark:text-white tracking-wide">
              Title:
            </span>
            <span className="text-center cursor-default text-md font-bold text-zinc-800 dark:text-white tracking-wide hover:text-opacity-90 dark:hover:text-opacity-30">
              {data?.name}
            </span>
          </div>
          <div className="mt-4 w-[90%] h-12 flex gap-2 pl-8 items-center bg-zinc-200 border border-slate-200 dark:border-none dark:bg-zinc-900 bg-opacity-80 rounded-md">
            <span className="cursor-default text-md font-bold text-zinc-800 dark:text-white tracking-wide">
              Season:
            </span>
            <span className="cursor-default text-md font-bold text-zinc-800 dark:text-white tracking-wide hover:text-opacity-90 dark:hover:text-opacity-30">
              {data?.episode}
            </span>
          </div>
          <div className="mt-4 w-[90%] h-12 flex gap-2 pl-8 items-center bg-zinc-200 border border-slate-200 dark:border-none dark:bg-zinc-900 bg-opacity-80 rounded-md">
            <span className="cursor-default text-md font-bold text-zinc-800 dark:text-white tracking-wide">
              Air Date:
            </span>
            <span className="cursor-default text-md font-bold text-zinc-800 dark:text-white tracking-wide hover:text-opacity-90 dark:hover:text-opacity-30">
              {data?.air_date}
            </span>
          </div>
          <div className="mt-4 w-[90%] h-12 flex gap-2 pl-8 items-center bg-zinc-200 border border-slate-200 dark:border-none dark:bg-zinc-900 bg-opacity-80 rounded-md">
            <span className="cursor-default text-md font-bold text-zinc-800 dark:text-white tracking-wide">
              Characters Showed:
            </span>
            <span className="cursor-default text-md font-bold text-zinc-800 dark:text-white tracking-wide hover:text-opacity-90 dark:hover:text-opacity-30">
              {data.characters.length}
            </span>
          </div>
          <div className="w-[80%] h-[200px] p-4 gap-4 mt-4 overflow-auto flex flex-wrap justify-center items-center">
            {data?.characters.map((item) => {
              return <CharPresents key={item} url={item} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
