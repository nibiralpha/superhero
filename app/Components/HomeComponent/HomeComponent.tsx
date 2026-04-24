"use client"

import React from "react";
import style from "./Home.module.css";

export default function HomeComponent() {
  return (
    <div className={style.bg_img}>
      <div className={style.main}>
        <div className={style.super_heroes}>
          <img className={style.super_heroes_img} src="/all-heroes.png" />
        </div>
        <div className={style.spider_man}><img className={style.spider_man_img} src="/spider-man.png" /></div>
        <div className={style.text_area}>
          <div className={`${style.text} ${style.primary_font}`}>
            <h1>Create Your own Team of Superheroesass</h1>
          </div>
          <div className={style.enter_button}>ENTER</div>
        </div>
      </div>
    </div>
  );
}
