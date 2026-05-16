"use client";

import { usePathname, useRouter } from "next/navigation";

import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";

import style from "./Header.module.css";
import { setFilter } from "@/src/redux/settingSlice";
import { useDispatch, useSelector } from "react-redux";
import { clearFilter } from "@/src/redux/searchSlice";
import { useState } from "react";

export default function HeaderComponent({
  setClearFilterData,
  showMenu = true,
}) {
  const [showFilterClearBtn, setShowFilterClearBtn] = useState(false);

  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const path = pathname.split("/");

  const showFilter = useSelector((state) => state.filter.showFilter);

  const route = path[1];

  const changePage = (page) => {
    router.push(`/${page}`);
  };

  const visibleMenu = () => {
    dispatch(setFilter(!showFilter));
  };

  const clearFilterData = () => {
    dispatch(clearFilter(""));
    router.replace(window.location.pathname);
    setShowFilterClearBtn(false);

    setClearFilterData(true)
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
                <div className={style.filter}>
                  {/* {showFilterClearBtn && ( */}
                  <div className={style.clear_filter}>
                    <div className={style.close_icon}>
                      <img
                        className={style.close_icon_img}
                        width="14px"
                        src="/close.png"
                      />
                    </div>
                    <div
                      onClick={clearFilterData}
                      className={style.clear_filter_text}
                    >
                      Clear filter
                    </div>
                  </div>
                  {/* )} */}

                  <div className={style.clear_filter_button}>
                    <Button
                      type={showFilter ? "primary" : "default"}
                      onClick={visibleMenu}
                    >
                      <MenuUnfoldOutlined /> Filter
                    </Button>
                  </div>
                </div>
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
