import { Press_Start_2P } from "next/font/google";
import Link from "next/link";
const pressStart = Press_Start_2P({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
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
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
