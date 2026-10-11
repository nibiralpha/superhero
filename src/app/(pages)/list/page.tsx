"use client";

import { Suspense } from "react";
import React, { useState } from "react";
import HeaderComponent from "@Components/HeaderComponent/HeaderComponent";
import ComicComponent from "@Components/ComicsComponent/ComicsComponent";
import FilterComponent from "@Components/FilterComponent/FilterComponent";
import type { RootState } from "@redux/store";
import { useSelector } from "react-redux";

export default function Search() {
  const showFilter = useSelector((state: RootState) => state.filter.showFilter);
  const [clearFilterData, setClearFilterData] = useState(false);

  return (
    <>
      <div>
        <Suspense fallback={<span />}>
          <HeaderComponent setClearFilterData={setClearFilterData} showMenu={true} />
          <FilterComponent
            clearFilterData={clearFilterData}
            setClearFilterData={setClearFilterData}
            visible={showFilter}
          />
          <ComicComponent />
        </Suspense>
      </div>
    </>
  );
}
