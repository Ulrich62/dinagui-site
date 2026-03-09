"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-[#1f2d3d] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-[#F88732] transition-colors duration-300 text-xs font-bold"
      aria-label="Retour en haut"
    >
      Haut
    </button>
  );
}
