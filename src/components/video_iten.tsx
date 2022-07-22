import { Items, Snippet } from "../types/youtube";

interface IItemProps {
  video: Items;
}

const VideoItem = ({ video: { snippet } }: IItemProps) => {
  let { title, channelId } = snippet;
  let { url } = snippet.thumbnails.default;
  return (
    <div>
      <img src={url} alt="" />
      <div>
        <span>{title}</span>
        <span>{channelId}</span>
      </div>
    </div>
  );
};

export default VideoItem;
