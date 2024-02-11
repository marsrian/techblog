"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const [info, setInfo] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const router = useRouter();

  function handleInput(e) {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!info.email || !info.password) {
      setError("Please fill in all fields");
    }
    try {
      setPending(true);
      const res = await signIn("credentials", {
        email: info.email,
        password: info.password,
        redirect: false,
      });
      if (res.error) {
        setError("Invalid credentials");
        setPending(false);
        return;
      }
      router.replace("/");
    } catch (error) {
      setPending(false);
      setError("Something went wrong.");
    }
  }
  console.log(info);
  return (
    <div>
      <h3 className="text-xl font-medium text-gray-800 text-center mt-5">
        Login Form
      </h3>
      <form onSubmit={handleSubmit}>
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
          value={pending ? "Loading..." : "Login"}
        />
      </form>
      <p className="text-center mt-4">
        Do&apos;nt have an account?{" "}
        <Link href="/register" className="text-blue-500 font-medium">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
