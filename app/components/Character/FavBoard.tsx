import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../GlobalRedux/store";
import { removeFromFavorite } from "../../GlobalRedux/Feature/character/characterSlice";
import Image from "next/image";
interface data {
  map(
    arg0: (item: any) => import("react").JSX.Element
  ): import("react").ReactNode;
  name: string;
  image: string;
  species: string;
  status: string;
  type: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
  gender: string;
}

export default function FavBoard() {
  const favorites = useSelector(
    (state: RootState) => state.character.favorites
  );

  const dispatch = useDispatch();

  const remove = (item: data) => {
    dispatch(removeFromFavorite(item));
  };
  return (
    <div className="w-[90%] min-h-[500px] max-h-[500px] gap-6 border-[1px] overflow p-2 flex flex-col justify-start items-center border-slate-200 dark:border-none bg-white dark:bg-zinc-900 rounded-lg">
      <div className="w-full text-zinc-800 dark:text-white flex justify-center items-end">
        <h1 className="font-black text-lg pt-6 opacity-80 dark:opacity-40 rounded-md transition-colors cursor-default hover:opacity-60 sm:text-2xl md:text-3xl">
          FAVORITES BOARD
        </h1>
      </div>
      <div className="h-full w-full flex justify-center items-center overflow-auto">
        {favorites === null && (
          <div className="w-[400px] text-center flex flex-col justify-start items-center transition-all tracking-wider">
            <h1 className="font-black text-2xl px-2 opacity-80 text-zinc-800 dark:text-white dark:opacity-40 rounded-md transition-colors cursor-default hover:opacity-60">
              your favorite characters will be shown here
            </h1>
          </div>
        )}
        {favorites?.length <= 0 && (
          <div className="w-[400px] text-center flex flex-col justify-start items-center transition-all tracking-wider mt-44 lg:mt-0">
            <h1 className="font-black text-2xl px-2 opacity-80 dark:opacity-40 rounded-md transition-colors cursor-default hover:opacity-60"></h1>
            <h1 className="font-black text-2xl px-2 opacity-80 dark:opacity-40 rounded-md transition-colors cursor-default hover:opacity-60">
              {`Nothing here :(`}
            </h1>
          </div>
        )}
        {favorites?.length >= 1 && (
          <div className=" w-full h-full flex justify-center">
            <div className="flex w-[80%] justify-center flex-wrap gap-4 overflow-auto">
              {favorites?.map((item: data) => {
                return (
                  <div key={item.name} className="w-40 h-40 relative grid">
                    <Image
                      className="rounded-md absolute dark:border-none border-[1px] border-zinc-500"
                      src={item.image}
                      width={160}
                      height={160}
                      alt="imagem de seus personagens favoritos"
                    />
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/6276/6276642.png"
                      width={500}
                      height={500}
                      alt="imagem de seus personagens favoritos"
                      className="w-10 h-10 absolute justify-self-end cursor-pointer hover:opacity-60"
                      onClick={() => remove(item)}
                    />

                    <span className="justify-self-center self-end mb-2 text-xs absolute text-white bg-zinc-800 bg-opacity-80 rounded-md mb-1 p-1 text-center">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {favorites?.length >= 1 && (
        <div className="w-full flex justify-center items-center">
          <span className="font-black text-lg px-2 py-2 opacity-80 dark:opacity-40 rounded-md transition-colors cursor-default hover:opacity-60">
            Favorites: {favorites?.length}
          </span>
        </div>
      )}
    </div>
  );
}
