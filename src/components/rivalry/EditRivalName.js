import React from "react";
import { Input, AutoComplete, Avatar } from "antd";
import { CloseOutlined } from "@ant-design/icons";

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

const options = [
  {
    label: renderTitle("Rival"),
    options: [
      renderItem(
        "Cristiano Ronaldo",
        10000,
        "https://www.lance.com.br/files/article_main/uploads/2020/01/06/5e1354f9249d1.jpeg"
      ),
      renderItem(
        "Lionel Messi",
        10600,
        "https://images.daznservices.com/di/library/GOAL/e2/a2/lionel-messi-barcelona-2019-20_6v9f1g8ktz0516nmdti9iowmc.jpg?t=-1288858400&quality=100"
      ),
    ],
  },
];

const EditRivalName = ({ setAvatar }) => (
  <AutoComplete
    dropdownClassName="certain-category-search-dropdown"
    dropdownMatchSelectWidth={500}
    options={options}
    className={"edit-rival-name-input"}
    onChange={(e) => console.log(e)}
    onSelect={(e) => setAvatar(e[1])}
  >
    <Input size="middle" placeholder="Search for a rival or create new..." />
  </AutoComplete>
);

export default EditRivalName;
