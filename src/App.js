import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import VideoData from "./Data/videos.json";
import VideoDetails from "./Data/video-details.json";
import VideoPlayer from "./components/Video/VideoPlayer";
import VideoList from "./components/Video/VideoList";

const App = () => {
  //Set state for the video that has been clicked which will be the selected video
  const [selectedVideo, setSelectedVideo] = useState(VideoData[0]);

  // Set separate state for video details
  const [selectedVideoDetails, setSelectedVideoDetails] = useState(
    VideoDetails[0]
  );

  const handleVideoSelect = (video) => {
    const description = VideoDetails.find(
      (description) => description.id === video.id
    );
    setSelectedVideo(video);
    setSelectedVideoDetails(description);
  };

  const filteredVideos = VideoData.filter(
    (video) => video.id !== selectedVideo.id
  );

  return (
    <>
      <Header />
      <VideoPlayer selectedVideo={selectedVideo} />
      <VideoList videos={filteredVideos} onSelectedVideo={handleVideoSelect} />
    </>
  );
};

export default App;
