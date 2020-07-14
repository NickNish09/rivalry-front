import React from "react";
import RivalryCard from "./RivalryCard";

const RivalriesList = ({ rivalries, loading }) => {
  return (
    <div>
      {rivalries.map((rivalry) => (
        <RivalryCard
          key={rivalry._id}
          loading={loading}
          rivals={rivalry.rivals}
          tags={rivalry.tags}
          about={rivalry.about}
          likes_count={`${rivalry.likes.length}`}
          rivalry_id={rivalry._id}
          title={rivalry.title}
        />
      ))}
    </div>
  );
};

export default RivalriesList;
