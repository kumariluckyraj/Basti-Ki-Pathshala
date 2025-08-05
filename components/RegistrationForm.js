'use client';
import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "volunteer",
    motivation: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setError(null);

  // Basic validations
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  if (!formData.fullName || !formData.email || !formData.phone || !formData.motivation) {
    setError("Please fill out all fields.");
    return;
  }

  if (!emailRegex.test(formData.email)) {
    setError("Please enter a valid email address.");
    return;
  }

  if (!phoneRegex.test(formData.phone)) {
    setError("Phone number must be exactly 10 digits.");
    return;
  }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Something went wrong");
      setSubmitted(true);
    } catch (err) {
      setError("Submission failed. Try again later.");
    }
  };

  if (submitted) {
    return <p className="text-green-600  text-center">Thank you for registering! We’ll be in touch soon.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5  ">
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div >
        <label className="block mb-1 text-black font-medium">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded text-black"
          required
        />
      </div>

      <div>
        <label className="block mb-1 text-black font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded text-black"
          required
        />
      </div>

      <div>
        <label className="block mb-1 text-black font-medium">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded text-black"
          required
        />
      </div>

      <div>
        <label className="block mb-1 text-black font-medium">I want to join as</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full border px-4 py-2 text-black rounded"
        >
          <option value="volunteer">Volunteer</option>
          <option value="intern">Intern</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 text-black font-medium">Why do you want to join us?</label>
        <textarea
          name="motivation"
          value={formData.motivation}
          onChange={handleChange}
          className="w-full border px-4 py-2 text-black rounded"
          rows={4}
          required
        />
      </div>

      <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
        Submit
      </button>
    </form>
  );
}
