// app/register/page.js
'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import RegistrationForm from "@/components/RegistrationForm";

export default function RegisterPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("login"); // or any login route
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>; // or use a Spinner component
  }

  if (status === "unauthenticated") {
    return null; // Prevents flicker before redirect
  }
  
  return (
    <div className=" flex items-center justify-center p-6 bg-cover bg-center bg-no-repeat
    
    "
 style={{
    backgroundImage: "url('/whitebg.jpg')",
  }}    

    
    >
      <div className="max-w-2xl w-full  p-8 shadow-md rounded-xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-black">Join Us</h1>
        <RegistrationForm />
      </div>
    </div>
  );
}
