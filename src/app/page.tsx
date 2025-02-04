"use client";
import { CategoryNav } from "@/custom-components/category-nav";
import { TopNav } from "@/custom-components/top-nav";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

import { useState } from "react";

const HomePage = () => {
  return (
    <div className="w-screen bg-custom-gradient">
      <TopNav />
      <CategoryNav />
    </div>
  );
};
export default HomePage;
