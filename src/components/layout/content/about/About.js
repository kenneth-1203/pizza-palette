import React, { Component } from "react";
import Aos from "aos";

import Logo from "../../../../assets/images/logo.png";
import MenuPage1 from "../../../../assets/images/pp-menu-1.jpg";
import MenuPage2 from "../../../../assets/images/pp-menu-2.jpg";

import Footer from "../../footer/Footer";

export default class About extends Component {
  state = {
    isMobile: false,
    windowWidth: 0,
  };

  componentDidMount() {
    Aos.init({ duration: 700 });
    window.addEventListener(
      "resize",
      () => {
        this.setState({ isMobile: window.innerWidth < 992 });
        this.setState({ windowWidth: window.innerWidth });
      },
      false
    );
  }

  componentDidUpdate() {
    window.addEventListener(
      "resize",
      () => {
        this.setState({ isMobile: window.innerWidth < 992 });
      },
      false
    );
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="about">
            <div
              data-aos="fade-right"
              className={`d-flex${
                this.state.isMobile ? "" : " floated-iframe"
              }`}
            >
              <iframe
                className={`iframe${this.state.isMobile ? " adjust-size" : ""}`}
                src="https://www.youtube-nocookie.com/embed/30DWX-FDd-Q"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="overview">
              <h2 className="pb-1" data-aos="fade-left">
                Overview
              </h2>
              <img
                className="py-1 floated-logo"
                data-aos="fade-left"
                src={Logo}
                alt=""
              />
              <div className="justify-text" data-aos="fade-left">
                <p>
                  is a medium sized enterprise and pizza restaurant with more
                  than 2,000 stores in over 6 markets. Founded in 2010, our
                  roots are in convenient pizza delivery, while a significant
                  amount of our sales also come from carryout customers.
                  Although we are a highly-recognized global brand, we focus on
                  serving the local neighborhoods in which we live and do
                  business through our large network of franchise owners and
                  Company-owned stores. On average, we sell more than 500
                  thousand pizzas each day throughout our global system.
                </p>
                <p>
                  Our business model is straightforward: we handcraft and serve
                  quality food at a competitive price, with easy ordering access
                  and efficient service which are aided by our technology
                  innovations. Our dough is generally made fresh and distributed
                  to stores around the world by us and our franchisees.
                </p>
              </div>
              <hr />
              <h2 data-aos="fade-right">About Us</h2>
              <div className="justify-text" data-aos="fade-right">
                <p>
                  Pizza is an amazingly popular food and Pizza Palette's is one
                  of the leading pizzerias in Malaysia providing exceptional
                  delivery service. As of 2019, Pizza Palette Malaysia has more
                  than 40 pizza places that are strategically located and we are
                  continually increasing our store numbers in order to serve
                  more to serve all pizza lovers nationwide.
                </p>
                <hr />
                <h2 data-aos="fade-left">What We Offer</h2>
                <p data-aos="fade-left">
                  Pizza Palette started with just one store called just
                  "Palette" bought by Kenneth for $500 in 1960. James traded his
                  half of the business to Tom in 1965, and as sole owner Kenneth
                  renamed the business Pizza Palette Inc. In 1978 the 200th
                  Pizza Palette store opened, and things really began to cook.
                  Pizza Palette offers Supreme Pizza, Breakfast Pizza, Sausage
                  Pepperoni, Tomato Pizza, Ultimate Cheese, Classic Cheese,
                  Variety Pizza, Veggie Mania, Meat Paradise, The Original and
                  Aroma Pizza.
                </p>
                <img
                  className="adjust-menu"
                  src={MenuPage2}
                  alt=""
                  data-aos="fade-left"
                />
                <img
                  className="adjust-menu"
                  src={MenuPage1}
                  alt=""
                  data-aos="fade-left"
                />
                <p data-aos="fade-right">
                  By 1983 there were 1,000 Pizza Palette stores, and in the same
                  year Pizza Palette opened its first international store in
                  Winnipeg, Canada, followed by its first store on the
                  Australasian continent in Queensland, Australia in the same
                  year. By 1989 Pizza Palette had 5,000 stores in operation,
                  making it the fastest-growing pizza company in the world, with
                  stores in the UK, Japan, and South America.
                </p>
                <p data-aos="fade-right">
                  Delivering more than 1 million pizzas a day worldwide, Pizza
                  Palette is the world’s leading and fastest growing pizza
                  delivery company committed to upholding the industry in
                  product quality and operational excellence. Globally, Pizza
                  Palette Inc. operates a total network of more than 14,800
                  owned and franchised stores throughout Malaysia. and in over
                  85 markets. Pizza Palette internationally ranks in the top
                  five companies in online transactions.
                </p>
                <p data-aos="fade-right">
                  As at Q2 2017, Pizza Palette Malaysia is the largest Pizza
                  Palette market in Southeast Asia and fifth largest in Asia
                  Pacific. Established in 1997, Pizza Palette Malaysia is
                  managed by master franchise holder, Dommal Food Services Sdn
                  Bhd. To date, there are more than 240 Pizza Palette stores in
                  the country. At Pizza Palette, we take PRIDE in our commitment
                  to enrich the lives of our customers, employees, partners,
                  shareholders and communities. As one of the most lovable
                  brands in Malaysia, we will go the extra mile for your smile
                  as well as uphold our culture to ‘sell more pizza, have more
                  fun’. Embracing our company’s philosophy of smart hustle,
                  Pizza Palette is committed to provide customers with the
                  ultimate pizza delivery experience, with its product
                  satisfaction guarantee, 30 minute delivery guarantee and 15
                  minute take-away guarantee.
                </p>
                <p data-aos="fade-left">
                  Forging ahead as an e-commerce entity, Pizza Palette has led
                  many firsts in its digital platforms. Pizza Palette Malaysia
                  has leveraged on the digital world to the best of its
                  advantage and this began when it was certified as the first
                  QSR company to provide an online ordering platform by the
                  Malaysian Book of Records with the launch of its website in
                  2003. Pizza Palette continue to strive and grow digitally and
                  in its innovation to provide better services and customer
                  experience. Pizza Palette Malaysia is the award winner of the
                  2009, 2010, 2011, 2012 and 2016 Gold Franny Award, a
                  distinguished Achievement Award of the International Franchise
                  Association at the Pizza Palette Worldwide Rally. In a show of
                  confidence by Malaysian consumers, Pizza Palette won Bronze in
                  the "Restaurant & Fast Food" category of the prestigious Putra
                  Brand Awards 2014, silver in 2015, bronze in 2016, Silver in
                  2017 and bronze in 2018.
                </p>
                <p data-aos="fade-right">
                  Pizza Palette Malaysia has grown by leaps and bounds since it
                  first began its operations in 1997. From a single store in USJ
                  with a headcount of 15 staffs, the pizza chain today has over
                  240 stores in Malaysia and over 30 stores in Singapore with a
                  headcount of over 4,000 staffs. Pizza Palette Malaysia has
                  experienced solid growth, particularly in the past few years
                  with the opening of its 50th store in January 2011, 100th
                  store in December 2012, 150th store in March 2016 and now the
                  200th store in April 2017. Pizza Palette continues to strive
                  towards delivering quality service and products while
                  embracing technology driven platforms as we progress into the
                  next phase of growth in Malaysia.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
