"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import style from "./Heroes.module.css";

import "animate.css";
import { Switch } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

export default function HeroesComponent() {
  const [showDetail, setShowDetail] = useState(false);
  const router = useRouter();

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const changeRoute = () => {
    router.push("/details/11");
  };

  const showDetailCard = (status: boolean) => {
    setShowDetail(status);
  };

  return (
    <div
      onMouseLeave={() => showDetailCard(false)}
      className={style.img_container}
    >
      <img src={"/10060.jpg"} onClick={changeRoute} />

      <div className={`${style.red_overlay} ${showDetail ? style.show : ""}`}>
        <div className={style.show_list}>
          <div className={style.title}>A TEAM</div>
          <div className={style.add_team}>
            <div className={style.text}>Add to team</div>
            <div className={style.switch}>
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked
              />
            </div>
          </div>
          <div className={style.contents}>
            <div className={style.list}>Intelligence : 38</div>
            <div className={style.list}>strength : 47</div>
            <div className={style.list}>Speed : 17</div>
            <div className={style.list}>Durability : 36</div>
            <div className={style.list}>Power : 15</div>
            <div className={style.list}>Combat : 81</div>
          </div>
        </div>
      </div>

      <div className={style.content}>
        {showDetail ? "" : <div className={style.name}>A-Bomb</div>}
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
                  defaultChecked
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
