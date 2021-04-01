import React, { useEffect } from "react";
import Aos from "aos";

import {
  LikeOutlined,
  ShopOutlined,
  AreaChartOutlined,
} from "@ant-design/icons";

const Infographic = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
  return (
    <div className="container">
      <div className="d-flex row">
        <div data-aos="fade-up" className="col-12 col-lg-4 text-center py-3">
          <LikeOutlined className="infographic-icon pb-3" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            eos, odio quas debitis quos exercitationem! Neque atque, nemo,
            soluta molestiae saepe itaque quasi dolore accusantium vel
            repudiandae quo, mollitia voluptate!
          </p>
        </div>
        <div data-aos="fade-up" className="col-12 col-lg-4 text-center py-3">
          <ShopOutlined className="infographic-icon pb-3" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            doloremque soluta, non dicta laboriosam quo necessitatibus earum
            ducimus iure, dignissimos voluptates odit illum optio, dolor neque
            repudiandae itaque. Quasi, ipsum?
          </p>
        </div>
        <div data-aos="fade-up" className="col-12 col-lg-4 text-center py-3">
          <AreaChartOutlined className="infographic-icon pb-3" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eum
            impedit temporibus reprehenderit? Veniam a veritatis iusto, facere
            aliquid dolor repellendus ab esse mollitia voluptatem, at eligendi
            sint dolorem eaque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Infographic;
