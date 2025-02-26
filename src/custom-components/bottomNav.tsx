"use client";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUp } from "lucide-react";

const BottomNav = () => {
  const { isMongolian } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className="bg-custom-gradient w-screen pt-8 pb-8 flex fixed"
      style={{
        justifyContent: "space-between",
        bottom: "0",
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
        {isMongolian ? "Дээшээ буцах" : "Return to the top"}

        <ArrowUp />
      </button>
    </div>
  );
};
export default BottomNav;
