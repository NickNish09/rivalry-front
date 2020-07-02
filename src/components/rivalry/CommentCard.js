import React, { useState } from "react";
import { Card, Row, Col, Avatar, Button } from "antd";
import { LikeOutlined, CommentOutlined } from "@ant-design/icons";

const CommentCard = ({ user, comment, replies, likes }) => {
  const [showReplies, setShowReplies] = useState(false);
  return (
    <div>
      <Card className={"comment-card"}>
        <Row>
          <Col md={2}>
            <div>
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                size={"large"}
              />
            </div>
          </Col>
          <Col md={22}>
            <span className={"comment-user-nick"}>NickNish</span>
            <p>{comment}</p>
            <Row className={"interactions-row"}>
              <Button type={"link"} className={"btn-like"}>
                <LikeOutlined className={"comment-like"} />
                {likes} likes
              </Button>
              <Button
                type={"link"}
                className={"btn-like ml-10"}
                onClick={() => setShowReplies((prevValue) => !prevValue)}
              >
                <CommentOutlined className={"comment-like"} />
                {replies.length} Replies
              </Button>
            </Row>
            {replies !== undefined
              ? showReplies
                ? replies.map((reply) => (
                    <CommentCard
                      comment={reply.comment}
                      likes={"383"}
                      replies={reply.replies}
                    />
                  ))
                : null
              : null}
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default CommentCard;
