import React, { useState, Fragment, useEffect } from "react";
import { Col, Row } from "antd";
import RivalCard from "./RivalCard";
import { CloseOutlined, StarFilled, StarOutlined } from "@ant-design/icons";
import { postStarRival } from "../../services/rival";
import { getRivalStared } from "../../services/rivalries";

export const RivalsRow = ({ rivals, rivalry_id }) => {
  const [rivalStarIndex, setRivalStarIndex] = useState(null);

  useEffect(() => {
    // get the id of rival stared from api
    getRivalStared(rivalry_id)
      .then((response) => {
        console.log(response.data);
        setRivalStarIndex(response.data.rival);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const starRival = (rivalId, rivalryId, isStaring) => {
    console.log(rivalId, rivalryId);
    postStarRival(rivalId, rivalryId)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
    if (isStaring)
      // is staring, not destaring
      setRivalStarIndex(rivalId);
    else setRivalStarIndex(null);
  };

  return (
    <Row>
      {rivals.map((rival, index) => (
        <Fragment key={rival.rival._id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <div className={"rivalry-like-card"}>
              <RivalCard
                left={index % 2 === 0}
                url={rival.rival.imageUrl}
                name={rival.rival.name}
              />
              <div className={"rivalry-like-row"}>
                {rivalStarIndex === rival.rival._id ? (
                  <StarFilled
                    className={"rivalry-like"}
                    onClick={() =>
                      starRival(rival.rival._id, rivalry_id, false)
                    }
                  />
                ) : (
                  <StarOutlined
                    className={"rivalry-like"}
                    onClick={() => starRival(rival.rival._id, rivalry_id, true)}
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
        </Fragment>
      ))}
    </Row>
  );
};

export default RivalsRow;
