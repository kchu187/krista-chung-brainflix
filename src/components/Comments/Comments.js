import "./Comments.scss";

//Create a function to format the epoch time into read-able timestamp
function formattedTime(timestamp) {
  const date = new Date(timestamp);
  return `${(date.getMonth() + 1).toString().padStart(2, "0")}/${date
    .getDate()
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;
}

const Comments = ({ selectedVideoDetails }) => {
  return (
    <section className="comments">
      <ul className="comments__list">
        {selectedVideoDetails.comments.map((comments, i) => (
          <li className="comments__item" key={i}>
            <div className="comments__avatar"></div>
            <div className="comments__subsection">
              <div>
                <p>{comments.name}</p>

                <p> {formattedTime(comments.timestamp)}</p>
              </div>
            </div>
            <p> {comments.comment}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Comments;
