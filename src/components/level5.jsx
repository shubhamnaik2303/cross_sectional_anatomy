import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import '../Level5.css'; // Assuming the styles are shared across all components
import { toggleButtons } from './script';

const Level5 = () => {

  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/head'); // Adjust this to the correct route for Level 3
  };

  const handlePrevious = () => {
    navigate('/head/level4'); // Adjust this to the correct route for Level 1
  };


  const [buttonClicked, setButtonClicked] = useState(false);
  return (
    <div className="level1-container-unique">
      <h1 className="level1-title-unique">Cross Sectional Brain Anatomy - Level 5</h1>

      {/* Image and Annotations Section */}
      <div className="level1-images-row-unique">

        {/* Back Icon */}
        <div className="back-icon" onClick={handlePrevious}>
          &#8592; {/* Back arrow icon */}
        </div>

        <figure className="image-container">
          <img src="/images/Level5_1.gif" alt="Brain Image 1" className="responsive-img" />
          <div className="annotation annotation-5_4" data-tooltip="Internal Carotoid Artery">4</div>
          <div className="annotation annotation-5_5" data-tooltip="Pons">5</div>
          <div className="annotation annotation-5_6" data-tooltip="Superior Cerebellar Pudencle">6</div>
          <div className="annotation annotation-5_7" data-tooltip="Occipital Lobe">7</div>
          <div className="annotation annotation-5_8" data-tooltip="Transverse Sinus">8</div>
          <div className="annotation annotation-5_9" data-tooltip="Cerebellum">9</div>
          <div className="annotation annotation-5_12" data-tooltip="Sphenoid Sinus">12</div>
          <div className="annotation annotation-5_13" data-tooltip="Maxilarry Sinus">13</div>
          
          {/* Description for Image 1 */}
          <figcaption>Figure 1: MRI Appearance</figcaption>
        </figure>

        <figure className="image-container">
          <img src="/images/Level5_2.png" alt="Brain Image 2" className="responsive-img" />
          <div className="annotation annotation-5_01" data-tooltip="Nasolacrimal Duct">1</div>
          <div className="annotation annotation-5_02" data-tooltip="Zygomatic Ach">2</div>
          <div className="annotation annotation-5_03" data-tooltip="Temporal Pole">3</div>
          <div className="annotation annotation-5_04" data-tooltip="Internal Carotoid Artery">4</div>
          <div className="annotation annotation-5_05" data-tooltip="Pons">5</div>
          <div className="annotation annotation-5_06" data-tooltip="Superior Cerebellar Pudencle">6</div>
          <div className="annotation annotation-5_07" data-tooltip="Occipital Lobe">7</div>
          <div className="annotation annotation-5_08" data-tooltip="Transverse Sinus">8</div>
          <div className="annotation annotation-5_09" data-tooltip="Cerebellum">9</div>
          <div className="annotation annotation-5_010" data-tooltip="Mastoid Air cells">10</div>
          <div className="annotation annotation-5_011" data-tooltip="Cavernous Sinus">11</div>
          <div className="annotation annotation-5_012" data-tooltip="Sphenoid Sinus">12</div>
          <div className="annotation annotation-5_013" data-tooltip="Maxillary Sinus">13</div>
          {/* Description for Image 2 */}
          <figcaption>Figure 2: Cadaver Appearance</figcaption>
        </figure>

        <figure className="image-container">
          <img src="/images/Level5_3.jpg" alt="Brain Image 3" className="responsive-img" />
          {/* Description for Image 3 */}
          <div className="annotation annotation-5_001" data-tooltip="Nasolacrimal Duct">1</div>
          <div className="annotation annotation-5_002" data-tooltip="Zygomatic Ach">2</div>
          <div className="annotation annotation-5_003" data-tooltip="Temporal Pole">3</div>
          <div className="annotation annotation-5_005" data-tooltip="Pons">5</div>
          <div className="annotation annotation-5_006" data-tooltip="Superior Cerebellar Pudencle">6</div>
          <div className="annotation annotation-5_007" data-tooltip="Occipital Lobe">7</div>
          <div className="annotation annotation-5_008" data-tooltip="Transverse Sinus">8</div>
          <div className="annotation annotation-5_009" data-tooltip="Cerebellum">9</div>
          <div className="annotation annotation-5_0010" data-tooltip="Mastoid Air cells">10</div>
          <div className="annotation annotation-5_0011" data-tooltip="Cavernous Sinus">11</div>
          <div className="annotation annotation-5_0012" data-tooltip="Sphenoid Sinus">12</div>
          <div className="annotation annotation-5_0013" data-tooltip="Maxillary Sinus">13</div>
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

export default Level5;