"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import style from "./Home.module.css";

import "animate.css";
import Link from "next/link";

export default function HomeComponent() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const changeRoute = (): void => {
    router.push("/list");
  };

  useEffect(() => {
    const images = ["/enter_bg.png", "/all-heroes.png", "/spider-man.png"];

    const imagePromises = images.map((src) => {
      return new Promise<void>((resolve) => {
        const img = new Image();

        img.onload = () => resolve();
        img.onerror = () => resolve();

        img.src = src;
      });
    });

    Promise.all(imagePromises).then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className={style.loading_screen}>
        <div className={style.loader}></div>
      </div>
    );
  }

  return (
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
          <div className={`${style.text} ${style.primary_font}`}>
            <h1>Create Your own Team of Superheroes</h1>
          </div>

          {/* <div className={style.enter_button} onClick={changeRoute}>
            ENTER
          </div> */}

          <Link href="/list" className={style.enter_button}>
            ENTER
          </Link>
        </div>
      </div>
    </div>
  );
}
