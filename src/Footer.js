import React from "react";
import logo1 from "../src/assets/logo1.svg";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-logo">
        <img src={logo1} alt="food truck" />
      </div>
      <div className="contact-us">
        <ul className="contact-info">
          <li className="contact-heading">
            <h5>Contact us</h5>
          </li>
          <li>
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </li>
          <li>example2020@gmail.com</li>
          <li>(904) 443-0343</li>
        </ul>
      </div>
      <div className="more-info-section">
        <ul className="more">
          <li className="more-heading">
            <h5>More</h5>
          </li>
          <li>About Us</li>
          <li>Products</li>
          <li>Career</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="social-links-section">
        <ul className="social-links">
          <li className="social-heading">
            <h5>Social Links</h5>
          </li>
          <div className="social-logos-section">
            <ul className="social-logos">
              <li>
                <AiOutlineInstagram />
              </li>
              <li>
                <AiOutlineTwitter />
              </li>
              <li>
                <FaFacebookF />
              </li>
            </ul>
          </div>
          <p>© 2022 Food Truck Example</p>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
