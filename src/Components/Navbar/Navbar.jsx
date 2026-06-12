import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom"; 
import gsap from "gsap";
import PhoneIcon from "@mui/icons-material/Phone";
// import Logo from "../../assets/Navbar-Logo.png"; 
import "../../../Style/Navbar.css";

export default function Navbar() {
  const navRef = useRef(null);
  const lastScroll = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);

 useEffect(() => {
  const nav = navRef.current;

  const handleScroll = () => {

    // Mobile par navbar hamesha visible
    if (window.innerWidth <= 768) {
      gsap.to(nav, {
        y: 0,
        duration: 0,
      });
      return;
    }

    const currentScroll = window.scrollY;

    if (
      currentScroll > lastScroll.current &&
      currentScroll > 100
    ) {
      gsap.to(nav, {
        y: -120,
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      gsap.to(nav, {
        y: 0,
        duration: 0.4,
        ease: "power3.out",
      });
    }

    lastScroll.current = currentScroll;
  };

  window.addEventListener("scroll", handleScroll);

  return () =>
    window.removeEventListener("scroll", handleScroll);
}, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav ref={navRef} className="navbar">
        {/* Logo */}
      {/* <div className="navbar-logo">
        <NavLink to="/">
          <img 
            src={""}   
            alt="Logo" 
            className="logo-img"
          />
        </NavLink>
      </div> */}



        {/* Desktop Menu */}
        <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
            <li>
              <NavLink 
                to="/" 
                onClick={closeMenu} 
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/EventVenue" 
                onClick={closeMenu} 
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                Event Venue
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/BrideGroom" 
                onClick={closeMenu} 
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                Memory Tunnel
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/AboutSection" 
                onClick={closeMenu} 
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/services" 
                onClick={closeMenu} 
                className={({ isActive }) => isActive ? "active-link" : ""}
              >
                Services
              </NavLink>
            </li>

            <li className="mobile-contact">
              <NavLink
                to="/ContactUs"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "active-link" : ""
                }
              >
                Contact Us
              </NavLink>
            </li>
        </ul>

        {/* Right Side */}
        <div className="navbar-right">
          <NavLink to="/ContactUs" className="contact-btn">
            <PhoneIcon />
            Contact Us
          </NavLink>

          <button
            className={`menu-toggle ${
              menuOpen ? "active" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}