"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import style from "./Heroes.module.css";

import "animate.css";
import { Switch } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

export default function HeroesComponent({ hero }) {
  const [showDetail, setShowDetail] = useState(false);
  const router = useRouter();

  const changeRoute = () => {
    router.push("/details/" + hero.id);
  };

  const showDetailCard = (status: boolean) => {
    setShowDetail(status);
  };

  const onClickAddRemoveToTeam = (status) => {
    if (status) {
      let data = [];
      let newEntry = true;
      let heroes = JSON.parse(localStorage.getItem("heroes")) || [];
      // console.log(heroes);

      heroes.forEach((dbhero) => {
        if (dbhero.id == hero.id) {
          newEntry = false;
          return;
        }
      });

      if (heroes !== null) {
        data.push(...heroes);
      }
      if(newEntry){
        data.push(hero);
      }

      localStorage.setItem("heroes", JSON.stringify(data));
    }
  };

  return (
    <div
      onMouseLeave={() => showDetailCard(false)}
      className={style.img_container}
    >
      <img src={hero.images.lg} onClick={changeRoute} />

      <div
        className={`${style.overlay_detail} ${showDetail ? style.show : ""}`}
      >
        <div className={style.show_list}>
          <div className={style.title}>{hero.name}</div>
          <div className={style.add_team}>
            <div className={style.text}>Add to team</div>
            <div className={style.switch}>
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                onChange={onClickAddRemoveToTeam}
                // defaultChecked
              />
            </div>
          </div>
          <div className={style.contents}>
            <div className={style.list}>
              Intelligence : {hero?.powerstats?.intelligence}
            </div>
            <div className={style.list}>
              strength : {hero?.powerstats?.strength}
            </div>
            <div className={style.list}>Speed : {hero?.powerstats?.speed}</div>
            <div className={style.list}>
              Durability : {hero?.powerstats?.durability}
            </div>
            <div className={style.list}>Power : {hero?.powerstats?.power}</div>
            <div className={style.list}>
              Combat : {hero?.powerstats?.combat}
            </div>
          </div>
        </div>
      </div>

      <div className={style.content}>
        {showDetail ? "" : <div className={style.name}>{hero.name}</div>}
        <div className={style.team}>
          {showDetail ? (
            <></>
          ) : (
            <>
              <div className={style.text}>Add to team</div>
              <div className={style.switch}>
                <Switch
                  checkedChildren={<CheckOutlined />}
                  unCheckedChildren={<CloseOutlined />}
                  onChange={onClickAddRemoveToTeam}
                  // defaultChecked
                />
              </div>
            </>
          )}
        </div>
        <div className={style.rot_button}>
          <img
            onMouseEnter={() => showDetailCard(true)}
            className={style.detail_icon}
            src={"/details.svg"}
            width="25px"
          />
        </div>
      </div>
    </div>
  );
}
