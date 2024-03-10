import "./HomePage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils.js";

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Header from "../../components/Header/Header.js";
import VideoDetailsData from "../../Data/video-details.json";
import VideoPlayer from "../../components/Video/VideoPlayer.js";
import VideoDescription from "../../components/Video/VideoDescription.js";
import VideoList from "../../components/Video/VideoList.js";
import Comments from "../../components/Comments/Comments.js";
import CommentForm from "../../components/Comments/CommentForm.js";

const HomePage = () => {
  const { videoId } = useParams();
  const [selectedVideo, setSelectedVideo] = useState({});
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get("http://localhost:7000/videos");

        setVideos(response.data);

        const video = videoId
          ? response.data.find((video) => video.id === videoId) || {}
          : response.data[0];
        setSelectedVideo(video);
      } catch (error) {
        console.error("Error, could not fetch video data", error);
      }
    };
    fetchVideoData();
  }, [videoId]);

  const filteredVideos = videos.filter(
    (video) => video.id !== selectedVideo.id
  );

  return (
    <div className="body-container">
      <Header />

      <VideoPlayer selectedVideo={selectedVideo} />

      <div className="container">
        <div className="sub-container">
          <VideoDescription selectedVideo={selectedVideo} />
          <CommentForm />
          <Comments selectedVideo={selectedVideo} />
        </div>
        <VideoList videos={filteredVideos} />
      </div>
    </div>
  );
};

export default HomePage;
