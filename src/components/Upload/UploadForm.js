import "./UploadForm.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button.js";
import UploadIcon from "../../assets/images/Icons/upload.svg";
import UploadPreview from "../../assets/images/Upload-video-preview.jpg";
import axios from "axios";

function UploadForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");

  // const handleChangeTitle = (event) => {
  //   setTitle(event.target.value);
  // };
  // const handleChangeDescription = (event) => {
  //   setDescription(event.target.value);
  // };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      //Make a POST request upon form submission

      const response = await axios.post(
        "http://localhost:7000/videos",
        formData
      );
      alert("Upload successful, re-directing back to homepage!");
      navigate("/");
    } catch (error) {
      console.error("Error uploading video:", error);
      alert("Error encountered uploading video. Please try again.");
      navigate("/");
    }
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <h1 className="upload-form__header"> Upload Video</h1>
      <div className="upload-form__container">
        <div className="upload-form__thumbnail-subcontainer">
          <h2 className="upload-form__title">VIDEO THUMBNAIL</h2>

          <img
            className="upload-form__image"
            src={UploadPreview}
            alt="Bicycle handle"
          />
        </div>
        <div className="upload-form__subcontainer">
          <label className="upload-form__title">
            TITLE YOUR VIDEO
            <input
              className="upload-form__field"
              type="text"
              name="title"
              value={formData.name}
              placeholder="Add a title to your video"
              onChange={handleFormChange}
            />
          </label>
          <label className="upload-form__title--description">
            ADD A VIDEO DESCRIPTION
            <input
              className="upload-form__field--description"
              type="text"
              name="description"
              value={formData.value}
              placeholder="Add a description to your video"
              onChange={handleFormChange}
            />
          </label>
        </div>
      </div>
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
