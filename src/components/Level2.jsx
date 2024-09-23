import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Level2.css'; // Using the same CSS as Level1 for consistent styling

const Level2 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/head/level3'); // Adjust this to the correct route for Level 3
  };

  const handlePrevious = () => {
    navigate('/head/level1'); // Adjust this to the correct route for Level 1
  };

  return (
    <div className="level1-container-unique">
      <h1 className="level1-title-unique">Cross Sectional Brain Anatomy - Level 2</h1>

      {/* Image and Annotations Section */}
      <div className="level1-images-row-unique">
        <figure className="image-container">
          <img src="/images/Level2_1.gif" alt="Brain Image 1" className="responsive-img hover-img" />
          <div className="annotation annotation-2_1" data-tooltip="Corpus Collosum"><b>1</b></div>
          <div className="annotation annotation-2_2" data-tooltip="Head of Caudate Nucleus"><b>2</b></div>
          <div className="annotation annotation-2_3" data-tooltip="Lentiform Nucleus"><b>3</b></div>
          <div className="annotation annotation-2_4" data-tooltip="Thalamus"><b>4</b></div>
          <div className="annotation annotation-2_5" data-tooltip="Posterial Horn of Lateral Ventricle"><b>5</b></div>
          <div className="annotation annotation-2_6" data-tooltip="Frontal sinus"><b>6</b></div>
          <figcaption>Figure 1: MRI Appearance</figcaption>
        </figure>

        <figure className="image-container">
          <img src="/images/Level2_2.png" alt="Brain Image 2" className="responsive-img hover-img" />
          <div className="annotation annotation-2_01" data-tooltip="Corpus Collosum"><b>1</b></div>
          <div className="annotation annotation-2_02" data-tooltip="Head of Caudate Nucleus"><b>2</b></div>
          <div className="annotation annotation-2_03" data-tooltip="Lentiform Nucleus"><b>3</b></div>
          <div className="annotation annotation-2_04" data-tooltip="Thalamus"><b>4</b></div>
          <div className="annotation annotation-2_05" data-tooltip="Posterial Horn of Lateral Ventricle"><b>5</b></div>
          <div className="annotation annotation-2_06" data-tooltip="Frontal sinus"><b>6</b></div>
          <figcaption>Figure 2: Cadaver Appearance</figcaption>
        </figure>

        <figure className="image-container">
          <img src="/images/Level2_3.jpg" alt="Brain Image 3" className="responsive-img hover-img" />
          <div className="annotation annotation-2_001" data-tooltip="Corpus Collosum"><b>1</b></div>
          <div className="annotation annotation-2_002" data-tooltip="Head of Caudate Nucleus"><b>2</b></div>
          <div className="annotation annotation-2_003" data-tooltip="Lentiform Nucleus"><b>3</b></div>
          <div className="annotation annotation-2_004" data-tooltip="Thalamus"><b>4</b></div>
          <div className="annotation annotation-2_005" data-tooltip="Posterial Horn of Lateral Ventricle"><b>5</b></div>
          <div className="annotation annotation-2_006" data-tooltip="Frontal sinus"><b>6</b></div>
          <figcaption>Figure 3: CT Appearance</figcaption>
        </figure>
      </div>

      {/* Navigation Icons */}
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

export default Level2;
