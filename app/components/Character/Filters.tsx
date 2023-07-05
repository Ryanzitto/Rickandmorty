interface Data {
  func1: Function;
  func2: Function;
  func3: Function;
}

export default function Filters({ func1, func2, func3 }: Data) {
  return (
    <div className="w-[80%] flex flex-col sm:flex sm:flex-row items-center gap-4 mt-3 font-bold text-white/80">
      <select
        onChange={(e) => func1(e)}
        className="bg-zinc-900 bg-opacity-80 focus:outline-0 rounded-md p-2 tracking-wide"
      >
        <option>Human</option>
        <option>Alien</option>
        <option>Humanoid</option>
        <option>Poopybutthole</option>
        <option>Mythological Creature</option>
        <option>Disease</option>
        <option>Robot</option>
        <option>Animal</option>
        <option>Cronenberg </option>
        <option>Unknown</option>
        <option>all</option>
      </select>
      <select
        onChange={(e) => func2(e)}
        className="bg-zinc-900 bg-opacity-80 focus:outline-0 rounded-md p-2  tracking-wide"
      >
        <option>alive</option>
        <option>dead</option>
        <option>unknown</option>
        <option>all</option>
      </select>
      <select
        onChange={(e) => func3(e)}
        className="bg-zinc-900 bg-opacity-80 focus:outline-0 rounded-md p-2  tracking-wide"
      >
        <option>male</option>
        <option>female</option>
        <option>genderless</option>
        <option>unknown</option>
        <option>all</option>
      </select>
    </div>
  );
}
