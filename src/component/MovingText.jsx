import React from "react";
import AnimatedText from "./AnimatedText";

function MovingText() {
  return (
    <>
      <div className="text-container">
        <p className="moving-text">
          <AnimatedText />
        </p>
      </div>
    </>
  );
}

export default MovingText;
