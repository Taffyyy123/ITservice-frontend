"use client";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

type Request = {
  _id: string;
  name: string;
  phone: string;
  email: string;
  request: string;
};
const Page = ({ params }: { params: Promise<{ requestId: string }> }) => {
  const { requestId } = use(params);
  const [request, setRequest] = useState<Request | null>(null);
  const router = useRouter();

  const getRequestById = async () => {
    try {
      const response = await fetch(
        `https://it-service-backend.onrender.com/request/getRequest/${requestId}`
      );
      const data = await response.json();
      setRequest(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRequestById();
  }, [requestId]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Request Details</h1>
        {request ? (
          <div>
            <p className="text-lg">
              <span className="font-semibold">Name:</span> {request.name}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Phone:</span> {request.phone}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Email:</span> {request.email}
            </p>
            <p className="text-lg mt-4">
              <span className="font-semibold">Request:</span>
            </p>
            <p className="bg-gray-700 p-4 rounded-md mt-2">{request.request}</p>
          </div>
        ) : (
          <p className="text-center text-gray-400">Loading...</p>
        )}
        <button
          onClick={() => router.push("/adminPage/requests")}
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition"
        >
          Back to Requests
        </button>
      </div>
    </div>
  );
};
export default Page;
