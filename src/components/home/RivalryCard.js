import React, { useState } from "react";
import { Card, Button, Row, Col, Tag } from "antd";
import RivalCard from "./RivalCard";
import {
  CloseOutlined,
  HeartOutlined,
  TwitterOutlined,
  FacebookOutlined,
  LikeOutlined,
} from "@ant-design/icons";

const RivalryCard = ({ rivals, tags }) => {
  const [loading, setLoading] = useState(false);
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
                    <LikeOutlined className={"rivalry-like"} />
                    <span className={"rivalry-likes-count"}>134.3k</span>
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
                    <LikeOutlined className={"rivalry-like"} />
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
                  <HeartOutlined className={"rivalry-icon"} />
                  <span className={"rivalry-heart-count"}>295.5k</span>
                </div>
                <div>
                  <TwitterOutlined className={"rivalry-icon"} />
                  <FacebookOutlined className={"rivalry-icon"} />
                </div>
              </div>
              <p className={"rivalry-about-text"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                ligula erat, aliquet ac lectus eu, ultrices viverra ex. Maecenas
                erat metus, auctor vitae vestibulum eu, auctor et nunc. Quisque
                auctor auctor purus. Duis aliquet mi ut auctor sollicitudin.
                Maecenas nec tortor a ipsum hendrerit pharetra. Nulla cursus
                nulla et efficitur blandit. Nunc aliquam justo facilisis, auctor
                libero non, convallis turpis...
              </p>
              <p className={"rivalry-time"}>3 hours ago</p>
              <div className={"rivalry-tags"}>
                <Tag className={"rivalry-tag"}>sports</Tag>
                <Tag className={"rivalry-tag"}>football</Tag>
                <Tag className={"rivalry-tag"}>fifa</Tag>
              </div>
              <Button className={"rivalry-keep-reading-btn"}>
                Keep Reading
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default RivalryCard;
