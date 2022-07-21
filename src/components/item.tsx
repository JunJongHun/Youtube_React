import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import getPopular from "../api/getPopular";
import { Items } from "../types/youtube";

const Item = () => {
  let [popular, setPopular] = useState<undefined | Items[]>([]);
  const result = useQuery(["youtubePopular"], getPopular);

  useEffect(() => {
    setPopular(result.data?.items);
  }, [result]);

  return (
    <div>
      {popular?.map((v) => {
        return <img src={v.snippet.thumbnails.default.url} />;
      })}
    </div>
  );
};

export default Item;
