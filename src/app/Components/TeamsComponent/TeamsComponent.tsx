"use client";
import style from "./Teams.module.css";

import "animate.css";
import { Col, Row } from "antd";
import HeroesComponent from "@Components/HeroesComponent/HeroesComponent";
import { useEffect, useState } from "react";
import useHero from "@Hooks/useHero";
import { Hero } from "@Services/Heroes/HeroInterfaces";
import Link from "next/link";

export default function TeamsComponent() {
  const { heroesOnTheTeam } = useHero();

  const [heroList, setHeroList] = useState<Hero[]>([]);
  const reRednder = (): void => {
    const heroList = heroesOnTheTeam();
    setHeroList(heroList);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    reRednder();
  }, []);

  // if (heroList.length === 0) return null;

  return (
    <div className={style.layout}>
    {/* <div className={heroList.length === 0 ? style.alt_layout : style.layout}> */}
      <div>
        {heroList.length === 0 ? (
          <div className={style.no_team}>
            <div>
              You do not have any team members selected. Please make selections
              on
            </div>
            <div className={style.list_page}><Link href="/list">Superheroes page</Link></div>
          </div>
        ) : (
          <Row gutter={[24, 24]}>
            {heroList.map((hero: Hero) => (
              <Col key={hero.id} sm={24} xs={24} md={8} lg={6}>
                <HeroesComponent hero={hero} reRednder={reRednder} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}
