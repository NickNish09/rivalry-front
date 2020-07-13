import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Row, Tag, Tabs, Avatar, Button } from "antd";
import EditRivalCard from "../components/rivalry/EditRivalCard";
import {
  CloseOutlined,
  FacebookOutlined,
  HeartOutlined,
  TwitterOutlined,
  StarOutlined,
} from "@ant-design/icons";
import "jodit";
import JoditEditor from "jodit-react";
import NewTags from "../components/rivalry/NewTags";
import { useNewRivalry } from "../contexts/NewRivalryContext";
import api from "../services/api";
import { openNotificationWithIcon } from "../helpers/notifications";
import { withRouter } from "react-router-dom";

const { TabPane } = Tabs;
const { Meta } = Card;

const NewRivalry = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const inputEl = useRef(null);
  const { tags, setTags, rivals, setRivals } = useNewRivalry();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resetState = () => {
    setTags([]);
    setRivals([]);
    inputEl.current.value = "";
  };

  const sendCreateRivalryRequest = () => {
    let about = inputEl.current.value;
    console.log(about);
    console.log(tags);
    console.log(rivals);

    if (about !== "" && rivals !== [] && tags !== []) {
      api.defaults.headers.Authorization =
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjY4NTczNDdjMDNlMjg3ODk2MDkyNCIsImlhdCI6MTU5MzM3MDI2OSwiZXhwIjoxNjc5NjgzODY5fQ.bRyUu-Ox5TGmNJlJ0nOKqEmpBJTdMEmNDoVZo5_2rKM";
      api
        .post("/rivalries", {
          about,
          rivals,
          tags,
        })
        .then((response) => {
          console.log(response.data);
          resetState();
          openNotificationWithIcon(
            "success",
            "Rivalry Created!",
            "You can share you rivalry with the rivalry link!"
          );
          history.push(`/rivalry/${response.data.rivalry._id}`);
        })
        .catch((err) => {
          openNotificationWithIcon(
            "error",
            "Error in creating rivalry",
            "Try again."
          );
          console.log(err.response);
        });
    } else {
      openNotificationWithIcon(
        "error",
        "Fill all fields",
        "Fill all fields before to create the rivalry."
      );
    }
  };
  return (
    <div className={"container"}>
      <Card className={"rivalry-feed-card"} loading={loading}>
        <Row>
          <Col md={19}>
            <Row>
              <Col lg={11} md={11} sm={11} xs={24}>
                <div className={"rivalry-like-card"}>
                  <EditRivalCard left />
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
                  <EditRivalCard />
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
                      {/*<CKEditor*/}
                      {/*  editor={ClassicEditor}*/}
                      {/*  data="<p>Hello from CKEditor 5!</p>"*/}
                      {/*  onInit={(editor) => {*/}
                      {/*    // You can store the "editor" and use when it is needed.*/}
                      {/*    console.log("Editor is ready to use!", editor);*/}
                      {/*  }}*/}
                      {/*  onChange={(event, editor) => {*/}
                      {/*    const data = editor.getData();*/}
                      {/*    console.log({ event, editor, data });*/}
                      {/*  }}*/}
                      {/*  onBlur={(event, editor) => {*/}
                      {/*    console.log("Blur.", editor);*/}
                      {/*  }}*/}
                      {/*  onFocus={(event, editor) => {*/}
                      {/*    console.log("Focus.", editor);*/}
                      {/*  }}*/}
                      {/*/>*/}
                      <JoditEditor
                        config={{
                          readonly: false, // all options from https://xdsoft.net/jodit/play.html
                          theme: "dark",
                          uploader: {
                            insertImageAsBase64URI: true,
                          },
                        }}
                        theme={"summer"}
                        ref={inputEl}
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
                <HeartOutlined className={"rivalry-icon"} />
                <span className={"rivalry-heart-count"}>0</span>
              </div>

              <TwitterOutlined className={"rivalry-icon mt-10 mb-10"} />
              <FacebookOutlined className={"rivalry-icon"} />
            </div>
            <Row>
              <Col>
                <div className={""}>
                  <NewTags />
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
              <Button className={"btn-send"} onClick={sendCreateRivalryRequest}>
                Create Rivalry!
              </Button>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default withRouter(NewRivalry);
