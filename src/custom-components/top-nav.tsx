"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import CSS from "csstype";
import { useState } from "react";

const topNavContainer: CSS.Properties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "130px",
};
const logoStyle: CSS.Properties = {
  color: "white",
  width: "25%",
  height: "75%",
  paddingLeft: "64px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "serif",
  fontSize: "30px",
  lineHeight: "36px",
  fontWeight: "900",
};
const socialAccountsStyle: CSS.Properties = {
  display: "flex",
  gap: "12px",
  paddingRight: "96px",
  color: "#737373",
  fontSize: "48px",
  lineHeight: "1",
};

export const TopNav = () => {
  const [isHoveredFb, setIsHoveredFb] = useState(false);
  const [isHoveredTwi, setIsHoveredTwi] = useState(false);
  const [isHoveredIg, setIsHoveredIg] = useState(false);

  return (
    <div style={topNavContainer}>
      <Link style={logoStyle} href={"/"}>
        IT SERVICE
      </Link>
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
    </div>
  );
};
