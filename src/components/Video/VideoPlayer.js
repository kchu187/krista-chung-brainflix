import "./VideoPlayer.scss";

const VideoPlayer = ({ selectedVideo }) => {
  return (
    // Return the image of the video as image data from  selected video object
    // Leave SRC as blank for Sprint-1 as playback functionality is not yet required.
    <div>
      <video className="main-video" poster={selectedVideo.image} controls>
        {" "}
        <source src="" type="video/mp4" /> Your browser does not support the
        video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
