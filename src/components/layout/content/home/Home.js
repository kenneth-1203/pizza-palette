import React from "react";

import Coupons from "./Coupons";
import Announcements from "./Announcements";
import Comments from "./Comments";
import Infographic from "./Infographic";
import Footer from "../../footer/Footer";

const Home = () => {
  return (
    <>
      <div className="container">
        <Coupons />
        <Announcements />
        <hr className="my-5"/>
        <Infographic />
        <hr className="my-5"/>
        <Comments />
      </div>
      <Footer />
    </>
  );
};

export default Home;
