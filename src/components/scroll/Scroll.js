import React, { useState } from "react";
import "./scroll.css";
import scrollPic from "../scroll/ico/scroll_up.png";

const Scroll = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <img
      src={scrollPic}
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
      alt="sroll icon"
      className="scroll-icon"
      style={{ display: visible ? "inline" : "none" }}
    />
  );
};

export default Scroll;
