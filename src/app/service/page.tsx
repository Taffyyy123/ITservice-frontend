"use client";
import { useLanguage } from "@/context/LanguageContext";
import BottomNav from "@/custom-components/bottomNav";
import { CategoryNav } from "@/custom-components/category-nav";
import { TopNav } from "@/custom-components/top-nav";
import Link from "next/link";
import { useEffect, useState } from "react";

type serviceType = {
  _id: string;
  infoImg: string;
  subTitleMn: string;
  captionMn: string;
  subTitleEn: string;
  captionEn: string;
}[];

const Page = () => {
  const [services, setServices] = useState<serviceType>([]);
  const { isMongolian } = useLanguage();
  const [loading, setLoading] = useState<boolean>(true);
  const getServices = async () => {
    setLoading(true);
    try {
      const jsonData = await fetch(
        "https://it-service-backend.onrender.com/service/getServices"
      );
      const response = await jsonData.json();
      setServices(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getServices();
  }, []);
  if (loading) {
    return (
      <div className="w-screen min-h-screen bg-custom-gradient relative">
        <TopNav />
        <CategoryNav />
        <div className="text-white font-sans font-bold text-4xl flex justify-center w-screen">
          Fetching...
        </div>
      </div>
    );
  }
  return (
    <div className="w-screen bg-custom-gradient min-h-screen">
      <TopNav />
      <CategoryNav />
      <div className="w-screen flex flex-col gap-12 h-full">
        {services.map((service) => {
          return (
            <Link
              key={service._id}
              className="flex w-5/6 gap-6 pl-12 pb-8 hover:cursor-pointer"
              href={`/service/${service._id}`}
            >
              <img
                src={service.infoImg}
                className="rounded-md w-2/5 h-[230px]"
              />
              <div className="flex flex-col pt-6 gap-4 w-3/5">
                <div className="text-white font-sans font-bold text-xl">
                  {isMongolian ? service.subTitleMn : service.subTitleEn}
                </div>
                <div className="text-neutral-400 font-medium text-md">
                  {isMongolian ? service.captionMn : service.captionEn}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <BottomNav />
    </div>
  );
};
export default Page;
