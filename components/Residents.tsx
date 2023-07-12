import axios from "axios";
import { useEffect, useState } from "react";

interface Prop {
  url: string | null;
}

export default function Residents({ url }: Prop) {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`${url}`).then(
      (response) => {
        setData(response.data.image);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div className="w-16 h-16">
      <img
        className="rounded-md border-[1px] border-zinc-500 dark:border-none"
        src={data}
      />
    </div>
  );
}