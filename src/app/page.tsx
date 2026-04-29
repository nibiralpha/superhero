import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import HomeComponent from "./Components/HomeComponent/HomeComponent";

export default function Home() {
  return (
    <>
      {/* <Provider store={store}> */}
        <HomeComponent />
      {/* </Provider> */}
    </>
  );
}
