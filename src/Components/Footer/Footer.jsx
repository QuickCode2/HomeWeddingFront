import React from "react";
import { Link } from "react-router-dom";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from '@mui/icons-material/Language';
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../../../Style/Footer.css";

import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

  const Footer = () => {
  const [value, setValue] = React.useState(4);
  const [hover, setHover] = React.useState(-1);

  const [feedback, setFeedback] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [messageType, setMessageType] = React.useState("");

  const handleFeedbackSubmit = async () => {
  if (!feedback.trim()) {
    setMessage("Please enter your feedback.");
    setMessageType("error");
    return;
  }

  if (!value) {
    setMessage("Please select a rating.");
    setMessageType("error");
    return;
  }

  try {
    setLoading(true);
    setMessage("");
    setMessageType("");

    const payload = {
      feedback,
      rating: value,
      createdAt: new Date().toISOString(),
    };

    const response = await fetch(
      "http://localhost:8000/api/send-feedback",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (data.success) {
      setMessage("Thank you for your feedback ❤️");
      setMessageType("success");

      setFeedback("");
      setValue(4);
    } else {
      setMessage(data.message || "Failed to send feedback");
      setMessageType("error");
    }
  } catch (error) {
    console.error(error);

    setMessage("Something went wrong.");
    setMessageType("error");
  } finally {
    setLoading(false);
  }
};

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-column">
        <h2 className="footer-logo">Send Your Feedback</h2>

    {/* Feedback Section */}
      <div className="footer-col feedback-col">

        <textarea
          placeholder="Share your experience..."
          rows="4"
          className="feedback-textarea"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button
          className="feedback-btn"
          onClick={handleFeedbackSubmit}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Feedback"}
        </button>
       

       <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          icon={
            <StarIcon
              sx={{
                fill: "url(#goldGradient)",
              }}
              fontSize="inherit"
            />
          }
          emptyIcon={
            <StarIcon
              sx={{
                color: "#555",
                opacity: 0.55,
              }}
              fontSize="inherit"
            />
          }
        />

        {/* Gradient Definition */}
        <svg width="0" height="0">
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#f5e6c4" />
            </linearGradient>
          </defs>
        </svg>

        {value !== null && (
          <span className="rating-text">
            {labels[hover !== -1 ? hover : value]}
          </span>
        )}

      {message && (
        <p
          className={`feedback-message ${
            messageType === "error"
              ? "feedback-error"
              : "feedback-success"
          }`}
        >
          {message}
        </p>
      )}
      
      </div>
    </div>

        {/* Quick Links */}
      <div className="footer-column">
        <h3>Quick Links</h3>

        <Link to="/" onClick={scrollToTop}>
          Home
        </Link>

        <Link to="/aboutsection" onClick={scrollToTop}>
          AboutUs
        </Link>

        <Link to="/bridegroom" onClick={scrollToTop}>
          Gallery
        </Link>

        <Link to="/eventvenue" onClick={scrollToTop}>
          Events
        </Link>

        <Link to="/contactus" onClick={scrollToTop}>
          ContactUs
        </Link>
      </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Services</h3>

          <ul>
            <li>Wedding Websites</li>
            <li>Digital Invitations</li>
            <li>Photo Galleries</li>
            <li>RSVP Management</li>
            <li>Custom Designs</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact Us</h3>

          <p>Email: niteshahiniya2.0@gmail.com</p>
          <p>Phone: +91 89050***77</p>
          <p>The Towers of Liberty Kota, Rajasthan, India</p>

         <div className="social-icons">
          <a
            href="https://www.instagram.com/nitesh_ahiniya2?igsh=MXRxc2VjaXB0Z3lxNQ==&utm_source=ig_contact_invite"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>

          <a
            href="https://www.facebook.com/share/1Km7XePPfb/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookOutlinedIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/nitesh-ahiniya-6b745a2b7"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>

          <a
            href="https://nitesh-cv-web.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <LanguageIcon />
          </a>
        </div>
        </div>
    </div>

      {/* Bottom */}
      <div className="footer-credit">
        <span className="copyright">
          © 2024 Wedding Memories
        </span>

        <span className="made-with">
          Crafted with <FavoriteIcon className="footer-heart" />
        </span>

        <span className="divider"></span>

        <span className="developer-name">
          Designed & Developed by Nitesh Ahiniya
        </span>
      </div>
    </footer>
  );
};

export default Footer;