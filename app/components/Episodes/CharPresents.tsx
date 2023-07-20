import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
interface Prop {
  url: string;
}
export default function CharPresents({ url }: Prop) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(url).then(
      (response) => {
        setData(response.data.image);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [url]);

  return (
    <div className="w-16 h-16 flex justify-center items-center">
      {data !== null && (
        <Image
          src={data}
          width={64}
          height={64}
          alt="Imagem de personagem que apareceram neste epsodio"
          className="rounded-md w-16 h-16"
        />
      )}
    </div>
  );
}
