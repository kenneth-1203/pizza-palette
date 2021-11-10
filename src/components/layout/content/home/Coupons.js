import React from "react";

import { Carousel } from "react-bootstrap";

import Coupon1 from "../../../../assets/images/first30-coupon.png";
import Coupon2 from "../../../../assets/images/its2021-coupon.png";
import Coupon3 from "../../../../assets/images/freedel50-coupon.png";

const Coupons = () => {
  return (
    <div className="d-flex justify-content-center">
      <Carousel style={{ width: "50rem" }}>
        <Carousel.Item>
          <img
            style={{ borderRadius: "calc(.5rem + .4vw)" }}
            className="d-block w-75 mx-auto"
            src={Coupon1}
            alt="First slide"
          />
          <Carousel.Caption style={{ position: "relative" }} />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-75 mx-auto"
            src={Coupon2}
            alt="Second slide"
          />
          <Carousel.Caption style={{ position: "relative" }} />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ borderRadius: "calc(.5rem + .4vw)" }}
            className="d-block w-75 mx-auto"
            src={Coupon3}
            alt="Third slide"
          />
          <Carousel.Caption style={{ position: "relative" }} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Coupons;
