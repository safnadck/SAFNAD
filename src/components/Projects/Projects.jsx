import React from "react";
import "./Projects.css";
import safnad from "../../assets/safnad.jpg";

const Projects = () => {
  return (
    <div className="yellow">
      <h2 className="head2">Projects</h2>

      <div className="class3">
        <div className="section">
          <div className="card-2">
            <img src={safnad} alt="" />
            <div>
              <h2>NourishNet</h2>
              <p>
              The Poultry Farm Management System. <br />
              NourishNet, efficiently manages farm details such as feed, medicine, and mortality tracking
              </p>
              <div className="buttons">
                <button>visit</button>
              </div>
            </div>
          </div>

          <div className="card-2">
            <img src={safnad} alt="" />
            <div>
              <h2>Gym Application</h2>
              <p>
              Gym website to provide users with easy access to fitness programs, membership
              details, class schedules, and trainer information
              </p>
              <div className="buttons">
                <button>visit</button>
              </div>
            </div>
          </div>
        </div>
        <div className="section2">
        <div className="section">
        <div className="card-2">
            <img src={safnad} alt="" />
            <div>
              <h2>E-COMMERCE</h2>
              <p>
              Developed and managed an e-commerce website that facilitates seamless online shopping experiences.
              </p>
              <div className="buttons">
                <button>visit</button>
              </div>
            </div>
          </div>

          <div className="card-2">
            <img src={safnad} alt="" />
            <div>
              <h2>CRUD Application</h2>
              <p>
              Enables users to create, read, update, and delete data, providing a fully functional interface for data management and
              interaction.
              </p>
              <div className="buttons">
                <button>visit</button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
