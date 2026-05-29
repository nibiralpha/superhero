/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import style from "./Poster.module.css";
import { Spin } from "antd";
import { Switch } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import ModalComponent from "../ModalComponent/ModalComponent";
import { useSelector } from "react-redux";
import useHero from "../../Hooks/useHero";
import type { RootState } from "../../../redux/store";
import { Hero } from "../../Services/Heroes/HeroInterfaces";

export interface HeroImageSizes {
  lg: string;
  md: string;
  sm: string;
  xs: string;
}
export interface CharacterItem {
  name: string;
  images: HeroImageSizes;
}

export interface PosterComponentProps {
  data: CharacterItem;
  hero: Hero;
}
export interface ModalMessage {
  mainText: string;
  subText: string;
}

export default function PosterComponent({
  data,
  hero,
}: Readonly<PosterComponentProps>) {
  const { heroesOnTheTeam, getTeamMembersCount } = useHero();

  const [modalMessage, setModalMessage] = useState<ModalMessage>({
    mainText: "",
    subText: "",
  });
  const [heroesOnTeam, setHeroesOnTeam] = useState<Hero[]>([]);

  const [openModal, setOpenModal] = useState<boolean>(false);
  const { loading } = useSelector((state: RootState) => state.heroes);

  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    const savedHeroes = heroesOnTheTeam();
    setHeroesOnTeam(savedHeroes);
  }, []);

  const onClickAddRemoveToTeam = (status: boolean) => {
    let updatedList = [...heroesOnTeam];

    if (status) {
      const teamMemberCount: number = getTeamMembersCount();

      //teams can't be more than 8
      if (teamMemberCount >= 8) {
        setModalMessage({
          mainText: "Ops! You have too many team members",
          subText: "You may only select 8 team members at a time",
        });
        setOpenModal(true);
        return;
      }

      //only able to add good/bad
      if (heroesOnTeam[0] !== undefined && heroesOnTeam[0] !== null) {
        if (
          heroesOnTeam[0]?.biography?.alignment !== hero?.biography?.alignment
        ) {
          setModalMessage({
            mainText: "Ops! You can't create mixed type of super team",
            subText: "Team can only contain one type of hero (Good or Bad)",
          });
          setOpenModal(true);
          return;
        }
      }

      const exists = updatedList.some((h) => h.id == id);
      if (!exists) {
        updatedList.push(hero);
      }
    } else {
      updatedList = updatedList.filter((h) => h.id != id);
    }

    localStorage.setItem("heroes", JSON.stringify(updatedList));
    setHeroesOnTeam(updatedList);
  };

  const isCurrentlyOnTeam = heroesOnTeam.some((h) => h.id == id);

  return (
    <div className={style.container}>
      {loading ? (
        <div className={style.Spin_container}>
          <Spin />
        </div>
      ) : (
        <img key={id} src={data?.images?.lg} className={style.image} />
      )}

      <div className={style.detail}>
        <div className={`${style.title} obelix`}>{data?.name}</div>
        <div className={style.buttons}>
          <div className={style.text}>Add to team</div>
          <div className={style.switch}>
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              onChange={onClickAddRemoveToTeam}
              checked={isCurrentlyOnTeam}
            />
          </div>
        </div>
      </div>
      <ModalComponent
        message={modalMessage}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  );
}
