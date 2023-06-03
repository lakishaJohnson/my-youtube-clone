import "./HomePage.css";
import React from "react";
import VideoCards from "./VideoCards";

function HomePage({ handleUserInput, handleClick, userInput, videos }) {
  // console.log(videos);

  return (
    <div className="search-bar-container">
      <div className="input-group mb-3">
        <input
          onChange={handleUserInput}
          value={userInput}
          type="text"
          className="form-control mb-3"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="button-addon2"
        ></input>
        <button
          onClick={handleClick}
          value={userInput}
          className="btn btn-danger mb-3 small-button"
          type="button"
          id="button-addon2"
          style={{ color: "white" }}
        >
          Search
        </button>
      </div>
      <div className={`results ${videos.length > 0 ? "has-videos" : ""}`}>
        {videos.length > 0 ? (
          <div>
            <VideoCards videos={videos} />
          </div>
        ) : (
          <p>No Search Results Yet!, Please submit a search above!</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
