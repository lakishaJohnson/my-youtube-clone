import YouTube from "react-youtube";
import { useParams, Link } from "react-router-dom";

import "./VideoView.css";
import VideoComments from "./VideoComments";

const VideoView = ({ videos }) => {
  const opts = {
    height: "480",
    width: "800",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  let preview = useParams();

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const currentVideo = videos.find((video) => video.id.videoId === preview.id);

  // Render the video card component
  return (
    <div className="showVid-main">
      <div>
        <YouTube
          className="showVid"
          videoId={preview.id}
          opts={opts}
          onReady={_onReady}
        />
        {currentVideo ? (
          <div className="showVid-title">
            <h4
              dangerouslySetInnerHTML={{ __html: currentVideo.snippet.title }}
            />
            <p>{currentVideo.snippet.channelTitle}</p>
          </div>
        ) : null}
        <hr />
        <VideoComments />
        <hr />
      </div>

      <div>
        {videos.map((video, i) => {
          return (
            <div className="showVid-side" key={i}>
              <Link to={`/videos/${video.id.videoId}`}>
                <img
                  className="showVid-image"
                  src={video.snippet.thumbnails.high.url}
                  alt=""
                />
              </Link>
              <p dangerouslySetInnerHTML={{ __html: video.snippet.title }}></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoView;
