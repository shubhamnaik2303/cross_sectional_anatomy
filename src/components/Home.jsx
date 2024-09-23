import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="title">CrossSectional-Anatomy</h1>
      <div className="image-container">
        <img src="/images/HumanBody.png" alt="Human Body" className="responsive-img" />

        {/* Hyperlinks positioned over the image */}
        <Link to="/head" className="hyperlink1 head-link">Head</Link>
        <Link to="/neck" className="hyperlink1 neck-link">Neck</Link>
        <Link to="/thorax" className="hyperlink1 thorax-link">Thorax</Link>
        <Link to="/abdomen" className="hyperlink1 abdomen-link">Abdomen</Link>
      </div>
    </div>
  );
}

export default Home;
