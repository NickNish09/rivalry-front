import React, { useState } from "react";
import { Input, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const MakeComment = () => {
  const [comment, setComment] = useState("");

  const sendCreateCommentRequest = () => {
    setComment("");
  };

  return (
    <div className={"d-grid"}>
      <TextArea
        placeholder="Make a comment..."
        className={"comment-text-area"}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        autoSize={{ minRows: 3, maxRows: 5 }}
      />
      <Button
        disabled={comment.length < 3}
        className={"send-btn"}
        onClick={sendCreateCommentRequest}
      >
        <SendOutlined className={"comment-like"} />
        Send
      </Button>
    </div>
  );
};

export default MakeComment;
