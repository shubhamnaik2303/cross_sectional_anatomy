import React, { useState } from 'react';
import '../Level2.css'; // Assuming the styles are shared across all components
import { toggleButtons } from './script';

const Level2 = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  return (
    <div className="level1-container-unique">
      <h1 className="level1-title-unique">Cross Sectional Brain Anatomy - Level 2</h1>

      {/* Image and Annotations Section */}
      <div className="level1-images-row-unique">
        <figure className="image-container">
          <img src="/images/Level2_1.gif" alt="Brain Image 1" className="responsive-img" />
          <div className="annotation annotation-2_1" data-tooltip="Corpus Collosum">1</div>
          <div className="annotation annotation-2_2" data-tooltip="Head of Caudate Nucleus">2</div>
          <div className="annotation annotation-2_3" data-tooltip="Lentiform Nucleus">3</div>
          <div className="annotation annotation-2_4" data-tooltip="Thalamus">4</div>
          <div className="annotation annotation-2_5" data-tooltip="Posterial Horn of Lateral Ventricle">5</div>
          <div className="annotation annotation-2_6" data-tooltip="Frontal sinus">6</div>
          {/* Description for Image 1 */}
          <figcaption>Figure 1: MRI Appearance</figcaption>
        </figure>

        <figure className="image-container">
          <img src="/images/Level2_2.png" alt="Brain Image 2" className="responsive-img" />
          <div className="annotation annotation-2_01" data-tooltip="Corpus Collosum">1</div>
          <div className="annotation annotation-2_02" data-tooltip="Head of Caudate Nucleus">2</div>
          <div className="annotation annotation-2_03" data-tooltip="Lentiform Nucleus">3</div>
          <div className="annotation annotation-2_04" data-tooltip="Thalamus">4</div>
          <div className="annotation annotation-2_05" data-tooltip="Posterial Horn of Lateral Ventricle">5</div>
          <div className="annotation annotation-2_06" data-tooltip="Frontal sinus">6</div>
          {/* Description for Image 2 */}
          <figcaption>Figure 2: Cadaver Appearance</figcaption>
        </figure>

        <figure className="image-container">
          <img src="/images/Level2_3.jpg" alt="Brain Image 3" className="responsive-img" />
          <div className="annotation annotation-2_001" data-tooltip="Corpus Collosum">1</div>
          <div className="annotation annotation-2_002" data-tooltip="Head of Caudate Nucleus">2</div>
          <div className="annotation annotation-2_003" data-tooltip="Lentiform Nucleus">3</div>
          <div className="annotation annotation-2_004" data-tooltip="Thalamus">4</div>
          <div className="annotation annotation-2_005" data-tooltip="Posterial Horn of Lateral Ventricle">5</div>
          <div className="annotation annotation-2_006" data-tooltip="Frontal sinus">6</div>
          {/* Description for Image 3 */}
          <figcaption>Figure 3: CT Appearance</figcaption>
        </figure>
      </div>
      <div>
      <button id="toggleButton" data-tooltip="Show/Hide labels" className="toggle-button" onClick={() => toggleButtons(buttonClicked, setButtonClicked)}>
          {buttonClicked ? <img src="/images/on-1.png" alt="afterClick" /> : <img src="/images/off-1.png" alt="beforeClick" />}
      </button>
      </div>
    </div>
  );
}

export default Level2;
