import React, { useEffect, useState } from "react";
import { getRival } from "../services/rival";
import { Card } from "antd";
import RivalriesList from "../components/home/RivalriesList";

const RivalPage = ({ match }) => {
  const [rivalries, setRivalries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log(match.params.rivalId);
    getRival(match.params.rivalId)
      .then((response) => {
        setRivalries(response.data.rival.rivalries);
        setLoading(false);
        // console.log(response.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
      });
  }, [match.params.rivalId]);

  return (
    <div className={"container"}>
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

export default RivalPage;
