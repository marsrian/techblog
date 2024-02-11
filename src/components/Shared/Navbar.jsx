"use client";

import { Press_Start_2P } from "next/font/google";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const pressStart = Press_Start_2P({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="flex justify-between p-4 bg-slate-500 text-white">
      <h3 className={`${pressStart.className} font-medium`}>TechBlog</h3>
      <ul className="flex gap-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href={`/categories?category=Apps review`}>Categories</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/dashboard/add-tech">Dashboard</Link>
        </li>
        {session ? (
          <div className="flex gap-2">
            <p>{session?.user?.email}</p>
            <button onClick={() => signOut()}>Log Out</button>
          </div>
        ) : (
          <li>
            <Link href="/login">Login</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
