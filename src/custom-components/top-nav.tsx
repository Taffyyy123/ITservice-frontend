"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import CSS from "csstype";

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
  return (
    <div style={topNavContainer}>
      <Link style={logoStyle} href={"/"}>
        IT SERVICE
      </Link>
      <div style={socialAccountsStyle}>
        <Link href="https://www.facebook.com/tsomo.tsolmon.9887">
          <Facebook className="hover:text-blue-600 hover:cursor-pointer" />
        </Link>
        <Twitter className="hover:text-blue-400 hover:cursor-pointer" />
        <Instagram className="hover:text-pink-500 hover:cursor-pointer" />
      </div>
    </div>
  );
};
