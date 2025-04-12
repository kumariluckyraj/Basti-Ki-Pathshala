"use client";
import React, { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { fetchuser, updateProfile } from '@/actions/useractions';
import './dasboard.css';

const Dashboard = () => {
  const { data: session, status, update } = useSession();
  const router = useRouter();
  const [form, setform] = useState({});

  const getData = async () => {
    if (session?.user?.name) {
      const u = await fetchuser(session.user.name);
      setform(u);
    }
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/login');
    }

    if (status === "authenticated" && session) {
      getData();
    }
  }, [status, session]);

  if (status === "loading") {
    return <div className="text-center mt-10">Loading...</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Check if any value is empty
    const emptyField = Object.entries(data).find(([key, value]) => value.trim() === "");
    if (emptyField) {
      alert(`Please fill out the ${emptyField[0]} field.`);
      return;
    }

    await update(); // update the session if needed
    await updateProfile(data, session.user.name);
    alert("You have registered successfully!");
  };

  return (
    <div>
      <div className='container mx-auto py-5 px-6 pt-20'>
        <h1 className='text-center my-5 text-3xl font-bold'>AgniMundal Registration</h1>
        
        <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
          <div className='my-2'>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
            <input type="text" name="name" id="name" defaultValue={form.name || ''} className="block w-full p-2 rounded-lg text-xs bg-slate-600" />
          </div>

          <div className="my-2">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
            <input type="email" name="email" id="email" defaultValue={form.email || ''} className="block w-full p-2 rounded-lg text-xs bg-slate-600" />
          </div>

          <div className='my-2'>
            <label htmlFor="username" className="block mb-2 text-sm font-medium">Username</label>
            <input type="text" name="username" id="username" defaultValue={form.username || ''} className="block w-full p-2 rounded-lg text-xs bg-slate-600" />
          </div>

          <div className="my-2">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone Number</label>
            <input type="tel" name="phone" id="phone" pattern="[0-9]{10}" maxLength={10} defaultValue={form.phone || ''} placeholder="Enter 10-digit phone number" className="block w-full p-2 rounded-lg text-xs" />
          </div>

          <div className="my-2">
            <label htmlFor="committee" className="block mb-2 text-sm font-medium">Committee Preference:</label>
            <select name="committee" id="committee" defaultValue={form.committee || ''} required className="block w-full p-2 rounded-lg text-xs bg-slate-600">
              <option value="">Select a Committee</option>
              <option value="GA">General Assembly (GA)</option>
              <option value="SC">Security Council (SC)</option>
              <option value="ECOSOC">Economic and Social Council (ECOSOC)</option>
              <option value="UNHRC">UN Human Rights Council (UNHRC)</option>
              <option value="UNEP">UN Environmental Programme (UNEP)</option>
              <option value="DISEC">Disarmament and International Security Committee (DISEC)</option>
              <option value="WHO">World Health Organization (WHO)</option>
            </select>
          </div>

          <div className="my-2">
            <label htmlFor="experience" className="block mb-2 text-sm font-medium">MUN Experience:</label>
            <input type="text" name="experience" id="experience" defaultValue={form.experience || ''} className="block w-full p-2 rounded-lg text-xs bg-slate-600" />
          </div>

          <div className="my-6">
            <button type="submit" className="block w-full p-2 bg-blue-500 rounded-lg hover:bg-blue-600 font-medium text-sm">Save</button>
          </div>
        </form>
      </div>

      {/* Footer & Contact section stays unchanged */}
      <div className="sec6">
        <section id="contact" className="content">
          <h2>Contact</h2>
          <p>Email: contact@mun.com</p>
          <p>Phone: 123-456-7890</p>
        </section>

        <footer className="foot">
          <div id="last">
            <section id="quick-links">
              <ul>
                <h2>Quick Links</h2>
                <li><a href="Home.html">Home</a></li>
                <li><a href="partners.html">Partners</a></li>
                <li><a href="programs.html">Programs</a></li>
                <li><a href="Affiliate.html">Affiliate</a></li>
                <li><a href="Volunteer.html">Volunteer</a></li>
                <li><a href="Team.html">The Team</a></li>
                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                <li><a href="Refund-policy.html">Refund Policy</a></li>
                <li><a href="Contact.html">Contact Us</a></li>
              </ul>
            </section>

            <div className="logo-social-container">
              <div className="logo-img">
                <img src="https://img.icons8.com/?size=96&id=QTEnylAkMAkP&format=png" alt="logo" />
              </div>

              <section id="social-links">
                <div>
                  <a href="YOUR_GITHUB_LINK"><img src="https://img.icons8.com/?size=96&id=AZOZNnY73haj&format=png" alt="GitHub" /></a>
                  <a href="YOUR_YOUTUBE_LINK"><img src="https://img.icons8.com/?size=96&id=13983&format=png" alt="YouTube" /></a>
                  <a href="YOUR_INSTAGRAM_LINK"><img src="https://img.icons8.com/?size=160&id=BrU2BBoRXiWq&format=png" alt="Instagram" /></a>
                  <a href="YOUR_LINKEDIN_LINK"><img src="https://img.icons8.com/?size=96&id=13930&format=png" alt="LinkedIn" /></a>
                  <a href="YOUR_FACEBOOK_LINK"><img src="https://img.icons8.com/?size=96&id=118497&format=png" alt="Facebook" /></a>
                </div>
                <p>&copy; 2025 AgniMundal</p>
              </section>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
