  import { useEffect } from "react";
import TravelShoot from "../../assets/PreWedImg/TravelShoot.png";
import BeachShoot from "../../assets/PreWedImg/BeachShoot.png";
import GardenShoot from "../../assets/PreWedImg/GardenShoot.png";

export default function Memory() {
  useEffect(() => {
  const items = document.querySelectorAll(".grid-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  items.forEach((item) => observer.observe(item));

  return () => observer.disconnect();
}, []);
  return (
    <div className="recreate-memory-wrapper">
      {/* Hero Banner */}
      <div className="hero-banner">
        <h1>Recreate Your PreWedding Day</h1>
     <p>
      These pre-wedding photographs beautifully capture the journey of love.  
      In the first image, the couple beside a car radiates innocence and joy, 
      reflecting the thrill of new beginnings. The second, by the water’s edge, 
      speaks of companionship and peace—where love feels most natural.  
      The third, in traditional attire, highlights the bond between culture and 
      emotion, showing how heritage enriches modern love.  

      Together, these moments weave a story of excitement, intimacy, and tradition.  
      They are not just fleeting pictures, but timeless memories that mark the 
      beginning of a journey—one that will blossom into a lifetime of cherished 
      experiences after the wedding.
    </p>
  </div>

      {/* Wedding Section */}
      <div className="grid-layout">
        <div className="grid-item">
          <img src={TravelShoot} alt="Wedding Location" loading="lazy"/>
          <div className="overlay">
            <h2>Return to the Beginning</h2>
            <p>
              Returning to the very place where the journey began makes the depth of the relationship
              feel even more special. That same place, that same atmosphere, and those same feelings
              transport the heart back to that magical moment once again.
            </p>
          </div>
        </div>

        <div className="grid-item">
          <img src={BeachShoot} alt="Wedding Album" loading="lazy"/>
          <div className="overlay">
            <h2>Cherish Quiet Moments </h2>
            <p>
              Sitting by the water's edge and leaning on one another serves as a reminder
              that the true strength of love lies in a sense of peace and belonging.
            </p>
          </div>
        </div>
   
           <div className="grid-item">
          <img src={GardenShoot} alt="Wedding Album" loading="lazy"/>
          <div className="overlay">
            <h2>Celebrate Traditions Together</h2>
            <p>
              Adorned with culture and tradition, these moments reveal that the depth of a relationship
              is reflected not merely in modern styles, but also in our roots and traditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}