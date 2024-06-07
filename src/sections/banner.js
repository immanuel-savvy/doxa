"use client";

import React from "react";
// import Simple_calculator from "./simple_calculator";
import bg from "../assets/img/What_Is_Inventory_Management.jpg";

class Hero_banner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hero: {
        main_text: "Inventory Management",
        sub_text: "Optimize, Track, and Manage Your Stock Seamlessly",
        bg,
      },
    };
  }

  render() {
    let { hero } = this.state;
    let { main_text, sub_text, bg, overlay } = hero;

    return (
      <div
        className="hero_banner image-cover image_bottom h4_bg"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundColor: "black",
          width: "100%",
          height: "70%",
        }}
        data-overlay={`${overlay || 9}`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-12 align-items-center">
              <h1 className="banner_title mb-4">{main_text}</h1>
              <p className="font-lg mb-4" style={{ fontSize: 20 }}>
                {sub_text}
              </p>
            </div>

            <div className="col-md-6 col-sm-12 align-items-center">
              {/* <Simple_calculator /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero_banner;
