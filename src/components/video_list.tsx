import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import getPopular from "../api/getPopular";
import { Items } from "../types/youtube";
import VideoItem from "./video_iten";
const VideoList = () => {
  let [popular, setPopular] = useState<undefined | Items[]>([]);
  let result = useQuery(["getPopularVdeos"], getPopular);

  useEffect(() => {
    setPopular(result.data?.items);
  }, [result]);

  return (
    <ul>
      {popular?.map((video) => {
        return <VideoItem key={video.id} video={video}></VideoItem>;
      })}
    </ul>
  );
};

export default VideoList;
