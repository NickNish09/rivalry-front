import React, { useState } from "react";
import { Button } from "antd";
import EditRivalName from "./EditRivalName";

const EditRivalCard = ({ left }) => {
  const [avatar, setAvatar] = useState(
    "https://instantmockup.herokuapp.com/images/default-placeholder.png"
  );
  const [pictureUrl, setPictureUrl] = useState("");
  const [pictureName, setPictureName] = useState("");

  const onDrop = (picture) => {
    console.log(picture);
    setPictureName(picture.name);
    let reader = new FileReader();
    reader.readAsDataURL(picture);
    reader.onloadend = function (e) {
      console.log(reader.result);
      let strImage = reader.result.replace(/^data:image\/[a-z]+;base64,/, "");
      setPictureUrl(strImage);
      setAvatar(reader.result);
    };
  };

  return (
    <div className={"rival-card"}>
      <div className={"edit-image-container"}>
        <img
          src={avatar}
          alt={pictureName}
          className={
            left
              ? "rival-left rival-edit-image"
              : "rival-right rival-edit-image"
          }
        />
        <EditRivalName setAvatar={setAvatar} />
        <div className="middle">
          <label
            htmlFor={`file-upload-${left ? "left" : "right"}`}
            className="custom-file-upload"
          >
            <i className="fa fa-cloud-upload"></i>Upload
          </label>
          <input
            id={`file-upload-${left ? "left" : "right"}`}
            type="file"
            className={"rival-edit-file"}
            onChange={(event) => onDrop(event.target.files[0])}
          />
        </div>
      </div>
    </div>
  );
};

export default EditRivalCard;
