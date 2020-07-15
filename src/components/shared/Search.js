import React, { useEffect, useRef, useState } from "react";
import { AutoComplete, Avatar, Input } from "antd";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { getRivalOptions } from "../../services/rival";

const Search = ({ isSearching }) => {
  const [options, setOptions] = useState([]);
  const inputEl = useRef(null);

  useEffect(() => {
    if (isSearching) {
      window.setTimeout(() => inputEl.current.focus(), 300);
    }
  }, [isSearching]);

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
        ref={inputEl}
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
        <Input
          prefix={<SearchOutlined className={"search-icon"} />}
          size="middle"
          placeholder="Search for a rivalry, rival..."
          allowClear
        />
      </AutoComplete>
    </div>
  );
};

export default Search;
