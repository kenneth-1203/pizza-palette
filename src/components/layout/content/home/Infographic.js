import React, { useEffect } from "react";
import Aos from "aos";

import Growth from "../../../../assets/svg/growth.svg";
import Restaurant from "../../../../assets/svg/restaurant.svg";
import Like from "../../../../assets/svg/like.svg";

const Infographic = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="container">
      <div className="d-flex row">
        <div data-aos="fade-up" className="col-12 col-lg-4 text-center py-3">
          {/* <LikeOutlined className="infographic-icon pb-3" /> */}
          <img
            className="pb-4"
            style={{ height: "calc(9em + 4vw)" }}
            src={Like}
            alt=""
          />
          <p className="infographic-text">
            Pizza Palette has quickly growned to be a popular and worldwide
            known pizza restaurant! More than <b>3,000</b> customers have tasted
            our quality baked pizzas everyday. Our corporate and worthy
            customers' positive feedbacks are the results of our brand name.
          </p>
        </div>
        <div data-aos="fade-up" className="col-12 col-lg-4 text-center py-3">
          {/* <ShopOutlined className="infographic-icon pb-3" /> */}
          <img
            className="pb-4"
            style={{ height: "calc(9em + 4vw)" }}
            src={Restaurant}
            alt=""
          />
          <p className="infographic-text">
            Started the first Pizza Palette restaurant in <b>Malaysia</b>, now
            we have globalized the restaurant around South East Asia and Europe.
            Our franchise has always been increasing all around the world for
            everyone to have the opportunity to taste our delicious pizzas!
          </p>
        </div>
        <div data-aos="fade-up" className="col-12 col-lg-4 text-center py-3">
          {/* <AreaChartOutlined className="infographic-icon pb-3" /> */}
          <img
            className="pb-4"
            style={{ height: "calc(9em + 4vw)" }}
            src={Growth}
            alt=""
          />
          <p className="infographic-text">
            Numbers are constantly and always changing, in a good way for Pizza
            Palette! With more than <b>2,000</b> stores in over <b>6</b>{" "}
            markets. Founded in 2010, our roots are in convenient pizza
            delivery, while a significant amount of our sales also come from
            carryout customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Infographic;
