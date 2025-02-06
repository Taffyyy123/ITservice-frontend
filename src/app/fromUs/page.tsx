import BottomNav from "@/custom-components/bottomNav";
import { CategoryNav } from "@/custom-components/category-nav";
import { TopNav } from "@/custom-components/top-nav";

const Page = () => {
  return (
    <div className="min-h-screen w-screen bg-custom-gradient ">
      <TopNav />
      <CategoryNav />
      <div className="flex flex-col gap-16 pb-24">
        <div className="w-screen flex flex-col items-center justify-center gap-10 ">
          <div className="text-white font-sans font-bold text-4xl">
            Бид бол IT SERVICE
          </div>
          <div className="text-white font-serif font-bold text-2xl">
            IT SERVICE нь бүх төрлийн сэрвэр түрээс үйлчилгээ хийдэг компани юм.
          </div>
        </div>
        <div className="w-screen flex flex-col gap-24">
          <div className=" w-screen flex flex-col items-center pt-8 gap-8">
            <div className="text-neutral-400">Бидний тухай</div>
            <div className="text-white font-medium font-sans text-2xl w-3/4 text-center">
              IT Service ХХК нь сервер түрээс, мэдээллийн технологийн дэвшилтэт
              шийдлүүдийг нийлүүлэх чиглэлээр үйл ажиллагаа явуулдаг мэргэжлийн
              компани юм. Манай компанийн гол зорилго нь байгууллагуудын
              мэдээллийн технологийн дэд бүтцийг хөнгөвчлөх, зардлыг бууруулах,
              хамгийн сүүлийн үеийн технологиудыг нийлүүлэх замаар
              үйлчлүүлэгчдийн хэрэгцээнд нийцсэн, найдвартай шийдлийг санал
              болгох юм.
            </div>
          </div>
          <div className="w-screen flex flex-col items-center gap-12">
            <div className="text-neutral-400">Үйлчилгээний чиглэл</div>
            <div className="flex flex-col items-center gap-12">
              <div className="text-white font-medium font-sans text-2xl w-3/4 text-center">
                IT Service ХХК нь дараах үндсэн үйлчилгээг үзүүлдэг:
              </div>
              <li className="text-white font-medium font-sans text-2xl w-3/4 text-center">
                Сервер түрээс: Тус компани нь өндөр хүчин чадалтай, найдвартай
                серверүүдийг түрээслүүлж, байгууллагуудын мэдээллийн технологийн
                дэд бүтцийн зардлыг хэмнэх боломжийг олгодог.
              </li>
              <li className="text-white font-medium font-sans text-2xl w-3/4 text-center">
                Мэдээллийн технологийн дэд бүтцийн шийдэл: Серверийн түрээсээс
                гадна, бид байгууллагуудад IT дэд бүтцийн иж бүрэн шийдлүүдийг
                санал болгож, системүүдийн холболт, тохиргоо, үйлчилгээний
                үзүүлэлтүүдийг тохируулахад дэмжлэг үзүүлдэг.
              </li>
              <li className="text-white font-medium font-sans text-2xl w-3/4 text-center">
                Мэдээллийн аюулгүй байдал: Байгууллагын мэдээлэл хамгаалалтын
                бодлогыг боловсруулж, өндөр түвшний аюулгүй байдлыг хангах
                үйлчилгээ үзүүлдэг.
              </li>{" "}
            </div>
          </div>
          <div className="w-screen flex flex-col items-center gap-16">
            <div className="text-neutral-400">Давуу талууд</div>
            <li className="text-white font-medium font-sans text-2xl w-3/4 text-center">
              Өндөр хүчин чадалтай серверүүд: Манай серверүүд хамгийн сүүлийн
              үеийн технологиор тоноглогдсон бөгөөд өндөр ачааллыг даах
              чадвартай.
            </li>
            <li className="text-white font-medium font-sans text-2xl w-3/4 text-center">
              Уян хатан түрээсийн нөхцөл: Бидний сервер түрээсийн үйлчилгээ нь
              байгууллагын хэрэгцээ шаардлагад тулгуурлан уян хатан нөхцлүүдтэй
              бөгөөд шаардлагатай үед нэмэлт хүч чадал авах боломжтой.
            </li>
            <li className="text-white font-medium font-sans text-2xl w-3/4 text-center">
              Мэргэжлийн дэмжлэг: Манай баг нь мэдээллийн технологийн салбарт
              10-аас дээш жил ажилласан туршлагатай мэргэжилтнүүдээс бүрдсэн
              бөгөөд үйлчлүүлэгчдийн хэрэгцээнд зориулсан өндөр түвшний
              дэмжлэгийг үзүүлдэг.
            </li>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};
export default Page;
