"use client";
import { createContext, useContext, useState, ReactNode } from "react";

const LanguageContext = createContext<any>(null);

// Context Provider (бүх component-д state өгнө)
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [isMongolian, setIsMongolian] = useState(true);

  return (
    <LanguageContext.Provider value={{ isMongolian, setIsMongolian }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
