import React, { useState } from "react";
import { Col, Row } from "antd";
import RivalCard from "./RivalCard";
import { CloseOutlined, StarFilled, StarOutlined } from "@ant-design/icons";

export const RivalsRow = ({ rivals, rivalry_id }) => {
  const [rivalStarIndex, setRivalStarIndex] = useState(null);

  const starRival = (rivalIndex, rivalId, rivalryId, isStaring) => {
    console.log(rivalId, rivalryId);
    if (isStaring)
      // is staring, not destaring
      setRivalStarIndex(rivalIndex);
    else setRivalStarIndex(null);
  };

  return (
    <Row>
      {rivals.map((rival, index) => (
        <>
          <Col lg={11} md={11} sm={11} xs={24}>
            <div className={"rivalry-like-card"}>
              <RivalCard
                left={index % 2 === 0}
                url={rival.rival.imageUrl}
                name={rival.rival.name}
              />
              <div className={"rivalry-like-row"}>
                {rivalStarIndex === index ? (
                  <StarFilled
                    className={"rivalry-like"}
                    onClick={() =>
                      starRival(index, rival.rival._id, rivalry_id, false)
                    }
                  />
                ) : (
                  <StarOutlined
                    className={"rivalry-like"}
                    onClick={() =>
                      starRival(index, rival.rival._id, rivalry_id, true)
                    }
                  />
                )}
                <span className={"rivalry-likes-count"}>{rival.stars}</span>
              </div>
            </div>
          </Col>
          {index % 2 === 0 ? (
            <Col lg={2} md={2} sm={2} xs={24}>
              <div className={"rivalry-cross-container"}>
                <CloseOutlined className={"rivalry-cross"} />
              </div>
            </Col>
          ) : (
            <div />
          )}
        </>
      ))}
    </Row>
  );
};

export default RivalsRow;
