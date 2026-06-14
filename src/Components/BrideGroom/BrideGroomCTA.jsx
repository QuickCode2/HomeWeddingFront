import { Link } from "react-router-dom";

const BrideGroomCTA = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="BrideGroomCtaSection1">
      <div className="BrideGroomCtaWrapper1">

        <span className="BrideGroomCtaTag1">
          A Collection Of Cherished Moments
        </span>

        <h2 className="BrideGroomCtaHeading1">
          Every Photograph Holds <br />
          A Piece Of Our Story
        </h2>

        <p className="BrideGroomCtaText1">
          From the excitement of pre-wedding days to the joy of our wedding
          celebration and the warmth of family moments, each image preserves
          emotions, laughter and memories that continue to live in our hearts.
        </p>

        <Link
          to="/"
          onClick={scrollToTop}
          className="portfolioCtaButton1"
        >
          <span>Back To Home</span>
          <span className="BrideGroomCtaArrow1">→</span>
        </Link>

              </div>
            </section>
          );
        };

export default BrideGroomCTA;