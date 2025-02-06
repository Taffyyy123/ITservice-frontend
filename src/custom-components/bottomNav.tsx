"use client";
import { ArrowUp } from "lucide-react";

const BottomNav = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className="bg-custom-gradient w-screen pt-8 pb-8 flex"
      style={{
        justifyContent: "space-between",
        borderTop: "1px solid white",
        height: "100px",
      }}
    >
      <div className="text-neutral-400" style={{ paddingLeft: "64px" }}>
        Бүх эрх хуулиар хамгаалагдсан © 2023 он. IT SERVICE XK
      </div>
      <button
        onClick={scrollToTop}
        className="text-neutral-400 flex gap-3"
        style={{ paddingRight: "64px" }}
      >
        Дээшээ буцах
        <ArrowUp />
      </button>
    </div>
  );
};
export default BottomNav;
