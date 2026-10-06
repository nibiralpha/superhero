"use client";

import React from "react";
import { useRouter } from "next/navigation";
import style from "./Home.module.css";

import "animate.css";

export default function HomeComponent() {
  const router = useRouter();

  const changeRoute = (): void => {
    router.push("/list");
  };

   return (
    <>
      <link
        rel="preload"
        as="image"
        href="/enter_bg.png"
      />

      <div className={style.bg_img}>
        <div className={style.main}>
          <div className={style.super_heroes}>
            <img
              className={style.super_heroes_img}
              src="/all-heroes.png"
              alt="Superheroes"
            />
          </div>

          <div
            className={`${style.spider_man} animate__animated animate__bounceInDown`}
          >
            <img
              className={style.spider_man_img}
              src="/spider-man.png"
              alt="Spider-Man"
            />
          </div>

          <div className={style.text_area}>
            <div className={`${style.text} ${style.primary_font} obelix`}>
              <h1>Create Your own Team of Superheroes</h1>
            </div>

            <div className={style.enter_button} onClick={changeRoute}>
              ENTER
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

