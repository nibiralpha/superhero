"use client";
import style from "./Comics.module.css";

import "animate.css";
import { Col, Row, Spin } from "antd";
import HeroesComponent from "../HeroesComponent/HeroesComponent";
import { useEffect, useState } from "react";
import { fetchHeroes } from "../../Services/Heroes";
import { useDispatch, useSelector } from "react-redux";

export default function ComicsComponent() {
  const [heroes, serHero] = useState({});
  const dispatch = useDispatch();
  const getHeroData = useSelector((state) => state.heros);

  const heroData = async () => {
    const data = dispatch(fetchHeroes());
    // serHero(getHeroData)

    // console.log("heroData", data);

    return data;
  };

  useEffect(() => {
    heroData();
  }, []);

  return (
    <div className={style.layout}>
      <div className={style.center}>
        <Spin />
      </div>
      <div>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={8} lg={6}>
            <HeroesComponent />
          </Col>
          <Col xs={24} md={8} lg={6}>
            <HeroesComponent />
          </Col>
          <Col xs={24} md={8} lg={6}>
            <HeroesComponent />
          </Col>
          <Col xs={24} md={8} lg={6}>
            <HeroesComponent />
          </Col>
        </Row>
      </div>
    </div>
  );
}
