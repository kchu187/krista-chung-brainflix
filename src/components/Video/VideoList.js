import { Link } from "react-router-dom";
import "./VideoList.scss";

const VideoList = ({ videos, setSelectedVideo }) => {
  return (
    <section className="video-list__container">
      <h2 className="video-list__heading">NEXT VIDEOS</h2>
      <ul className="video-list">
        {videos.map((video) => (
          <li className="video-list__item" key={video.id}>
            <Link to={`/videos/${video.id}`}>
              <img
                className="video-list__image"
                src={video.image}
                alt={video.title}
              />
              <div className="video-list__text-container">
                <p className="video-list__title">{video.title}</p>
                <p className="video-list__channel">{video.channel}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default VideoList;
