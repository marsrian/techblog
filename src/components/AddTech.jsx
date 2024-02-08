"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTech() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [photoTitle, setPhotoTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [comment, setComment] = useState();
  const [likes, setLikes] = useState();
  const [views, setViews] = useState();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !description ||
      !author ||
      !photoTitle ||
      !category ||
      !comment ||
      !likes ||
      !views
    ) {
      alert("all input field are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/alltech", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          author,
          photoTitle,
          category,
          comment,
          likes,
          views,
        }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {/* Name Input: */}
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Name"
      />
      {/* Description Input: */}
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />
      {/* Author Input: */}
      <input
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Author Name"
      />
      {/* PhotoTitle Input: */}
      <input
        onChange={(e) => setPhotoTitle(e.target.value)}
        value={photoTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Photo Link"
      />
      {/* Category Input: */}
      <input
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Category Name"
      />
      {/* Comment Input: */}
      <input
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        className="border border-slate-500 px-8 py-2"
        type="number"
        placeholder="Comment Number"
      />
      {/* Likes Input: */}
      <input
        onChange={(e) => setLikes(e.target.value)}
        value={likes}
        className="border border-slate-500 px-8 py-2"
        type="number"
        placeholder="Likes"
      />
      {/* Views Input: */}
      <input
        onChange={(e) => setViews(e.target.value)}
        value={views}
        className="border border-slate-500 px-8 py-2"
        type="number"
        placeholder="Views"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
  );
}
