"use client";

import React from "react";
import style from "./Poster.module.css";
import { Switch } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

export default function PosterComponent() {
  return (
    <div className={style.container}>
      <img src={"/10060.jpg"} className={style.image} />

      <div className={style.detail}>
        <div className={`${style.title} obelix`}>A-BOMB</div>
        <div className={style.buttons}>
          <div className={style.text}>Add to team</div>
          <div className={style.switch}>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked
            />
          </div>
        </div>
      </div>
    </div>
  );
}
