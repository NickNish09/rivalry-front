import React, { useEffect, useState } from "react";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { usePrevious } from "../../helpers/usePrevious";

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
            starRival(rival.rival._id, false);
            setStarCount((prevStarCount) => prevStarCount - 1); // is destaring, so gets one less
          }}
        />
      ) : (
        <StarOutlined
          className={"rivalry-like"}
          onClick={() => {
            starRival(rival.rival._id, true);
            setStarCount((prevStarCount) => prevStarCount + 1); // is staring, increase value
          }}
        />
      )}
      <span className={"rivalry-likes-count"}>{starCount}</span>
    </div>
  );
};

export default RivalryStarRow;
