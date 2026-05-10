"use client";
import style from "./Teams.module.css";

import "animate.css";
import { Col, Row } from "antd";
import HeroesComponent from "../HeroesComponent/HeroesComponent";
import { useEffect, useState } from "react";

export default function TeamsComponent() {
  const [heroList, setHeroList] = useState(null);

  useEffect(() => {
    reRednder();
  }, []);

  const reRednder = () => {
    let heroList = JSON.parse(localStorage.getItem("heroes")) || [];
    setHeroList(heroList);
  };

  if (heroList === null) return null;

  return (
    <div className={heroList.length === 0 ? style.alt_layout : style.layout}>
      <div>
        {heroList.length === 0 ? (
          <div className={style.no_team}>
            <div>
              You do not have any team members selected. Please make selections
              on
            </div>
            <div className={style.list_page}>Superheroes page</div>
          </div>
        ) : (
          <Row gutter={[24, 24]}>
            {heroList.map((hero: any) => (
              <Col key={hero.id} sm={24} xs={24} md={8} lg={6}>
                <HeroesComponent hero={hero} reRednder={reRednder} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}
