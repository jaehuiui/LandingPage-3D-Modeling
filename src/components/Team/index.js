import React from "react";
import { CssBaseline, Typography } from "@material-ui/core";
import Slider from "react-slick";
import Manager from "./Manager";
import Front from "./Front";
import Back from "./Back";
import AI from "./AI";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Team() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="Team">
      <React.Fragment>
        <CssBaseline />
        <Slider {...settings}>
          <div>
            <Manager />
          </div>
          <div>
            <Front />
          </div>
          <div>
            <Back />
          </div>
          <div>
            <AI />
          </div>
        </Slider>
      </React.Fragment>
    </div>
  );
}

export default Team;
