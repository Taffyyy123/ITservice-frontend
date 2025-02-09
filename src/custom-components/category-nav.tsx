"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import CSS from "csstype";
import { UserPen } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const CategoryNav = () => {
  const [isClickedService, setIsClickedService] = useState<boolean>(false);
  const [isClickedFromUs, setIsClickedFromUs] = useState<boolean>(false);
  const [isClickedPosts, setIsClickedPosts] = useState<boolean>(false);
  const [isClickedContact, setIsClickedContact] = useState<boolean>(false);
  const { isMongolian } = useLanguage();

  const categoryContainer: CSS.Properties = {
    display: "flex",
    width: "100%",
    alignItems: "center",
    height: "100px",
    paddingBottom: "40px",
  };

  const categoryNavStyle: CSS.Properties = {
    display: "flex",
    width: "100vw",
    color: "#737373",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "28px",
  };

  const categoryText: CSS.Properties = {
    width: "20%",
    borderRight: "2px solid",
    display: "flex",
    justifyContent: "center",
  };

  const loginBtn: CSS.Properties = {
    backgroundColor: "#00adea",
    width: "15%",
    color: "white",
    fontFamily: "monospace",
    marginLeft: "24px",
    display: "flex",
    gap: "5px",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px",
  };

  useEffect(() => {
    if (window.location.pathname === "/service") {
      setIsClickedService(true);
    }
    if (window.location.pathname === "/fromUs") {
      setIsClickedFromUs(true);
    }
    if (window.location.pathname === "/posts") {
      setIsClickedPosts(true);
    }
    if (window.location.pathname === "/contact") {
      setIsClickedContact(true);
    }
  }, []);

  return (
    <div style={categoryContainer}>
      <div style={categoryNavStyle}>
        <Link
          className={isClickedService ? "text-white" : "text-neutral-400"}
          style={categoryText}
          href={"/service"}
        >
          {isMongolian ? "Үйлчилгээ" : "Services"}
        </Link>
        <Link
          className={isClickedFromUs ? "text-white" : "text-neutral-400"}
          style={categoryText}
          href={"/fromUs"}
        >
          {isMongolian ? "Бидний тухай" : "About Us"}
        </Link>{" "}
        <Link
          className={isClickedPosts ? "text-white" : "text-neutral-400"}
          style={categoryText}
          href={"/posts"}
        >
          {isMongolian ? "Нийтлэл" : "Posts"}
        </Link>
        <Link
          className={isClickedContact ? "text-white" : "text-neutral-400"}
          style={categoryText}
          href={"/contact"}
        >
          {isMongolian ? "Холбоо барих" : "Contact"}
        </Link>
        <button
          style={loginBtn}
          className="text-sm rounded-xl"
          onClick={() => (window.location.href = "/adminLogin")}
        >
          {isMongolian ? "Нэвтрэх" : "Login"}
          <UserPen />
        </button>
      </div>
    </div>
  );
};
