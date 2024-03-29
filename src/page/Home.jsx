import React from "react";
import Appbar from "../component/Appbar";
import MovingText from "../component/MovingText";

import CardIcon from "../component/CardIcon";
import { WhatsApp } from "@mui/icons-material";
import Watsup from "../component/Watsup";
import InstaGram from "../component/InstaGram";

function Home() {
  return (
    <>
      <div className="main-container">
        <Appbar />
        <MovingText />
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

export default Home;
