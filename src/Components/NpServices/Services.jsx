import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../../Style/Services.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "Wedding Invitation Website",
    description:
      "Beautiful and responsive wedding invitation websites with personalized designs, animations, and premium user experience.",
    icon: "💍",
    path: "/WeddingEvent",
  },
  {
    id: 2,
    title: "Digital RSVP System",
    description:
      "Allow guests to confirm attendance online and manage responses efficiently.",
    icon: "📩",
    path: "/RSVP",
  },
  {
    id: 3,
    title: "Photo & Video Gallery",
    description:
      "Showcase your engagement, pre-wedding and wedding memories in an elegant gallery.",
    icon: "📸",
    path: "/bridegroom",
  },
  {
    id: 4,
    title: "Wedding Event Timeline",
    description:
      "Display all wedding functions with date, time and venue details beautifully.",
    icon: "📅",
    path: "/eventvenue",
  },
  {
    id: 5,
    title: "Google Maps Integration",
    description:
      "Help guests navigate directly to your wedding venue with live maps.",
    icon: "📍",
    path: "/eventvenue",
  },
  {
    id: 6,
    title: "Custom Wedding Website",
    description:
      "Fully customized wedding websites designed according to your unique love story.",
    icon: "🎨",
    path: "/",
  },
];

const Services = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const processRef = useRef([]);
  const ctaRef = useRef(null);

  const addCardRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const addProcessRef = (el) => {
    if (el && !processRef.current.includes(el)) {
      processRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 85%",
      },
    });

    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 80%",
      },
    });

    gsap.from(processRef.current, {
      opacity: 0,
      y: 80,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".process-grid",
        start: "top 80%",
      },
    });

    gsap.from(ctaRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 85%",
      },
    });
  }, []);

  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        {/* Header */}
        <div className="services-header" ref={headerRef}>
          <span className="services-subtitle">OUR PREMIUM SERVICES</span>
          <h2>
            Elegant Wedding Website <br />
            Solutions For Every Couple
          </h2>
          <p>
            Transform your wedding celebration into a memorable digital
            experience with our premium wedding website services.
          </p>
        </div>

        {/* Service Cards */}
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id} ref={addCardRef}>
              <span className="service-number">0{service.id}</span>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.path} className="service-btn" onClick={scrollToTop}>
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="process-section">
          <div className="process-header" ref={addProcessRef}>
            <span className="services-subtitle">HOW WE WORK</span>
            <h2>Our Simple Working Process</h2>
          </div>

          <div className="process-grid">
            <div className="process-card" ref={addProcessRef}>
              <span>01</span>
              <h3>Consultation</h3>
              <p>We discuss your wedding theme, style and requirements.</p>
            </div>
            <div className="process-card" ref={addProcessRef}>
              <span>02</span>
              <h3>Design</h3>
              <p>Premium wedding website design tailored to your vision.</p>
            </div>
            <div className="process-card" ref={addProcessRef}>
              <span>03</span>
              <h3>Development</h3>
              <p>Fast, responsive and SEO-friendly development process.</p>
            </div>
            <div className="process-card" ref={addProcessRef}>
              <span>04</span>
              <h3>Launch</h3>
              <p>Website goes live and is shared with all your guests.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="services-cta" ref={ctaRef}>
          <h2>Ready To Create Your Dream Wedding Website?</h2>
          <p>
            Let's build a beautiful digital invitation experience for your
            special day.
          </p>
          <Link to="/ContactUs" className="cta-btn" onClick={scrollToTop}>
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
