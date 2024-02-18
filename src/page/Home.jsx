import React from "react";
import Appbar from "../component/Appbar";
import MovingText from "../component/MovingText";

import CardIcon from "../component/CardIcon";

function Home() {
  return (
    <>
      <Appbar />
      <MovingText />
      <div className="card-icon">
        <CardIcon />
        <CardIcon />
      </div>
    </>
  );
}

export default Home;
