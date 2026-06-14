import { useEffect } from "react";
import "../../Style/BrideGroom.css";

import Footer from "../Components/Footer/Footer";
import BrideGroomHero from "../Components/BrideGroom/BrideGroomHero";
import BrideGroomSlider from "../Components/BrideGroom/BrideGroomSlider";
import BrideGroomCTA from "../Components/BrideGroom/BrideGroomCTA";
import LRbridegroom from "../Components/BrideGroom/LRbridegroom";

const preWeddingImages = Array.from(
  { length: 10 },
  (_, i) => `/Memory-PreGallery/Gallery${i + 1}.png`
);

const weddingImages = Array.from(
  { length: 17 },
  (_, i) => `/Memory-WeddingGallery/Gallery${i + 1}.png`
);

const familyImages = Array.from(
  { length: 86 },
  (_, i) => `/Memory-FamilyGallery/Gallery${i + 1}.JPG`
);

const BrideGroom = () => {
  useEffect(() => {
    const element = document.getElementById("BrideGroom");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <>
      <BrideGroomHero id="BrideGroom" />

      <BrideGroomSlider
        title="PREWEDDING"
        images={preWeddingImages}
      />

      <BrideGroomSlider
        title="WEDDING"
        images={weddingImages}
      />

      <BrideGroomSlider
        title="FAMILY MOMENTS"
        images={familyImages}
      />

      <BrideGroomCTA />
      <LRbridegroom />
      <Footer />
    </>
  );
};

export default BrideGroom;