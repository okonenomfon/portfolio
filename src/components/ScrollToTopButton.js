import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 p-4 bg-blue-500 text-white rounded-full shadow-md ${!showScroll ? 'hidden' : ''} transition duration-300`}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}

export default ScrollToTopButton;
