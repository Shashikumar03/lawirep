import React from "react";
import Appbar from "../component/Appbar";
import MovingText from "../component/MovingText";
import CardIcon from "../component/CardIcon";
import Watsup from "../component/Watsup";
import InstaGram from "../component/InstaGram";

function Flight() {
  return (
    <>
      <div className="main-container">
        <Appbar />
        <MovingText />
        <div style={{ color: "red", fontSize: "100px" }}>
          Train section aayega section aayega
        </div>
        <div className="card-icon">
          <CardIcon />
          <CardIcon />
        </div>

        <div className="social-media">
          <Watsup />
          <InstaGram />
        </div>
      </div>
    </>
  );
}

export default Flight;
