"use client"

import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  const { data: session } = useSession()
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <nav className="flex justify-between items-center p-4 sticky top-0 z-50 bg-cover bg-center bg-no-repeat  "
    style={{
    backgroundImage: "url('/brownbg.jpg')",
  }}
     >
      
      <div className="flex items-center gap-2">
        
        <span className="font-bold pl-4 text-xl">Basti Ki Pathshala</span>
      </div>

   
      <ul className="flex gap-6 items-center">
        <Link className="hover:text-amber-900" href="/">Home</Link>
        <Link className="hover:text-amber-900" href="/about">About</Link>
       
        <Link className="hover:text-amber-900" href="/login">Registration</Link>
        <Link className="hover:text-amber-900" href="/login">Login</Link>
        <li className="hover:text-amber-900"><a href="#footer">Contact</a></li>
      </ul>

      
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
                      href="/register"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Register
                    </Link>
                  </li>
                  <li>
                    <button
                      onMouseDown={() => signOut()}
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
            <button className="bg-yelow-500 px-8 py-2 text-black rounded-lg bg-white hover:bg-amber-900 hover:text-white">Login</button>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
