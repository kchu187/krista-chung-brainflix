import "./VideoDescription.scss";
import ViewsIcon from "../../assets/images/Icons/views.svg";
import LikesIcon from "../../assets/images/Icons/likes.svg";

const VideoDescription = ({ selectedVideoDetails }) => {
  return (
    <section className="video-description">
      <h2 className="video-description__title">{selectedVideoDetails.title}</h2>
      <div className="video-description__container">
        <div className="video-description__sub-container">
          <p className="video-description__sub-description--bold">
            {" "}
            By {selectedVideoDetails.channel}
          </p>
          <p className="video-description__sub-description--grey">
            {" "}
            {selectedVideoDetails.timestamp}
          </p>
        </div>
        <div className="video-description__sub-container">
          <p className="video-description__sub-description--grey">
            <img
              className="video-description__icon"
              src={ViewsIcon}
              className="video-description__sub-details"
              alt="Icon image of an eye"
            />
            {selectedVideoDetails.views}
          </p>
          <p className="video-description__sub-description--grey">
            {" "}
            <img
              className="video-description__icon"
              src={LikesIcon}
              className="video-description__sub-details"
              alt="Small grey thumbs-up icon"
            />
            {selectedVideoDetails.likes}
          </p>
        </div>
      </div>
      <p> {selectedVideoDetails.description} </p>
    </section>
  );
};

export default VideoDescription;
