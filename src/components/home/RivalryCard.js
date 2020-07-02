import React, { useState } from "react";
import { Card, Button } from "antd";
import RivalCard from "./RivalCard";
import { CloseOutlined } from "@ant-design/icons";

const RivalryCard = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Card className={"rivalry-feed-card"} loading={loading}>
      <div className={"rivalry-card"}>
        <div className={"rivalry-rivals"}>
          <RivalCard
            left
            url={
              "https://images.daznservices.com/di/library/GOAL/e2/a2/lionel-messi-barcelona-2019-20_6v9f1g8ktz0516nmdti9iowmc.jpg?t=-1288858400&quality=100"
            }
            name={"Lionel Messi"}
          />
          <CloseOutlined className={"rivalry-cross"} />
          <RivalCard
            url={
              "https://www.lance.com.br/files/article_main/uploads/2020/01/06/5e1354f9249d1.jpeg"
            }
            name={"Cristiano Ronaldo"}
          />
        </div>
        <div className={"rivalry-about-card"}>
          <p className={"rivalry-time"}>3 hours ago</p>
        </div>
      </div>
      <div className={"rivalry-about-card"}>
        <p className={"rivalry-about-text"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ligula
          erat, aliquet ac lectus eu, ultrices viverra ex. Maecenas erat metus,
          auctor vitae vestibulum eu, auctor et nunc. Quisque auctor auctor
          purus. Duis aliquet mi ut auctor sollicitudin. Maecenas nec tortor a
          ipsum hendrerit pharetra. Nulla cursus nulla et efficitur blandit.
          Nunc aliquam justo facilisis, auctor libero non, convallis turpis.
          Vestibulum eleifend neque quis ante lacinia tristique. Nullam tempor,
          nibh vel facilisis posuere, magna augue tincidunt magna, nec sodales
          odio est a dui. Duis ipsum nulla, commodo a volutpat malesuada,
          pharetra at orci. Donec dapibus mi non pulvinar sodales. Vivamus ut
          aliquam magna. Curabitur vestibulum enim vel venenatis iaculis...
        </p>
        <Button className={"rivalry-keep-reading-btn"}>Keep Reading</Button>
      </div>
    </Card>
  );
};

export default RivalryCard;
