import React, { useState } from "react";
import { Input, AutoComplete, Avatar } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { getRivalOptions } from "../../services/rival";

const renderTitle = (title) => <span>{title}</span>;

const renderItem = (title, count, url) => ({
  value: [title, url],
  label: (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
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

const EditRivalName = ({ setAvatar, setRivalName }) => {
  const [options, setOptions] = useState([]);
  const formatedOptions = () => [
    {
      label: renderTitle("Rival"),
      options: options.map((option) =>
        renderItem(option.name, 0, option.imageUrl)
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
    <AutoComplete
      dropdownClassName="certain-category-search-dropdown"
      dropdownMatchSelectWidth={500}
      options={formatedOptions()}
      className={"edit-rival-name-input"}
      onChange={(e) => {
        setRivalName(e);
        if (e.length > 2) {
          updateOptionsRequest(e);
        } else {
          setOptions([]);
        }
      }}
      onSelect={(e) => {
        setAvatar(e[1]);
        setRivalName(e[0]);
      }}
    >
      <Input size="middle" placeholder="Search for a rival or create new..." />
    </AutoComplete>
  );
};

export default EditRivalName;
