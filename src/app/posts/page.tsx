"use client";
import { CategoryNav } from "@/custom-components/category-nav";
import { TopNav } from "@/custom-components/top-nav";
import { useState } from "react";

type postType = {
  title: string;
  subTitle: string;
  content: string;
  imageUrl: string;
};
const Page = () => {
  const [posts, setPosts] = useState<postType[]>([]);
  return (
    <div className="h-screen w-screen bg-custom-gradient">
      <TopNav />
      <CategoryNav />
    </div>
  );
};
export default Page;
