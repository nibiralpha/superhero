"use client";
import style from "./Teams.module.css";

import "animate.css";
import { Col, Row, Spin } from "antd";
import HeroesComponent from "../HeroesComponent/HeroesComponent";
import { useEffect, useState } from "react";
import { fetchHeroes } from "../../Services/Heroes";
import { useDispatch, useSelector } from "react-redux";

export default function TeamsComponent() {
  const [heroList, setHeroList] = useState([]);

  useEffect(() => {
    let heroList = JSON.parse(localStorage.getItem("heroes")) || [];
    setHeroList(heroList)
  }, []);

  return (
    <div className={style.layout}>
      <div>
        <Row gutter={[24, 24]}>
          {heroList.map((hero: any) => (
            <Col key={hero.id} sm={24} xs={24} md={8} lg={6}>
              <HeroesComponent hero={hero} />
            </Col>
          ))}
        </Row>
        {/* )} */}
      </div>
    </div>
  );
}
