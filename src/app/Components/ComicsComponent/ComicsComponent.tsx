"use client";
import style from "./Comics.module.css";

import "animate.css";
import { Col, Row, Spin } from "antd";
import HeroesComponent from "../HeroesComponent/HeroesComponent";
import { useEffect, useState } from "react";
import { fetchHeroes } from "../../Services/Heroes";
import { useDispatch, useSelector } from "react-redux";

export default function ComicsComponent() {
  const dispatch = useDispatch();
  // const [heroes, serHero] = useState({});
  const heroList = useSelector((state) => state.heros);

  const getHeroData = async () => {
    dispatch(fetchHeroes());
  };

  useEffect(() => {
    // console.log(heroList);
  }, [heroList]);

  useEffect(() => {
    getHeroData();
  }, []);

  return (
    <div className={style.layout}>
      <div>
        {heroList.loading ? (
          <div className={style.center}>
            <Spin />
          </div>
        ) : (
          <Row gutter={[24, 24]}>
            {heroList.list.map((hero: any) => (
              <Col key={hero.id} sm={24} xs={24} md={8} lg={6}>
                <HeroesComponent hero={hero} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}
