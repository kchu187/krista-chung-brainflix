import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../utils.js";
import "./HomePage.scss";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Header from "../../components/Header/Header.js";
// import VideoData from "../../Data/videos.json";
import VideoDetailsData from "../../Data/video-details.json";
import VideoPlayer from "../../components/Video/VideoPlayer.js";
import VideoDescription from "../../components/Video/VideoDescription.js";
import VideoList from "../../components/Video/VideoList.js";
import Comments from "../../components/Comments/Comments.js";
import CommentForm from "../../components/Comments/CommentForm.js";

const HomePage = () => {
  const { videoId } = useParams();
  //Set state for the video that has been clicked which will be the selected video
  const [selectedVideo, setSelectedVideo] = useState({});
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/videos?api_key=${API_KEY}`
        );
        setVideos(response.data);
        const video = videoId
          ? response.data.find((video) => video.id === videoId) || {}
          : response.data[0];
        setSelectedVideo(video);

        console.log(response.data);
      } catch (error) {
        console.error("Error, could not fetch video data", error);
      }
    };
    fetchVideoData();
  }, [videoId]);

  // Set separate state for video details

  // const handleVideoSelect = (video) => {
  //   const description = VideoDetailsData.find(
  //     (description) => description.id === video.id
  //   );
  //   setSelectedVideo(video);
  //   setSelectedVideoDetails(description);
  // };

  //Filter videos so the selected video does not show in the videolist
  const filteredVideos = videos.filter(
    (video) => video.id !== selectedVideo.id
  );

  return (
    <>
      <Header />

      <body>
        <VideoPlayer selectedVideo={selectedVideo} />

        <div className="container">
          <div className="sub-container">
            <VideoDescription selectedVideo={selectedVideo} />
            <CommentForm />
            {/* <Comments selectedVideoDetails={selectedVideo} /> */}
          </div>
          <VideoList
            videos={filteredVideos}
            setSelectedVideo={setSelectedVideo}

            // onSelectedVideo={handleVideoSelect}
          />
        </div>
      </body>
    </>
  );
};

export default HomePage;
