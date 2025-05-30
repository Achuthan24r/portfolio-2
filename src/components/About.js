import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Learn more about our mission and values</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2><b>Our Story</b></h2>
          <p>
            Founded in 2023, Gryffiondars has been at the forefront of innovation,Making web apps at low cost
          </p>
        </div>

        <div className="about-section">
          <h2><b>Our Mission</b></h2>
          <p>
            Every one have their own website, and we are here to make your website look more attractive and more user friendly
          </p>
        </div>

        <div className="about-section">
          <h2><b>Our Team</b></h2>
          <p>
            Our diverse team of experts brings together decades of combined
            experience in various fields. We believe in collaboration,
            innovation, and continuous learning.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
