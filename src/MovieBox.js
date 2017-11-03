import React, { Component } from "react";
import "./MovieBox.css";
import images from "./images/wonder-woman.jpg";
import ironman from "./images/iron-man.jpg";

const MovieBox = (props) => {
  var imagePath = (props.whichHero ? images : ironman);
  return (
    <div className="MovieBox">
      <div className="movie-image__container">
        <img src={imagePath} />
      </div>
    </div>
  );
};

export default MovieBox;
