import React, { useState } from "react";
import { Card, Button, Row, Col } from "antd";
import RivalCard from "./RivalCard";
import { CloseOutlined } from "@ant-design/icons";

const RivalryCard = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Card className={"rivalry-feed-card"} loading={loading}>
      <div className={"rivalry-card"}>
        <Row>
          <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
            <Row>
              <Col lg={11} md={11} sm={11} xs={24}>
                <RivalCard
                  left
                  url={
                    "https://images.daznservices.com/di/library/GOAL/e2/a2/lionel-messi-barcelona-2019-20_6v9f1g8ktz0516nmdti9iowmc.jpg?t=-1288858400&quality=100"
                  }
                  name={"Lionel Messi"}
                />
              </Col>
              <Col lg={2} md={2} sm={2} xs={24}>
                <div className={"rivalry-cross-container"}>
                  <CloseOutlined className={"rivalry-cross"} />
                </div>
              </Col>
              <Col lg={11} md={11} sm={11} xs={24}>
                <RivalCard
                  url={
                    "https://www.lance.com.br/files/article_main/uploads/2020/01/06/5e1354f9249d1.jpeg"
                  }
                  name={"Cristiano Ronaldo"}
                />
              </Col>
            </Row>
          </Col>
          <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
            <div className={"rivalry-about-card"}>
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
