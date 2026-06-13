import { useEffect, useState } from "react";

const BrideGroomSlider = ({ images, title }) => {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const preload = new Image();
    preload.src = images[index];
    preload.onload = () => setLoaded(true);
  }, [index, images]);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoaded(false);
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  const next = () => {
    setLoaded(false);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setLoaded(false);
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="portfolioSlider">
      <div className="sliderWrapper">

        <img
          src={images[index]}
          alt={title}
          className={`sliderImage ${
            loaded ? "showImage" : ""
          }`}
        />

        <div className="sliderOverlay">
          <h2>{title}</h2>
        </div>

        <button className="arrow left" onClick={prev}>
          ❮
        </button>

        <button className="arrow right" onClick={next}>
          ❯
        </button>

      </div>
    </section>
  );
};

export default BrideGroomSlider;























