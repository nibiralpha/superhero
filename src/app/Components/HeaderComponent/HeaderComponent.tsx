"use client";

import { usePathname, useRouter } from "next/navigation";

import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";

import style from "./Header.module.css";

export default function HeaderComponent({ showMenu = true }) {
  const pathname = usePathname();
  const router = useRouter();
  const path = pathname.split("/");

  const route = path[1];

  const changePage = (page) => {
    router.push(`/${page}`);
  };

  return (
    <div className={style.bar}>
      <div className={style.top_bar}>
        <div className={style.desktop}>
          <div className={style.menu_bar}>
            <div className={style.left_side}>
              <div className={style.logo}>SUPERSEARaCH</div>
              <div className={style.menus}>
                <div
                  className={`${style.menu} ${route === "list" ? style.active : ""}`}
                  onClick={() => changePage("list")}
                >
                  Super Heroes
                </div>
                <div
                  className={`${style.menu} ${route === "team" ? style.active : ""}`}
                  onClick={() => changePage("team")}
                >
                  Team
                </div>
              </div>
            </div>
            <div className={style.right_side}>
              {showMenu && (
                <Button>
                  <MenuUnfoldOutlined /> Filter
                </Button>
              )}
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
