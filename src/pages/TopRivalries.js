import React, { useEffect, useState } from "react";
import { getTopRivalries } from "../services/rivalries";
import RivalriesList from "../components/home/RivalriesList";

const TopRivalries = () => {
  const [loading, setLoading] = useState(true);
  const [rivalries, setRivalries] = useState([]);

  useEffect(() => {
    getTopRivalries()
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
      <h2 className={"text-light mt-10"}>Top rivalries</h2>
      <RivalriesList rivalries={rivalries} loading={loading} />
    </div>
  );
};

export default TopRivalries;
