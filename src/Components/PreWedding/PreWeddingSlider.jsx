import React, { useState, useEffect } from "react";

import Prewedding1 from "../../assets/PreWedImg/Prewedding1.png";
import Prewedding2 from "../../assets/PreWedImg/Prewedding2.png";
import Prewedding3 from "../../assets/PreWedImg/Prewedding3.png";
import Prewedding4 from "../../assets/PreWedImg/Prewedding4.png";
import Prewedding5 from "../../assets/PreWedImg/Prewedding5.png";
import Prewedding6 from "../../assets/PreWedImg/Prewedding6.png";
import Prewedding7 from "../../assets/PreWedImg/Prewedding7.png";
import Prewedding8 from "../../assets/PreWedImg/Prewedding8.png";
import Prewedding9 from "../../assets/PreWedImg/Prewedding9.png";
import Prewedding10 from "../../assets/PreWedImg/Prewedding10.png";
import Prewedding11 from "../../assets/PreWedImg/Prewedding11.png"


const images = [
  Prewedding1, Prewedding2,
  Prewedding3, Prewedding4,
  Prewedding5, Prewedding6,
  Prewedding7, Prewedding8,
  Prewedding9, Prewedding10,
  Prewedding11,
];

const  PreWeddingSlider = () => {
  const [index, setIndex] = useState(0);
  const isVisible = true;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // auto change every 3 sec
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  return (
    <section className="PreWeddingseSection">
      {/* LEFT SLIDESHOW */}
      <div className={`preWeddingContainer ${isVisible ? "animate" : ""}`}>
        {images.map((img, i) => (
          <div
            key={i}
            className={`preWeddingSlide ${i === index ? "active" : ""}`}
          >
            <img src={img} alt="pre-wedding" />
          </div>
        ))}
      </div>

      {/* RIGHT CONTENT (outside image) */}
      <div className={`PreWeddingContent ${isVisible ? "animate" : ""}`}>
          <h2 className="PreWeddingHeading">Our Wedding Memories</h2>
        <p className="PreWeddingText">
            A journey once lived, now cherished forever.  
            These images are not just photographs, they are timeless echoes of love, laughter, and togetherness.  
            Walk through our memory tunnel and relive the magic.
        </p>

        <p className="PreWeddingText">
          Captured through the lens, this brief journey transforms into a love story that harmoniously blends romance,
          intimacy, and tradition—and every single frame evokes that same magical feeling experienced at first sight.
        </p>

        <a href="/BrideGroom" className="PreWeddingLink" onClick={scrollToTop}>
          <span>See Full Memory Tunnel</span>
          <span className="PreWeddingArrow">→</span>
        </a>
      </div>
    </section>
  );
};

export default PreWeddingSlider;
