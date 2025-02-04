import { CategoryNav } from "@/custom-components/category-nav";
import { TopNav } from "@/custom-components/top-nav";

const Page = () => {
  return (
    <div className="h-screen w-screen bg-custom-gradient">
      <TopNav />
      <CategoryNav />
      <div>
        <div className="w-screen flex flex-col items-center justify-center gap-6 ">
          <div className="text-white font-sans font-bold text-4xl">
            Бид бол IT SERVICE
          </div>
          <div className="text-white font-serif font-bold text-2xl">
            IT SERVICE нь бүх төрлийн сэрвэр түрээс үйлчилгээ хийдэг компани юм.
          </div>
        </div>
        <div className="w-screen">
          <div className="text-neutral-400 w-screen flex justify-center pt-8">
            <div>Бидний тухай</div>
            <div>IT SERVICE XXK нь 2013 онд байгуулагдан </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Page;
