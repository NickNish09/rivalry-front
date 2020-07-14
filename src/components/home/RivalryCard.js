import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col, Tag } from "antd";
import RivalCard from "./RivalCard";
import {
  CloseOutlined,
  HeartOutlined,
  TwitterOutlined,
  FacebookOutlined,
  HeartFilled,
  StarOutlined,
  LinkOutlined,
  StarFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Truncate from "react-truncate-html";
import { isAuthenticated } from "../../services/auth";
import { checkIfLiked, likeRivalry } from "../../services/rivalries";
import { openNotificationWithIcon } from "../../helpers/notifications";
import { DEFAULT_PRODUCTION_URL } from "../../config/constants";
import { copyToClipboard } from "../../helpers/copyToClipboard";
import RivalsRow from "./RivalsRow";

const RivalryCard = ({
  rivals,
  tags,
  about,
  likes_count,
  rivalry_id,
  loading,
  title,
}) => {
  const [hasLikedRivalry, setHasLikedRivlary] = useState(false);
  const [likeCount, setLikeCount] = useState(likes_count);

  useEffect(() => {
    checkIfLiked(rivalry_id).then((response) => {
      console.log(response.data.hasLiked);
      setHasLikedRivlary(response.data.hasLiked);
    });
  }, []);

  const likeCard = (isLiking) => {
    // check if is liking or desliking, false to deslike
    if (isAuthenticated()) {
      // if the user is authenticated send like request
      likeRivalry(rivalry_id)
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

  return (
    <Card className={"rivalry-feed-card"} loading={loading}>
      <div className={"rivalry-card"}>
        <Row>
          <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
            <RivalsRow rivals={rivals} rivalry_id={rivalry_id} />
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
                <div>
                  <TwitterOutlined
                    className={"rivalry-icon"}
                    onClick={() =>
                      window.open(
                        `https://twitter.com/intent/tweet?text=${title} which one is better? Vote in ${DEFAULT_PRODUCTION_URL}/rivalry/${rivalry_id}`,
                        "_blank"
                      )
                    }
                  />
                  <FacebookOutlined
                    className={"rivalry-icon"}
                    onClick={() =>
                      window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=${DEFAULT_PRODUCTION_URL}/rivalry/${rivalry_id}`,
                        "_blank"
                      )
                    }
                  />
                  <LinkOutlined
                    className={"rivalry-icon mb-10"}
                    onClick={() =>
                      copyToClipboard(
                        `${DEFAULT_PRODUCTION_URL}/rivalry/${rivalry_id}`
                      )
                    }
                  />
                </div>
              </div>
              <div className={"rivalry-about-text"}>
                <Truncate
                  lines={3}
                  dangerouslySetInnerHTML={{
                    __html: about,
                  }}
                />
              </div>
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
