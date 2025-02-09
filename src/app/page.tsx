"use client";
import { useLanguage } from "@/context/LanguageContext";
import BottomNav from "@/custom-components/bottomNav";
import { CategoryNav } from "@/custom-components/category-nav";
import { TopNav } from "@/custom-components/top-nav";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Service = {
  _id: string;
  infoImg: string;
  subTitle: string;
  caption: string;
  price: string;
};
type Post = {
  _id: string;
  title: string;
  content: string;
  infoTitle: string;
  infoContent: string;
  imageUrl: string;
};

const HomePage = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const { isMongolian } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    fetch("https://it-service-backend.onrender.com/service/getServices")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching services:", error));

    fetch("https://it-service-backend.onrender.com/post/getPosts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="w-screen bg-custom-gradient min-h-screen">
      <TopNav />
      <CategoryNav />
      <div className="text-center py-20 bg-custom-gradient shadow-lg">
        <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">
          {isMongolian
            ? "IT Үйлчилгээтэй танилцаарай"
            : "Welcome to IT Service"}
        </h1>
        <p className="text-xl mt-4 text-gray-200">
          {isMongolian
            ? "Таны бизнест зориулсан шилдэг IT шийдлүүдийг бид үзүүлнэ."
            : "Providing top-notch IT solutions for your business"}
        </p>
        <button
          onClick={() => router.push("/fromUs")}
          className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-gray-200 transition transform hover:scale-105"
        >
          {isMongolian ? "Бидний тухай" : "From Us"}
        </button>
      </div>

      <div className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-blue-400">
          {isMongolian
            ? "Сүүлийн мэдээ ба үйлчилгээ"
            : "Latest Posts & Services"}
        </h2>
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          className="mt-10 shadow-xl"
        >
          {posts.map((post) => (
            <div
              key={post._id}
              className="p-8 rounded-xl shadow-lg text-center h-full text-white bg-gray-800"
            >
              <h3 className="text-2xl font-semibold text-white">
                {post.title}
              </h3>
              <p className="text-white mt-4">
                {post.content.substring(0, 100)}...
              </p>
            </div>
          ))}
          {services.map((service) => (
            <div
              key={service._id}
              className="bg-gray-800 p-8 rounded-xl shadow-lg text-center h-full"
            >
              <h3 className="text-2xl font-semibold text-green-300">
                {service.subTitle}
              </h3>
              <p className="text-gray-400 mt-4">{service.caption}</p>
              <p className="mt-4 font-bold text-yellow-400 text-xl">
                {service.price} {isMongolian ? "MNT" : "MNT"}
              </p>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="text-center py-20 bg-custom-gradient shadow-2xl from-gray-800 to-gray-900">
        <h2 className="text-4xl font-bold text-white">
          {isMongolian ? "Бидэнтэй холбоо бариарай" : "Get in Touch"}
        </h2>
        <p className="mt-6 text-gray-300">
          {isMongolian
            ? "Асуулт байвал бидэнд хандана уу!"
            : "Have questions? Contact us today!"}
        </p>
        <button
          onClick={() => router.push("/contact")}
          className="mt-8 bg-blue-500 px-8 py-4 rounded-full font-bold text-white shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
        >
          {isMongolian ? "Холбоо барих" : "Contact Us"}
        </button>
      </div>
      <BottomNav />
    </div>
  );
};
export default HomePage;
