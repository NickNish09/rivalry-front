import React, { useState } from "react";
import { Button } from "antd";
import EditRivalName from "./EditRivalName";

const EditRivalCard = ({ left }) => {
  const [avatar, setAvatar] = useState(
    "https://instantmockup.herokuapp.com/images/default-placeholder.png"
  );

  return (
    <div className={"rival-card"}>
      <div className={"edit-image-container"}>
        <img
          src={avatar}
          alt={""}
          className={
            left
              ? "rival-left rival-edit-image"
              : "rival-right rival-edit-image"
          }
        />
        <EditRivalName setAvatar={setAvatar} />
        <div className="middle">
          <Button>Upload</Button>
        </div>
      </div>
    </div>
  );
};

export default EditRivalCard;
