"use client"
import React from 'react'

const Footer = () => {
  return (
    <div id='footer'>
      <footer className="bg-gray-900 text-white text-center bg-cover bg-center bg-no-repeat py-6"
      style={{
    backgroundImage: "url('/brownbg.jpg')",
  }}>
        <p>© {new Date().getFullYear()} Basti Ki Pathshala Foundation. All rights reserved.</p>
        <p className="text-sm mt-2">
          Contact: bastikipathshala@gmail.com | Instagram: @bastikipathshala
        </p>
      </footer>
    </div>
  )
}

export default Footer
