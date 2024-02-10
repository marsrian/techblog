"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RegisterPage = () => {
  const [info, setInfo] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const router = useRouter();

  function handleInput(e) {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if ((!info.username, !info.email || !info.password)) {
      setError("Please fill in all fields");
    }
    try {
      setPending(true);
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-ype": "application/json",
        },
        body: JSON.stringify(info),
      });

      if (res.ok) {
        setPending(false);
        const form = e.target;
        form.reset();
        setError();
        router.push("/login");
      } else {
        const errorData = await res.json();
        setError(errorData.message);
        setPending(false);
      }
    } catch (error) {
      setPending(false);
      setError("Something went wrong.");
    }
  }
  console.log(info);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3 className="text-xl font-bold my-5 text-center">Register</h3>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id=""
            name="username"
            type="text"
            placeholder="Username"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id=""
            name="email"
            type="text"
            placeholder="Email"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id=""
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => handleInput(e)}
          />
        </div>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          className="text-xl font-bold text-white bg-green-500 rounded px-4 py-2 cursor-pointer hover:bg-green-400"
          disabled={pending ? true : false}
          type="submit"
          value={pending ? "Registering" : "Register"}
        />
      </form>
      <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500 font-medium">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
