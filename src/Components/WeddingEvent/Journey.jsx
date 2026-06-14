import Haldi1 from "../../assets/ReceptionImg/Haldi 1.png";
import Mehndi from "../../assets/ReceptionImg/Mehndi.png";
import "../../../Style/WeddingEvent.css";


const events = [
  {
    title: "Mehndi Ceremony",
    date: "13 November 2024",
    desc: "A colorful celebration filled with laughter, henna, and joy.",
    image: Mehndi,
  },
  {
    title: "Haldi Ceremony",
    date: "14 November 2024",
    desc: "A night of music, dance, and unforgettable performances.",
    image: Haldi1,
  },
];

export default function Journey() {
  return (
    <section id="journey" className="journey-section">
      
      {/* Heading */}
      <div className="journey-header">
        <h1>💛<span>Haldi & Mehndi Celebrations</span>💚</h1>
        <h2>Where Traditions Meet Happiness</h2>
        <p>
          A beautiful beginning to our wedding festivities, filled with vibrant traditions, colorful rituals,
          and the warmth of family and friends. From the intricate Mehndi designs to the joyful Haldi celebrations, 
          every moment was surrounded by heartfelt blessings, endless laughter, and unforgettable memories that made 
          our journey even more special.
        </p>
      </div>

    <div className="journey-line">
      {events.map((event, i) => (
        <div
          key={i}
          className={`journey-item ${i % 2 === 0 ? "left" : "right"}`}
        >
          <div className="journey-content">
            <div className="journey-inner">
              <img src={event.image} alt={event.title} className="journey-image" loading="lazy"/>
              <div className="journey-text">
                <span className="journey-date">{event.date}</span>
                <h3>{event.title}</h3>
                <p>{event.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
}
