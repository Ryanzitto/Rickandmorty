export default function Notificacao() {
  return (
    <div className="w-full h-[50%] flex items-center justify-center pt-20">
      <div className="w-80 h-40 bg-zinc-800 bg-opacity-50 rounded-md flex flex-col justify-start items-center gap-4">
        <div className="h-[40px] w-full flex justify-between items-center pr-2 bg-zinc-800 rounded-tr-md rounded-tl-md">
          <span className="text-gray-700 font-semibold ml-6">NOTIFICAÇÃO</span>
          <button className="h-6 p-2 bg-black bg-opacity-30 flex justify-center items-center rounded-md text-md transition-all hover:bg-red-400">{`X`}</button>
        </div>
        <p className="text-sm w-[80%] tracking-wider">
          Que tal nos dizer seu nome para uma experiência mais divertida?
        </p>
        <div className="gap-2 flex">
          <input className="h-6 w-48 bg-zinc-800 border border-gray-600 rounded-md focus:outline-none text-center focus:animate-pulse" />
          <button className="h-6 p-2 bg-green-600 flex justify-center items-center rounded-md text-lg transition-all hover:bg-green-400">{`>`}</button>
        </div>
      </div>
    </div>
  );
}
