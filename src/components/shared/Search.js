import React, { useEffect, useRef, useState } from "react";
import { AutoComplete, Avatar, Input } from "antd";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { getAllSearch } from "../../services/search";

const Search = ({ isSearching }) => {
  const [options, setOptions] = useState([{ rivalries: [], rivals: [] }]);
  const inputEl = useRef(null);

  useEffect(() => {
    if (isSearching) {
      window.setTimeout(() => inputEl.current.focus(), 300);
    }
  }, [isSearching]);

  const renderTitle = (title) => <span>{title}</span>;

  const renderItem = (title, count, url, id) => ({
    value: [title, id, "rival"],
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        key={id}
      >
        <div>
          <Avatar src={url} size={"large"} className={"mr-10"} />
          {title}
        </div>
        <span>
          <CloseOutlined /> {count}
        </span>
      </div>
    ),
  });

  const renderRivalry = (title, count, url1, url2, id) => ({
    value: [title, id, "rivalry"],
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        key={id}
      >
        <div>
          <Avatar src={url1} size={"large"} className={"mr-10"} />
          <CloseOutlined className={"text-light"} />
          <Avatar src={url2} size={"large"} className={"ml-10 mr-10"} />
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
      options:
        options.rivalries !== undefined
          ? options.rivalries.map((option) =>
              renderRivalry(
                option.title,
                0,
                option.rivals[0].rival.imageUrl,
                option.rivals[1].rival.imageUrl,
                option._id
              )
            )
          : [],
    },
    {
      label: renderTitle("Rivals"),
      options:
        options.rivals !== undefined
          ? options.rivals.map((option) =>
              renderItem(option.name, 0, option.imageUrl, option._id)
            )
          : [],
    },
  ];

  const updateOptionsRequest = (query) => {
    getAllSearch(query)
      .then((response) => {
        setOptions(response.data);
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
