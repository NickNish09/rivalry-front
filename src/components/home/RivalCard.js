import React from "react";

const RivalCard = ({ left, url, name }) => {
  return (
    <div className={"rival-card"}>
      <img
        src={url}
        alt={name}
        className={left ? "rival-left" : "rival-right"}
      />
      <p className={"rival-name"}>{name}</p>
    </div>
  );
};

export default RivalCard;
