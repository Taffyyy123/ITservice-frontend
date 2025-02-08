"use client";
import { TopNav } from "@/custom-components/top-nav";
import { error, info } from "console";
import Link from "next/link";
import { useEffect, useState } from "react";
type Post = {
  _id: string;
  title: string;
  content: string;
  infoTitle: string;
  infoContent: string;
  imageUrl: string;
};

type Service = {
  _id: string;
  infoImg: string;
  subTitle: string;
  caption: string;
  price: string;
};
type Request = {
  _id: string;
  name: string;
  phone: string;
  email: string;
  request: string;
};
const AdminPage = ({ params }: { params: Promise<{ serviceId: string }> }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [requests, setRequests] = useState<Request[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [infoTitle, setInfoTitle] = useState("");
  const [infoContent, setInfoContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [infoImg, setInfoImg] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [price, setPrice] = useState("");
  const [isOpenService, setIsOpenService] = useState(false);
  const [isOpenPost, setIsOpenPost] = useState(false);
  const [serviceId, setServiceId] = useState("");
  const [postId, setPostId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      window.location.href = "/admin/login";
    } else {
      setIsAuthenticated(true);
      fetchPosts();
      fetchServices();
      fetchRequests();
    }
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://it-service-backend.onrender.com/post/getPosts"
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const fetchServices = async () => {
    try {
      const response = await fetch(
        "https://it-service-backend.onrender.com/service/getServices"
      );
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const fetchRequests = async () => {
    try {
      const response = await fetch(
        "https://it-service-backend.onrender.com/request/getRequests"
      );
      const data = await response.json();
      setRequests(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeletePost = async (postId: string) => {
    try {
      const response = await fetch(
        `https://it-service-backend.onrender.com/post/delete/${postId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setPosts(posts.filter((post) => post._id !== postId));
      } else {
        console.error("Error deleting post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  const handleDeleteService = async (serviceId: string) => {
    try {
      const response = await fetch(
        `https://it-service-backend.onrender.com/service/delete/${serviceId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setServices(services.filter((service) => service._id !== serviceId));
      } else {
        console.error("Error deleting service");
      }
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };
  useEffect(() => {
    if (serviceId) {
      fetch(
        `https://it-service-backend.onrender.com/service/getService/${serviceId}`
      )
        .then((res) => res.json())
        .then((data) => {
          setInfoImg(data.infoImg);
          setSubTitle(data.subTitle);
          setCaption(data.caption);
          setPrice(data.price);
        })
        .catch((error) => console.error(error));
    }
  }, [serviceId]);
  useEffect(() => {
    if (postId) {
      fetch(`https://it-service-backend.onrender.com/post/getPost/${postId}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setContent(data.content);
          setInfoTitle(data.infoTitle);
          setInfoContent(data.infoContent);
          setImageUrl(data.imageUrl);
        })
        .catch((error) => console.error(error));
    }
  }, [postId]);
  const handleSubmitService = async () => {
    const response = await fetch(
      `https://it-service-backend.onrender.com/service/update/${serviceId}`,
      {
        method: "PUT",
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
      setIsOpenService(false);
      window.location.reload();
    }
  };
  const handleSubmitPost = async () => {
    const response = await fetch(
      `https://it-service-backend.onrender.com/post/update/${postId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageUrl,
          title,
          infoTitle,
          infoContent,
          content,
        }),
      }
    );
    if (response.ok) {
      setIsOpenPost(false);
      window.location.reload();
    }
  };
  const editBtnService = () => {
    try {
      services.map((service) => {
        return setServiceId(service._id);
      });
      setIsOpenService(true);
    } catch (error) {
      console.log(error);
    }
  };
  const editBtnPost = () => {
    try {
      posts.map((post) => {
        return setPostId(post._id);
      });
      setIsOpenPost(true);
    } catch (error) {
      console.log(error);
    }
  };
  if (!isAuthenticated) {
    return (
      <div className="text-white text-center mt-10">
        Redirecting to login...
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen bg-gray-900 p-6 text-white">
      <div className="flex justify-between w-2/4">
        <Link className="text-3xl font-bold text-center mb-6 ml-16" href={"/"}>
          Home
        </Link>
        <h1 className="text-3xl font-bold text-end mb-6">Admin Dashboard</h1>
      </div>
      <button
        onClick={() => (window.location.href = "/adminPage/createPost")}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Create New Post
      </button>
      <button
        onClick={() => (window.location.href = "/adminPage/createService")}
        className="bg-green-500 text-white px-4 py-2 rounded ml-4"
      >
        Create New Service
      </button>

      <h2 className="text-2xl font-bold mt-6">Posts</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post._id} className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-400 mt-2">
              {post.content.substring(0, 100)}...
            </p>
            <div className="flex justify-between mt-4">
              <button
                onClick={editBtnPost}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              {isOpenPost && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="w-full max-w-lg bg-gray-900 p-8 rounded-xl shadow-lg">
                    <h1 className="text-3xl font-semibold text-center text-white mb-6">
                      Edit Post
                    </h1>
                    <div className="flex flex-col space-y-4">
                      <input
                        className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
                        placeholder="Image Url"
                        onChange={(e) => setImageUrl(e.target.value)}
                        value={imageUrl}
                      />
                      <input
                        className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                      />
                      <input
                        className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
                        placeholder="Content"
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                      />
                      <input
                        className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
                        placeholder="InfoTitle"
                        onChange={(e) => setInfoTitle(e.target.value)}
                        value={infoTitle}
                      />
                      <input
                        className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
                        placeholder="InfoContent"
                        onChange={(e) => setInfoContent(e.target.value)}
                        value={infoContent}
                      />
                      <div className="flex justify-between">
                        <button
                          onClick={handleSubmitPost}
                          className="bg-blue-500 text-white px-3 py-1 rounded"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => setIsOpenPost(false)}
                          className="bg-red-600 text-white px-3 py-1 rounded"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <button
                onClick={() => handleDeletePost(post._id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-6">Services</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service._id} className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{service.subTitle}</h2>
            <p className="text-gray-400 mt-2">
              {service.caption.substring(0, 100)}...
            </p>
            <div className="flex justify-between mt-4">
              <button
                onClick={editBtnService}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              {isOpenService && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="w-full max-w-lg bg-gray-900 p-8 rounded-xl shadow-lg">
                    <h1 className="text-3xl font-semibold text-center text-white mb-6">
                      Edit Service
                    </h1>
                    <div className="flex flex-col space-y-4">
                      <input
                        className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
                        placeholder="Information Image URL"
                        onChange={(e) => setInfoImg(e.target.value)}
                        value={infoImg}
                      />
                      <input
                        className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
                        placeholder="SubTitle"
                        onChange={(e) => setSubTitle(e.target.value)}
                        value={subTitle}
                      />
                      <input
                        className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
                        placeholder="Caption"
                        onChange={(e) => setCaption(e.target.value)}
                        value={caption}
                      />
                      <input
                        className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-custom-gradient text-white font-mono"
                        placeholder="Price"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                      />
                      <div className="flex justify-between">
                        <button
                          onClick={handleSubmitService}
                          className="bg-blue-500 text-white px-3 py-1 rounded"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => setIsOpenService(false)}
                          className="bg-red-600 text-white px-3 py-1 rounded"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <button
                onClick={() => handleDeleteService(service._id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-6">Requests</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {requests.map((request) => {
          return (
            <div key={request._id} className="bg-gray-800 p-4 rounded-lg">
              <h2 className="text-xl font-semibold">{request.name}</h2>
              <p className="text-gray-400 mt-2">{request.request}</p>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                  onClick={() =>
                    (window.location.href = `/adminPage/${request._id}`)
                  }
                >
                  More info
                </button>
                <button className="bg-red-600 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminPage;
