"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import style from "./Poster.module.css";
import { Switch } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

export default function PosterComponent({ data, hero }) {
  const [heroesOnTeam, setHeroesOnTeam] = useState([]);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const savedHeroes = JSON.parse(localStorage.getItem("heroes")) || [];
    setHeroesOnTeam(savedHeroes);
  }, []);

  const onClickAddRemoveToTeam = (status) => {
    let updatedList = [...heroesOnTeam]; 

    if (status) {
      const exists = updatedList.some((h) => h.id == id);
      if (!exists) {
        updatedList.push(hero);
      }
    } else {
      updatedList = updatedList.filter((h) => h.id != id);
    }

    localStorage.setItem("heroes", JSON.stringify(updatedList));
    setHeroesOnTeam(updatedList);
  };

  const isCurrentlyOnTeam = heroesOnTeam.some((h) => h.id == id);

  return (
    <div className={style.container}>
      <img src={data?.images?.lg} className={style.image} />

      <div className={style.detail}>
        <div className={`${style.title} obelix`}>{data?.name}</div>
        <div className={style.buttons}>
          <div className={style.text}>Add to team</div>
          <div className={style.switch}>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              onChange={onClickAddRemoveToTeam}
              checked={isCurrentlyOnTeam} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
