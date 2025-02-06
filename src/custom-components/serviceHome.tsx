"use client";
import { useEffect, useState } from "react";
import CSS from "csstype";

type postType = {
  _id: string;
  title: string;
  content: string;
  infoTitle: string;
  infoContent: string;
  imageUrl: string;
  createdAt: Date;
};

const ServiceHome = () => {
  const [posts, setPosts] = useState<postType[]>([]);
  const [post, setPost] = useState<postType | null>(null);
  const getPosts = async () => {
    try {
      const jsonData = await fetch(
        "https://itservice-backend.onrender.com/post/getPosts"
      );
      const response = await jsonData.json();
      setPosts(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div className="text-white" key={post._id}>
            {post.content}
          </div>
        );
      })}
    </div>
  );
};
export default ServiceHome;
