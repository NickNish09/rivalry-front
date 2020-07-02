import React, { useEffect, useState } from "react";
import { Card, Col, Row, Tag, Tabs, Avatar } from "antd";
import RivalCard from "../components/home/RivalCard";
import {
  CloseOutlined,
  FacebookOutlined,
  HeartFilled,
  HeartOutlined,
  TwitterOutlined,
  StarOutlined,
} from "@ant-design/icons";
import CommentCard from "../components/rivalry/CommentCard";
import MakeComment from "../components/rivalry/MakeComment";

const { TabPane } = Tabs;
const { Meta } = Card;

const RivalryPage = () => {
  const [loading, setLoading] = useState(false);
  const [hasLikedRivalry, setHasLikedRivlary] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={"container"}>
      <Card className={"rivalry-feed-card"} loading={loading}>
        <Row>
          <Col md={19}>
            <Row>
              <Col lg={11} md={11} sm={11} xs={24}>
                <div className={"rivalry-like-card"}>
                  <RivalCard
                    name={"Lionel Messi"}
                    left
                    url={
                      "https://images.daznservices.com/di/library/GOAL/e2/a2/lionel-messi-barcelona-2019-20_6v9f1g8ktz0516nmdti9iowmc.jpg?t=-1288858400&quality=100"
                    }
                  />
                  <div>
                    <StarOutlined className={"rivalry-like"} />
                    <span className={"rivalry-likes-count"}>134.4k</span>
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
                  <RivalCard
                    name={"Cristiano Ronaldo"}
                    url={
                      "https://www.lance.com.br/files/article_main/uploads/2020/01/06/5e1354f9249d1.jpeg"
                    }
                  />
                  <div>
                    <StarOutlined className={"rivalry-like"} />
                    <span className={"rivalry-likes-count"}>112.9k</span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <div className={"tabs-container"}>
                <div className="card-container">
                  <Tabs type="card">
                    <TabPane tab="About" key="1">
                      <p className={"text-light"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc magna quam, imperdiet in semper at, malesuada sed
                        lacus. Curabitur tempus, sem a venenatis molestie, dui
                        massa tincidunt velit, non varius felis enim nec eros.
                        Integer accumsan risus quis velit imperdiet, sed
                        convallis justo varius. Cras gravida libero nec
                        imperdiet vulputate. Fusce pulvinar elementum vehicula.
                        Pellentesque sed enim consequat, feugiat augue in,
                        imperdiet elit. Curabitur interdum ipsum non scelerisque
                        convallis. Morbi molestie est at mi ornare luctus.
                        Mauris elit nibh, dictum quis magna ullamcorper,
                        condimentum congue diam. Nullam lorem ligula, euismod
                        vitae ante ac, efficitur egestas elit. Fusce ac dolor
                        non arcu auctor ullamcorper. Nulla lorem neque, pretium
                        eget tempus vel, bibendum ac ante.
                      </p>
                      <p className={"text-light"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc magna quam, imperdiet in semper at, malesuada sed
                        lacus. Curabitur tempus, sem a venenatis molestie, dui
                        massa tincidunt velit, non varius felis enim nec eros.
                        Integer accumsan risus quis velit imperdiet, sed
                        convallis justo varius. Cras gravida libero nec
                        imperdiet vulputate. Fusce pulvinar elementum vehicula.
                        Pellentesque sed enim consequat, feugiat augue in,
                        imperdiet elit. Curabitur interdum ipsum non scelerisque
                        convallis. Morbi molestie est at mi ornare luctus.
                        Mauris elit nibh, dictum quis magna ullamcorper,
                        condimentum congue diam. Nullam lorem ligula, euismod
                        vitae ante ac, efficitur egestas elit. Fusce ac dolor
                        non arcu auctor ullamcorper. Nulla lorem neque, pretium
                        eget tempus vel, bibendum ac ante.
                      </p>
                      <p className={"text-light"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc magna quam, imperdiet in semper at, malesuada sed
                        lacus. Curabitur tempus, sem a venenatis molestie, dui
                        massa tincidunt velit, non varius felis enim nec eros.
                        Integer accumsan risus quis velit imperdiet, sed
                        convallis justo varius. Cras gravida libero nec
                        imperdiet vulputate. Fusce pulvinar elementum vehicula.
                        Pellentesque sed enim consequat, feugiat augue in,
                        imperdiet elit. Curabitur interdum ipsum non scelerisque
                        convallis. Morbi molestie est at mi ornare luctus.
                        Mauris elit nibh, dictum quis magna ullamcorper,
                        condimentum congue diam. Nullam lorem ligula, euismod
                        vitae ante ac, efficitur egestas elit. Fusce ac dolor
                        non arcu auctor ullamcorper. Nulla lorem neque, pretium
                        eget tempus vel, bibendum ac ante.
                      </p>
                    </TabPane>
                    <TabPane tab="Comments" key="2">
                      <MakeComment />
                      <CommentCard
                        comment={"LIONEL >>> CR7 (5 bolas de ouro)"}
                        replies={[
                          {
                            comment: "Ta na disney",
                            replies: [
                              { comment: "Ta na eurodisney", replies: [] },
                            ],
                          },
                          { comment: "Ta na disney", replies: [] },
                        ]}
                        likes={"1.4k"}
                      />
                      <CommentCard comment={"Nem"} replies={[]} likes={"139"} />
                    </TabPane>
                    <TabPane tab="Other" key="3">
                      <p>Content of Tab Pane 3</p>
                      <p>Content of Tab Pane 3</p>
                      <p>Content of Tab Pane 3</p>
                    </TabPane>
                  </Tabs>
                </div>
              </div>
            </Row>
          </Col>
          <Col md={5}>
            <div className={"rivalry-icons-col"}>
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
                <span className={"rivalry-heart-count"}>295.5k</span>
              </div>

              <TwitterOutlined className={"rivalry-icon mt-10 mb-10"} />
              <FacebookOutlined className={"rivalry-icon"} />
            </div>
            <Row>
              <Col>
                <div className={""}>
                  <Tag className={"rivalry-tag mb-5"}>Sports</Tag>
                  <Tag className={"rivalry-tag mb-5"}>Football</Tag>
                  <Tag className={"rivalry-tag mb-5"}>Fifa</Tag>
                  <Tag className={"rivalry-tag mb-5"}>Soccer</Tag>
                </div>
              </Col>
            </Row>
            <Row>
              <Card className={"author-card"}>
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title="NickNish"
                  description="author"
                />
              </Card>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default RivalryPage;
