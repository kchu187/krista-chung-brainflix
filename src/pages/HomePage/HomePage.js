import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../utils.js";
import "./App.scss";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "../../components/Header/Header.js";
// import VideoData from "../../Data/videos.json";
import VideoDetailsData from "../../Data/video-details.json";
import VideoPlayer from "../../components/Video/VideoPlayer.js";
import VideoDescription from "../../components/Video/VideoDescription.js";
import VideoList from "../../components/Video/VideoList.js";
import Comments from "../../components/Comments/Comments.js";
import CommentForm from "../../components/Comments/CommentForm.js";

const HomePage = () => {
  //Set state for the video that has been clicked which will be the selected video
  const [selectedVideo, setSelectedVideo] = useState([]);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/videos?api_key=${API_KEY}`
        );
        setSelectedVideo(response.data);

        console.log(response.data);
      } catch (error) {
        console.error("Error, could not fetch video data", error);
      }
    };
    fetchVideoData();
  }, []);

  // Set separate state for video details
  const [selectedVideoDetails, setSelectedVideoDetails] = useState(
    VideoDetailsData[0]
  );

  const handleVideoSelect = (video) => {
    const description = VideoDetailsData.find(
      (description) => description.id === video.id
    );
    setSelectedVideo(video);
    setSelectedVideoDetails(description);
  };

  //Filter videos so the selected video does not show in the videolist
  const filteredVideos = VideoData.filter(
    (video) => video.id !== selectedVideo.id
  );

  return (
    <>
      <Header />
      <VideoPlayer selectedVideo={selectedVideo} />
      <div className="container">
        <div className="sub-container">
          <VideoDescription selectedVideoDetails={selectedVideoDetails} />
          <CommentForm />
          <Comments selectedVideoDetails={selectedVideoDetails} />
        </div>
        <VideoList
          videos={filteredVideos}
          onSelectedVideo={handleVideoSelect}
        />
      </div>
    </>
  );
};

export default HomePage;
