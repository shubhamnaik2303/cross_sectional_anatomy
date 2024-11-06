import React from 'react';
import { Link } from 'react-router-dom';
import './Abdomen.css';

const Abdomen = () => {
  return (
    <div className="abdomen-home-container">
      <h1 className="abdomen-title">Abdomen Anatomy</h1>
      <div className="abdomen-image-container">
        <img src="/images/Abdomen.png" alt="Abdomen Anatomy" className="abdomen-responsive-img" />
      </div>
      <div>
        <Link to="t10" className="abdomen-hyperlink abdomen-t10">T10</Link>
        <Link to="t11" className="abdomen-hyperlink abdomen-t11">T11</Link>
        <Link to="t12-l1" className="abdomen-hyperlink abdomen-t12-l1">T12-L1</Link>
        <Link to="l1" className="abdomen-hyperlink abdomen-l1">L1</Link>
        <Link to="l2" className="abdomen-hyperlink abdomen-l2">L2</Link>
        <Link to="l3" className="abdomen-hyperlink abdomen-l3">L3</Link>
        <Link to="l4" className="abdomen-hyperlink abdomen-l4">L4</Link>
      </div>
    </div>
  );
}

export default Abdomen;
