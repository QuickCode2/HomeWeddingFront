import { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../../../Style/Arrow.css"

const ScrollButton = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isTop) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      className="scrollToggleBtn"
      onClick={handleClick}
    >
      {/* {isTop ? "↓" : "↑"} */}
       {isTop ? (
      <KeyboardArrowDownIcon />
    ) : (
      <KeyboardArrowUpIcon />
    )}
    </button>
  );
};

export default ScrollButton;