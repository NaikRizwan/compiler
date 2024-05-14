import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";

import { IoMdHome } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generateColoredLetters = () => {
    const text = "J&K RR TOUR!";
    const coloredLetters = text.split("").map((letter, index) => {
      const color = generateRandomColor();
      return (
        <span key={index} style={{ color }}>
          {letter}
        </span>
      );
    });
    return coloredLetters;
  };
  return (
    <footer className="footer">
      <section className="social-media">
        <div className="social-icons">
          <a
            style={{ textDecoration: "none" }}
            href="https://www.facebook.com/thestationerycorner"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare />
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.twitter.com/thestationerycorner"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://www.twitter.com/thestationerycorner"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
          {/* Add other social media icons as needed */}
        </div>
      </section>

      <section className="footer-content">
        <div className="footer-column">
          <h6 className="footer-heading">{generateColoredLetters()}</h6>
          <p>
            Here you can use rows and columns to organize your footer content.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div className="footer-column">
          <h6 className="footer-heading">Support</h6>
          <p>
            <a style={{ textDecoration: "none" }} href="#!">
              Help Centre
            </a>
          </p>
          <p>
            <a style={{ textDecoration: "none" }} href="#!">
              Cancellation options
            </a>
          </p>
          <p>
            <a style={{ textDecoration: "none" }} href="#!">
              Disability support
            </a>
          </p>
          <p>
            <a style={{ textDecoration: "none" }} href="#!">
              Anti-discrimination
            </a>
          </p>
          {/* Add more product links */}
        </div>

        <div className="footer-column">
          <h6 className="footer-heading">Useful Links</h6>
          <p>
            <a style={{ textDecoration: "none" }} href="#!">
              About Us
            </a>
          </p>
          <p>
            <a style={{ textDecoration: "none" }} href="#!">
              Contact Us
            </a>
          </p>
          <p>
            <a style={{ textDecoration: "none" }} href="#!">
              Destination
            </a>
          </p>
          <p>
            <a style={{ textDecoration: "none" }} href="#!">
              New Features
            </a>
          </p>
          {/* Add more useful links */}
        </div>

        <div className="footer-column">
          <h6 className="footer-heading">Contact</h6>
          <p>
            <IoMdHome /> New York, NY 10012, US
          </p>
          <p>
            <MdEmail /> info@example.com
          </p>
          <p>
            <FaPhoneAlt /> 7051790026
          </p>
          <p>
            <FaPhoneAlt /> 6005341553
          </p>
          {/* Add more contact details */}
        </div>
      </section>

      <div className="footer-bottom">
        <p style={{ color: "papayawhip", fontWeight: "bold" }}>
          &copy; 2023. All Rights Reserved. {generateColoredLetters()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
