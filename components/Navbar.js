"use client"

import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white">
      {/* Left Side */}
      <div className="flex items-center gap-2">
        <img
          src="https://img.icons8.com/?size=96&id=QTEnylAkMAkP&format=png"
          alt="Agni Logo"
          className="w-10 h-10"
        />
        <span className="font-bold text-xl">AgniMundal</span>
      </div>

      {/* Center Links */}
      <ul className="flex gap-6 items-center">
        <Link className="hover:text-orange-500" href="/">Home</Link>
        <Link className="hover:text-orange-500" href="/about">About</Link>
        <Link className="hover:text-orange-500" href="/committees">Committees</Link>
        <Link className="hover:text-orange-500" href="/schedule">Schedule</Link>
        <Link className="hover:text-orange-500" href="/login">Registration</Link>
        <Link className="hover:text-orange-500" href="/login">Login</Link>
        <li className="hover:text-orange-500"><a href="#contact">Contact</a></li>
      </ul>

      {/* Right Side: Auth Actions */}
      <div className="relative">
        {session ? (
          <>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
              className="bg-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-orange-700"
            >
              Welcome {session.user.email}
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg w-40 z-50">
                <ul className="py-2">
                  <li>
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => signOut()}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <Link href="/login">
            <button className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600">Login</button>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
