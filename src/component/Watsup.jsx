import React from "react";
import WatsupImg from "../assets/WhatsApp-Logo.wine.svg";

function Watsup() {
  const whatsappUrl = "https://web.whatsapp.com/";

  return (
    <>
      <div className="flight-container">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <img src={WatsupImg} alt="WhatsApp" className="whatsup" />
        </a>
      </div>
    </>
  );
}

export default Watsup;
