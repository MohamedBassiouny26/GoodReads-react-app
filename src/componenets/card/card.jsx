import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./card.css";
function Card(prop) {
  console.log(prop);
  return (
    <>
      <Link
        to={"/books/" + prop.id}
        onClick={prop.clicked}
        className={prop.className + " bookCover"}
      >
        <img _ngcontent-bqv-c14="" alt="..." src={prop.cover}></img>
        <div>
          <h5 className="text bookHeader">{prop.bookName}</h5>
        </div>
      </Link>
    </>
  );
}
export default Card;
