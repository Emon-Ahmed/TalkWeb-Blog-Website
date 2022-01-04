import React from "react";
import { Carousel } from "react-bootstrap";
import parvez from "../../../Image/parvez.png";
import emon from "../../../Image/emon.png";
import shohag from "../../../Image/Mahmudul.png";
import yeaSaleh from "../../../Image/saleh.png";

const Slider = () => {
  return (
    <div className="silder">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={emon} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={parvez} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={shohag} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={yeaSaleh} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
