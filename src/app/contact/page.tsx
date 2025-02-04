"use client";
import { CategoryNav } from "@/custom-components/category-nav";
import { TopNav } from "@/custom-components/top-nav";
import { Phone, MapPin, Mail } from "lucide-react";

const Page = () => {
  return (
    <div className="h-screen w-screen bg-custom-gradient">
      <TopNav />
      <CategoryNav />
      <div className="h-4/6 w-screen flex flex-col">
        <div className="text-white font-semibold text-4xl flex justify-center h-2/6 items-center w-screen">
          Холбоо барих
        </div>
        <div className="h-4/5 flex items-center">
          <div className="flex flex-col gap-16 w-2/4 justify-center pl-10">
            <div className="text-white text-xl flex gap-7 items-center">
              <Phone className="w-[30px] h-[30px]" />
              <div className="font-bold">+(976) 96969696</div>
            </div>
            <div className="text-white text-xl flex gap-7 items-center">
              <MapPin className="w-[30px] h-[30px]" />
              <div className="font-bold font-sans w-3/4">
                Улаанбаатар хот, Сөүлийн гудамж, Сити Плаза, 4-р давхар, 405
                тоот
              </div>
            </div>
            <div className="text-white text-xl flex gap-7 items-center">
              <Mail className="w-[30px] h-[30px]" />
              <div className="font-bold font-sans w-3/4">
                itservice@gmail.com
              </div>
            </div>
          </div>
          <div className="flex flex-col w-2/4 gap-6">
            <div className="text-white flex justify-center text-2xl font-bold ">
              Хүсэлт гаргах
            </div>
            <div className="flex flex-col gap-5 items-center">
              <input
                placeholder="Нэр"
                className="text-black w-4/5 h-[40px] rounded-sm placeholder:text-neutral-600 placeholder:font-bold pl-6 font-mono font-bold"
              />
              <input
                placeholder="Утас"
                className="text-black w-4/5 h-[40px] rounded-sm placeholder:text-neutral-600 placeholder:font-bold pl-6 font-mono font-bold"
              />
              <input
                placeholder="И-мэйл хаяг"
                className="text-black w-4/5 h-[40px] rounded-sm placeholder:text-neutral-600 placeholder:font-bold pl-6 font-mono font-bold"
              />
              <input
                placeholder="Саналаа бичнэ үү"
                className="text-black w-4/5 h-[40px] rounded-sm placeholder:text-neutral-600 placeholder:font-bold pl-6 font-mono font-bold"
              />{" "}
              <button className="text-white border-blue-600 bg-blue-600 rounded-sm w-1/5 font-bold h-[35px]">
                Илгээх
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
