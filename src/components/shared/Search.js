import React, { useState } from "react";
import { AutoComplete, Avatar, Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { getRivalOptions } from "../../services/rival";

const Search = () => {
  const [options, setOptions] = useState([]);
  const renderTitle = (title) => <span>{title}</span>;

  const renderItem = (title, count, url, id) => ({
    value: [title, url],
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        key={id}
      >
        <div>
          <Avatar src={url} size={"large"} className={"mr-5"} />
          {title}
        </div>
        <span>
          <CloseOutlined /> {count}
        </span>
      </div>
    ),
  });

  const formatedOptions = () => [
    {
      label: renderTitle("Rivalries"),
      options: options.map((option) =>
        renderItem(option.name, 0, option.imageUrl, option._id)
      ),
    },
  ];

  const updateOptionsRequest = (rivalName) => {
    getRivalOptions(rivalName)
      .then((response) => {
        setOptions(response.data.rivals);
        // console.log(response.data);
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <div className={"search-container"}>
      <AutoComplete
        dropdownClassName="search-dropdown"
        options={formatedOptions()}
        className={"search-input"}
        onChange={(e) => {
          if (e.length > 2) {
            updateOptionsRequest(e);
          } else {
            setOptions([]);
          }
          console.log(e);
        }}
        onSelect={(e) => {
          console.log(e);
        }}
      >
        <Input size="middle" placeholder="Search for a rivalry, rival..." />
      </AutoComplete>
    </div>
  );
};

export default Search;
