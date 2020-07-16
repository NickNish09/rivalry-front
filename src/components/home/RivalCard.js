import React from "react";
import { Link } from "react-router-dom";

const RivalCard = ({ left, url, name, id }) => {
  return (
    <div className={"rival-card"}>
      <img
        src={url}
        alt={name}
        className={left ? "rival-left" : "rival-right"}
      />
      <Link to={`/rivals/${id}`}>
        <p className={"rival-name"}>{name}</p>
      </Link>
    </div>
  );
};

export default RivalCard;
