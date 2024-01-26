import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import VideoData from "./Data/videos.json";
import VideoPlayer from "./components/Video/VideoPlayer";
import VideoList from "./components/Video/VideoList";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(VideoData[0]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
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
