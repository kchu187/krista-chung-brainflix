import "./VideoDescription.scss";
import ViewsIcon from "../../assets/images/Icons/views.svg";
import LikesIcon from "../../assets/images/Icons/likes.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../utils";
//Create a function to format epoch time to readable timestamps
function formattedTime(timestamp) {
  const date = new Date(timestamp);
  return `${(date.getMonth() + 1).toString().padStart(2, "0")}/${date
    .getDate()
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;
}

const VideoDescription = ({ selectedVideo }) => {
  const { videoId } = useParams();
  const [descriptionInfo, setDescriptionInfo] = useState(null);

  useEffect(() => {
    const fetchAdditionalInfo = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/videos/${selectedVideo.id}?api_key=${API_KEY}`
        );
        setDescriptionInfo(response.data);
      } catch (error) {
        console.error("Error fetching additional video information:", error);
      }
    };

    if (selectedVideo.id) {
      fetchAdditionalInfo();
    }
  }, [selectedVideo]);

  //To prevent errors of 'rendering null' before descriptionInfo data is rendered
  if (!descriptionInfo) {
    return null;
  }

  const commentCount = descriptionInfo.comments
    ? descriptionInfo.comments.length
    : 0;
  return (
    <section className="video-description">
      <h2 className="video-description__title">{descriptionInfo.title}</h2>
      <div className="video-description__container">
        <div className="video-description__sub-container">
          <p className="video-description__sub-description--bold">
            {" "}
            By {descriptionInfo.channel}
          </p>
          <p className="video-description__sub-description--grey">
            {" "}
            {formattedTime(descriptionInfo.timestamp)}
          </p>
        </div>
        <div className="video-description__sub-container">
          <p className="video-description__sub-description--grey">
            <img
              className="video-description__icon"
              src={ViewsIcon}
              alt="Icon image of an eye"
            />
            {descriptionInfo.views}
          </p>
          <p className="video-description__sub-description--grey">
            {" "}
            <img
              className="video-description__icon"
              src={LikesIcon}
              alt="Small grey thumbs-up icon"
            />
            {descriptionInfo.likes}
          </p>
        </div>
      </div>
      <p className="video-description__description">
        {descriptionInfo.description}
      </p>
      <p className="video-description__comment-number">
        {commentCount} Comments
      </p>
    </section>
  );
};

export default VideoDescription;
