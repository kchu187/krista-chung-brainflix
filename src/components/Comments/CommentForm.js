import "./CommentForm.scss";
import Button from "../Button.js";
import CommentIcon from "../../assets/images/Icons/add_comment.svg";
import Avatar from "../../assets/images/Mohan-muruge.jpg";
const CommentForm = ({ selectedVideoDetails }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="comments-form__container">
      <img
        className="comments-form__avatar"
        src={Avatar}
        alt="sideprofile of a man"
      ></img>

      <form className="comments-form" onSubmit={handleSubmit}>
        <h2 className="comments-form__title"> JOIN THE CONVERSATION </h2>
        <textarea
          className="comments-form__field"
          name="commentInput"
          placeholder="Add a new comment"
        ></textarea>

        <Button
          buttonClassName="button__comment-form"
          label="COMMENT"
          iconImage={CommentIcon}
          iconClassName="button__icon--comment-form"
          type="submit"
        />
      </form>
    </div>
  );
};

export default CommentForm;
