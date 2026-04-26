"use client";

import React from "react";
import { useRouter } from "next/navigation";
import style from "./Heroes.module.css";

import "animate.css";

export default function HeroesComponent() {
  const router = useRouter();

  const changeRoute = () => {    
    router.push("/list");
  };

  return (
    <div className={style.heroes}>
      
    </div>
  );
}
