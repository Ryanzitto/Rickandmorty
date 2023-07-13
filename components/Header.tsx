"use client";

import React from "react";

export default function Header() {
  return (
    <header className="h-20 w-full bg-neutral-800 position: absolute bg-opacity-30 flex justify-center">
      <div className="lg:pl-32  hidden sm:w-1/4 h-full w-0 pl-10 xl:pl-[200px] sm:flex items-center">
        <h1 className="font-black text-5xl w-[150px] bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-green-700 to-green-500 tracking-wide">{`</>`}</h1>
      </div>
      <div className="sm:w-3/4 h-full sm:pr-20 xl:pr-[200px] pr-0 w-100">
        <ul className="sm:gap-20 flex h-full w-full items-center justify-end 2xl:justify-end gap-10 ">
          <li
            onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
            className="font-black text-white tracking-widest text-xs cursor-pointer hover:opacity-70"
          >
            CHARACTERS
          </li>
          <li
            onClick={() => window.scrollTo({ top: 1850, behavior: "smooth" })}
            className="font-black text-white tracking-widest text-xs cursor-pointer hover:opacity-70"
          >
            LOCATIONS
          </li>
          <li
            onClick={() => window.scrollTo({ top: 2900, behavior: "smooth" })}
            className="font-black text-white tracking-widest text-xs cursor-pointer hover:opacity-70"
          >
            EPISODES
          </li>
        </ul>
      </div>
    </header>
  );
}
