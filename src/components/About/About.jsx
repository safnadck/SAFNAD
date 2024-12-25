import React from "react";
import "./About.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaDatabase, // Added SQL-related icon
} from "react-icons/fa";
import { DiBootstrap, DiDjango } from "react-icons/di";
import { SiMongodb, SiExpress, SiTailwindcss, SiVercel } from "react-icons/si";

const About = () => {
  return (
    <div className="about-container">
      <h2 className="skills">My Skills</h2>
      <p className="p">
        I specialize in HTML5, CSS3, JavaScript, React, Bootstrap, Node.js,
        Express.js, MongoDB, SQL, Git, GitHub, Django, Vercel, and Tailwind.
      </p>
      <div className="skills-container">
        <FaHtml5
          className="skill-icon"
          style={{ color: "#E34F26", top: "10%", left: "10%" }}
        />
        <FaCss3Alt
          className="skill-icon"
          style={{ color: "#1572B6", top: "10%", left: "40%" }}
        />
        <FaJs
          className="skill-icon"
          style={{ color: "#F7DF1E", top: "10%", left: "65%" }}
        />
        <FaReact
          className="skill-icon"
          style={{ color: "#61DBFB", top: "10%", left: "85%" }}
        />
       
        <FaNodeJs
          className="skill-icon"
          style={{ color: "#68A063", top: "30%", left: "26%" }}
        />
        <SiExpress
          className="skill-icon"
          style={{ color: "#000000", top: "30%", left: "53%" }}
        />
        <SiMongodb
          className="skill-icon"
          style={{ color: "#47A248", top: "30%", left: "75%" }}
        />
        <FaGit
          className="skill-icon"
          style={{ color: "#F1502F", top: "80%", left: "53%" }}
        />
        <FaGithub
          className="skill-icon"
          style={{ color: "#181717", top: "80%", left: "26%" }}
        />
        <DiDjango
          className="skill-icon"
          style={{ color: "#092E20", top: "60%", left: "10%" }}
        />
        <SiVercel
          className="skill-icon"
          style={{ color: "#000000", top: "80%", left: "75%" }}
        />
        <SiTailwindcss
          className="skill-icon"
          style={{ color: "#06B6D4", top: "60%", left: "85%" }}
        />
         <DiBootstrap
          className="skill-icon"
          style={{ color: "#7952B3", top: "60%", left: "65%" }}
        />
        <FaDatabase
          className="skill-icon"
          style={{ color: "#003B57", top: "60%", left: "40%" }} 
        />
      </div>
    </div>
  );
};

export default About;
