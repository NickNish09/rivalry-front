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
              name: rivalry.rivals[0].rival.name,
              url: rivalry.rivals[0].rival.imageUrl,
              _id: rivalry.rivals[0].rival._id,
              stars: rivalry.rivals[0].stars,
            },
            {
              name: rivalry.rivals[1].rival.name,
              url: rivalry.rivals[1].rival.imageUrl,
              _id: rivalry.rivals[1].rival._id,
              stars: rivalry.rivals[1].stars,
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
