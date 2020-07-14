import React from "react";
import RivalryCard from "./RivalryCard";

const RivalriesList = ({ rivalries, loading }) => {
  return (
    <div>
      {rivalries.map((rivalry) => (
        <RivalryCard
          key={rivalry._id}
          loading={loading}
          rivals={[
            {
              name: rivalry.rivals[0].name,
              url: rivalry.rivals[0].imageUrl,
            },
            {
              name: rivalry.rivals[1].name,
              url: rivalry.rivals[1].imageUrl,
            },
          ]}
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
