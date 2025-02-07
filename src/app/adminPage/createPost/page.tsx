"use client";
import { TopNav } from "@/custom-components/top-nav";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [infoTitle, setInfoTitle] = useState("");
  const [infoContent, setInfoContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();
  const getTitle = (e: { target: { value: string } }) => {
    setTitle(e.target.value);
  };
  const getContent = (e: { target: { value: string } }) => {
    setContent(e.target.value);
  };
  const getInfoContent = (e: { target: { value: string } }) => {
    setInfoContent(e.target.value);
  };
  const getInfoTitle = (e: { target: { value: string } }) => {
    setInfoTitle(e.target.value);
  };
  const getImageUrl = (e: { target: { value: string } }) => {
    setImageUrl(e.target.value);
  };
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const response = await fetch(
      "https://itservice-backend.onrender.com/post/createPost",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          infoTitle,
          infoContent,
          imageUrl,
        }),
      }
    );
    if (response.ok) {
      router.push("/adminPage");
      setTitle("");
      setContent("");
      setInfoTitle("");
      setInfoContent("");
      setImageUrl("");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-custom-gradient">
      <TopNav />
      <div className="w-full max-w-lg bg-gray-900 p-8 rounded-xl shadow-lg ">
        <h1 className="text-3xl font-semibold text-center text-white mb-6">
          Create New Post
        </h1>
        <div className="flex flex-col space-y-4">
          <input
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
            placeholder="Title"
            onChange={getTitle}
            value={title}
          />
          <input
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
            placeholder="Content"
            onChange={getContent}
            value={content}
          />
          <input
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
            placeholder="InfoTitle"
            onChange={getInfoTitle}
            value={infoTitle}
          />
          <input
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
            placeholder="InfoContent"
            onChange={getInfoContent}
            value={infoContent}
          />
          <input
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
            placeholder="ImageUrl"
            onChange={getImageUrl}
            value={imageUrl}
          />
          <button
            onClick={handleSubmit}
            className="py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
export default Page;
