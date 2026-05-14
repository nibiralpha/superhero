"use client";

import React from "react";
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";
import ComicComponent from "../../Components/ComicsComponent/ComicsComponent";
import FilterComponent from "../../Components/FilterComponent/FilterComponent";
import { useSelector } from "react-redux";

export default function Search() {
  const showFilter = useSelector((state) => state.filter.showFilter);

  return (
    <>
      <div>
        <HeaderComponent showMenu={true} />
        <FilterComponent visible={showFilter} />
        <ComicComponent />
      </div>
    </>
  );
}
