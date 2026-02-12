// function About() {
//   return (
//     <div className="about">
//       <h1>About Us</h1>
//       <p>We provide the best watches at affordable prices for every occasion.</p>
//     </div>
//   );
// }

// export default About;

// About.js
import React from 'react';
import './About.css'; // optional separate CSS file
import aboutImage from '../IMG/about.avif'; 

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Eternal Hour</h1>
        <p>Discover the story behind our brand and mission.</p>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img src={aboutImage} alt="About Eternal Hour" />
        </div>

        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Eternal Hour started with a simple vision: to combine elegance and precision in every watch we create.
            We aim to provide timeless designs that resonate with our customers’ style and personality.
          </p>

          <p>Our core values:</p>
          <ul>
            <li>Precision and Quality</li>
            <li>Customer Satisfaction</li>
            <li>Innovation in Design</li>
            <li>Integrity and Transparency</li>
          </ul>

          <p>
            We are committed to making each moment special for our customers, one Eternal Hour at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
