import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router
import '../Level1.css'; // Assuming the styles are shared across all components

const Level1 = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleNext = () => {
    navigate('/head/level2'); // Adjust this to the correct route
  };

  const handlePrevious = () => {
    navigate('/head'); // Adjust this to the correct route
  };

  return (
    <div className="level1-container-unique">
      <h1 className="level1-title-unique">Cross Sectional Brain Anatomy - Level 1</h1>

      {/* Image and Annotations Section */}
      <div className="level1-images-row-unique">
        <figure className="image-container">
          <img src="/images/Level1_1.gif" alt="Brain Image 1" className="responsive-img hover-img" />
          <div className="annotation annotation-1_1" data-tooltip="Frontal Lobe"><b>1</b></div>
          <div className="annotation annotation-1_2" data-tooltip="Diploe"><b>2</b></div>
          <div className="annotation annotation-1_3" data-tooltip="Falx Cerebri">3</div>
          <div className="annotation annotation-1_4" data-tooltip="Superior Saggital Sinus">4</div>
          <div className="annotation annotation-1_5" data-tooltip="Parietal Bone">5</div>
          <figcaption>Figure 1: MRI Appearance</figcaption>
        </figure>

        <figure className="image-container">
          <img src="/images/Level1_2.png" alt="Brain Image 2" className="responsive-img hover-img" />
          <div className="annotation annotation-1_6" data-tooltip="Frontal Lobe"><b>1</b></div>
          <div className="annotation annotation-1_7" data-tooltip="Diploe"><b>2</b></div>
          <div className="annotation annotation-1_8" data-tooltip="Falx Cerebri"><b>3</b></div>
          <div className="annotation annotation-1_9" data-tooltip="Superior Saggital Sinus"><b>4</b></div>
          <div className="annotation annotation-1_10" data-tooltip="Parietal Bone"><b>5</b></div>
          <figcaption>Figure 2: Cadaver Appearance</figcaption>
        </figure>

        <figure className="image-container">
          <img src="/images/Level1_3.jpg" alt="Brain Image 3" className="responsive-img hover-img" />
          <div className="annotation annotation-1_00" data-tooltip="Falx Cerebri">3</div>
          <div className="annotation annotation-1_01" data-tooltip="Parietal Bone">5</div>
          <figcaption>Figure 3: CT Appearance</figcaption>
        </figure>
      </div>

      {/* Back and Forward Icons */}
      <div className="navigation-icons">
        <div className="back-icon" onClick={handlePrevious}>
          &#8592; {/* Back arrow icon */}
        </div>
        <div className="forward-icon" onClick={handleNext}>
          &#8594; {/* Forward arrow icon */}
        </div>
      </div>
    </div>
  );
};

export default Level1;
