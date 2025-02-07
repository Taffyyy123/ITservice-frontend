"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const [infoImg, setInfoImg] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();
  const getInfoImg = (e: { target: { value: string } }) => {
    setInfoImg(e.target.value);
  };
  const getSubTitle = (e: { target: { value: string } }) => {
    setSubTitle(e.target.value);
  };
  const getCaption = (e: { target: { value: string } }) => {
    setCaption(e.target.value);
  };
  const getPrice = (e: { target: { value: string } }) => {
    setPrice(e.target.value);
  };
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const response = await fetch(
      "https://itservice-backend.onrender.com/service/createService",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          infoImg,
          subTitle,
          caption,
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
            placeholder="SubTitle"
            onChange={getSubTitle}
            value={subTitle}
          />
          <input
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
            placeholder="Caption"
            onChange={getCaption}
            value={caption}
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
