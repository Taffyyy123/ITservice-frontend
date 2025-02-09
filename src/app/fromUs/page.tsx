"use client";
import { useLanguage } from "@/context/LanguageContext";
import BottomNav from "@/custom-components/bottomNav";
import { CategoryNav } from "@/custom-components/category-nav";
import { TopNav } from "@/custom-components/top-nav";

const Page = () => {
  const { isMongolian } = useLanguage();

  return (
    <div className="min-h-screen w-screen bg-custom-gradient">
      <TopNav />
      <CategoryNav />
      <div className="flex flex-col gap-16 pb-24">
        <div className="w-screen flex flex-col items-center justify-center gap-10">
          <div className="text-white font-sans font-bold text-4xl">
            {isMongolian ? "Бид бол IT SERVICE" : "We are IT SERVICE"}
          </div>
          <div className="text-white font-serif font-bold text-2xl">
            {isMongolian
              ? "IT SERVICE нь бүх төрлийн сэрвэр түрээс үйлчилгээ хийдэг компани юм."
              : "IT SERVICE is a company that provides all kinds of server rental services."}
          </div>
        </div>
        <div className="w-screen flex flex-col gap-24">
          <div className="w-screen flex flex-col items-center pt-8 gap-8">
            <div className="text-neutral-400">
              {isMongolian ? "Бидний тухай" : "About Us"}
            </div>
            <div className="text-white font-medium font-sans text-2xl w-3/4 text-center">
              {isMongolian
                ? `IT Service ХХК нь сервер түрээс, мэдээллийн технологийн дэвшилтэт шийдлүүдийг нийлүүлэх чиглэлээр үйл ажиллагаа явуулдаг мэргэжлийн компани юм. Манай компанийн гол зорилго нь байгууллагуудын мэдээллийн технологийн дэд бүтцийг хөнгөвчлөх, зардлыг бууруулах, хамгийн сүүлийн үеийн технологиудыг нийлүүлэх замаар үйлчлүүлэгчдийн хэрэгцээнд нийцсэн, найдвартай шийдлийг санал болгох юм.`
                : `IT Service LLC is a professional company engaged in providing server rental and advanced IT solutions. The main goal of our company is to ease the IT infrastructure of organizations, reduce costs, and offer reliable solutions that meet the needs of our customers by providing the latest technologies.`}
            </div>
          </div>
          <div className="w-screen flex flex-col items-center gap-12">
            <div className="text-neutral-400">
              {isMongolian ? "Үйлчилгээний чиглэл" : "Service Areas"}
            </div>
            <div className="flex flex-col items-center gap-12">
              <div className="text-white font-medium font-sans text-2xl w-3/4 text-center">
                {isMongolian
                  ? "IT Service ХХК нь дараах үндсэн үйлчилгээг үзүүлдэг:"
                  : "IT Service LLC provides the following core services:"}
              </div>
              <li className="text-white font-medium font-sans text-2xl w-3/4 text-center">
                {isMongolian
                  ? "Сервер түрээс: Тус компани нь өндөр хүчин чадалтай, найдвартай серверүүдийг түрээслүүлж, байгууллагуудын мэдээллийн технологийн дэд бүтцийн зардлыг хэмнэх боломжийг олгодог."
                  : "Server Rental: The company provides high-performance, reliable servers for rent, allowing organizations to save on IT infrastructure costs."}
              </li>
              <li className="text-white font-medium font-sans text-2xl w-3/4 text-center">
                {isMongolian
                  ? "Мэдээллийн технологийн дэд бүтцийн шийдэл: Серверийн түрээсээс гадна, бид байгууллагуудад IT дэд бүтцийн иж бүрэн шийдлүүдийг санал болгож, системүүдийн холболт, тохиргоо, үйлчилгээний үзүүлэлтүүдийг тохируулахад дэмжлэг үзүүлдэг."
                  : "IT Infrastructure Solutions: In addition to server rental, we offer comprehensive IT infrastructure solutions, assisting with system integration, setup, and performance configuration."}
              </li>
              <li className="text-white font-medium font-sans text-2xl w-3/4 text-center">
                {isMongolian
                  ? "Мэдээллийн аюулгүй байдал: Байгууллагын мэдээлэл хамгаалалтын бодлогыг боловсруулж, өндөр түвшний аюулгүй байдлыг хангах үйлчилгээ үзүүлдэг."
                  : "Information Security: We develop data security policies for organizations and provide high-level security services."}
              </li>
            </div>
          </div>
          <div className="w-screen flex flex-col items-center gap-16">
            <div className="text-neutral-400">
              {isMongolian ? "Давуу талууд" : "Advantages"}
            </div>
            <li className="text-white font-medium font-sans text-2xl w-3/4 text-center">
              {isMongolian
                ? "Өндөр хүчин чадалтай серверүүд: Манай серверүүд хамгийн сүүлийн үеийн технологиор тоноглогдсон бөгөөд өндөр ачааллыг даах чадвартай."
                : "High-Performance Servers: Our servers are equipped with the latest technology and capable of handling high loads."}
            </li>
            <li className="text-white font-medium font-sans text-2xl w-3/4 text-center">
              {isMongolian
                ? "Уян хатан түрээсийн нөхцөл: Бидний сервер түрээсийн үйлчилгээ нь байгууллагын хэрэгцээ шаардлагад тулгуурлан уян хатан нөхцлүүдтэй бөгөөд шаардлагатай үед нэмэлт хүч чадал авах боломжтой."
                : "Flexible Rental Terms: Our server rental service offers flexible terms based on the needs of the organization, with the possibility of adding more power when necessary."}
            </li>
            <li className="text-white font-medium font-sans text-2xl w-3/4 text-center">
              {isMongolian
                ? "Мэргэжлийн дэмжлэг: Манай баг нь мэдээллийн технологийн салбарт 10-аас дээш жил ажилласан туршлагатай мэргэжилтнүүдээс бүрдсэн бөгөөд үйлчлүүлэгчдийн хэрэгцээнд зориулсан өндөр түвшний дэмжлэгийг үзүүлдэг."
                : "Professional Support: Our team consists of experts with over 10 years of experience in the IT field, providing high-level support tailored to the needs of our clients."}
            </li>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};
export default Page;
