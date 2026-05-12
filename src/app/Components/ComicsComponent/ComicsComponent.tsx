"use client";

import "animate.css";
import style from "./Comics.module.css";
import { Col, Row, Spin } from "antd";
import HeroesComponent from "../HeroesComponent/HeroesComponent";
import { useEffect } from "react";
import { fetchHeroes } from "../../Services/Heroes";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredHeroes } from "../../Selectors/heroSelectors";

export default function ComicsComponent() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.heroes);
  const filteredHeroes = useSelector(selectFilteredHeroes);

  useEffect(() => {
    // optimized fetch
    dispatch(fetchHeroes());
  }, [dispatch]);

  // const getHeroData = async () => {
  //   dispatch(fetchHeroes());
  // };

  // useEffect(() => {
  //   getHeroData();
  // }, []);

  return (
    <div className={style.layout}>
      <div>
        {loading ? (
          <div className={style.center}>
            <Spin />
          </div>
        ) : (
          <Row gutter={[24, 24]}>
            {filteredHeroes.map((hero: any) => (
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
