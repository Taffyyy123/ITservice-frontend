"use client";
import { TopNav } from "@/custom-components/top-nav";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const [titleMn, setTitleMn] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [contentMn, setContentMn] = useState("");
  const [contentEn, setContentEn] = useState("");
  const [infoTitleMn, setInfoTitleMn] = useState("");
  const [infoTitleEn, setInfoTitleEn] = useState("");
  const [infoContentMn, setInfoContentMn] = useState("");
  const [infoContentEn, setInfoContentEn] = useState("");

  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();
  const getTitleMn = (e: { target: { value: string } }) => {
    setTitleMn(e.target.value);
  };
  const getTitleEn = (e: { target: { value: string } }) => {
    setTitleEn(e.target.value);
  };
  const getContentMn = (e: { target: { value: string } }) => {
    setContentMn(e.target.value);
  };
  const getContentEn = (e: { target: { value: string } }) => {
    setContentEn(e.target.value);
  };
  const getInfoContentMn = (e: { target: { value: string } }) => {
    setInfoContentMn(e.target.value);
  };
  const getInfoContentEn = (e: { target: { value: string } }) => {
    setInfoContentEn(e.target.value);
  };
  const getInfoTitleMn = (e: { target: { value: string } }) => {
    setInfoTitleMn(e.target.value);
  };
  const getInfoTitleEn = (e: { target: { value: string } }) => {
    setInfoTitleEn(e.target.value);
  };
  const getImageUrl = (e: { target: { value: string } }) => {
    setImageUrl(e.target.value);
  };
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const response = await fetch(
      "https://it-service-backend.onrender.com/post/createPost",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titleMn,
          contentMn,
          infoTitleMn,
          infoContentMn,
          titleEn,
          contentEn,
          infoTitleEn,
          infoContentEn,
          imageUrl,
        }),
      }
    );
    if (response.ok) {
      router.push("/adminPage");
      setTitleMn("");
      setContentMn("");
      setInfoTitleMn("");
      setInfoContentMn("");
      setTitleEn("");
      setContentEn("");
      setInfoTitleEn("");
      setInfoContentEn("");
      setImageUrl("");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-custom-gradient">
      <div className="w-full max-w-lg bg-gray-900 p-8 rounded-xl shadow-lg ">
        <h1 className="text-3xl font-semibold text-center text-white mb-6">
          Create New Post
        </h1>
        <div className="flex flex-col space-y-4">
          <input
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
            placeholder="TitleMn"
            onChange={getTitleMn}
            value={titleMn}
          />
          <input
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
            placeholder="TitleEn"
            onChange={getTitleEn}
            value={titleEn}
          />
          <input
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
            placeholder="ContentMn"
            onChange={getContentMn}
            value={contentMn}
          />
          <input
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
            placeholder="ContentEn"
            onChange={getContentEn}
            value={contentEn}
          />
          <input
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
            placeholder="InfoTitleMn"
            onChange={getInfoTitleMn}
            value={infoTitleMn}
          />
          <input
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
            placeholder="InfoTitleEn"
            onChange={getInfoTitleEn}
            value={infoTitleEn}
          />
          <input
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
            placeholder="InfoContentMn"
            onChange={getInfoContentMn}
            value={infoContentMn}
          />
          <input
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
            placeholder="InfoContentEn"
            onChange={getInfoContentEn}
            value={infoContentEn}
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
