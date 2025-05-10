import React from "react";
import suviImage from '../../src/assets/suvi.png';  
import satelliteImage from '../../src/assets/satellite.png';  
import Ecomm from '../../src/assets/Ecomm.png';  
import Earth from '../../src/assets/Earth.png';

export default function Academics() {
  return (
    <section id="academics">
      <h5>My Projects</h5>
      <h2>Projects</h2>
      <div className="academics-container">
        
        <div className="academics-card">
          <h3>Web Project</h3>
          <div className="academics-content">
            <article className="academics-details">
              <div>
                <img src={suviImage} alt="Web Project" className="academics-image" />
                <h4 className="academics-title">Web Application</h4>
                <p>This is an online E-Learning Platform built using PHP, HTML, CSS, and a PHP API backend connected to a MySQL database through phpMyAdmin.</p>
              </div>
            </article>
          </div>
        </div>
        
        <div className="academics-card">
          <h3>Android Project</h3>
          <div className="academics-content">
            <article className="academics-details">
              <div>
                <img src={satelliteImage} alt="Android Project" className="academics-image" />
                <h4 className="academics-title">Android Application</h4>
                <p>This is a React Native Satellite Info App with a PHP API backend and MySQL database managed through phpMyAdmin.</p>
              </div>
            </article>
          </div>
        </div>

        <div className="academics-card">
          <h3>Ecommerce Website</h3>
          <div className="academics-content">
            <article className="academics-details">
              <div>
                <img src={Ecomm} alt="Android Project" className="academics-image" />
                <h4 className="academics-title">Android Application</h4>
                <p>This is a full-stack e-commerce web application that replicates the design and core functionality of the reference site. It includes user authentication, dynamic product listings from an external API, a shopping cart, and a mock checkout process..</p>
              </div>
            </article>
          </div>
        </div>

        <div className="academics-card">
          <h3>Satellite Tracker Website</h3>
          <div className="academics-content">
            <article className="academics-details">
              <div>
                <img src={Earth} alt="Android Project" className="academics-image" />
                <h4 className="academics-title">Satellite Tracker Web Application</h4>
                <p>This is a full-stack satellite trakcer website where real time coodrinates of satellite should be tracked.</p>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
}
