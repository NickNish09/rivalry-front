import React, { Fragment, useEffect, useRef, useState } from "react";
import { Card, Col, Row, Tag, Tabs, Avatar, Button, Spin } from "antd";
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
import { withRouter, Redirect } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import RivalCard from "../components/home/RivalCard";
import RivalryStarRow from "../components/home/RivalryStarRow";
import { putUpdateRivalry } from "../services/rivalries";

const { TabPane } = Tabs;
const { Meta } = Card;

const EditRivalry = ({ history, match }) => {
  const inputEl = useRef(null);
  const { tags, setTags } = useNewRivalry();
  const [loading, setLoading] = useState(false);
  const { user } = useCurrentUser();
  const [rivals, setRivals] = useState([]);
  const [isOwnerOfRivalry, setIsOwnerOfRivalry] = useState(true);
  const [currentRivalry, setCurrentRivalry] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    api
      .get(`rivalries/${match.params.rivalryId}`)
      .then((response) => {
        let rivalry = response.data.rivalry;
        if (rivalry.user._id !== user._id) {
          // do not own the rivalry, redirect
          setIsOwnerOfRivalry(false);
          history.push("/");
        } else {
          setCurrentRivalry(rivalry);
          setTags(rivalry.tags.map((tag) => tag.name));
          setRivals(rivalry.rivals);
          inputEl.current.value = rivalry.about;
          setLoading(false);
          console.log(response.data);
        }
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false);
      });
  }, [match.params.rivalryId]);

  const resetState = () => {
    setTags([]);
    setRivals([]);
    inputEl.current.value = "";
  };

  const sendUpdateRivalryRequest = () => {
    setLoading(true);
    let about = inputEl.current.value;
    console.log(about);
    console.log(tags);
    console.log(rivals);

    if (about !== "" && rivals !== [] && tags !== []) {
      putUpdateRivalry(currentRivalry._id, { about, tags })
        .then((response) => {
          openNotificationWithIcon(
            "success",
            "Rivalry Updated",
            "You sucessfully updated the rivalry"
          );
          setLoading(false);
          history.push(`/rivalry/${currentRivalry._id}`);
        })
        .catch((err) => {
          openNotificationWithIcon(
            "error",
            "Rivalry not updated",
            err.response.data.error
          );
          setLoading(false);
          console.log(err.response);
        });
    } else {
      setLoading(false);
      openNotificationWithIcon(
        "error",
        "Fill all fields",
        "Fill all fields before to create the rivalry."
      );
    }
  };

  return isOwnerOfRivalry ? (
    <div className={"container"}>
      <Card className={"rivalry-feed-card"}>
        <Row>
          <Col md={19}>
            <Row>
              {rivals.map((rival, index) => (
                <Fragment key={rival.rival._id}>
                  <Col lg={11} md={11} sm={11} xs={24}>
                    <div className={"rivalry-like-card"}>
                      <RivalCard
                        left={index % 2 === 0}
                        url={rival.rival.imageUrl}
                        name={rival.rival.name}
                        id={rival.rival._id}
                      />
                    </div>
                  </Col>
                  {index % 2 === 0 ? (
                    <Col lg={2} md={2} sm={2} xs={24}>
                      <div className={"rivalry-cross-container"}>
                        <CloseOutlined className={"rivalry-cross"} />
                      </div>
                    </Col>
                  ) : (
                    <div />
                  )}
                </Fragment>
              ))}
            </Row>
            <Row>
              <div className={"tabs-container"}>
                <div className="card-container">
                  <Tabs type="card">
                    <TabPane tab="About" key="1">
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
                  title={user.name}
                  description="author"
                />
              </Card>
              {!loading ? (
                <Button
                  className={"btn-send"}
                  onClick={sendUpdateRivalryRequest}
                  disabled={loading}
                >
                  Update Rivalry!
                </Button>
              ) : (
                <div className={"spin-container"}>
                  <Spin size="large" />
                </div>
              )}
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  ) : (
    <Redirect to={"/"} />
  );
};

export default withRouter(EditRivalry);
