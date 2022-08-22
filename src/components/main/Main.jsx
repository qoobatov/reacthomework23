import React from "react";
import Bigtitle from "./bigTitle/Bigtitle";
import "./Main.css";
import Title from "./title/Title";

function Main() {
  return (
    <div className="main-content">
      <Title />
      <Bigtitle />
    </div>
  );
}

export default Main;
