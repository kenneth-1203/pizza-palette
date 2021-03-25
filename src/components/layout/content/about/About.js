import React, { Component } from "react";

import Logo from "../../../../assets/images/logo.png";
import MenuPage1 from "../../../../assets/images/pp-menu-1.jpg";
import MenuPage2 from "../../../../assets/images/pp-menu-2.jpg";

export default class About extends Component {
  state = {
    isMobile: false,
  };

  componentDidMount() {
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
      <div className="container">
        <div className="about">
          <div
            className={`d-flex${this.state.isMobile ? "" : " floated-iframe"}`}
          >
            <iframe
              className={`iframe${
                this.state.isMobile ? " adjust-size" : ""
              }`}
              src="https://www.youtube-nocookie.com/embed/30DWX-FDd-Q"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="overview">
            <h2 className="pb-1">Overview</h2>
            <img className="py-1 floated-logo" src={Logo} alt="" />
            <div className="justify-text">
              <p>
                is a medium sized enterprise and pizza restaurant with more than
                2,000 stores in over 6 markets. Founded in 2010, our roots are
                in convenient pizza delivery, while a significant amount of our
                sales also come from carryout customers. Although we are a
                highly-recognized global brand, we focus on serving the local
                neighborhoods in which we live and do business through our large
                network of franchise owners and Company-owned stores. On
                average, we sell more than 500 thousand pizzas each day
                throughout our global system.
              </p>
              <p>
                Our business model is straightforward: we handcraft and serve
                quality food at a competitive price, with easy ordering access
                and efficient service which are aided by our technology
                innovations. Our dough is generally made fresh and distributed
                to stores around the world by us and our franchisees.
              </p>
            </div>
            <hr/>
            <h2>About Us</h2>
            <div className="justify-text">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus dolorem quas corrupti. Dignissimos quod dicta esse,
                quas nobis eius, placeat neque iusto quos nihil velit
                laudantium, aut repellat quia ipsum? Nesciunt laborum sapiente
                assumenda facere expedita. Sit nostrum rerum explicabo laborum
                perspiciatis reiciendis pariatur alias unde architecto, qui
                nobis vitae obcaecati in eum provident totam. Nesciunt odit
                fugit soluta natus! Nobis qui optio nesciunt, laboriosam soluta
                at sint, omnis iusto repellendus aliquam mollitia deserunt
                adipisci, laborum vitae id ratione amet beatae aut libero
                asperiores minus! Cumque harum placeat officiis similique.
              </p>
              <hr/>
              <img className="adjust-menu" src={MenuPage2} alt="" />
              <img className="adjust-menu" src={MenuPage1} alt="" />
              <p className="justify-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                dicta mollitia soluta, cum delectus fuga error corporis cumque,
                enim non voluptate officia est assumenda consectetur? Aliquam
                deleniti recusandae similique debitis. Libero eligendi, mollitia
                aut tenetur aliquid inventore culpa, nulla dolore distinctio
                doloremque vel, assumenda voluptatem? Voluptatibus nihil dolorum
                aliquid illum! Fuga beatae eum dolore fugiat inventore natus
                amet repellendus laborum. Nam, quasi. Alias a ducimus vero
                quibusdam deleniti, quidem itaque omnis expedita consectetur,
                eum accusantium debitis ratione libero impedit pariatur sapiente
                minima nostrum facere doloribus odit. Fuga distinctio voluptatem
                expedita? Praesentium quia exercitationem voluptates, itaque
                consequatur accusamus enim saepe vero impedit repellat neque
                tempore nobis quisquam vitae fuga facere delectus nemo est iure
                cum, quos maxime voluptatem soluta doloribus? Tempore. Officia
                nostrum omnis, veniam labore necessitatibus dignissimos numquam
                unde magnam tempora maxime vero inventore accusantium ipsa sint
                impedit temporibus sequi, et in earum repudiandae, placeat nulla
                cum tempore illum. Distinctio. Odit quidem ratione similique vel
                magni laudantium laborum dolor rem sequi veniam. Vel minus
                assumenda sit, facere error culpa tempore aut optio doloremque
                officia blanditiis eaque id omnis aliquid sequi? Ad non animi
                reprehenderit esse! Aperiam, voluptas doloribus delectus a
                quisquam eveniet temporibus rem quasi earum nostrum vel corrupti
                ad eius. Velit officia amet iusto rem accusantium praesentium
                sapiente voluptatem.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
