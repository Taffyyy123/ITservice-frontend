"use client";
import { useLanguage } from "@/context/LanguageContext";
import { CategoryNav } from "@/custom-components/category-nav";
import { TopNav } from "@/custom-components/top-nav";
import { use, useEffect, useState } from "react";

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
const Page = ({ params }: { params: Promise<{ postId: string }> }) => {
  const [post, setPost] = useState<postType | null>(null);
  const { isMongolian } = useLanguage();

  const { postId } = use(params);

  const getOnePost = async () => {
    try {
      const jsonData = await fetch(
        `https://it-service-backend.onrender.com/post/getPost/${postId}`
      );
      const response = await jsonData.json();
      setPost(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getOnePost();
  }, []);
  return (
    <div className="min-h-screen w-screen bg-custom-gradient">
      <TopNav />
      <CategoryNav />
      <div className="w-screen flex flex-col items-center gap-24">
        <img src={post?.imageUrl} className="w-2/5 rounded-lg" />
        <div className="flex flex-col gap-4 w-3/5 text-center">
          <div className="text-white font-serif font-bold text-3xl">
            {isMongolian ? post?.titleMn : post?.infoTitleEn}
          </div>
          <div className="text-neutral-400 font-bold text-xl">
            {isMongolian ? post?.contentMn : post?.contentEn}
          </div>
        </div>
        <div className="flex flex-col gap-4 w-3/5 text-center pb-12">
          <div className="text-white font-serif font-bold text-3xl">
            {isMongolian ? post?.infoTitleMn : post?.infoTitleEn}
          </div>
          <div className="text-neutral-400 font-bold text-xl">
            {isMongolian ? post?.infoContentMn : post?.infoContentEn}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
