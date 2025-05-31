import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaHandPointRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const FooterSection = () => {
  return (
    <div className="footer-section">
      <div className="footer-top">
        <div>
          <h2>Weekly Newsletter</h2>
          <p>
            There are many variations of passengers of lorem ipsum available.
          </p>
        </div>
        <div className="footer-form">
          <input type="email" placeholder="Enter your email" />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      <div className="footer-sub">
        <div>
          <p>About Us</p>
          <p className="footer-underline">------</p>
          <p className="footer-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
            dolor!
          </p>
          <p className="footer-text">
            <FaPhoneAlt /> <span>(+94) 11 434 7575</span>
          </p>
          <p className="footer-text">
            <IoLocationSharp /> <span>42, Lilly Ave, Colombo 00600</span>
          </p>
        </div>

        <div>
          <p>Latest News</p>
          <p className="footer-underline">------</p>
          <p className="footer-text">
            <div className="latest-news">
              <div>
                <IoIosArrowForward />
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
                consequatur.
              </p>
            </div>
          </p>
          <p className="footer-text time-text">5 Minutes Ago</p>

          <p className="footer-text">
            <div className="latest-news">
              <div>
                <IoIosArrowForward />
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
                consequatur.
              </p>
            </div>
            <p className="footer-text time-text">5 Minutes Ago</p>
          </p>
        </div>

        <div>
          <p>Customer Service</p>
          <p className="footer-underline">------</p>

          <div className="footer-text customer-service">
            <FaHandPointRight />
            <p>Support Forum</p>
          </div>

          <div className="footer-text customer-service">
            <FaHandPointRight />
            <p>Communications</p>
          </div>

          <div className="footer-text customer-service">
            <FaHandPointRight />
            <p>FAQ s</p>
          </div>

          <div className="footer-text customer-service">
            <FaHandPointRight />
            <p>Privacy Policy</p>
          </div>

          <div className="footer-text customer-service">
            <FaHandPointRight />
            <p>Rules & Conditions</p>
          </div>

          <div className="footer-text customer-service">
            <FaHandPointRight />
            <p>Contact Us</p>
          </div>
        </div>

        <div>
          <p>Customer Service</p>
          <p className="footer-underline">------</p>
          <div className="service-images">
            <img src="service-1.jpg" width={130} alt="" />
            <img src="service-2.jpg" width={130} alt="" />
            <img src="news-1.jpg" width={130} alt="" />
            <img src="news-2.jpg" width={130} alt="" />
            <img src="news-3.jpg" width={130} alt="" />
            <img src="news-4.jpg" width={130} alt="" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2021 All Rights Reserved. Site By Xiteb</p>
        <div className="social-media">
          <div>
            <FaFacebookF />
          </div>
          <div>
            <FaTwitter />
          </div>
          <div>
            <FaBehance />
          </div>
          <div>
            <FaYoutube />
          </div>
          <div>
            <FaWhatsapp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
