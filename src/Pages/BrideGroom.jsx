import { useEffect } from "react";
import "../../Style/BrideGroom.css";
import Footer from "../Components/Footer/Footer";

import BrideGroomHero from "../Components/BrideGroom/BrideGroomHero";
import BrideGroomSlider from "../Components/BrideGroom/BrideGroomSlider";
import BrideGroomCTA from "../Components/BrideGroom/BrideGroomCTA";
import LRbridegroom from "../Components/BrideGroom/LRbridegroom";

// PREWADDING
import Gallery1 from "../assets/Memory-PreGallery/Gallery1.png";
import Gallery2 from "../assets/Memory-PreGallery/Gallery2.png";
import Gallery3 from "../assets/Memory-PreGallery/Gallery3.png";
import Gallery4 from "../assets/Memory-PreGallery/Gallery4.png";
import Gallery5 from "../assets/Memory-PreGallery/Gallery5.png";
import Gallery6 from "../assets/Memory-PreGallery/Gallery6.png";
import Gallery7 from "../assets/Memory-PreGallery/Gallery7.png";
import Gallery8 from "../assets/Memory-PreGallery/Gallery8.png";
import Gallery9 from "../assets/Memory-PreGallery/Gallery9.png";
import Gallery10 from "../assets/Memory-PreGallery/Gallery10.png";



//WADDING
import Gallery11 from "../assets/Memory-WeddingGallery/Gallery1.png";
import Gallery12 from "../assets/Memory-WeddingGallery/Gallery2.png";
import Gallery13 from "../assets/Memory-WeddingGallery/Gallery3.png";
import Gallery14 from "../assets/Memory-WeddingGallery/Gallery4.png";
import Gallery15 from "../assets/Memory-WeddingGallery/Gallery5.png";
import Gallery16 from "../assets/Memory-WeddingGallery/Gallery6.png";
import Gallery17 from "../assets/Memory-WeddingGallery/Gallery7.png";
import Gallery18 from "../assets/Memory-WeddingGallery/Gallery8.png";
import Gallery19 from "../assets/Memory-WeddingGallery/Gallery9.png";
import Gallery20 from "../assets/Memory-WeddingGallery/Gallery110.png";
import Gallery21 from "../assets/Memory-WeddingGallery/Gallery11.png";
import Gallery22 from "../assets/Memory-WeddingGallery/Gallery12.png";
import Gallery23 from "../assets/Memory-WeddingGallery/Gallery13.png";
import Gallery24 from "../assets/Memory-WeddingGallery/Gallery14.png";
import Gallery25 from "../assets/Memory-WeddingGallery/Gallery15.png";
import Gallery26 from "../assets/Memory-WeddingGallery/Gallery16.png";


// FAMILY 
import Gallery27 from "../assets/Memory-FamilyGallery/Gallery1.JPG";
import Gallery28 from "../assets/Memory-FamilyGallery/Gallery2.JPG";
import Gallery29 from "../assets/Memory-FamilyGallery/Gallery3.JPG";
import Gallery30 from "../assets/Memory-FamilyGallery/Gallery4.JPG";
import Gallery31 from "../assets/Memory-FamilyGallery/Gallery5.JPG";
import Gallery32 from "../assets/Memory-FamilyGallery/Gallery6.JPG";
import Gallery33 from "../assets/Memory-FamilyGallery/Gallery7.JPG";
import Gallery34 from "../assets/Memory-FamilyGallery/Gallery8.JPG";
import Gallery35 from "../assets/Memory-FamilyGallery/Gallery9.JPG";
import Gallery36 from "../assets/Memory-FamilyGallery/Gallery10.JPG";
import Gallery37 from "../assets/Memory-FamilyGallery/Gallery11.JPG";
import Gallery38 from "../assets/Memory-FamilyGallery/Gallery12.JPG";
import Gallery39 from "../assets/Memory-FamilyGallery/Gallery13.JPG";
import Gallery40 from "../assets/Memory-FamilyGallery/Gallery14.JPG";
import Gallery41 from "../assets/Memory-FamilyGallery/Gallery15.JPG";
import Gallery42 from "../assets/Memory-FamilyGallery/Gallery16.JPG";
import Gallery43 from "../assets/Memory-FamilyGallery/Gallery17.JPG";
import Gallery44 from "../assets/Memory-FamilyGallery/Gallery18.JPG";
import Gallery45 from "../assets/Memory-FamilyGallery/Gallery19.JPG";
import Gallery46 from "../assets/Memory-FamilyGallery/Gallery20.JPG";
import Gallery47 from "../assets/Memory-FamilyGallery/Gallery21.JPG";
import Gallery48 from "../assets/Memory-FamilyGallery/Gallery22.JPG";
import Gallery49 from "../assets/Memory-FamilyGallery/Gallery23.JPG";
import Gallery50 from "../assets/Memory-FamilyGallery/Gallery24.JPG";
import Gallery51 from "../assets/Memory-FamilyGallery/Gallery25.JPG";
import Gallery52 from "../assets/Memory-FamilyGallery/Gallery26.JPG";
import Gallery53 from "../assets/Memory-FamilyGallery/Gallery27.JPG";
import Gallery54 from "../assets/Memory-FamilyGallery/Gallery28.JPG";
import Gallery55 from "../assets/Memory-FamilyGallery/Gallery29.JPG";
import Gallery56 from "../assets/Memory-FamilyGallery/Gallery30.JPG";
import Gallery57 from "../assets/Memory-FamilyGallery/Gallery31.JPG";
import Gallery58 from "../assets/Memory-FamilyGallery/Gallery32.JPG";
import Gallery59 from "../assets/Memory-FamilyGallery/Gallery33.JPG";
import Gallery60 from "../assets/Memory-FamilyGallery/Gallery34.JPG";
import Gallery61 from "../assets/Memory-FamilyGallery/Gallery35.JPG";
import Gallery62 from "../assets/Memory-FamilyGallery/Gallery36.JPG";
import Gallery63 from "../assets/Memory-FamilyGallery/Gallery37.JPG";
import Gallery64 from "../assets/Memory-FamilyGallery/Gallery38.JPG";
import Gallery65 from "../assets/Memory-FamilyGallery/Gallery39.JPG";
import Gallery66 from "../assets/Memory-FamilyGallery/Gallery40.JPG";
import Gallery67 from "../assets/Memory-FamilyGallery/Gallery41.JPG";
import Gallery68 from "../assets/Memory-FamilyGallery/Gallery42.JPG";
import Gallery69 from "../assets/Memory-FamilyGallery/Gallery43.JPG";
import Gallery70 from "../assets/Memory-FamilyGallery/Gallery44.JPG";
import Gallery71 from "../assets/Memory-FamilyGallery/Gallery45.JPG";
import Gallery72 from "../assets/Memory-FamilyGallery/Gallery46.JPG";
import Gallery73 from "../assets/Memory-FamilyGallery/Gallery47.JPG";
import Gallery74 from "../assets/Memory-FamilyGallery/Gallery48.JPG";
import Gallery75 from "../assets/Memory-FamilyGallery/Gallery49.JPG";
import Gallery76 from "../assets/Memory-FamilyGallery/Gallery50.JPG";
import Gallery77 from "../assets/Memory-FamilyGallery/Gallery51.JPG";
import Gallery78 from "../assets/Memory-FamilyGallery/Gallery52.JPG";
import Gallery79 from "../assets/Memory-FamilyGallery/Gallery53.JPG";
import Gallery80 from "../assets/Memory-FamilyGallery/Gallery54.JPG";
import Gallery81 from "../assets/Memory-FamilyGallery/Gallery55.JPG";
import Gallery82 from "../assets/Memory-FamilyGallery/Gallery56.JPG";
import Gallery83 from "../assets/Memory-FamilyGallery/Gallery57.JPG";
import Gallery84 from "../assets/Memory-FamilyGallery/Gallery58.JPG";
import Gallery85 from "../assets/Memory-FamilyGallery/Gallery59.JPG";
import Gallery86 from "../assets/Memory-FamilyGallery/Gallery60.JPG";
import Gallery87 from "../assets/Memory-FamilyGallery/Gallery61.JPG";
import Gallery88 from "../assets/Memory-FamilyGallery/Gallery62.JPG";
import Gallery89 from "../assets/Memory-FamilyGallery/Gallery63.JPG";
import Gallery90 from "../assets/Memory-FamilyGallery/Gallery64.JPG";
import Gallery91 from "../assets/Memory-FamilyGallery/Gallery65.JPG";
import Gallery92 from "../assets/Memory-FamilyGallery/Gallery66.JPG";
import Gallery93 from "../assets/Memory-FamilyGallery/Gallery67.JPG";
import Gallery94 from "../assets/Memory-FamilyGallery/Gallery68.JPG";
import Gallery95 from "../assets/Memory-FamilyGallery/Gallery69.JPG";
import Gallery96 from "../assets/Memory-FamilyGallery/Gallery70.JPG";
import Gallery97 from "../assets/Memory-FamilyGallery/Gallery71.JPG";
import Gallery98 from "../assets/Memory-FamilyGallery/Gallery72.JPG";
import Gallery99 from "../assets/Memory-FamilyGallery/Gallery73.JPG";
import Gallery100 from "../assets/Memory-FamilyGallery/Gallery74.JPG";
import Gallery101 from "../assets/Memory-FamilyGallery/Gallery75.JPG";
import Gallery102 from "../assets/Memory-FamilyGallery/Gallery76.JPG";
import Gallery103 from "../assets/Memory-FamilyGallery/Gallery77.JPG";
import Gallery104 from "../assets/Memory-FamilyGallery/Gallery78.JPG";
import Gallery105 from "../assets/Memory-FamilyGallery/Gallery79.JPG";
import Gallery106 from "../assets/Memory-FamilyGallery/Gallery80.JPG";
import Gallery107 from "../assets/Memory-FamilyGallery/Gallery81.JPG";
import Gallery108 from "../assets/Memory-FamilyGallery/Gallery82.JPG";
import Gallery109 from "../assets/Memory-FamilyGallery/Gallery83.JPG";
import Gallery110 from "../assets/Memory-FamilyGallery/Gallery84.JPG";
import Gallery111 from "../assets/Memory-FamilyGallery/Gallery85.JPG";
import Gallery112 from "../assets/Memory-FamilyGallery/Gallery86.JPG";



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
        title="PREWADDING"
        images={[
          Gallery1, Gallery2, Gallery3, Gallery4, Gallery5,
          Gallery6, Gallery7, Gallery8, Gallery9, Gallery10,
         ]}
      />

      <BrideGroomSlider
        title="WEDDING"
        images={[
          Gallery11, Gallery12, Gallery13, Gallery14, Gallery15,
          Gallery16, Gallery17, Gallery18, Gallery19, Gallery20,
          Gallery21, Gallery22, Gallery23, Gallery24, Gallery25,
          Gallery26, 
        ]}
      />

     <BrideGroomSlider
  title="FAMILY MOMENTS"
  images={[
    Gallery27, Gallery28, Gallery29, Gallery30, Gallery31,
    Gallery32, Gallery33, Gallery34, Gallery35, Gallery36,
    Gallery37, Gallery38, Gallery39, Gallery40, Gallery41,
    Gallery42, Gallery43, Gallery44, Gallery45, Gallery46,
    Gallery47, Gallery48, Gallery49, Gallery50, Gallery51,
    Gallery52, Gallery53, Gallery54, Gallery55, Gallery56,
    Gallery57, Gallery58, Gallery59, Gallery60, Gallery61,
    Gallery62, Gallery63, Gallery64, Gallery65, Gallery66,
    Gallery67, Gallery68, Gallery69, Gallery70, Gallery71,
    Gallery72, Gallery73, Gallery74, Gallery75, Gallery76,
    Gallery77, Gallery78, Gallery79, Gallery80, Gallery81,
    Gallery82, Gallery83, Gallery84, Gallery85, Gallery86,
    Gallery87, Gallery88, Gallery89, Gallery90, Gallery91,
    Gallery92, Gallery93, Gallery94, Gallery95, Gallery96,
    Gallery97, Gallery98, Gallery99, Gallery100, Gallery101,
    Gallery102, Gallery103, Gallery104, Gallery105, Gallery106,
    Gallery107, Gallery108, Gallery109, Gallery110, Gallery111,
    Gallery112
  ]}
/>

      <BrideGroomCTA />
      <LRbridegroom />
      <Footer />
    </>
  );
};

export default BrideGroom;
