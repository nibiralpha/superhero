import React from "react";
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";
import TeamsComponent from "../../Components/TeamsComponent/TeamsComponent";

export default function Detail() {
  return (
    <>
      <div>
        <HeaderComponent showMenu={false} />
        <TeamsComponent />
      </div>
    </>
  );
}
