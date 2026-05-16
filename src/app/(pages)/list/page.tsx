"use client";

import React, { useState } from "react";
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";
import ComicComponent from "../../Components/ComicsComponent/ComicsComponent";
import FilterComponent from "../../Components/FilterComponent/FilterComponent";
import { useSelector } from "react-redux";

export default function Search() {
  const showFilter = useSelector((state) => state.filter.showFilter);
  const [clearFilterData, setClearFilterData] = useState(false);

  return (
    <>
      <div>
        <HeaderComponent
          setClearFilterData={setClearFilterData}
          showMenu={true}
        />
        <FilterComponent
          clearFilterData={clearFilterData}
          visible={showFilter}
        />
        <ComicComponent />
      </div>
    </>
  );
}
