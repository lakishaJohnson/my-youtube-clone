import React from "react";
import "./VideoCards.css";

import { Link } from "react-router-dom";

const VideoCards = ({ videos }) => {
  //   console.log(videos);
  return (
    <div className="video-containers">
      {videos.map((video, index) => (
        <div key={index} className="video-card">
          <Link to={`/videos/${video.id.videoId}`}>
            <img src={video.snippet.thumbnails.medium.url} />
          </Link>{" "}
          <Link to={`/videos/${video.id.videoId}`}>
            <p
              dangerouslySetInnerHTML={{ __html: video.snippet.title }}
              style={{ fontWeight: "bold" }}
            ></p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VideoCards;
