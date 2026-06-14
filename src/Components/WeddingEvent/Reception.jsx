import Reception1 from "../../assets/ReceptionImg/Reception1.png";
import Reception2 from "../../assets/ReceptionImg/Reception2.png";
import Reception3 from "../../assets/ReceptionImg/Reception3.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const celebrationPlans = [
  {
    name: "🌸Eternal Vows of Love",
    image: Reception1,
    description: "A celebration of tradition and togetherness Wrapped in the warmth of culture and adorned with vibrant colors, this moment reflects the beauty of promises made for a lifetime.Every smile, every glance, and every vow exchanged under the floral canopy becomes a timeless memory — a reminder that love, when rooted in tradition, blossoms into forever.",
  },
  {
    name: "💍Sacred Union of Hearts",
    image: Reception2,
    description: "A moment where love meets tradition Amidst the vibrant flowers and graceful drapes, two hearts unite in a promise of forever.Every glance, every vow, and every smile shared becomes a memory woven into the garden of life — a celebration of love that blooms with elegance and devotion.",
  },
  {
    name: "👑Royal Celebration of Love",
    image: Reception3,
    description: "An evening of grandeur and devotion Draped in elegance and adorned with tradition, this moment reflects the richness of culture and the beauty of everlasting promises. Every smile, every vow, and every step together shines with royal charm — a celebration where love is crowned with luxury and cherished forever.",
  },
];

export default function ReceptionSection() {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.from(".reception-card", {
    y: 80,
    opacity: 1,
    duration: 1.2,
    stagger: 0.25,
    ease: "power3.out",
  }); 
  }, []);

  return (
    <section className="reception-section" ref={sectionRef}>
      {/* Heading */}
      <div className="reception-header">
        <span>✨ Wedding Reception ✨</span>
        <h2>💎 The Grand Celebration of Forever</h2>
        <p>
      Wrapped in tradition, adorned with vibrant colors, and celebrated with heartfelt promises, this evening is more than a ceremony — it is the essence of togetherness.
      Every smile exchanged, every step taken, and every vow spoken under the floral canopy becomes a golden chapter in a royal love story.
      As the bride and groom lovingly place garlands around each other, the varmala moment shines as a symbol of eternal devotion — a promise to walk hand in hand through every season of life.
      This sacred exchange marks the beginning of a journey filled with respect, laughter, and boundless affection.
      The reception is not just a gathering; it is a reflection of our love story. A grand night where music flows like joy, 
      laughter echoes through the hall, and heartfelt conversations weave bonds that last forever. Surrounded by family and friends,
      every moment becomes a memory to treasure — a celebration of culture, elegance, and everlasting love.
      This is not just a wedding reception; it is a luxurious celebration of hearts united, crafted to shine like gold and blossom like a garden of dreams.
        </p>
      </div>

      {/* Reception Line */}
      <div className="reception-line">
        {celebrationPlans.map((plan, index) => (
          <div
            key={index}
            className={`reception-card ${index % 2 === 0 ? "left" : "right"}`}
          >
            {/* Image */}
            <div className="reception-img">
              <img src={plan.image} alt={plan.name} loading="lazy"/>
              <div className="img-overlay">✨ View Memory</div>
            </div>

            {/* Content */}
           <div className="reception-content">
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
}
