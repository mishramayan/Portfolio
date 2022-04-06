import React from "react";
import "./footer.css";
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {GrFacebook} from 'react-icons/gr' 
import {AiFillHeart} from 'react-icons/ai'

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        MAYAN
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mayan-kumar-mishra-24085a122/">
          <BsLinkedin />
        </a>
        <a href="https://github.com" target="_blank">
          <BsGithub />
        </a>
        <a href="https://facebook.com" target="_blank">
          <GrFacebook />
        </a>
      </div>


      <div className="footer__copyright">
        <small>&copy; Made with <AiFillHeart /> in Boston. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default footer;
