"use client";
import { CategoryNav } from "@/custom-components/category-nav";
import { TopNav } from "@/custom-components/top-nav";
import { Phone, MapPin, Mail } from "lucide-react";
import { useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [request, setRequest] = useState("");

  const handleSubmit = async () => {
    const response = await fetch(
      "https://it-service-backend.onrender.com/request/createRequest",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          request,
        }),
      }
    );
    if (response.ok) {
      setName("");
      setEmail("");
      setPhone("");
      setRequest("");
    }
  };
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
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                placeholder="Утас"
                className="text-black w-4/5 h-[40px] rounded-sm placeholder:text-neutral-600 placeholder:font-bold pl-6 font-mono font-bold"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
              <input
                placeholder="И-мэйл хаяг"
                className="text-black w-4/5 h-[40px] rounded-sm placeholder:text-neutral-600 placeholder:font-bold pl-6 font-mono font-bold"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                placeholder="Саналаа бичнэ үү"
                className="text-black w-4/5 h-[40px] rounded-sm placeholder:text-neutral-600 placeholder:font-bold pl-6 font-mono font-bold"
                onChange={(e) => setRequest(e.target.value)}
                value={request}
              />{" "}
              <button
                className="text-white border-blue-600 bg-blue-600 rounded-sm w-1/5 font-bold h-[35px]"
                onClick={handleSubmit}
              >
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
