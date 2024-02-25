import React from "react";
import instagramImg from "../assets/instagram.png";

function InstaGram() {
  const instagramUrl = "https://www.instagram.com/shashisinha3/";

  return (
    <>
      <div>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <img src={instagramImg} alt="Instagram" className="instagram" />
        </a>
      </div>
    </>
  );
}

export default InstaGram;
