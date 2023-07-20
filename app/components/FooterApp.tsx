"use client";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="bg-zinc-900 w-screen h-[1200px] lg:h-[700px] pt-32 lg-pt-0 flex flex-col lg:flex-row justify-center items-center text-center">
      <div className="lg:w-[50%] 2xl:w-[40%] h-full">
        <div className="w-full h-[50%] flex flex-col items-center font-black tracking-wider cursor-default">
          <div className="w-[100%] lg:w-[80%] h-full flex flex-col justify-end items-center">
            <h1 className="text-3xl text-white transition-all hover:text-opacity-60">
              WHO I AM?
            </h1>
            <div className="flex sm:flex-row flex-col gap-2">
              <h2 className="text-xl text-white/60 transition-all hover:text-opacity-60">
                MY NAME IS
              </h2>
              <h2 className="w-fit text-xl duration-[2000ms] w-86 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-green-700 to-green-500 tracking-wide hover:-rotate-180">
                RYAN HENRIQUE
              </h2>
            </div>

            <div className="w-[300px] md:w-[400px] mt-6">
              <p className="text-md text-white/60 text-sm">
                {`
                I'm a front-end developer, my actual tech stack is the react ecosystem, I'm looking for a job opportunity, you can help
                me if you refer me for a job or internship. thanks :)`}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[50%] flex flex-col items-center font-black tracking-wider cursor-default">
          <div className="w-[100%] lg:w-[80%] h-full flex flex-col justify-start items-center mt-16">
            <h1 className="text-3xl text-white transition-all hover:text-opacity-60">
              YOU CAN FIND ME AT:
            </h1>
            <ul className="transition-all flex flex-col gap-6 mt-4">
              <li className="text-white/60 cursor-pointer text-md hover:text-white duration-[2000ms]">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/ryan-henrique-1b4075233/"
                >
                  MY LINKEDIN
                </Link>
              </li>

              <li className="text-white/60 cursor-pointer text-md hover:text-white duration-[2000ms]">
                <Link target="_blank" href="https://github.com/Ryanzitto">
                  MY GITHUB
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:w-[50%] 2xl:w-[40%] h-full lg:pt-10">
        <div className="w-full h-[100%] flex flex-col items-center font-black tracking-wider cursor-default">
          <div className="w-[100%] lg:w-[80%] h-full flex flex-col justify-start lg:justify-center items-center">
            <h1 className="text-3xl text-white transition-all hover:text-opacity-60">
              ABOUT THIS PROJECT
            </h1>
            <div className="w-[300px] md:w-[400px] mt-6">
              <p className="text-md text-white/60 text-sm">
                {`this project was based on the rick and morty series, I remembered
              that I loved this series and decided to do something cool related
              to the series. so i really hope you enjoyed something or other
              about this site. thanks for getting this far.  :)`}
              </p>
            </div>

            <div className="mt-10 w-full flex flex-col items-center">
              <h1 className="text-xl text-white transition-all hover:text-opacity-60">
                USED API:
              </h1>
              <div className="mt-2">
                <Link
                  target="_black"
                  href="https://rickandmortyapi.com/"
                  className="text-md text-white/60 text-sm hover:text-white transition-all duration-[1000ms]"
                >
                  {`rickandmortyapi.com`}
                </Link>
              </div>
            </div>
            <div className="mt-10 w-full flex flex-col items-center">
              <h1 className="text-xl text-white transition-all hover:text-opacity-60">
                TECHNOLOGIES USED:
              </h1>
              <div className="mt-2">
                <ul className="transition-all flex gap-2 mt-2 flex-wrap">
                  <li className="text-white/60 cursor-pointer text-xs hover:text-white duration-[2000ms]">
                    <Link href="https://nextjs.org/" target="_blank">
                      NEXTJS
                    </Link>
                  </li>
                  <li className="text-white/60 cursor-pointer text-xs hover:text-white duration-[2000ms]">
                    <Link
                      href="https://www.typescriptlang.org/"
                      target="_blank"
                    >
                      TYPESCRIPT
                    </Link>
                  </li>
                  <li className="text-white/60 cursor-pointer text-xs hover:text-white duration-[2000ms]">
                    <Link href="https://tailwindcss.com/" target="_blank">
                      TAILWIND
                    </Link>
                  </li>
                  <li className="text-white/60 cursor-pointer text-xs hover:text-white duration-[2000ms]">
                    <Link href="https://redux.js.org/" target="_blank">
                      REDUX
                    </Link>
                  </li>
                  <li className="text-white/60 cursor-pointer text-xs hover:text-white duration-[2000ms]">
                    <Link href="https://axios-http.com/" target="_blank">
                      AXIOS
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
