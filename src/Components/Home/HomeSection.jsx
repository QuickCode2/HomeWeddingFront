import wedding01 from "../../assets/HomeImg/Img1.png";
import wedding02 from "../../assets/HomeImg/Img2.png";
import wedding03 from "../../assets/HomeImg/Img3.png";
import "../../../Style/Home.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll"; 
import { Link } from "react-router-dom";



const heroStats = [
  { value: "500+", label: "Captured Memories" },
  { value: "3", label: "Beautiful Chapters" },
  { value: "3D", label: "Layered visuals" },
];



export default function HomeSection() {
  return (
    <section className="Wedding-hero bg-black ">
        <motion.div
          className="wedding-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" 
        }}
        >
          <h1>A collection of cherished pre-wedding, wedding, and family moments that tell the story of our love, happiness, and togetherness.</h1>
          <p>
            From pre-wedding memories and wedding celebrations to treasured family moments, 
            every photograph captures a chapter of our journey together. This collection preserves 
            the laughter, emotions, traditions, and unforgettable memories that made our story truly special.
          </p>

    {/*Wedding Actions Button */}
        <div className="wedding-actions">
          <Link
            to="/bridegroom"
            className="wedding-button wedding-button--primary"
          >
            Explore Gallery
          </Link>

          <ScrollLink
            to="invitation"
            smooth={true}
            duration={800}
            offset={-50}
            className="wedding-button wedding-button--ghost"
          >
            View Invitation
          </ScrollLink>
        </div>
          


          <div className="wedding-stats">
            {heroStats.map((stat) => (
              <div key={stat.label} className="wedding-stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="wedding-stage">
          <motion.div
            className="stage-orb stage-orb-one"
            animate={{ y: [-16, 12, -16], x: [0, 10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="stage-orb stage-orb-two"
            animate={{ y: [12, -10, 12], x: [0, -14, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <span className="wedding-eyebrow">Happy Wedding journey Renu❤️Lakhan </span>
          <motion.article
            className="photo-card photo-card-primary"
            initial={{ opacity: 0, rotateY: -24, y: 40 }}
            animate={{ opacity: 1, rotateY: -12, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >

                <img
                  src={wedding01}
                  alt="wedding celebration hero"
                  loading="eager"
                  decoding="async"
                  loading="lazy"
                />            
                <div className="photo-card-copy">
              <span>Groom Bridal Entry </span>
              <h3>The royal entry of the bride and groom amidst lights and fireworks.</h3>
            </div>
          </motion.article>

          <motion.article
            className="photo-card photo-card-secondary"
            initial={{ opacity: 0, rotateY: 28, y: 55 }}
            animate={{ opacity: 1, rotateY: 16, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          >
            <img
                src={wedding02}
                alt="Couple portrait card"
                loading="eager"
                decoding="async"
                loading="lazy"
              />
            <div className="photo-card-copy">
              <span>The Exchange </span>
              <h3>A candid shot of the moment the garland is placed around the neck.</h3>
            </div>
          </motion.article>

          <motion.article
            className="photo-card photo-card-accent"
            initial={{ opacity: 0, rotateX: 20, y: 70 }}
            animate={{ opacity: 1, rotateX: 8, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <img 
              src={wedding03}
              alt="wedding card"
              loading="lazy"
              decoding="eager"
              loading="lazy"
            />
            <div className="photo-card-copy">
              <span>sacred bond</span>
              <h3>The depth of the joined hands of the bride and groom is reflected.</h3>
            </div>
          </motion.article>
        </div>
      </section>
  );
}
