import React from "react";
import RivalryCard from "./RivalryCard";

const RivalriesList = ({ rivalries }) => {
  return (
    <div>
      {rivalries.map((rivalry) => (
        <RivalryCard
          rivals={[
            {
              name: rivalry.rivals[0].name,
              url:
                "https://images.daznservices.com/di/library/GOAL/e2/a2/lionel-messi-barcelona-2019-20_6v9f1g8ktz0516nmdti9iowmc.jpg?t=-1288858400&quality=100",
            },
            {
              name: rivalry.rivals[1].name,
              url:
                "https://www.lance.com.br/files/article_main/uploads/2020/01/06/5e1354f9249d1.jpeg",
            },
          ]}
          tags={["sports", "football", "fifa"]}
          about={rivalry.about}
          likes_count={`${rivalry.likes.length}`}
          rivalry_id={rivalry._id}
        />
      ))}
    </div>
  );
};

export default RivalriesList;
