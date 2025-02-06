"use client";
import { CategoryNav } from "@/custom-components/category-nav";
import ServiceHome from "@/custom-components/serviceHome";
import { TopNav } from "@/custom-components/top-nav";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

import { useState } from "react";

const HomePage = () => {
  return (
    <div className="w-screen bg-custom-gradient min-h-screen">
      <TopNav />
      <CategoryNav />
    </div>
  );
};
export default HomePage;
