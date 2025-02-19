import React from "react";
import suviImage from '../../src/assets/suvi.png';  
import satelliteImage from '../../src/assets/satellite.png';  

export default function Academics() {
  return (
    <section id="academics">
      <h5>My Academic Projects</h5>
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

      </div>
    </section>
  );
}
