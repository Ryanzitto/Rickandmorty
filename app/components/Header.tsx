export default function Header() {
  return (
    <header className="h-20 w-full bg-neutral-800 position: absolute opacity-95 flex justify-center 2xl:w-[1700px]">
      <div className="lg:pl-32  hidden sm:w-1/4 h-full w-0 pl-10 1xl:pl-[350px] sm:flex items-center">
        <h1 className="font-black text-5xl w-[150px] bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-green-700 to-green-500 tracking-wide">{`</>`}</h1>
      </div>
      <div className="sm:w-3/4 h-full sm:pr-20 2xl:pl-60 2xl:pr-40 pr-0 w-100">
        <ul className="sm:gap-20 flex h-full w-full items-center justify-end 2xl:justify-end gap-10 ">
          <li className="font-black text-white tracking-widest text-xs cursor-pointer hover:opacity-70">
            CHARACTERS
          </li>
          <li className="font-black text-white tracking-widest text-xs cursor-pointer hover:opacity-70">
            LOCATIONS
          </li>
          <li className="font-black text-white tracking-widest text-xs cursor-pointer hover:opacity-70">
            EPISODES
          </li>
        </ul>
      </div>
    </header>
  );
}
