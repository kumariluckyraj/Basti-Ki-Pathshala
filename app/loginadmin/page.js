"use client"

import React,{useEffect,useState} from 'react'
import { useSession, signIn } from "next-auth/react"
import {useRouter} from 'next/navigation'





import Image from "next/image";

const Loginadmin = () => {


  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminError, setAdminError] = useState("");
 

  const handleAdminLogin = () => {
  if (email === "admin@gmail.com" && password === "admin") {
    router.push("/admin/applicants"); // ⬅ this path uses app/admin/layout.js
  } else {
    setAdminError("Invalid credentials. Only admin can log in here.");
  }
};


  return (
    <div className='text-white py-4  mx-auto  flex justify-center content-center item-center  
     bg-cover bg-center bg-no-repeat'
     style={{
    backgroundImage: "url('/whitebg.jpg')",
  }}>
     

      <div className=" gap-2 min-h-screen items-center flex content-center item-center   ">
     
 
      
     <div className="flex flex-col items-center mb-28">
      <div className='flex content-center text-amber-900 items-center pb-3 font-bold text-xl'>Login as Admin to see applicants</div>
  <input
    type="text"
    placeholder="Admin Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="mb-2 px-4 py-2 border rounded-md text-black"
  />
  <input
    type="password"
    placeholder="Admin Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="mb-2 px-4 py-2 border rounded-md text-black"
  />
  <button
    onClick={handleAdminLogin}
    className="bg-amber-900 text-white px-4 py-2 rounded-md hover:bg-amber-800"
    
  >
    Login as Admin
  </button>
  <div className='text-black '>Emaid id is <span className='font-bold'> admin@gmail.com</span> <hr/>Password is<span className='font-bold'> admin</span> </div>
  {adminError && <p className="text-red-500 mt-2">{adminError}</p>}
</div>


    </div>
    </div>
  
  )
}

export default Loginadmin 
