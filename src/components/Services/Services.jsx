import React from "react";
import "./Services.css";
import "material-symbols";

const Services = () => {
  return (
    <div className="services">
      <h2 className="head2">Services</h2>
      <div className="cards">
        <label>
          <input className="hide" type="checkbox" />
          <article>
            <div className="front">
              <span className="material-symbols-outlined">code</span>
              <var>FRONTEND DEVELOPER</var>
            </div>
            <div className="back">
              <p>
              I am a frontend developer skilled in HTML, CSS, JavaScript, React, and responsive design,
               creating dynamic, user-friendly web experiences. </p>
            </div>
          </article>
        </label>

        <label>
          <input className="hide" type="checkbox" />
          <article>
            <div className="front">
              <span className="material-symbols-outlined">terminal</span>
              <var>BACKEND DEVELOPER</var>
            </div>
            <div className="back">
              <p>I am a backend developer skilled in MERN stack, Django, Node.js, Express,
                 MongoDB, RESTful APIs, authentication, and database management.</p>
            </div>
          </article>
        </label>

        <label>
          <input className="hide" type="checkbox" />
          <article>
            <div className="front">
              <span className="material-symbols-outlined">draw</span>
              <var>WEB DESIGNING</var>
            </div>
            <div className="back">
              <p>I design websites by blending creativity and functionality to create user-friendly, 
                responsive, and visually appealing online experiences.</p>
            </div>
          </article>
        </label>

        <label>
          <input className="hide" type="checkbox" />
          <article>
            <div className="front">
              <span className="material-symbols-outlined">database</span>
              <var>DATABASE MANAGEMENT</var>
            </div>
            <div className="back">
              <p>I manage databases using SQL for structured data and MongoDB for flexible, scalable NoSQL 
                solutions, ensuring optimal performance.</p>
            </div>
          </article>
        </label>

        <label>
          <input className="hide" type="checkbox" />
          <article>
            <div className="front">
              <span className="material-symbols-outlined">engineering</span>
              <var>MAINTENANCE & SUPPORT</var>
            </div>
            <div className="back">
              <p>I lead the web maintenance and support team, ensuring websites run smoothly, perform updates, 
                fix issues, and enhance functionality.</p>
            </div>
          </article>
        </label>

        <label>
          <input className="hide" type="checkbox" />
          <article>
            <div className="front">
              <span className="material-symbols-outlined">share</span>
              <var>DIGITAL MARKETING</var>
            </div>
            <div className="back">
              <p>I create and implement digital marketing strategies, focusing on SEO, social 
                media, content creation, and analytics to drive growth</p>
            </div>
          </article>
        </label>
      </div>
    </div>
  );
};

export default Services;
