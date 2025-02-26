"use client";
import { CategoryNav } from "@/custom-components/category-nav";
import { TopNav } from "@/custom-components/top-nav";
import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import Link from "next/link";
import BottomNav from "@/custom-components/bottomNav";
import { useLanguage } from "@/context/LanguageContext";

type postType = {
  _id: string;
  titleMn: string;
  contentMn: string;
  infoTitleMn: string;
  infoContentMn: string;
  titleEn: string;
  contentEn: string;
  infoTitleEn: string;
  infoContentEn: string;
  imageUrl: string;
  createdAt: Date;
};
const Page = () => {
  const [posts, setPosts] = useState<postType[]>([]);
  const { isMongolian } = useLanguage();
  const getPosts = async () => {
    try {
      const jsonData = await fetch(
        "https://it-service-backend.onrender.com/post/getPosts"
      );
      const response = await jsonData.json();
      setPosts(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="min-h-screen w-screen bg-custom-gradient">
      <TopNav />
      <CategoryNav />
      <div className="text-blue-600 font-serif font-bold flex justify-center text-4xl pb-12">
        {isMongolian
          ? "Сонирхолтой нийтлэлүүдийг эндээс"
          : "Interesting articles from here"}
      </div>
      <div className="w-screen">
        {posts.map((post) => (
          <div
            key={post._id}
            className="w-screen flex gap-16 pt-12 pb-12 border-b-2 border-neutral-400 "
          >
            {" "}
            <img
              src={post.imageUrl}
              className="w-2/6 ml-8 rounded-lg border-2"
            />
            <div className="flex flex-col gap-6 w-3/6 justify-center">
              <div className="text-white font-sans font-bold text-3xl">
                {isMongolian ? post.titleMn : post.titleEn}
              </div>
              <div className="text-neutral-400 flex gap-3">
                <Calendar />
                {new Date(post.createdAt).toLocaleDateString()}
              </div>
              <div className="text-white font-mono font-bold text-md">
                {isMongolian ? post.contentMn : post.contentEn}
              </div>
              <Link
                className="text-white bg-blue-600 rounded-md w-1/5 h-2/6 flex justify-center items-center"
                href={`/posts/${post._id}`}
              >
                {isMongolian ? "Цааш уншах" : "Read more"}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <BottomNav />
    </div>
  );
};
export default Page;
