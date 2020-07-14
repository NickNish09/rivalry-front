import React from "react";
import { StarFilled, StarOutlined } from "@ant-design/icons";

export const RivalryStarRow = ({ rivalStarIndex, starRival, rival }) => {
  return (
    <div className={"rivalry-like-row"}>
      {rivalStarIndex === rival.rival._id ? (
        <StarFilled
          className={"rivalry-like"}
          onClick={() => starRival(rival.rival._id, false)}
        />
      ) : (
        <StarOutlined
          className={"rivalry-like"}
          onClick={() => starRival(rival.rival._id, true)}
        />
      )}
      <span className={"rivalry-likes-count"}>{rival.stars}</span>
    </div>
  );
};

export default RivalryStarRow;
