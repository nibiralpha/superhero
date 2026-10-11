"use client";

import "animate.css";
import style from "./Comics.module.css";
import { Col, Row, Spin } from "antd";
import HeroesComponent from "@Components/HeroesComponent/HeroesComponent";
import { useEffect, useMemo, useState } from "react";
import { fetchHeroes } from "@Services/Heroes";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredHeroes } from "@Selectors/heroSelectors";
import type { RootState, AppDispatch } from "@redux/store";
import { Hero } from "@Services/Heroes/HeroInterfaces";
import InfiniteScroll from "react-infinite-scroll-component";

export default function ComicsComponent() {
  const dispatch = useDispatch<AppDispatch>();

  const { loading } = useSelector((state: RootState) => state.heroes);
  const filteredHeroes = useSelector(selectFilteredHeroes);

  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    dispatch(fetchHeroes());
  }, [dispatch]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisibleCount(10);
  }, [filteredHeroes]);

  const visibleHeroes = useMemo(
    () => filteredHeroes.slice(0, visibleCount),
    [filteredHeroes, visibleCount],
  );

  const loadMoreHeroes = () => {
    setVisibleCount((previousCount) => previousCount + 10);
  };

  return (
    <div className={style.layout}>
      {loading ? (
        <div className={style.center}>
          <Spin />
        </div>
      ) : filteredHeroes.length === 0 ? (
        <div>No result found</div>
      ) : (
        <InfiniteScroll
          dataLength={visibleHeroes.length}
          next={loadMoreHeroes}
          hasMore={visibleCount < filteredHeroes.length}
          loader={
            <div className={style.center}>
              <Spin />
            </div>
          }
          // endMessage={
          //   <p className={style.seen_all_heroes}>
          //     <b>You have seen all heroes!</b>
          //   </p>
          // }
        >
          <Row gutter={[24, 24]}>
            {visibleHeroes.map((hero: Hero) => (
              <Col key={hero.id} sm={24} xs={24} md={8} lg={6}>
                <HeroesComponent hero={hero} />
              </Col>
            ))}
          </Row>
        </InfiniteScroll>
      )}
    </div>
  );
}
