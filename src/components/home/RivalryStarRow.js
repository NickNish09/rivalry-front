import React, { useEffect, useState } from "react";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { usePrevious } from "../../helpers/usePrevious";
import { openNotificationWithIcon } from "../../helpers/notifications";
import { isAuthenticated } from "../../services/auth";

export const RivalryStarRow = ({ rivalStarIndex, starRival, rival }) => {
  const [starCount, setStarCount] = useState(rival.stars);

  const prevStarIndex = usePrevious(rivalStarIndex);

  useEffect(() => {
    console.log("shoud I diminish one?");
    if (rivalStarIndex !== null) {
      if (prevStarIndex === rival.rival._id) {
        // if the previous index was you, you just lost a star :/
        setStarCount((prevStarCount) => prevStarCount - 1); // is destaring, so gets one less
        console.log("yes " + rival.rival.name);
      }
    }
  }, [rivalStarIndex]);

  return (
    <div className={"rivalry-like-row"}>
      {rivalStarIndex === rival.rival._id ? (
        <StarFilled
          className={"rivalry-like"}
          onClick={() => {
            if (isAuthenticated()) {
              starRival(rival.rival._id, false);
              setStarCount((prevStarCount) => prevStarCount - 1); // is destaring, so gets one less
            } else {
              openNotificationWithIcon(
                "error",
                "Not logged in",
                "You must loggin before giving a star."
              );
            }
          }}
        />
      ) : (
        <StarOutlined
          className={"rivalry-like"}
          onClick={() => {
            if (isAuthenticated()) {
              starRival(rival.rival._id, true);
              setStarCount((prevStarCount) => prevStarCount + 1); // is staring, increase value
            } else {
              openNotificationWithIcon(
                "error",
                "Not logged in",
                "You must loggin before giving a star."
              );
            }
          }}
        />
      )}
      <span className={"rivalry-likes-count"}>{starCount}</span>
    </div>
  );
};

export default RivalryStarRow;
