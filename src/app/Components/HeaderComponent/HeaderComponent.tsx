"use client";

import { usePathname, useRouter } from "next/navigation";

import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";

import style from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "@redux/settingSlice";
import { clearFilter } from "@redux/searchSlice";
import type { RootState } from "@redux/store";
import { useState } from "react";
import Link from "next/link";

type HeaderProps = Readonly<{
  setClearFilterData?: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu?: boolean;
}>;

export default function HeaderComponent({
  setClearFilterData,
  showMenu = true,
}: HeaderProps) {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const path = pathname.split("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showFilter = useSelector((state: RootState) => state.filter.showFilter);
  const filter = useSelector((state: RootState) => state.search);
  const route = path[1];

  const showClearFilter: boolean = !Object.values(filter).every((value) => {
    if (typeof value === "string") return value === "";

    if (Array.isArray(value)) return value[0] === 0 && value[1] === 100;

    return true;
  });

  const changePage = (page: string) => {
    router.push(`/${page}`);
  };

  const visibleFilters = () => {
    dispatch(setFilter(!showFilter));
  };

  const visibleMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const clearAllFilterData = () => {
    dispatch(clearFilter(""));
    router.replace(window.location.pathname);

    setClearFilterData?.(true);
  };

  return (
    <div className={style.bar}>
      <div className={style.top_bar}>
        <div className={style.desktop}>
          <div className={style.menu_bar}>
            <div className={style.left_side}>
              <div className={style.logo}>SUPERSEARaCH</div>
              <div className={style.menus}>
                <Link className={style.hero_link} href={`/list`}>
                  <div
                    className={`${style.menu} ${route === "list" ? style.active : ""}`}
                    // onClick={() => changePage("list")}
                  >
                    Super Heroes
                  </div>
                </Link>
                <Link className={style.hero_link} href={`/team`}>
                  <div
                    className={`${style.menu} ${route === "team" ? style.active : ""}`}
                    // onClick={() => changePage("team")}
                  >
                    Team
                  </div>
                </Link>
              </div>
            </div>
            <div className={style.right_side}>
              {showMenu && (
                <div className={style.filter}>
                  {showClearFilter && (
                    <div className={style.clear_filter}>
                      <div className={style.close_icon}>
                        <img
                          className={style.close_icon_img}
                          width="14px"
                          src="/close.png"
                        />
                      </div>
                      <div
                        onClick={clearAllFilterData}
                        className={style.clear_filter_text}
                      >
                        Clear filter
                      </div>
                    </div>
                  )}

                  <div className={style.clear_filter_button}>
                    <Button
                      type={showFilter ? "primary" : "default"}
                      onClick={visibleFilters}
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
            <img
              onClick={visibleMenu}
              className={style.menu}
              src="/menu.svg"
              alt="Open navigation menu"
            />
          </div>

          <div className={style.center}>
            <div className={style.logo}>SUPERSEARCH</div>
          </div>

          <div className={style.right}>
            <Button onClick={visibleFilters}>
              <MenuUnfoldOutlined />
            </Button>
          </div>
        </div>

        <Drawer
          title="SUPERSEARCH"
          placement="left"
          open={isMenuOpen}
          onClose={closeMenu}
          size={280}
        >
          <nav className={style.drawer_menu}>
            <Link
              href="/list"
              onClick={closeMenu}
              className={`${style.drawer_menu_item} ${
                route === "list" ? style.active : ""
              }`}
            >
              Super Heroes
            </Link>

            <Link
              href="/team"
              onClick={closeMenu}
              className={`${style.drawer_menu_item} ${
                route === "team" ? style.active : ""
              }`}
            >
              Team
            </Link>
          </nav>
        </Drawer>
      </div>
    </div>
  );
}
