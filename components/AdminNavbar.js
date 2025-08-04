// components/AdminNavbar.js
'use client';
import Link from "next/link";

export default function AdminNavbar() {
  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-black text-white">
      {/* Left Side */}
      <div className="flex items-center gap-2">
       
        <span className="font-bold text-xl">Welcome Admin</span>
      </div>

      {/* Center Links */}
      <ul className="flex gap-6 items-center">
        <Link className="hover:text-orange-500" href="/">Home</Link>
        <Link className="hover:text-orange-500" href="/about">About</Link>
       
        
        <li className="hover:text-orange-500"><a href="#contact">Contact</a></li>
      </ul>
</nav>
    </>

  );
}
