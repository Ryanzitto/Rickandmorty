export default function Episodes() {
  return (
    <>
      <div className="h-screen w-screen bg-no-repeat flex section-scroll">
        <div className="h-full font-black flex justify-center text-white flex-col pl-40 pt-10 gap-4">
          <h1 className="text-9xl tracking-wide">RICK</h1>
          <h1 className="text-9xl w-86 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-green-700 to-green-500 tracking-wide">
            AND
          </h1>
          <h1 className="text-9xl tracking-wide">MORTY</h1>
        </div>
        <div className="bg-red-500 w-full h-10"></div>
      </div>
    </>
  );
}
