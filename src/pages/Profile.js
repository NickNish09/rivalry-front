import React, { useState } from "react";
import { Avatar, Card, Col, Row } from "antd";
import RivalriesList from "../components/home/RivalriesList";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useCurrentUser();

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
            {
              /*<RivalriesList rivalries={rivalries} loading={loading} />*/
            }
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
            {
              /*<RivalriesList rivalries={rivalries} loading={loading} />*/
            }
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
