import "./VideoList.scss";

const VideoList = ({ videos, onSelectedVideo }) => {
  const handleVideoClick = (video) => {
    // Call the onSelectedVideo callback with the clicked video (edit comment)
    onSelectedVideo(video);
  };

  return (
    <div>
      <h2>NEXT VIDEO</h2>
      <ul className="video-list">
        {videos.map((video) => (
          <li
            className="video-list__item"
            key={video.id}
            onClick={() => handleVideoClick(video)}
          >
            <img
              className="video-list__image"
              src={video.image}
              alt={video.title}
            />
            <p>{video.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
