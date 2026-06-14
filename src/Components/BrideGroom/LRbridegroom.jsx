import bride1 from "../../assets/BrideGroomImgSlider/bride1.png";
import groom1 from "../../assets/BrideGroomImgSlider/groom1.png"

import bride2 from "../../assets/BrideGroomImgSlider/bride2.png";
import groom2 from "../../assets/BrideGroomImgSlider/groom2.png";

import bride3 from "../../assets/BrideGroomImgSlider/bride3.png";
import groom3 from "../../assets/BrideGroomImgSlider/groom3.png";


import bride4 from "../../assets/BrideGroomImgSlider/bride4.png";
import groom4 from "../../assets/BrideGroomImgSlider/groom4.png";

import bride5 from "../../assets/BrideGroomImgSlider/bride5.png";
import groom5 from "../../assets/BrideGroomImgSlider/groom5.png"

import bride6 from "../../assets/BrideGroomImgSlider/bride6.png"
import groom6 from "../../assets/BrideGroomImgSlider/groom6.png"

const images = [
  bride1,
  groom1,

  bride2,
  groom2,

  bride3,
  groom3,

  bride4,
  groom4,

  bride5,
  groom5,
  
  bride6,
  groom6,
];



const LRbridegroom = () => {
  return (
    <div className="BrideGroomSlider">
      <div className="BrideGroomSliderTrack">
        {[...images, ...images].map((img, i) => (
          <div className="BrideGroomSlide" key={i}>
            <img src={img} alt="BrideGroomSlide " loading="lazy"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LRbridegroom;