import "./VideoDescription.scss";
import ViewsIcon from "../../assets/images/Icons/views.svg";
import LikesIcon from "../../assets/images/Icons/likes.svg";
//Create a function to format epoch time to readable timestamps
function formattedTime(timestamp) {
  const date = new Date(timestamp);
  return `${(date.getMonth() + 1).toString().padStart(2, "0")}/${date
    .getDate()
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;
}

const VideoDescription = ({ selectedVideo }) => {
  const commentCount = selectedVideo.comments
    ? selectedVideo.comments.length
    : 0;
  return (
    <section className="video-description">
      <h2 className="video-description__title">{selectedVideo.title}</h2>
      <div className="video-description__container">
        <div className="video-description__sub-container">
          <p className="video-description__sub-description--bold">
            {" "}
            By {selectedVideo.channel}
          </p>
          <p className="video-description__sub-description--grey">
            {" "}
            {formattedTime(selectedVideo.timestamp)}
          </p>
        </div>
        <div className="video-description__sub-container">
          <p className="video-description__sub-description--grey">
            <img
              className="video-description__icon"
              src={ViewsIcon}
              alt="Icon image of an eye"
            />
            {selectedVideo.views}
          </p>
          <p className="video-description__sub-description--grey">
            {" "}
            <img
              className="video-description__icon"
              src={LikesIcon}
              alt="Small grey thumbs-up icon"
            />
            {selectedVideo.likes}
          </p>
        </div>
      </div>
      <p className="video-description__description">
        {" "}
        {selectedVideo.description}{" "}
      </p>
      <p className="video-description__comment-number">
        {commentCount} Comments
      </p>
    </section>
  );
};

export default VideoDescription;
