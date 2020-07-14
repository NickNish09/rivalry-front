import React, { useEffect, useState } from "react";
import { getTrendingRivalries } from "../services/rivalries";
import RivalriesList from "../components/home/RivalriesList";

const Trending = () => {
  const [loading, setLoading] = useState(true);
  const [rivalries, setRivalries] = useState([]);

  useEffect(() => {
    getTrendingRivalries()
      .then((response) => {
        setRivalries(response.data.rivalries);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false);
      });
  }, []);

  return (
    <div className={"container"}>
      <RivalriesList rivalries={rivalries} loading={loading} />
    </div>
  );
};

export default Trending;
