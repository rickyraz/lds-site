import React from "react";
import { motion } from "framer-motion";

const SmoothScroll = ({ children }) => {
  const handleScroll = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("data-scroll-to");
    const targetElement = document.getElementById(target);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div onClick={handleScroll} className="flex space-x-6">
      {React.Children.map(children, (child) => (
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer	"
        >
          {child}
        </motion.li>
      ))}
    </div>
  );
};

export default SmoothScroll;
