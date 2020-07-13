import React, { useState } from "react";
import { Card, Button, Row, Col, Tag } from "antd";
import RivalCard from "./RivalCard";
import {
  CloseOutlined,
  HeartOutlined,
  TwitterOutlined,
  FacebookOutlined,
  HeartFilled,
  StarOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const RivalryCard = ({
  rivals,
  tags,
  about,
  likes_count,
  rivalry_id,
  loading,
}) => {
  const [hasLikedRivalry, setHasLikedRivlary] = useState(false);
  return (
    <Card className={"rivalry-feed-card"} loading={loading}>
      <div className={"rivalry-card"}>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
            <Row>
              <Col lg={11} md={11} sm={11} xs={24}>
                <div className={"rivalry-like-card"}>
                  <RivalCard left url={rivals[0].url} name={rivals[0].name} />
                  <div className={"rivalry-like-row"}>
                    <StarOutlined className={"rivalry-like"} />
                    <span className={"rivalry-likes-count"}>143.3K</span>
                  </div>
                </div>
              </Col>
              <Col lg={2} md={2} sm={2} xs={24}>
                <div className={"rivalry-cross-container"}>
                  <CloseOutlined className={"rivalry-cross"} />
                </div>
              </Col>
              <Col lg={11} md={11} sm={11} xs={24}>
                <div className={"rivalry-like-card"}>
                  <RivalCard url={rivals[1].url} name={rivals[1].name} />
                  <div>
                    <StarOutlined className={"rivalry-like"} />
                    <span className={"rivalry-likes-count"}>112.9k</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
            <div className={"rivalry-about-card"}>
              <div className={"rivalry-icons-row"}>
                <div
                  className={"d-flex align-items-center justify-content-center"}
                >
                  {hasLikedRivalry ? (
                    <HeartFilled
                      className={"rivalry-icon"}
                      onClick={() => setHasLikedRivlary(false)}
                    />
                  ) : (
                    <HeartOutlined
                      className={"rivalry-icon"}
                      onClick={() => setHasLikedRivlary(true)}
                    />
                  )}
                  <span className={"rivalry-heart-count"}>{likes_count}</span>
                </div>
                <div>
                  <TwitterOutlined className={"rivalry-icon"} />
                  <FacebookOutlined className={"rivalry-icon"} />
                </div>
              </div>
              <div
                className={"rivalry-about-text"}
                dangerouslySetInnerHTML={{ __html: about }}
              ></div>
              {/*<p className={"rivalry-time"}>3 hours ago</p>*/}
              <div className={"rivalry-tags"}>
                {tags.map((tag, index) => (
                  <Tag key={index.toString()} className={"rivalry-tag"}>
                    {tag.name}
                  </Tag>
                ))}
              </div>
              <Button className={"rivalry-keep-reading-btn"}>
                <Link to={`/rivalry/${rivalry_id}`}>Keep Reading</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default RivalryCard;
