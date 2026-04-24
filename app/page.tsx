import React from "react";

export default function Home() {
  return (
    <div className="bg_img">
      <div className="main">
        <div className="super_heroes">
          <img className="super_heroes_img" src="/all-heroes.png" />
        </div>
        <div className="spider_man"><img className="spider_man_img" src="/spider-man.png" /></div>
        <div className="text_area">
          <div className="text primary_font">
            <h1>Create Your own Team of Superheroesas</h1>
          </div>
          <div className="enter_button">ENTER</div>
        </div>
      </div>
    </div>
  );
}
