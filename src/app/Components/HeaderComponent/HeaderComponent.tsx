"use client";

import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";

import style from "./Header.module.css";

export default function HeaderComponent() {
  return (
    <div className={style.bar}>
      <div className={style.top_bar}>
        <div className={style.desktop}>
          <div className={style.menu_bar}>
            <div className={style.left_side}>
              <div className={style.logo}>SUPERSEARCH</div>
              <div className={style.menus}>
                <div className={style.menu}>Super Heroes</div>
                <div className={style.menu}>Team</div>
              </div>
            </div>
            <div className={style.right_side}>
              <Button
              // style={{
              //   color: "#f9873d",
              //   borderColor: "#f9873d",
              // }}
              >
                <MenuUnfoldOutlined /> Filter
              </Button>
            </div>
          </div>
        </div>
        <div className={style.mobile}>
          <div className={style.left}>
            <img className={style.menu} src="/menu.svg" />
          </div>
          <div className={style.center}>
            <div className={style.logo}>SUPERSEARCH</div>
          </div>
          <div className={style.right}>
            <Button>
              <MenuUnfoldOutlined />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
