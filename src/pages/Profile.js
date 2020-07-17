import React, { useEffect, useState } from "react";
import { Avatar, Card, Col, Row } from "antd";
import RivalriesList from "../components/home/RivalriesList";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import {
  getRivalriesByUser,
  getRivalriesUserLiked,
} from "../services/rivalries";
import { CloseOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useCurrentUser();
  const [userRivalries, setUserRivalries] = useState([]);
  const [likedRivalries, setLikedRivalries] = useState([]);

  useEffect(() => {
    getRivalriesByUser()
      .then((response) => {
        setUserRivalries(response.data.rivalries);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
        setLoading(false);
      });

    getRivalriesUserLiked()
      .then((response) => {
        setLikedRivalries(response.data.rivalries);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
        setLoading(false);
      });
  }, []);

  const renderRivalry = (rivalry) => (
    <div key={rivalry._id} className={"mini-rivalry-container"}>
      <div>
        <Avatar
          src={rivalry.rivals[0].rival.imageUrl}
          size={"large"}
          className={"mr-10"}
        />
        <CloseOutlined className={"text-light"} />
        <Avatar
          src={rivalry.rivals[1].rival.imageUrl}
          size={"large"}
          className={"ml-10 mr-10"}
        />
        <Link to={`/rivalry/${rivalry._id}`}>
          <span className={"text-light"}>{rivalry.title}</span>
        </Link>
      </div>
    </div>
  );

  const renderSideRivalry = (rivalry) => (
    <div key={rivalry._id} className={"mini-rivalry-container side-rivalry"}>
      <div className={"mb-10"}>
        <Avatar
          src={rivalry.rivals[0].rival.imageUrl}
          size={"large"}
          className={"mr-10"}
        />
        <CloseOutlined className={"text-light"} />
        <Avatar
          src={rivalry.rivals[1].rival.imageUrl}
          size={"large"}
          className={"ml-10 mr-10"}
        />
      </div>
      <Link to={`/rivalry/${rivalry._id}`}>
        <p className={"text-light"}>{rivalry.title}</p>
      </Link>
      <Link to={`/rivalry/${rivalry._id}/edit`} className={"edit-rivalry-link"}>
        <span className={"edit-rivalry-button"}>Edit</span>
      </Link>
    </div>
  );

  return (
    <div className={"container"}>
      <Row>
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
          <h2 className={"text-light mt-10"}>Liked Rivalries</h2>
          {loading ? (
            <div>
              <Card loading={true} className={"rivalry-card-placeholder"} />
              <Card loading={true} className={"rivalry-card-placeholder"} />
              <Card loading={true} className={"rivalry-card-placeholder"} />
            </div>
          ) : (
            likedRivalries.map((rivalry) => renderRivalry(rivalry))
          )}
        </Col>
        <Col xxl={1} xl={1} lg={1} md={24} sm={24} xs={24}></Col>
        <Col xxl={7} xl={7} lg={7} md={24} sm={24} xs={24}>
          <h2 className={"text-light mt-10"}>Profile</h2>
          <Card className={"profile-card"}>
            <div className={"profile-info"}>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <p className={"profile-name"}>{user.name}</p>
            </div>
          </Card>
          <h2 className={"text-light mt-10"}>Your Rivalries</h2>
          {loading ? (
            <div>
              <Card loading={true} className={"rivalry-card-placeholder"} />
              <Card loading={true} className={"rivalry-card-placeholder"} />
              <Card loading={true} className={"rivalry-card-placeholder"} />
            </div>
          ) : (
            userRivalries.map((rivalry) => renderSideRivalry(rivalry))
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
