import "./UploadForm.scss";
import { useState } from "react";
import Button from "../Button.js";
import UploadIcon from "../../assets/images/Icons/upload.svg";
function UploadForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Upload in progress, re-directing to homepage");
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <h1> Upload Video</h1>
      <h2 className="upload-form__title">Video Thumbnail</h2>

      <label>
        TITLE YOUR VIDEO
        <input
          type="text"
          name="video-title"
          value={title}
          onChange={handleChangeTitle}
        />
      </label>
      <label>
        ADD A VIDEO DESCRIPTION{" "}
        <input
          type="textarea"
          name="video-title"
          value="Add a description to your video"
        />
      </label>
      <Button
        buttonClassName="button__comment-form"
        label="PUBLISH"
        iconImage={UploadIcon}
        iconClassName="button__icon--comment-form"
        type="submit"
      />
    </form>
  );
}

export default UploadForm;
