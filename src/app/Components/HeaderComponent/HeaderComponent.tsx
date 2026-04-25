"use client";

import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";

import style from "./Header.module.css";

export default function HeaderComponent() {
  return (
    <div className={style.header}>
      <div className={style.left_side}>
        <div className={style.logo}>SUPERSEARCH</div>
        <div className={style.menus}>
          <div className={style.menu}>Super Heroes</div>
          <div className={style.menu}>Team</div>
        </div>
      </div>
      <div className={style.right_side}>
        <Button
          style={{
            color: "#f9873d", 
            borderColor: "#f9873d",
          }}
        >
          <MenuUnfoldOutlined /> Filter
        </Button>
      </div>
    </div>
  );
}
