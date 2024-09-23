import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router
import '../Level3.css'; // Assuming the styles are shared across all components
import { toggleButtons } from './script';

const Level3 = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleNext = () => {
    navigate('/head/level4'); // Adjust this to the correct route for the next level
  };

  const handlePrevious = () => {
    navigate('/head/level2'); // Adjust this to the correct route for the previous level
  };

  return (
    <div className="level1-container-unique">
      <h1 className="level1-title-unique">Cross Sectional Brain Anatomy - Level 3</h1>

      {/* Image and Annotations Section */}
      <div className="level1-images-row-unique">

        {/* Back Icon */}
        <div className="back-icon" onClick={handlePrevious}>
          &#8592; {/* Back arrow icon */}
        </div>

        <figure className="image-container">
          <img src="/images/Level3_1.gif" alt="Brain Image 1" className="responsive-img hover-img" />
          <div className="annotation annotation-3_2" data-tooltip="Anterior Commissure">2</div>
          <div className="annotation annotation-3_4" data-tooltip="Superior Saggital Sinus">4</div>
          <div className="annotation annotation-3_5" data-tooltip="Orbital Radiation">5</div>
          <div className="annotation annotation-3_6" data-tooltip="Chloroid Plexus of Ventricle">6</div>
          <div className="annotation annotation-3_7" data-tooltip="Temporalis">7</div>
          <div className="annotation annotation-3_8" data-tooltip="Superior Rectus">8</div>
          <div className="annotation annotation-3_9" data-tooltip="Ethmoid Sinuses">9</div>
          <figcaption>Figure 1: MRI Appearance</figcaption>
        </figure>

        <figure className="image-container">
          <img src="/images/Level3_2.png" alt="Brain Image 2" className="responsive-img hover-img" />
          <div className="annotation annotation-3_01" data-tooltip="Orbital Pad of Fat">1</div>
          <div className="annotation annotation-3_02" data-tooltip="Anterior Commissure">2</div>
          <div className="annotation annotation-3_03" data-tooltip="Internal Capsule">3</div>
          <div className="annotation annotation-3_04" data-tooltip="Superior Saggital Sinus">4</div>
          <div className="annotation annotation-3_05" data-tooltip="Orbital Radiation">5</div>
          <div className="annotation annotation-3_06" data-tooltip="Chloroid Plexus of Ventricle">6</div>
          <div className="annotation annotation-3_07" data-tooltip="Temporalis">7</div>
          <div className="annotation annotation-3_08" data-tooltip="Superior Rectus">8</div>
          <div className="annotation annotation-3_09" data-tooltip="Ethmoid Sinuses">9</div>
          <figcaption>Figure 2: Cadaver Appearance</figcaption>
        </figure>

        <figure className="image-container">
          <img src="/images/Level3_3.jpg" alt="Brain Image 3" className="responsive-img hover-img" />
          <div className="annotation annotation-3_001" data-tooltip="Orbital Pad of Fat">1</div>
          <div className="annotation annotation-3_002" data-tooltip="Anterior Commissure">2</div>
          <div className="annotation annotation-3_004" data-tooltip="Superior Saggital Sinus">4</div>
          <div className="annotation annotation-3_007" data-tooltip="Temporalis">7</div>
          <div className="annotation annotation-3_009" data-tooltip="Ethmoid Sinuses">9</div>
          <figcaption>Figure 3: CT Appearance</figcaption>
        </figure>

        {/* Forward Icon */}
        <div className="forward-icon" onClick={handleNext}>
          &#8594; {/* Forward arrow icon */}
        </div>
      </div>
      
      <div>
        <button id="toggleButton" data-tooltip="Show/Hide labels" className="toggle-button" onClick={() => toggleButtons(buttonClicked, setButtonClicked)}>
          {buttonClicked ? <img src="/images/on-1.png" alt="afterClick" /> : <img src="/images/off-1.png" alt="beforeClick" />}
        </button>
      </div>
    </div>
  );
};

export default Level3;
