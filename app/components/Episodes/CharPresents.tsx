import axios from "axios";
import { useEffect, useState } from "react";

interface Prop {
  url: string;
}
export default function CharPresents({ url }: Prop) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(url).then(
      (response) => {
        console.log(response);
        setData(response.data.image);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  return (
    <div className="w-16 h-16 flex justify-center items-center">
      {data !== null && <img src={data} className="rounded-md w-16 h-16" />}
    </div>
  );
}
