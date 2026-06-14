import React from "react";
import cardImg from "../../assets/ReceptionImg/Invitation Card.png";
import coupleImg from "../../assets/ReceptionImg/InvitationImg.png";

const Invitation = () => {
  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  return (
    <div className="invitation-wrapper" name="invitation">
      
      {/* Overview Section */}
      <div className="invitation-overview">
        <h2 className="overview-title">A Celebration of Eternal Love</h2>
        <p className="overview-text">
          Renu & Lakhan invite you to step into a world where love blossoms like 
          timeless poetry. This wedding journey is more than an event—it is a 
          tapestry of cherished memories, heartfelt promises, and golden moments 
          woven together. Join us as we celebrate the union of two souls, 
          surrounded by elegance, tradition, and joy.
        </p>
      </div>

      {/* Main Invitation Content */}
      <div className="invitation-container">
        {/* LEFT SIDE - CONTENT */}
        <div className="content-section">
          <p className="tagline">A Beautiful Journey of Love & Togetherness</p>

          <div className="divider"></div>

          <p className="description">
            Two hearts united in love, celebrating a bond that will last forever.
            Join us as we cherish unforgettable memories of this beautiful day.
          </p>

          <div className="couple-wrapper">
            <img src={coupleImg} alt="Couple" loading="lazy"/>
          </div>

          <div className="details">
            <p><strong>Date:</strong> 16 November 2024</p>
            <p><strong>Time:</strong> 7:00 PM</p>
            <p><strong>Venue:</strong> Tagor Nagar Nayagoan Marrige Hall, <br/>Kota Rajasthan</p>
          </div>

          <a href="/EventVenue" className="PreWeddingLink" onClick={scrollToTop}>   
            <button className="btn">View Venue</button>
          </a>
        </div>

        {/* RIGHT SIDE - CARD */}
        <div className="card-section">
          <img src={cardImg} alt="Wedding Card" className="card-image" loading="lazy"/>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
