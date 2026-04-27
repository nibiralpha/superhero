"use client";
import style from "./Comics.module.css";

import "animate.css";
import { Col, Row } from "antd";
import HeroesComponent from "../HeroesComponent/HeroesComponent";

export default function ComicsComponent() {

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
