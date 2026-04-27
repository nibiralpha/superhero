import React from "react";
import HeaderComponent from "@/src/app/Components/HeaderComponent/HeaderComponent";
import PosterComponent from "@/src/app/Components/PosterComponent/PosterComponent";
import DetailComponent from "@/src/app/Components/DetailComponent/DetailComponent";

import { Col, Row } from "antd";

import style from "./Details.module.css";

export default function Detail() {
  return (
    <div>
      <HeaderComponent showMenu={false} />
      <div className={style.wrapper}>
        <Row>
          <Col xs={24} md={12}>
            <PosterComponent />
          </Col>
          <Col xs={24} md={12}>
            <DetailComponent />
          </Col>
        </Row>
      </div>
    </div>
  );
}
