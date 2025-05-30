import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to my website</h1>
          <p>Creating amazing experiences in my website</p>
          
        </div>
      </section>

      <section className="features">
        <h2>Our features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3><b>Innovation</b></h3>
            <p>Cutting-edge solutions for modern problems</p>
          </div>
          <div className="feature-card">
            <h3><b>Quality</b></h3>
            <p>Premium projects</p>
          </div>
          <div className="feature-card">
            <h3><b>Support</b></h3>
            <p>24/7 customer support</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
