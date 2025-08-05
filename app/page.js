'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="font-sans  min-h-screen bg-white text-gray-800">
      {/* Hero */}
      
      <section
  className="bg-cover bg-center bg-no-repeat py-16 text-center text-wblack"
  style={{
    backgroundImage: "url('/whitebg.jpg')",
  }}
      >
        <h1 className="text-4xl font-bold mb-4">Basti Ki Pathshala Foundation</h1>
        <p className="text-lg mb-6">Empowering communities through education and compassion.</p>
        <div className="space-x-4">
          <Link href="/login">
            <span className="bg-amber-900 text-white px-4 py-2 rounded hover:bg-amber-800 cursor-pointer">
              Become a Volunteer
            </span>
          </Link>
          <Link href="/loginadmin">
            <span className="bg-amber-900 text-white px-4 py-2 rounded hover:bg-amber-800 cursor-pointer">
              Admin View
            </span>
          </Link>
        </div>
      </section>

      {/* About */}
      <section className="py-12 px-18  content-center   mx-auto text-center bg-cover bg-center bg-no-repeat"
       style={{
    backgroundImage: "url('/whitebg.jpg')",
  }}>
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-600">
          Basti Ki Pathshala is a youth-led NGO dedicated to bringing quality education
          and support to underprivileged children across communities. We believe in learning by doing,
          and creating opportunities where none exist.
        </p>
        <div className='pt-2 text-yellow-500 hover:text-amber-900'>
        <Link href="/about">Read More</Link>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-12 bg-gray-100 px-6  bg-cover bg-center bg-no-repeat"
     style={{
    backgroundImage: "url('/brownbg.jpg')",
  }}>
        <h2 className="text-2xl text-white font-semibold text-center mb-6">Our Work</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: 'Street Schooling', desc: 'Teaching children in slums and bastis.' },
            { title: 'Volunteer Workshops', desc: 'Training youth to give back to society.' },
            { title: 'Clothes & Book Drives', desc: 'Distributing essentials to needy families.' }
          ].map((item, index) => (
            <div key={index} className="p-4 bg-white shadow rounded">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Want to Make a Difference?</h2>
        <Link href="/login">
          <span className="inline-block bg-amber-900 text-white px-6 py-3 rounded hover:bg-amber-800 cursor-pointer">
            Join Us as a Volunteer
          </span>
        </Link>
      </section>

      {/* Footer */}
      
    </main>
  );
}
