import React from "react";
import "../../../Style/EventVenue.css";
import venueImg from "../../assets/ReceptionImg/Renu&Lakhan-invitation-card 1.png";
const EventVenue = () => {
  return (
    <section className="venue-section" id="venue">
      <div className="venue-container">
        <div className="venue-header">
          <span className="venue-subtitle">Wedding Venue</span>
          <h2>Where Our Forever Began</h2>
          <p>
            This is the place where we celebrated one of the most beautiful days of our lives. 
            Surrounded by family, friends, love, and blessings, this venue became a part of our journey forever. 
            Every corner holds a memory, every smile tells a story, and every moment remains close to our hearts.
          </p>
        </div>

       <div className="venue-content">

      {/* Location Card */}
      <div className="venue-map-card">
        <div className="map-header">
          <div className="location-pin"></div>
          <div>
            <h3>Wedding Location</h3>
            <p>Royal Wedding Palace, Kota</p>
          </div>
        </div>

        <div className="venue-map">
          <iframe
            title="Wedding Venue Location"
           src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1806.1146279558595!2d75.80481300000001!3d25.127939!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f83064fe6f74b%3A0xb506a5fdf3cd993a!2sMansoori%20garden!5e0!3m2!1sen!2sin!4v1780514926483!5m2!1sen!2sin" 
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <a
          href="https://maps.app.goo.gl/1ikzEyuQcgYYtZvB8"
          target="_blank"
          rel="noopener noreferrer"
          className="direction-btn"
        >
          Get Directions →
        </a>
     </div>
     {/* Wedding Card */}
    <div className="venue-info">
      <div className="image-wrapper">
        <img src={venueImg} alt="Wedding Venue" />
        <div className="image-overlay">
        </div>
      </div>
    </div>

        </div>
      </div>
    </section>
  );
};

export default EventVenue;