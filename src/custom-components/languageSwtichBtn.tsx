import { useLanguage } from "../context/LanguageContext";

export const LanguageSwitchBtn = () => {
  const { isMongolian, setIsMongolian } = useLanguage();

  return (
    <button
      onClick={() => setIsMongolian(!isMongolian)}
      className={`relative px-8 py-3 font-bold text-lg rounded-full transition-all duration-500 shadow-xl
        backdrop-blur-md border border-white/20
        ${
          isMongolian
            ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-blue-500/50"
            : "bg-gradient-to-r from-pink-500 to-purple-700 text-white shadow-pink-500/50"
        }
        hover:scale-110 hover:shadow-lg hover:shadow-white/40 active:scale-95`}
    >
      {isMongolian ? "Mn" : "En"}
    </button>
  );
};
