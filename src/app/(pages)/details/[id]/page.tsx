"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import HeaderComponent from "@/src/app/Components/HeaderComponent/HeaderComponent";
import PosterComponent from "@/src/app/Components/PosterComponent/PosterComponent";
import DetailComponent from "@/src/app/Components/DetailComponent/DetailComponent";
import type { AppDispatch, RootState } from "@/src/redux/store";

import { Col, Row } from "antd";

import style from "./Details.module.css";
import { useDispatch, useSelector } from "react-redux";

import { getHeroDetail } from "@/src/app/Services/Heroes";
import { Hero } from "@/src/app/Services/Heroes/HeroInterfaces";

export default function Detail() {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const id = Number(params.id);
  const heroDetail = useSelector((state: RootState) => state.heroes);

  useEffect(() => {
    dispatch(getHeroDetail(id));
  }, []);

  return (
    <div>
      <HeaderComponent showMenu={false} />
      <div className={style.wrapper}>
        <Row>
          <Col xs={24} md={12}>
            <PosterComponent
              hero={heroDetail?.details as Hero}
              data={{
                images: heroDetail?.details?.images ?? {
                  xs: "",
                  sm: "",
                  md: "",
                  lg: "",
                },
                name: heroDetail?.details?.name ?? "",
              }}
            />
          </Col>
          <Col xs={24} md={12}>
            <DetailComponent data={heroDetail?.details as Hero} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
