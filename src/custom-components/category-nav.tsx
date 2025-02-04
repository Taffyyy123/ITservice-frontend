"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import CSS from "csstype";

export const CategoryNav = () => {
  const [isClickedService, setIsClickedService] = useState<boolean>(false);
  const [isClickedFromUs, setIsClickedFromUs] = useState<boolean>(false);
  const [isClickedPosts, setIsClickedPosts] = useState<boolean>(false);
  const [isClickedContact, setIsClickedContact] = useState<boolean>(false);
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
    width: "25%",
    borderRight: "2px solid",
    display: "flex",
    justifyContent: "center",
  };
  const categoryContact: CSS.Properties = {
    width: "25%",
    display: "flex",
    justifyContent: "center",
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
          Үйлчилгээ
        </Link>
        <Link
          className={isClickedFromUs ? "text-white" : "text-neutral-400"}
          style={categoryText}
          href={"/fromUs"}
        >
          Бидний тухай
        </Link>{" "}
        <Link
          className={isClickedPosts ? "text-white" : "text-neutral-400"}
          style={categoryText}
          href={"/posts"}
        >
          Нийтлэл
        </Link>
        <Link
          className={isClickedContact ? "text-white" : "text-neutral-400"}
          style={categoryContact}
          href={"/contact"}
        >
          Холбоо барих
        </Link>
      </div>
    </div>
  );
};
