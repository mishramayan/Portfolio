import React from "react";
// import ReactDOM from 'react-dom';
import "./about.css";
import ME from '../../assets/me-about2.png'
import {MdWork} from 'react-icons/md'
import {HiUsers} from 'react-icons/hi'
import {BsFolderFill} from 'react-icons/bs'

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdWork className="about__icon"/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <HiUsers className="about__icon"/>
              <h5>Highest Qualification</h5>
              <small>MS in Information Systems</small>
            </article>

            <article className="about__card">
              <BsFolderFill className="about__icon"/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
          A technology enthusiast with 3+ years of industry experience as a 
          software developer skilled to work in a team, hardworking and is 
          knowledgeable of the overall software development cycle. 
          I am passionate about designing and building software products 
          that would be helpful in solving real world issues. I enjoy 
          learning and experimenting new things to keep myself up to date 
          with the current technology trend.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default about;
