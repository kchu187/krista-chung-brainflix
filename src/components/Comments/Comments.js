import "./Comments.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../utils";

//Create a function to format the epoch time into read-able timestamp
function formattedTime(timestamp) {
  const date = new Date(timestamp);
  return `${(date.getMonth() + 1).toString().padStart(2, "0")}/${date
    .getDate()
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;
}

const Comments = ({ selectedVideo }) => {
  const { videoId } = useParams();
  const [commentsData, setCommentsData] = useState(null);

  useEffect(() => {
    const fetchCommentsData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/videos/${selectedVideo.id}?api_key=${API_KEY}`
        );
        setCommentsData(response.data);
      } catch (error) {
        console.error("Error fetching additional video information:", error);
      }
    };

    if (selectedVideo.id) {
      fetchCommentsData();
    }
  }, [selectedVideo]);
  //To prevent errors of 'rendering null' before descriptionInfo data is rendered
  if (!commentsData) {
    return null;
  }

  return (
    <section className="comments">
      <ul className="comments__list">
        {commentsData.comments.map((comments, i) => (
          <li className="comments__item" key={i}>
            <div className="comments__avatar"></div>
            <div className="comments__subsection">
              <div className="comments__name-container">
                <p className="comments__name">{comments.name}</p>

                <p className="comments__timestamp">
                  {formattedTime(comments.timestamp)}
                </p>
              </div>
              <p className="comments__content"> {comments.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Comments;
