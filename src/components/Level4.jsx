import React, { useState } from 'react';
import { toggleButtons } from './script';
import { useNavigate } from 'react-router-dom';
import '../Level4.css'; // Assuming the styles are shared across all components

const Level4 = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/head/level5'); // Adjust this to the correct route for Level 3
  };

  const handlePrevious = () => {
    navigate('/head/level3'); // Adjust this to the correct route for Level 1
  };


  return (
    <div className="level1-container-unique">
      <h1 className="level1-title-unique">Cross Sectional Brain Anatomy - Level 4</h1>

      {/* Image and Annotations Section */}
      <div className="level1-images-row-unique">

        {/* Back Icon */}
        <div className="back-icon" onClick={handlePrevious}>
          &#8592; {/* Back arrow icon */}
        </div>

        <figure className="image-container">
          <img src="/images/Level4_1.gif" alt="Brain Image 1" className="responsive-img" />
          <div className="annotation annotation-4_1" data-tooltip="Perpendicular Plate Ethmoid"><b>1</b></div>
          <div className="annotation annotation-4_5" data-tooltip="Parietal Bone"><b>5</b></div>
          <div className="annotation annotation-4_6" data-tooltip="Superior Saggital Sinus"><b>6</b></div>
          <div className="annotation annotation-4_7" data-tooltip="Cerebellum"><b>7</b></div>
          <div className="annotation annotation-4_8" data-tooltip="Hypothalamus"><b>8</b></div>
          <div className="annotation annotation-4_9" data-tooltip="Anterior Clinoid Process">9</div>
          <div className="annotation annotation-4_10" data-tooltip="Lateral Rectus">10</div>
          <div className="annotation annotation-4_11" data-tooltip="Medial Rectus">11</div>
          <div className="annotation annotation-4_12" data-tooltip="Vitreous of Eye">12</div>
          {/* Description for Image 1 */}
          <figcaption>Figure 1: MRI Appearance</figcaption>
        </figure>

        <figure className="image-container">
          <img src="/images/Level4_2.png" alt="Brain Image 2" className="responsive-img" />
          <div className="annotation annotation-4_01" data-tooltip="Perpendicular Plate Ethmoid">1</div>
          <div className="annotation annotation-4_02" data-tooltip="Ethmoid Sinuses">2</div>
          <div className="annotation annotation-4_03" data-tooltip="Infundibulum">3</div>
          <div className="annotation annotation-4_04" data-tooltip="Temporalis">4</div>
          <div className="annotation annotation-4_05" data-tooltip="Parietal Bone">5</div>
          <div className="annotation annotation-4_06" data-tooltip="Superior Saggital Sinus">6</div>
          <div className="annotation annotation-4_07" data-tooltip="Cerebellum">7</div>
          <div className="annotation annotation-4_08" data-tooltip="Hypothalamus">8</div>
          <div className="annotation annotation-4_09" data-tooltip="Anterior Clinoid Process">9</div>
          <div className="annotation annotation-4_010" data-tooltip="Lateral Rectus">10</div>
          <div className="annotation annotation-4_011" data-tooltip="Medial Rectus">11</div>
          <div className="annotation annotation-4_012" data-tooltip="Vitreous of Eye">12</div>
          {/* Description for Image 2 */}
          <figcaption>Figure 2: Cadaver Appearance</figcaption>
        </figure>

        <figure className="image-container">
          <img src="/images/Level4_3.jpg" alt="Brain Image 3" className="responsive-img" />
          <div className="annotation annotation-4_001" data-tooltip="Perpendicular Plate Ethmoid">1</div>
          <div className="annotation annotation-4_002" data-tooltip="Ethmoid Sinuses">2</div>
          <div className="annotation annotation-4_004" data-tooltip="Temporalis">4</div>
          <div className="annotation annotation-4_005" data-tooltip="Parietal Bone">5</div>
          <div className="annotation annotation-4_006" data-tooltip="Superior Saggital Sinus">6</div>
          <div className="annotation annotation-4_007" data-tooltip="Cerebellum">7</div>
          <div className="annotation annotation-4_008" data-tooltip="Hypothalamus">8</div>
          <div className="annotation annotation-4_009" data-tooltip="Anterior Clinoid Process">9</div>
          <div className="annotation annotation-4_0010" data-tooltip="Lateral Rectus">10</div>
          <div className="annotation annotation-4_0011" data-tooltip="Medial Rectus">11</div>
          <div className="annotation annotation-4_0012" data-tooltip="Vitreous of Eye">12</div>
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

export default Level4;
