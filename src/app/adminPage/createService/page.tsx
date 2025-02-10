"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const [infoImg, setInfoImg] = useState("");
  const [subTitleMn, setSubTitleMn] = useState("");
  const [captionMn, setCaptionMn] = useState("");
  const [subTitleEn, setSubTitleEn] = useState("");
  const [captionEn, setCaptionEn] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();
  const getInfoImg = (e: { target: { value: string } }) => {
    setInfoImg(e.target.value);
  };
  const getSubTitleMn = (e: { target: { value: string } }) => {
    setSubTitleMn(e.target.value);
  };
  const getSubTitleEn = (e: { target: { value: string } }) => {
    setSubTitleEn(e.target.value);
  };
  const getCaptionMn = (e: { target: { value: string } }) => {
    setCaptionMn(e.target.value);
  };
  const getCaptionEn = (e: { target: { value: string } }) => {
    setCaptionEn(e.target.value);
  };
  const getPrice = (e: { target: { value: string } }) => {
    setPrice(e.target.value);
  };
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const response = await fetch(
      "https://it-service-backend.onrender.com/service/createService",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          infoImg,
          subTitleMn,
          captionMn,
          subTitleEn,
          captionEn,
          price,
        }),
      }
    );
    if (response.ok) {
      router.push("/adminPage");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-custom-gradient">
      <div className="w-full max-w-lg bg-gray-900 p-8 rounded-xl shadow-lg ">
        <h1 className="text-3xl font-semibold text-center text-white mb-6">
          Create New Service
        </h1>
        <div className="flex flex-col space-y-4">
          <input
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
            placeholder="Information Image URL"
            onChange={getInfoImg}
            value={infoImg}
          />
          <input
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
            placeholder="SubTitleMn"
            onChange={getSubTitleMn}
            value={subTitleMn}
          />
          <input
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
            placeholder="SubTitleEn"
            onChange={getSubTitleEn}
            value={subTitleEn}
          />
          <input
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
            placeholder="CaptionEn"
            onChange={getCaptionEn}
            value={captionEn}
          />
          <input
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
            placeholder="CaptionMn"
            onChange={getCaptionMn}
            value={captionMn}
          />
          <input
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
            placeholder="Price"
            onChange={getPrice}
            value={price}
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
