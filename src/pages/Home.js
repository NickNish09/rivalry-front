import React, { useEffect, useState } from "react";
import api from "../services/api";
import RivalriesList from "../components/home/RivalriesList";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const Home = () => {
  const [rivalries, setRivalries] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useCurrentUser();

  useEffect(() => {
    console.log(user);
    api
      .get("rivalries")
      .then((response) => {
        setRivalries(response.data.rivalries);
        setLoading(false);
        console.log(response.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
      });
  }, []);

  return (
    <div className={"container"}>
      <RivalriesList rivalries={rivalries} loading={loading} />
      {/*<RivalryCard*/}
      {/*  rivals={[*/}
      {/*    {*/}
      {/*      name: "Lionel Messi",*/}
      {/*      url:*/}
      {/*        "https://images.daznservices.com/di/library/GOAL/e2/a2/lionel-messi-barcelona-2019-20_6v9f1g8ktz0516nmdti9iowmc.jpg?t=-1288858400&quality=100",*/}
      {/*    },*/}
      {/*    {*/}
      {/*      name: "Cristiano Ronaldo",*/}
      {/*      url:*/}
      {/*        "https://www.lance.com.br/files/article_main/uploads/2020/01/06/5e1354f9249d1.jpeg",*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*  tags={["sports", "football", "fifa"]}*/}
      {/*/>*/}
      {/*<RivalryCard*/}
      {/*  rivals={[*/}
      {/*    {*/}
      {/*      name: "Albert Einstein",*/}
      {/*      url:*/}
      {/*        "https://s2.glbimg.com/SdHUIIqJPMfSUBMVmAE3h4RMO5g=/512x320/smart/e.glbimg.com/og/ed/f/original/2016/03/14/albert-einstein-wikipedia.jpg",*/}
      {/*    },*/}
      {/*    {*/}
      {/*      name: "Isac Newton",*/}
      {/*      url:*/}
      {/*        "https://aventurasnahistoria.uol.com.br/media/_versions/legacy/2018/12/17/capa-isaac-newton-1119743_widelg.png",*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*  tags={["science", "physics"]}*/}
      {/*/>*/}
      {/*<RivalryCard*/}
      {/*  rivals={[*/}
      {/*    {*/}
      {/*      name: "L",*/}
      {/*      url:*/}
      {/*        "https://pm1.narvii.com/7006/4efea342a8ca346449cf44d2a78dd794bb31b020r1-320-211v2_00.jpg",*/}
      {/*    },*/}
      {/*    {*/}
      {/*      name: "Kira",*/}
      {/*      url:*/}
      {/*        "https://cdn.myanimelist.net/r/360x360/images/characters/6/63870.jpg?s=f53551e17ec739e0cefba7a5717ebfae",*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*  tags={["anime", "death note"]}*/}
      {/*/>*/}
    </div>
  );
};

export default Home;
