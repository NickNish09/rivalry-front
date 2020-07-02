import React from "react";
import RivalryCard from "../components/home/RivalryCard";

const Home = () => {
  return (
    <div className={"container"}>
      <RivalryCard
        rivals={[
          {
            name: "Lionel Messi",
            url:
              "https://images.daznservices.com/di/library/GOAL/e2/a2/lionel-messi-barcelona-2019-20_6v9f1g8ktz0516nmdti9iowmc.jpg?t=-1288858400&quality=100",
          },
          {
            name: "Cristiano Ronaldo",
            url:
              "https://www.lance.com.br/files/article_main/uploads/2020/01/06/5e1354f9249d1.jpeg",
          },
        ]}
      />
    </div>
  );
};

export default Home;
