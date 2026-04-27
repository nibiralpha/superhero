import React from "react";
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";
import ComicComponent from "../../Components/ComicsComponent/ComicsComponent";
import FilterComponent from "../../Components/FilterComponent/FilterComponent";

export default function Search() {
  return (
    <>
      <div>
        <HeaderComponent showMenu={true} />
        <FilterComponent />
        <ComicComponent />
      </div>
    </>
  );
}
