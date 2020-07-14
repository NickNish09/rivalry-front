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
  StarFilled,
  LinkOutlined,
} from "@ant-design/icons";
import CommentCard from "../components/rivalry/CommentCard";
import MakeComment from "../components/rivalry/MakeComment";
import api from "../services/api";
import { checkIfLiked, likeRivalry } from "../services/rivalries";
import { isAuthenticated } from "../services/auth";
import { openNotificationWithIcon } from "../helpers/notifications";
import { DEFAULT_PRODUCTION_URL } from "../config/constants";
import { copyToClipboard } from "../helpers/copyToClipboard";
import RivalsRow from "../components/home/RivalsRow";

const { TabPane } = Tabs;
const { Meta } = Card;

const RivalryPage = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [hasLikedRivalry, setHasLikedRivlary] = useState(false);
  const [rivalry, setRivalry] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const [rivalStarIndex, setRivalStarIndex] = useState(null); // index of wich rival the person stared

  const likeCard = (isLiking) => {
    // check if is liking or desliking, false to deslike
    if (isAuthenticated()) {
      // if the user is authenticated send like request
      likeRivalry(rivalry._id)
        .then((response) => {
          if (isLiking) {
            setLikeCount((prevLikeCount) => parseInt(prevLikeCount) + 1);
          } else {
            setLikeCount((prevLikeCount) => parseInt(prevLikeCount) - 1);
          }
          setHasLikedRivlary(isLiking);
        })
        .catch((err) => {
          openNotificationWithIcon(
            "error",
            "Error liking rivalry",
            err.response.data.error
          );
          console.log(err.response);
        });
    } else {
      openNotificationWithIcon(
        "error",
        "Error liking rivalry",
        "You must be logged in to like a rivalry"
      );
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    let rivalry_id = match.params.rivalryId;
    checkIfLiked(rivalry_id).then((response) => {
      console.log(response.data.hasLiked);
      setHasLikedRivlary(response.data.hasLiked);
    });
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

  useEffect(() => {
    if (rivalry !== null) {
      setLikeCount(rivalry.likes.length);
    }
    console.log(rivalry);
  }, [rivalry]);

  const starRival = (rivalIndex, rivalId, rivalryId, isStaring) => {
    if (isStaring)
      // is staring, not destaring
      setRivalStarIndex(rivalIndex);
    else setRivalStarIndex(null);
  };

  return (
    <div className={"container"}>
      <Card className={"rivalry-feed-card"} loading={loading}>
        {rivalry !== null ? (
          <Row>
            <Col md={19}>
              <RivalsRow rivalry_id={rivalry.id} rivals={rivalry.rivals} />
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
                        {/*<CommentCard*/}
                        {/*  comment={"LIONEL >>> CR7 (5 bolas de ouro)"}*/}
                        {/*  replies={[*/}
                        {/*    {*/}
                        {/*      comment: "Ta na disney",*/}
                        {/*      replies: [*/}
                        {/*        { comment: "Ta na eurodisney", replies: [] },*/}
                        {/*      ],*/}
                        {/*    },*/}
                        {/*    { comment: "Ta na disney", replies: [] },*/}
                        {/*  ]}*/}
                        {/*  likes={"1.4k"}*/}
                        {/*/>*/}
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
                      onClick={() => likeCard(false)}
                    />
                  ) : (
                    <HeartOutlined
                      className={"rivalry-icon"}
                      onClick={() => likeCard(true)}
                    />
                  )}
                  <span className={"rivalry-heart-count"}>{likeCount}</span>
                </div>

                <TwitterOutlined
                  className={"rivalry-icon mt-10 mb-10"}
                  onClick={() =>
                    window.open(
                      `https://twitter.com/intent/tweet?text=${rivalry.title} which one is better? Vote in ${DEFAULT_PRODUCTION_URL}/rivalry/${rivalry._id}`,
                      "_blank"
                    )
                  }
                />
                <FacebookOutlined
                  className={"rivalry-icon mb-10"}
                  onClick={() =>
                    window.open(
                      `https://www.facebook.com/sharer/sharer.php?u=${DEFAULT_PRODUCTION_URL}/rivalry/${rivalry._id}`,
                      "_blank"
                    )
                  }
                />
                <LinkOutlined
                  className={"rivalry-icon mb-10"}
                  onClick={() =>
                    copyToClipboard(
                      `${DEFAULT_PRODUCTION_URL}/rivalry/${rivalry._id}`
                    )
                  }
                />
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
