import React, { useEffect } from "react";
import Aos from "aos";

import Coupons from "./Coupons";
import Announcements from "./Announcements";
import Comments from "./Comments";
import Infographic from "./Infographic";
import Footer from "../../footer/Footer";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <>
      <div className="container" data-aos="fade-up">
        <Coupons />
        <Announcements />
        <hr className="mt-5" />
        <Infographic />
        <hr className="my-5" />
        <Comments />
      </div>
      <Footer />
    </>
  );
};

export default Home;
