import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
interface Prop {
  url: string | null;
}

export default function Residents({ url }: Prop) {
  const [data, setData] = useState<string>("");

  useEffect(() => {
    axios.get(`${url}`).then(
      (response) => {
        setData(response.data.image);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [url]);

  return (
    <div className="w-16 h-16">
      {data && (
        <Image
          className="rounded-md border-[1px] border-zinc-500 dark:border-none"
          src={data}
          width={64}
          height={64}
          alt="imagem de personagems que vivem em determinado planeta da série rick and morty"
        />
      )}
    </div>
  );
}
