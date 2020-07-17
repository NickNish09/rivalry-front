import React, { useEffect, useState } from "react";
import api from "../services/api";
import RivalriesList from "../components/home/RivalriesList";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { Card } from "antd";

const Home = () => {
  const [rivalries, setRivalries] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useCurrentUser();

  useEffect(() => {
    console.log(user);
    api
      .get("rivalries")
      .then((response) => {
        setRivalries(response.data.rivalries);
        setLoading(false);
        console.log(response.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
      });
  }, []);

  return (
    <div className={"container"}>
      <h2 className={"text-light mt-10"}>Most recent rivalries</h2>
      {loading ? (
        <div>
          <Card loading={true} className={"rivalry-card-placeholder"} />
          <Card loading={true} className={"rivalry-card-placeholder"} />
          <Card loading={true} className={"rivalry-card-placeholder"} />
        </div>
      ) : (
        <RivalriesList rivalries={rivalries} loading={loading} />
      )}
    </div>
  );
};

export default Home;
