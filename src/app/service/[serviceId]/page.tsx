"use client";
import { useLanguage } from "@/context/LanguageContext";
import { CategoryNav } from "@/custom-components/category-nav";
import { TopNav } from "@/custom-components/top-nav";
import { use, useEffect, useState } from "react";

type ServiceType = {
  _id: string;
  infoImg: string;
  subTitleMn: string;
  captionMn: string;
  subTitleEn: string;
  captionEn: string;
  price: string;
};

const Page = ({ params }: { params: Promise<{ serviceId: string }> }) => {
  const [service, setService] = useState<ServiceType | null>(null);
  const { isMongolian } = useLanguage();

  const { serviceId } = use(params);

  const getOneService = async () => {
    try {
      const response = await fetch(
        `https://it-service-backend.onrender.com/service/getService/${serviceId}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch service");
      }

      const data = await response.json();
      setService(data);
    } catch (error) {
      console.error("Error fetching service:", error);
    }
  };

  useEffect(() => {
    if (serviceId) {
      getOneService();
    }
  }, [serviceId]);

  if (!service) {
    return (
      <div className="bg-custom-gradient w-screen h-screen text-white font-bold text-4xl flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-screen bg-custom-gradient pb-12">
      <TopNav />
      <CategoryNav />
      <div className="w-screen flex flex-col items-center gap-8">
        <img src={service.infoImg} className="w-2/5 h-[300px] rounded-md" />
        <div className="flex flex-col items-center gap-3 w-3/5">
          <div className="text-white flex justify-start font-serif font-bold text-2xl">
            {isMongolian ? service.subTitleMn : service.subTitleEn}
          </div>
          <div className="text-neutral-500 text-center">
            {isMongolian ? service.captionMn : service.captionEn}
          </div>
        </div>
        <div className="border-2 w-3/5 p-8 flex justify-around">
          <div>
            <div className="text-white font-sans font-bold text-3xl">
              {service.price}MNT
            </div>
            <div className="text-white">САРЫН/НӨАТ-гүй</div>
          </div>
          <button className="text-white bg-blue-600 w-1/6 rounded-md">
            {isMongolian ? "Захиалах" : "Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
