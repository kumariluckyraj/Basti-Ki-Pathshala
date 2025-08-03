// app/register/page.js
'use client'
import RegistrationForm from "@/components/RegistrationForm";



export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 ">
      <div className="max-w-2xl w-full  p-8 shadow-md rounded-xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-orange-600">Join Us</h1>
        <RegistrationForm />
      </div>
    </div>
  );
}
