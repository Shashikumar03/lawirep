import React, { useState, useEffect } from "react";

function AnimatedText() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const textArray = ["Happy journey with Lawirep,", "Have a safe journey."];

    let currentIndex = 0;

    const updateText = () => {
      setDisplayText(textArray[currentIndex]);
      currentIndex = (currentIndex + 1) % textArray.length;
    };

    const intervalId = setInterval(updateText, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {displayText === "Happy journey with Lawirep" ? (
        <p style={{ color: "blueviolet" }} className="moving-text-para">
          {displayText}
        </p>
      ) : (
        <p style={{ color: "primary" }} className="moving-text-para">
          {displayText}
        </p>
      )}
    </>
  );
}

export default AnimatedText;
