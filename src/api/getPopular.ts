import axios from "axios";
import { YoutubeP } from "../types/youtube";

export default function getPopular() {
  return axios
    .get<YoutubeP>(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAFnW7MQS4f-ojoeTf__eYgWM9ZbJP2lLA"
    )
    .then((v) => {
      console.log(v.data);
      return v.data;
    });
}
