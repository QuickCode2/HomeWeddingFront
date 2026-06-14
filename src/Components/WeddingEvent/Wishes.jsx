import React from "react";
import brideImg from "../../assets/PreWedImg/MemoryBride.png";
import groomImg from "../../assets/PreWedImg/MemoryGroom.png";


const Wishes = () => {
  return (
    <section className="mainwishes">

      {/* LEFT IMAGE */}
      <img src={groomImg} alt="Groom" className="WishesImgLeft" loading="lazy"/>

      {/* CENTER CONTENT */}
      <div className="wishes-content">
        <span> </span>
        <h2> 💖 Our Beautiful Journey</h2>

        <p>
          What started as a simple story turned into a lifetime promise.
          Every smile, every glance, and every moment we shared has become
          a memory we will cherish forever.
        </p>

        <p>
          This isn’t just our wedding… it’s the beginning of our forever.
          Thank you for being a part of our love story ❤️
        </p>

        <div className="wishes-quote">
          ✨ "Together is a beautiful place to be." ✨
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <img src={brideImg} alt="Bride" className="WishesImgRight" loading="lazy"/>

    </section>
  );
};

export default Wishes;
