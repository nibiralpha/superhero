"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import HeaderComponent from "@/src/app/Components/HeaderComponent/HeaderComponent";
import PosterComponent from "@/src/app/Components/PosterComponent/PosterComponent";
import DetailComponent from "@/src/app/Components/DetailComponent/DetailComponent";

import { Col, Row } from "antd";

import style from "./Details.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getHeroDetail } from "@/src/app/Services/Heroes";

export default function Detail() {
  const params = useParams();
  const dispatch = useDispatch();
  const id = params.id;

  const heroDetail = useSelector((state) => state.heros);

  useEffect(() => {
    console.log(heroDetail);
  }, [heroDetail]);

  useEffect(() => {
    dispatch(getHeroDetail(id));
  }, []);

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
