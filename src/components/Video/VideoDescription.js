import "./VideoDescription.scss";
import ViewsIcon from "../../assets/images/Icons/views.svg";
import LikesIcon from "../../assets/images/Icons/likes.svg";

const VideoDescription = ({ selectedVideoDetails }) => {
  return (
    <section>
      <h2> {selectedVideoDetails.title} </h2>
      <p> By {selectedVideoDetails.channel}</p>
      <p> {selectedVideoDetails.timestamp}</p>
      <p>
        <img
          src={ViewsIcon}
          className="video-description__sub-details"
          alt="Icon image of an eye"
        />
        {selectedVideoDetails.views}
      </p>
      <p>
        {" "}
        <img
          src={LikesIcon}
          className="video-description__sub-details"
          alt="Small grey thumbs-up icon"
        />
        {selectedVideoDetails.likes}
      </p>

      <p> {selectedVideoDetails.description} </p>
    </section>
  );
};

export default VideoDescription;
