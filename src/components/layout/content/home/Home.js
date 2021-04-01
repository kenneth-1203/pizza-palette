import React from "react";

import Coupons from "./Coupons";
import Announcements from "./Announcements";
import Comments from "./Comments";
import Infographic from "./Infographic";

const Home = () => {
  return (
    <div>
      <div className="container">
        <Coupons />
        <Announcements />
        <hr className="my-5"/>
        <Infographic />
        <hr className="my-5"/>
        <Comments />
      </div>
    </div>
  );
};

export default Home;
