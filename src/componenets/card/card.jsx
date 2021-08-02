import React, { useState, useRef } from "react";
import "./card.css";
function Card(prop) {
  return (
    <>
      <a href="#" className={prop.className + " bookCover"}>
        <img _ngcontent-bqv-c14="" alt="..." src={prop.cover}></img>
        <div>
          <h5 className="text bookHeader">{prop.bookName}</h5>
        </div>
      </a>
    </>
  );
}
export default Card;
