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
import api from "../services/api";

const { TabPane } = Tabs;
const { Meta } = Card;

const RivalryPage = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [hasLikedRivalry, setHasLikedRivlary] = useState(false);
  const [rivalry, setRivalry] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    let rivalry_id = match.params.rivalryId;
    api
      .get(`rivalries/${rivalry_id}`)
      .then((response) => {
        setRivalry(response.data.rivalry);
        setLoading(false);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false);
      });
  }, []);

  return (
    <div className={"container"}>
      <Card className={"rivalry-feed-card"} loading={loading}>
        {rivalry !== null ? (
          <Row>
            <Col md={19}>
              <Row>
                <Col lg={11} md={11} sm={11} xs={24}>
                  <div className={"rivalry-like-card"}>
                    <RivalCard
                      name={rivalry.rivals[0].name}
                      left
                      url={rivalry.rivals[0].imageUrl}
                    />
                    <div>
                      <StarOutlined className={"rivalry-like"} />
                      <span className={"rivalry-likes-count"}>0</span>
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
                      name={rivalry.rivals[1].name}
                      url={rivalry.rivals[1].imageUrl}
                    />
                    <div>
                      <StarOutlined className={"rivalry-like"} />
                      <span className={"rivalry-likes-count"}>0</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <div className={"tabs-container"}>
                  <div className="card-container">
                    <Tabs type="card">
                      <TabPane tab="About" key="1">
                        <div
                          className={"text-light"}
                          dangerouslySetInnerHTML={{ __html: rivalry.about }}
                        ></div>
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
                        <CommentCard
                          comment={"Nem"}
                          replies={[]}
                          likes={"139"}
                        />
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
                  <span className={"rivalry-heart-count"}>
                    {rivalry.likes.length}
                  </span>
                </div>

                <TwitterOutlined className={"rivalry-icon mt-10 mb-10"} />
                <FacebookOutlined className={"rivalry-icon"} />
              </div>
              <Row>
                <Col>
                  <div className={""}>
                    {rivalry.tags.map((tag) => (
                      <Tag className={"rivalry-tag mb-5"} key={tag._id}>
                        {tag.name}
                      </Tag>
                    ))}
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
        ) : (
          <div />
        )}
      </Card>
    </div>
  );
};

export default RivalryPage;
