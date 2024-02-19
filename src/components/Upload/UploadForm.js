import "./UploadForm.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button.js";
import UploadIcon from "../../assets/images/Icons/upload.svg";
import UploadPreview from "../../assets/images/Upload-video-preview.jpg";
function UploadForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Upload in progress, re-directing to homepage");
    navigate("/");
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <h1 className="upload-form__header"> Upload Video</h1>
      <h2 className="upload-form__title">VIDEO THUMBNAIL</h2>
      <img
        className="upload-form__image"
        src={UploadPreview}
        alt="Bicycle handle"
      />

      <label className="upload-form__title">
        TITLE YOUR VIDEO
        <input
          className="upload-form__field"
          type="text"
          name="video-title"
          value={title}
          placeholder="Add a title to your video"
          onChange={handleChangeTitle}
        />
      </label>
      <label className="upload-form__title--description">
        ADD A VIDEO DESCRIPTION
        <input
          className="upload-form__field--description"
          type="text"
          name="video-description"
          value={description}
          placeholder="Add a description to your video"
          onChange={handleChangeDescription}
        />
      </label>
      <Button
        buttonClassName="button__upload-form"
        label="PUBLISH"
        iconImage={UploadIcon}
        iconClassName="button__icon--comment-form"
        type="submit"
      />

      <p className="upload-form__cancel"> CANCEL</p>
    </form>
  );
}

export default UploadForm;
