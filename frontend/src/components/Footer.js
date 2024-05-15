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
    const text = "Web-Based Compiler";
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
            href="https://www.facebook.com/webbasedcompiler"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare />
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.instagram.com/webbasedcompiler"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://www.youtube.com/webbasedcompiler"
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
              Documentation
            </a>
          </p>
          <p>
            <a style={{ textDecoration: "none" }} href="#!">
              FAQ
            </a>
          </p>
          <p>
            <a style={{ textDecoration: "none" }} href="#!">
              Community Forum
            </a>
          </p>
          <p>
            <a style={{ textDecoration: "none" }} href="#!">
              Contact Support
            </a>
          </p>
          {/* Add more support links */}
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
              Blog
            </a>
          </p>
          <p>
            <a style={{ textDecoration: "none" }} href="#!">
              Tutorials
            </a>
          </p>
          <p>
            <a style={{ textDecoration: "none" }} href="#!">
              Features
            </a>
          </p>
          {/* Add more useful links */}
        </div>

        <div className="footer-column">
          <h6 className="footer-heading">Contact</h6>
          <p>
            <IoMdHome /> Kolkata ,india
          </p>
          <p>
            <MdEmail /> support@webbasedcompiler.com
          </p>
          <p>
            <FaPhoneAlt /> 705-179-0026
          </p>
          <p>
            <FaPhoneAlt /> 600-534-1553
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
