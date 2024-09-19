import React from 'react';
import '../Level4.css'; // Assuming the styles are shared across all components

const Level3 = () => {
  return (
    <div className="level1-container-unique">
      <h1 className="level1-title-unique">Cross Sectional Brain Anatomy - Level 4</h1>

      {/* Image and Annotations Section */}
      <div className="level1-images-row-unique">
        <figure className="image-container">
          <img src="/images/Level4_1.gif" alt="Brain Image 1" className="responsive-img" />
          <div className="annotation annotation-4_1" data-tooltip="Perpendicular Plate Ethmoid">1</div>
          <div className="annotation annotation-4_2" data-tooltip="Parietal Bone">5</div>
          <div className="annotation annotation-4_3" data-tooltip="Superior Saggital Sinus">6</div>
          <div className="annotation annotation-4_4" data-tooltip="Cerebellum">7</div>
          <div className="annotation annotation-4_5" data-tooltip="Hypothalamus">8</div>
          <div className="annotation annotation-4_6" data-tooltip="Anterior Clinoid Process">9</div>
          <div className="annotation annotation-4_7" data-tooltip="Lateral Rectus">10</div>
          <div className="annotation annotation-4_8" data-tooltip="Vitreous of Eye">11</div>
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
          <div className="annotation annotation-4_10" data-tooltip="Lateral Rectus">10</div>
          <div className="annotation annotation-4_11" data-tooltip="Vitreous of Eye">11</div>
          {/* Description for Image 2 */}
          <figcaption>Figure 2: Cadaver Appearance</figcaption>
        </figure>

        <figure className="image-container">
          <img src="/images/Level4_3.jpg" alt="Brain Image 3" className="responsive-img" />
          <figcaption>Figure 3: CT Appearance</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Level3;
