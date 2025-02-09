"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import CSS from "csstype";
import { useState } from "react";
import { Logo } from "./logoImage";
import { LanguageSwitchBtn } from "./languageSwtichBtn";

const topNavContainer: CSS.Properties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "170px",
  backgroundColor: "#080D23",
  marginBottom: "50px",
};
const socialAccountsStyle: CSS.Properties = {
  display: "flex",
  gap: "12px",
  color: "#737373",
  lineHeight: "1",
  alignItems: "center",
};
const rightContainer: CSS.Properties = {
  display: "flex",
  gap: "48px",
  paddingRight: "50px",
};
export const TopNav = () => {
  const [isHoveredFb, setIsHoveredFb] = useState(false);
  const [isHoveredTwi, setIsHoveredTwi] = useState(false);
  const [isHoveredIg, setIsHoveredIg] = useState(false);

  return (
    <div style={topNavContainer}>
      <Logo />
      <div style={rightContainer}>
        <div style={socialAccountsStyle}>
          <Facebook
            className="hover:cursor-pointer"
            style={{ color: isHoveredFb ? "blue" : "" }}
            onMouseEnter={() => setIsHoveredFb(true)}
            onMouseLeave={() => setIsHoveredFb(false)}
          />
          <Twitter
            className="hover:cursor-pointer"
            style={{ color: isHoveredTwi ? "cyan" : "" }}
            onMouseEnter={() => setIsHoveredTwi(true)}
            onMouseLeave={() => setIsHoveredTwi(false)}
          />
          <Instagram
            className="hover:cursor-pointer"
            style={{ color: isHoveredIg ? "red" : "" }}
            onMouseEnter={() => setIsHoveredIg(true)}
            onMouseLeave={() => setIsHoveredIg(false)}
          />
        </div>
        <LanguageSwitchBtn />
      </div>
    </div>
  );
};
