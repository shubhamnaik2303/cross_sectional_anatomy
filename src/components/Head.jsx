import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Assuming the styles are shared across all components

const Head = () => {
  return (
    <div className="home-container">
      <h1 className="title">Head Anatomy</h1>
      <div className="image-container">
        <img src="/images/Brain.jpg" alt="Brain Anatomy" className="responsive-img" />
        
        {/* Adding lines and labels */}
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
        <div className="line line-4"></div>
        <div className="line line-5"></div>

      </div>
      <div>
      ` <Link to="level1" className="hyperlink level1">Level 1</Link>
        <Link to="level2" className="hyperlink level2">Level 2</Link>
        <Link to="level3" className="hyperlink level3">Level 3</Link>
        <Link to="level4" className="hyperlink level4">Level 4</Link>
        <Link to="level5" className="hyperlink level5">Level 5</Link>
      </div>
    </div>
  );
}

export default Head;
