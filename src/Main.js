import React from "react";
import logo1 from "../src/assets/logo1.svg";
import logo2 from "../src/assets/logo2.svg";
import image1 from "../src/assets/image1.png";
import image2 from "../src/assets/image2.png";

const Main = () => {
  return (
    <>
      <section className="header">
        <div className="title">
          <div className="title-logo">
            <img src={logo1} alt="food truck" className="logo-1" />
          </div>
          <div className="title-section">
            <div className="title-heading">
              <h1>
                Discover the <span>best</span> food and drinks
              </h1>
              <p className="title-info">
                Naturally made Healthcare Products for the better care & support
                of your body.
              </p>
              <button type="button" className="btn-explore">
                explore now !
              </button>
            </div>
          </div>
        </div>
        <div className="pizza-img">
          <img src={image1} alt="pizza" className="pizza" />
          <img src={logo2} alt="pizza logo" className="logo-2" />
        </div>
        <button type="button" className="touch-btn">
          Get In Touch
        </button>
      </section>
      <section className="about">
        <div className="about-image">
          <img src={image2} alt="spoon" />
        </div>
        <div className="about-info">
          <h2>about us</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </p>
          <button type="button" className="about-more-btn">
            Read More
          </button>
        </div>
      </section>
    </>
  );
};

export default Main;
