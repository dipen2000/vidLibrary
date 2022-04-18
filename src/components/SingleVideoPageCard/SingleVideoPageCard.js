import "./SingleVideoPageCard.css";
import { useState } from "react";
import { LikeButton } from "../buttons/LikeButton";
import { WatchLaterButton } from "../buttons/WatchLaterButton";
import { SaveButton } from "../buttons/SaveButton";
const SingleVideoPageCard = ({ video }) => {
  const { title, creator, url, views, description } = video;

  return (
    <div className="flex-col">
      <iframe
        className="single_page-video"
        src={url}
        allowFullScreen
        alt={`${title} ${creator}`}
      ></iframe>
      <div className="flex-col">
        <h2>{title}</h2>
        <h3>by {creator}</h3>
        <p>{description}</p>
        <div className="flex-row">
          <LikeButton video={video} />
          <SaveButton video={video} />
          <WatchLaterButton video={video} />
        </div>
      </div>
    </div>
  );
};

export { SingleVideoPageCard };
