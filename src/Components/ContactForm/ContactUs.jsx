import React, { useState } from "react";
import "../../../Style/ContactUs.css";
import developerImg from "../../assets/ContactImg/developerImg.png"
import DeveloperLogo from "../../assets/ContactImg/developer-logo.png" 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const [selectedService, setSelectedService] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const services = [
  "Business Website",
  "Portfolio Website",
  "Blog Website",
  "E-Commerce Store",
  "Landing Page",
  "Wedding Website",
  "Website Redesign",
  "SEO Optimization",
  "Custom Web App",
];

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    company: e.target.company.value,
    budget: e.target.budget.value,
    timeline: e.target.timeline.value,
    message: e.target.message.value,
  };

  try {
    const response = await fetch(
      "http://localhost:8000/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    console.log("API Response:", data);

    if (response.ok) {

      toast.success("Inquiry Sent Successfully!");

      e.target.reset();
      setSelectedService("");

    } else {

      toast.error(data.message || "Something went wrong");

    }

  } catch (error) {

    console.error(error);

    toast.error("Server Error");

  } finally {

    setLoading(false);

  }
};
return (
<section className="contact-section">
  <div className="contact-container">

        {/* Left Side */}
    <div className="contact-left">
      <span className="contact-badge">CONTACT US</span>

      <h2>
        Let's Build Your
        <br />
        Digital Presence
      </h2>

      <p className="contact-description">
        I'm a Full Stack Developer focused on creating modern,
        responsive and user-friendly websites. Whether you need
        a Wedding Website, Business Website, Portfolio, Landing
        Page or Custom Web Application, I'll help transform your
        ideas into a professional digital experience.
      </p>


    <div className="developer-card">
        {/* Original Image (clickable) */}
        <img
          src={developerImg}
          alt="Nitesh Prajapati"
          className="developer-img"
          onClick={() => setShowImage(true)}
        />


      <div className="developer-info">
        <img
          src={DeveloperLogo}
          alt="Nitesh Prajapati - Full Stack Developer"
          className="developer-logo"
        />
      </div>
    </div>

    {/* Full Screen Image Overlay */}
    {showImage && (
      <div className="image-modal">
        <img
          src={developerImg}
          alt="Nitesh Prajapati"
          className="modal-image"
        />
        <button
          className="close-btn"
          onClick={() => setShowImage(false)}
        >
          ✕
        </button>
      </div>
    )}

      <div className="developer-about">
      <h4>Hi, I'm Nitesh 👋</h4>

      <p>
      I specialize in building elegant Wedding Websites,
      Business Websites, Portfolio Websites and Custom Web
      Applications using React.js and modern web technologies.
      </p>

      <p>
      With experience in responsive design, frontend
      development and user-focused interfaces, I create
      websites that are fast, modern and optimized for all
      devices.
      </p>
    </div>

      <div className="developer-highlights">
      <div className="highlight-item">
      <span>✓</span>
      <p>Responsive Website Design</p>
      </div>

      <div className="highlight-item">
      <span>✓</span>
      <p>Modern UI & Animations</p>
      </div>

      <div className="highlight-item">
      <span>✓</span>
      <p>React.js & MERN Stack Development</p>
      </div>

      <div className="highlight-item">
      <span>✓</span>
      <p>SEO Friendly Websites</p>
      </div>
    </div>
  </div>


        {/* Right Side */}
        <div className="contact-right">
          <h3>Get In Touch</h3>

          
         <div className="service-tags">
           {services.map((service) => (
             <button
               key={service}
               type="button"
               className={
                 selectedService === service
                   ? "service-tag active"
                   : "service-tag"
               }
               onClick={() => setSelectedService(service)}
             >
               {service}
             </button>
           ))}
         </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">
             <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
         <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              maxLength="10"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
            />
            <input
              type="text"
              name="company"
              placeholder="Company / Brand Name"
            />

            <input
              type="text"
              name="budget"
              placeholder="Project Budget"
            />

            <input
              type="text"
              name="timeline"
              placeholder="Project Timeline"
            />

            <textarea
              name="message"
              placeholder="Describe your project requirements..."
              rows="6"
              required
            />
          </div>

        <button
          className="submit-btn"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner"></span>
              Processing...
            </>
          ) : (
            "Send Inquiry"
          )}
        </button>
      </form>
    </div>
  </div>
  <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable
      theme="dark"
    />
</section>
  );
};

export default ContactSection;



















