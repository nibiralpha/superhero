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

export default function PosterComponent({ data, hero }) {
  const { heroesOnTheTeam, getTeamMembersCount, isOnTeam } = useHero();

  const [modalMessage, setModalMessage] = useState({
    mainText: "",
    subText: "",
  });
  const [heroesOnTeam, setHeroesOnTeam] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const { loading } = useSelector((state) => state.heroes);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const savedHeroes = heroesOnTheTeam();
    setHeroesOnTeam(savedHeroes);
  }, []);

  const onClickAddRemoveToTeam = (status) => {
    let updatedList = [...heroesOnTeam];

    if (status) {
      let teamMemberCount = getTeamMembersCount();

      //teams cant be more than 8
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
