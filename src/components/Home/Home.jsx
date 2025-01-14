import React from "react";
import "./Home.css";
import portfolio from "../../assets/portfolio2.jpeg";

const HomePage = () => {
  const handleDownloadCV = () => {
    window.location.href =
      "https://drive.google.com/file/d/1vA9o3zDvC5ZqfXXTbcomyd0Heii5wufe/view?usp=sharing";
  };

  return (
    <div className="home-page">
      <div className="content">
        <img src={portfolio} alt="" className="porfolio" />
        <div className="right-side">
          <h1 className="name">
            <span>MUHAMMED SAFNAD CK</span>
          </h1>
          <h2 className="title">Full Stack Web Developer</h2>
          <p className="description">
            I’m a Web Developer with experience in the <b>MERN STACK </b>and{" "}
            <b>PYTHON DJANGO</b>.
            <br /> I love working on both the front-end and back-end to create
            smooth, user-friendly experiences. <br />
            I’m excited about using the latest technologies to build innovative
            web applications.
          </p>
          <div className="buttons">
            <button className="download-button" onClick={handleDownloadCV}>
              <div className="docs">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  stroke="black"
                  strokeWidth="2"
                  fill="aquamarine"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                My Resume
              </div>
              <div className="download">
                <svg
                  viewBox="0 0 24 24"
                  width="30"
                  height="30"
                  stroke="black"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
