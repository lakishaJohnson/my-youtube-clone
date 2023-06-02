import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import About from "./components/About";
import VideoView from "./components/VideoView";
import Modal from "./components/Modal";

function App() {
  const [userInput, setUserInput] = useState("");
  const [videos, setVideos] = useState([]);
  // const [errorStatus, setErrorStatus] = useState(false);

  // const handleBadError = () => {
  //   setErrorStatus(400);
  // };

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
    // console.log(event.target.value)
  };

  const handleClick = (event) => {
    event.preventDefault();
    fetchUserVideos(userInput);
    setUserInput("");
  };

  const fetchUserVideos = (userInput) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://youtube.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&q=${userInput}&maxResults=8`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items);
        console.log(data.items);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
    // .then((response) => {
    //   if (!response.ok) {
    //     throw new Error("Error: " + response.status);
    //   }
    //   return response.json();
    // })
    // .then((data) => {
    //   setAllVideos(data.items);
    //   console.log(data.items);
    //   setErrorStatus(false);
    // })
    // .catch((error) => {
    //   console.error("Error fetching videos:", error);
    //   setErrorStatus(true);
    // });
    /////////////////////////////////////////////
    // .then((response) => response.json())
    // .then((data) => {
    //   setAllVideos(data.items);
    //   console.log(data.items);
    // })
    // .catch((error) => {
    //   if (error.response && error.response.status === 400) {
    //     handleBadError();
    //   } else {
    //     console.error("Error fetching videos:", error);
    //   }
    // });
  };

  return (
    <div className="app-page">
      <Router>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomePage
                handleUserInput={handleUserInput}
                handleClick={handleClick}
                userInput={userInput}
                videos={videos}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/videos/:id" element={<VideoView videos={videos} />} />
        </Routes>
        {/* {errorStatus && <Modal />} */}

        {/* {errorStatus === 400 && <Modal />}
         */}
        <Modal />
      </Router>
    </div>
  );
}

export default App;
