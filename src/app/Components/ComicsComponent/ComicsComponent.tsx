"use client";
import style from "./Comics.module.css";

import "animate.css";
import { Col, Row } from "antd";
import HeroesComponent from "../HeroesComponent/HeroesComponent";
import { useEffect } from "react";
import { fetchHeroes } from "../../Services/Heroes";
import { useDispatch, useSelector } from "react-redux";

export default function ComicsComponent() {
  const dispatch = useDispatch();

  const heroData = async () => {
    const data = await dispatch(fetchHeroes());
    // console.log(data);

    return data;
  };

  useEffect(() => {
    heroData();
  }, []);

  return (
    <div className={style.layout}>
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
  );
}
